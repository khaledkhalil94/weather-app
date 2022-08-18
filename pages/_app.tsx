import type {AppProps} from 'next/app';
import {SnackbarProvider} from 'notistack';
import Theme from '../design-system';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Theme>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Theme>
  );
}

export default MyApp;
