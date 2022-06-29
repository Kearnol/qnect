import Link from 'next/link'
import style from './leftnav.module.scss'

export default function LeftNav(){
    return(
        <div className={style.main}>
            <li>
                <Link href="/create">Create</Link>
            </li>
            <li>
                <Link href="/">Hub</Link>
            </li>
            <li>
                <Link href="/find">Find</Link>
            </li>
        </div>
    )
}