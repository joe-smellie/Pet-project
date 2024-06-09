import { useState } from "react"
import Avatar from 'react-avatar-edit'

function UploadAvatar () {
    const [src, setSrc] = useState(null)
    const [preview, setPreview] = useState(null)

    const onClose = () => {
        setPreview(null)
    }

    const onCrop = view => {
        setPreview(view)
    }

    

    return (
        <div className="avatar">
            <h2>Upload a photo</h2>
            <Avatar
                width={400}
                height={300}
                imageWidth={300}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />
            {preview && <img src={preview} alt= "avatar" />}
        </div>
    )
}

export default UploadAvatar