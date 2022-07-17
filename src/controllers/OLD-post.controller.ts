import {IPost} from '../models/post'

module.exports.createPost = (req: Request, res: Response) => {
    Post.create(req.body)
    .then(newPost => res.json(newPost))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPosts = (req: Request, res: Response) => {
    Post.find()
    .then(posts=> res.json(posts))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePost = (req: Request, res: Response) => {
    Post.deleteOne({_id:req.params.id})
    .then(delCount => res.json(delCount))
    .catch(err => res.json(err))
}

module.exports.getOnePost = (req: Request, res: Response) => {
    Post.findOne({_id: req.params.id})
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

module.exports.updatePost = (req: Request, res: Response) => {
    Post.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedPost => res.json(updatedPost))
    .catch(err => res.status(400).json(err));
}