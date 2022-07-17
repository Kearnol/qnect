import * as Post from '~/models/post'
import * as TryApi from '~/lib/tryApi'
import * as IResponse from '~/interfaces/response'
import type { NextApiRequest as Request, NextApiResponse as Response} from "next";
import { TypographyUtils } from '@mui/material/styles/createTypography';
import { typographyVariant } from '@mui/system';

export default async function getAllPosts(req: Request, res: Response){
    await TryApi.get(req, res, fetchAllPosts) || TryApi.unsupported(req, res)
}    


async function fetchAllPosts(req: Request): Promise<IResponse.Post>{
    const allPosts = await Post.getAllPosts()
    if(!allPosts || typeof allPosts === 'string'){
        return {
            data: {error: "Issue getting all posts"}
        }
    }
    return {data: {items: allPosts}}
}