import Document, { Head, Main, NextScript, DocumentContext, DocumentInitialProps, Html } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang='en' className='scroll'>
                <Head></Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }

}
