import Head from 'next/head'

import { Home } from '../components/Home'

export default function _() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <meta charSet="UTF-8" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
                    rel="stylesheet"
                />
                <title>Time Tracking</title>
            </Head>

            <Home />
        </>
    )
}
