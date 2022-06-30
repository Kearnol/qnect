import style from './layout.module.scss'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LeftNav from '../LeftNav/LeftNav'

    type Props = {
        children: React.ReactNode
        className?: string
        title?: string
    }
    
    export default function Layout({ children, className, title = 'Q-nect' }: Props) {
        return (
            <div className={`${style.container} ${className}`}>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Place based community via QR interconnectivity." />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
    
                <Header />
                <main className={style.main}>
                    {children}
                    </main>
                <Footer />
            </div>
        )
    }