// hooks/useCloudinaryUpload.ts
import { useCallback, useState } from 'react';

export interface CloudinaryUploadResult {
    public_id: string;
    secure_url: string;
    url: string;
    resource_type: string;
}

const useCloudinaryUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<CloudinaryUploadResult[]>([]);
    const [error, setError] = useState<string | null>(null);

    const uploadToCloudinary = useCallback(async (files: File[]) => {
        setUploading(true);
        setError(null);
        setUploadedFiles([]);

        try {
            const results = await Promise.all(
                files.map(async (file) => {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', process.env.NEXT_PUBLIC_YOUR_UNSIGNED_UPLOAD_PRESET!);

                    const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL!, {
                        method: 'POST',
                        body: formData
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.error.message);
                    }

                    return data;
                })
            );

            setUploadedFiles(() => [...results]);
            return [...results];
        } catch (err:any) {
            // @ts-ignore
            console.log(err, 'error uploading files');

            setError(err?.message);
        } finally {
            setUploading(false);
        }
    }, []);

    return { uploading, uploadedFiles, error, uploadToCloudinary };
};

export default useCloudinaryUpload;
