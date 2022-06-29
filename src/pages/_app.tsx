import * as Next from 'next/app'
import * as Modal from 'react-modal'
import '~/styles/lib/global.scss'

Modal.default.setAppElement('#__next')

export default function App({ Component, pageProps }: Next.AppProps) {
    return <Component {...pageProps} />
}
