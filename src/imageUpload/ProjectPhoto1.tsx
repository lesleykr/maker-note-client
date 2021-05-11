import React from 'react'
import { useState } from 'react'

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dx06fkupm/image/upload'

const ImageUpload = (props: any) => {

    const [avUrl, setAvUrl] = useState('#')

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/user/cloudsign', {
            method: 'GET',
            headers: {
                'Authorization': props.token
            }
        })

        const { sig, ts } = await response.json()

        const file = (document.getElementById('file-input') as HTMLFormElement).files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'yawnhulb')
        formData.append('api_key', '776498227515992')
        formData.append('signature', sig)
        formData.append('timestamp', ts)

        const results = await (await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData
        })).json()
        setAvUrl(results.secure_url)
        console.log(results)

        const final = await (await fetch('http://localhost:3000/user/imageset', {
            method: 'PUT',
            headers: {
                'Authorization': props.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url })
        })).json()
    }

    return (
        <>
<form encType="multipart/form-data" onSubmit={handleSubmit}>
    <input id="file-input" type="file"/>
    <button>Upload Image</button>
</form>
<img src={avUrl} alt="photo" />

        </>

    )
}

export default ImageUpload

