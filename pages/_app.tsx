import type { AppProps } from 'next/app';
import GlobalStyle from '@/theme/GlobalStyle';

// Middleware -> renderiza em todas as pages
// Configurações gerais
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}