import React from 'react';
import MediaComponent from '../MediaComponent/index';
import { Post } from '@/interfaces/feeds.interface';

function MediaPostView({ post }: { post: Post }) {
    return (
        <div className={`relative grid ${post?.media?.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}   gap-2`}>
            {post?.media?.slice(0, 4)?.length > 0 &&
                !post?.media[0].includes('.gif') &&
                post?.media.slice(0, 4)?.map((media: string, index: number) => (
                    <div
                        key={index}
                        className={`${(post?.media?.length === 3 && index === 2) || (post?.media?.length === 1 && index === 0) ? 'col-span-2' : ''
                            } relative`}
                    >
                        <MediaComponent
                            filePath={media}
                            dimensions={`${post?.media?.length === 1 ? 'aspect-w-1 aspect-h-1' : 'aspect-w-5 aspect-h-3'} `}
                        />
                        {index === 3 && post?.media?.length > 4 && (
                            <div
                                // onClick={() => setShow(true)}
                                className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-md bg-black/80"
                            >
                                +{Number(post?.media?.length) - 4}
                            </div>
                        )}
                    </div>
                ))}
            {/* This will only show gifs     */}
            {post?.media?.length === 1 && post?.media[0].includes('.gif') && (
                <div className="  relative">
                    <MediaComponent filePath={post?.media[0]} dimensions="aspect-w-1 aspect-h-1" />
                </div>
            )}
        </div>
    );
}

export default MediaPostView;
