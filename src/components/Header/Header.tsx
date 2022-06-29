import style from '~/components/Header/header.module.scss'

export default function Header(){

    return (
        <div className={style.mainDiv}>
            <div className={style.logo}></div>
            <div className={style.rightMenu}></div>
        </div>
    )
}
