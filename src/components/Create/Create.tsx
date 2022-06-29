import { FieldErrors, useForm } from 'react-hook-form'

type FormData = {
    title: string;
    post?: string;
    details?: string
}

export default function Create() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = (data: FormData) => console.log(data)
    const onError = (errors: FieldErrors<FormData> ) => console.log("error", errors);

    return (
        <>
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input {...register("title")} />
                <input {...register("post")} />
                <input {...register("details")} />
                <input type="submit"/>
            </form>
        </div>
        </>
    )
}