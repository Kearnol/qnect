import * as Next from 'next/app'
import * as Modal from 'react-modal'
import { CssBaseline } from '@mui/material';
import '~/styles/lib/global.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


Modal.default.setAppElement('#__next')

export default function App({ Component, pageProps }: Next.AppProps) {
    return <>
    <CssBaseline/>
    <Component {...pageProps} />
    </>
}
