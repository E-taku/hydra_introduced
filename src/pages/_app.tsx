import { SessionProvider } from 'next-auth/react'
import React from 'react'

type AppProps = {
    Component: React.ComponentType;
    pageProps: Record<string, any>;
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
