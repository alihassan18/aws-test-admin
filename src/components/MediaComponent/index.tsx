import React, { memo } from 'react';
import ImageComponent from '../ImageComponent';
import VideoPlayer from '../VideoPlayer';
type Filepath = {
    filePath: string | File;
    className?: string;
    width?: number;
    height?: number;
    type?: string;
    dimensions?: string;
};

const MediaComponent = ({ filePath, type, dimensions }: Filepath) => {
    if (!filePath) {
        // console.warn('MediaComponent: filePath is undefined or empty');
        return null;
    }
    let path: string;

    /* This will work if the file is locally selected */
    if (filePath instanceof File) {
        path = URL.createObjectURL(filePath);
    } else {
        path = filePath;
    }
    //@ts-ignore
    const extension = path.split('.').pop().toLowerCase();
    if (extension === 'mp4' || extension === 'webm' || type === 'mp4' || extension === 'mov' || type === 'quicktime') {
        return <VideoPlayer src={path} className={`${dimensions ? dimensions : 'aspect-w-1 aspect-h-1 mt-2'}`} />;
    } else if (extension === 'mp3' || extension === 'wav' || extension === 'ogg') {
        return <audio src={path} className={`${dimensions ? dimensions : 'mt-2'}`} controls />;
    } else if (extension === 'gif' || type === 'gif') {
        return (
            <ImageComponent
                src={path}
                className="rounded-md object-cover"
                figClassName={`${dimensions ? dimensions : 'mt-3 aspect-w-1 aspect-h-1'} `}
                fill
            />
        );
    } else {
        return (
            <ImageComponent
                src={path}
                className="m-auto rounded-md object-cover "
                figClassName={`${dimensions ? dimensions : 'mt-3 aspect-w-1 aspect-h-1'} `}
                // width={width ? width : 470}
                // height={height ? height : 500}
                fill
                alt=""
            />
        );
    }
};

export default memo(MediaComponent);
