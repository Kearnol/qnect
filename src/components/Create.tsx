import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CasinoIcon from '@mui/icons-material/CasinoOutlined';
import {IPost} from '~/models/post'
import { FieldErrors, useForm } from 'react-hook-form'
import * as FetchJson from '~/lib/fetchJson'
import * as Path from '~/lib/path'
import PostFactory from '~/lib/postFactory'

type FormData = {
    title: string;
    post: string;
    details: string
}

export default function Create() {
    const postFactory: IPost[] = PostFactory()
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm<FormData>();
    const [post, setPost] = React.useState<IPost>({
        author: {
            id: "MyID",
            username: "Kearnol",
            email: "Kearnol@fake.com"
        },
        title: postFactory[0].title,
        post: postFactory[0].post,
        details: postFactory[0].details,
    });

    const onSubmit = async (data: FormData) => {
        console.log("Data", data)
        const res = await FetchJson.post(Path.CreatePost.Api, data);
        if(res.error){
            window.alert(res.error.message ?? "Error");
        } else {
            console.log("Result", res.data)
        }
    }
    const onError = (errors: FieldErrors<FormData> ) => {
        // TODO - figure out error alert modules
        // TODO - figure out a master error log
        console.log("error", errors);
    }

    function randomizePostInputs(): void{
        const max = postFactory.length - 1;
        const getRandomInt = () => {
            let randomInt = Math.floor(Math.random() * (max-0 + 1) + 0)
            return randomInt
        }
        let randomInt = getRandomInt()
        console.log(randomInt);
        while(getValues("title") == postFactory[randomInt].title){
            randomInt = getRandomInt()
        }
        setValue("title", postFactory[randomInt].title);
        setValue("post", postFactory[randomInt].post);
        setValue("details", postFactory[randomInt].details);
        return
    }

    return (
        <Box
            component="form"
            name="postForm"
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <Stack spacing={2}>
                <TextField
                    required
                    {...register("title", {required: true})}
                    id="title"
                    label="What would you like to do?"
                    defaultValue={post.title}
                    // onChange={() => handleChange}
                />
                <TextField
                    {...register("post")}
                    multiline
                    id="post"
                    label="Who would you like to do it with?"
                    defaultValue={post.post}
                    // onChange={() => handleChange}
                />
                <TextField
                    required
                    {...register("details", {required: true})}
                    id="details"
                    label="Okay. Give us some details"
                    defaultValue={post.details}
                    // onChange={() => handleChange}
                />
                <div>
                    <Button type="submit" value="Post" variant="contained" size="large">Post</Button>
                    <Button onClick={() => randomizePostInputs()} value="Randomize" sx={{background: "transparent", height: "auto", minWidth: "auto", marginLeft: 2 }}><CasinoIcon sx={{color: "black"}}/></Button>
                </div>
            </Stack>            
        </Box>
    )
}