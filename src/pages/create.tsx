import Layout from "../components/PageLayout"
import style from '~/styles/index.module.scss'
import Create from '../components/Create'

export default function CreatePage(){
    
    return(
            <Layout title="Q-nect" className={style.index} screenName="Create">
                <Create/>
            </Layout>
    )
}