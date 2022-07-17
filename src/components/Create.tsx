import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { FieldErrors, useForm } from 'react-hook-form'
import * as FetchJson from '~/components/fetchJson'
import * as Path from '~/lib/path'

export type FormData = {
    title: string;
    post: string;
    details: string
}

export default function Create() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
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
                    id="outlined-required"
                    label="What would you like to do?"
                    defaultValue="Meet a Friend 👋"
                />
                <TextField
                    {...register("post")}
                    multiline
                    id="outlined-required"
                    label="Who would you like to do it with?"
                    defaultValue="Someone who likes Hurricane Iced Teas"
                />
                <TextField
                    required
                    {...register("details", {required: true})}
                    id="outlined-required"
                    label="Okay. Give us some details"
                    defaultValue="Come buy me a drink 🍹"
                />
                <div>
                    <Button type="submit" value="Post" variant="contained" size="large">Post</Button>
                </div>
            </Stack>            
        </Box>
    )
}