import { Button } from "@/components/Button";
import ModalTopBar from "../ModalTopBar";
import VideoPlayer from "@/components/VideoPlayer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Iprops {
  handleFileChange: Function,
  uploading: boolean
}

const UploadVideo = ({ handleFileChange, uploading }: Iprops) => {


  const [Videofile, setFile] = useState<[Object]>();
  const [url, setUrl] = useState<string>('')


  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileSizeInMB = (file.size / (1024 * 1024));
      if (fileSizeInMB > 20) {
        toast.warning('size must be less than 20MB')
        console.log('File size exceeds the limit of 20MB');
        return;
      }
      uploadFile(file)
      setFile([file])
    }
  }
  const uploadFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const src = reader.result as string;
      setUrl(src)
    };
    reader.readAsDataURL(file); 
  };

  useEffect(() => {
    return () => {
      setUrl('')
      
    }
  }, [])

  return (
    <div className="w-full rounded-md border border-borderColor px-0 py-0 sm:w-[46.813rem]">
      <ModalTopBar icon="icon-king">Upload Video</ModalTopBar>
      <div className="mt-4 mb-2 bg-selectBg px-3">
        <div className="w-full h-[30.813rem] relative border-2 rounded-md border-dashed border-borderColor">
          {url ?
            <VideoPlayer
              src={url || ''}
              className="h-[30.5rem] object-cover rounded-md relative z-10"
            /> : ''}
          <label
            htmlFor="video"
            className="absolute top-0 w-full h-full cursor-pointer flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <i className="icon-img text-secondary text-4xl"></i>
              <p>Upload a file or drag and drop</p>
              <p className="text-primary mt-1">
                File types accepted: mp4, Max file size: 20 MB.
              </p>
            </div>
          </label>
          <input type="file" name="" id="video" className="hidden" onChange={handleInputChange} accept="video/*" />
        </div>
      </div>
      <div className={`flex justify-end rounded-b-md bg-grayColor px-3 py-3`}>
        <Button
          isLoading={uploading}
          onClick={() => {
            handleFileChange(Videofile)
          }}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default UploadVideo;
