import Layout from "../components/PageLayout"
import style from '~/styles/index.module.scss'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import React, { SetStateAction, useEffect, useState } from "react"
import { IPost } from '~/models/post'
import * as Path from '~/lib/path'
import * as FetchJson from '~/components/fetchJson'



export default function Find(){
    const [gridPosts, setGridPosts ] = useState<IPost[]>([]);

    useEffect(() => {
        async function getAllPosts(){
            const fetch = await FetchJson.get<IPost>(Path.Post.get.all)
            let gridItems: IPost[] = fetch.data?.items ? fetch.data?.items : [];
            setGridPosts((_: React.SetStateAction<IPost[]>): IPost[] => gridItems);
        }
        getAllPosts()
    }, [])

    return(
            <Layout title="Q-nect" className={style.index} screenName="Find">
            <Grid container spacing={2}>
                {gridPosts.map((post) => {
                return(
                <Grid key={post.title}item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{
                        padding: 1,
                    }}>
                        <h1>{post.title}</h1>
                        <h2>{post.post}</h2>
                        <h3>{post.details}</h3>
                    </Card>
                </Grid>
                )}
                )}
            </Grid>
            </Layout>

    )
}