import React, { type FC, type PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

type Props = PropsWithChildren;

const queryClient = new QueryClient();

export const ReactQueryProvider: FC<Props> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
