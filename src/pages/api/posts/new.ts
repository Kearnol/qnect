import * as Post from '~/models/post'
import type { NextApiRequest as Request, NextApiResponse as Response} from "next";

export default function createNewPost(req: Request, res: Response){
    if(req.method === "POST"){
        return Post.create(req.body)
        .then(newPost => res.json(newPost))
        .catch(err => res.status(400).json(err));
    }
}