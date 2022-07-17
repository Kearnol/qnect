import style from './layout.module.scss'
import Head from 'next/head'
import Footer from './Footer'
import MainFrame from './MainFrame'
import Box from '@mui/material/Box'

type Props = {
        screenName: string;
        children: JSX.Element[] | JSX.Element | null;
        className?: string;
        title?: string;
    }
    
    export default function PageLayout({ children, className, title='Q-nect', screenName='Dashboard' }: Props) {
        return (
            <Box sx={{width: "100vw"}} className={`${className}`}>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Place based community via QR interconnectivity." />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <MainFrame screenName={screenName}>
                    {children}
                </MainFrame>
                <Footer />
            </Box>
        )
    }