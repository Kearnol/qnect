import * as Mongoose from 'mongoose'
import * as TryApi from '~/lib/tryApi'
import * as IResponse from '~/interfaces/response'
import * as Post from '~/models/post'

type Document = Mongoose.Document & {
    id: Mongoose.Types.ObjectId
}

export default async function getPostById(req: TryApi.Request, res: TryApi.Response){
    await TryApi.get(req, res, fetchPost) || TryApi.unsupported(req, res)
}

async function fetchPost(req: TryApi.Request): Promise<IResponse.Post>{
    console.log(req.query);
    let {id} : any = req.query;
    console.log("ID", id);
    let dbPost;
    if(Mongoose.Types.ObjectId.isValid(id)){
        console.log("in the if")
        dbPost = await Post.findById(id)
    }
    if(!dbPost || typeof dbPost === "string"){
        return {
            data: {error: "No Post found"}
        }
    }
    return {data: {item: dbPost}}
}