import Layout from "../components/DocLayout/Layout"
import style from '~/styles/index.module.scss'
import Create from '../components/Create/Create'


export default function CreatePage(){
    
    return(
            <Layout title="Q-nect" className={style.index}>
            <Create/>
            </Layout>

    )
}