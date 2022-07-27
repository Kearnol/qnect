import * as React from 'react'
import * as FetchJson from '~/lib/fetchJson'
import * as Path from '~/lib/path'
import Image from 'next/image'
import style from '~/styles/login.module.scss'
import { Box, Stack, TextField, Button } from '@mui/material'
import { FieldErrors, useForm } from 'react-hook-form'

type FormData = {
    username: string;
    password: string;
}

export default function Login() {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
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
                    {...register("username", {required: true})}
                    id="username"
                    label="Username"
                    defaultValue={''}
                />
                <TextField
                    {...register("password", {required: true})}
                    multiline
                    id="password"
                    label="Password"
                    defaultValue={''}
                />
                <div>
                    <Button type="submit" variant="contained" size="large">Login</Button>
                </div>
            </Stack>            
        </Box>
    )
}
