import Mongoose from 'mongoose'
import * as Config from '~/lib/configuration'
import * as Database from '~/lib/database'
import { IUser, userSchema} from './user'

export type IPost = {
    author: IUser;
    title: string;
    post: string;
    details: string;
}

const postSchema = new Mongoose.Schema<IPost>({
    author: userSchema,
    title: {type: String, required: true},
    post: {type: String, required: true},
    details: {type: String, required: true},
}, Config.SchemaOptions);

const env = Config.EnvServer()

const Model = Mongoose.models?.Post || Mongoose.model<IPost>('Post', postSchema);

export async function create(postModel: IPost){
    await Database.connect();
    const doc = new Model(postModel)
    console.log("DOC: ", doc);
    return await doc.save()
    .catch((_: Error) => "Error saving doc")
}

export async function findById(id: Mongoose.Types.ObjectId){
    await Database.connect();
    return Model.findOne<IPost>({_id: id})
    .catch((_: Error) => "Error Finding Post by Id")
}

export async function getAllPosts(){
    await Database.connect();
    return Model.find<IPost> ()
    .catch((_: Error) => "Error getting all posts")
}
