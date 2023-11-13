import React, { FC, Fragment, useEffect, useRef } from 'react';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';
import YaMap, { Marker } from 'react-native-yamap';
import { GeoMarker } from '../../../ui/custom-icons/GeoMarker';
import { PlaceInfo } from '../place-info';
import { City } from '../types/city';
import { Place } from '../types/place';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPlaceSelect: (place: Place) => void;
  city: City;
};

export const PlacesMap: FC<Props> = ({ city, style, onPlaceSelect }) => {
  const { places } = city;

  const mapRef = useRef<YaMap>(null);
  const modalRef = useRef<BottomSheetModalMethods | null>(null);

  useEffect(() => {
    if (places.length === 1) {
      modalRef.current?.present();
    }
  }, [places]);

  const isOnlyOnePlace = places.length === 1;

  const handleMapLoaded = () => {
    if (places.length === 1) {
      return;
    }

    mapRef.current?.fitMarkers(places);
  };

  const handleMarkerChange = (place: Place) => {
    modalRef.current?.present();
    mapRef.current?.fitMarkers([place]);
  };

  const handlePlaceInfoClose = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <YaMap
        initialRegion={{
          ...places[0],
          zoom: isOnlyOnePlace ? 15 : 10,
        }}
        onMapLoaded={handleMapLoaded}
        style={style}
        mapType="vector"
        ref={mapRef}
      >
        {places.map((place) => (
          <Fragment key={place.id}>
            <Marker
              onPress={() => handleMarkerChange(place)}
              anchor={{ x: 0.7, y: 0.9 }}
              point={{ lat: place.lat, lon: place.lon }}
            >
              <GeoMarker />
            </Marker>
            <PlaceInfo
              onCloseRequest={handlePlaceInfoClose}
              bottomSheetModalRef={modalRef}
              onPlaceSelect={onPlaceSelect}
              place={place}
            />
          </Fragment>
        ))}
      </YaMap>
    </>
  );
};
