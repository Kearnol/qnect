import Layout from "../components/PageLayout"
import style from '~/styles/index.module.scss'


export default function Index(){
    
    return(
            <Layout title="Q-nect" screenName='Dashboard' className={style.index}>
            </Layout>

    )
}