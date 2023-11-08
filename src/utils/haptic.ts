import ReactNativeHapticFeedback, { HapticFeedbackTypes } from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export const haptic = (type: HapticFeedbackTypes | string) => {
  ReactNativeHapticFeedback.trigger(type, options);
};
