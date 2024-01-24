import React from "react";
import Likes from "../Likes";
import Views from "../Views";
import Repost from "../Repost";
import Comments from "../Comments";
import ImageComponent from "../ImageComponent";
import VerifiedIcon from "../_Icons/VerifiedIcon";
import { Post } from "@/interfaces/feeds.interface";
import MediaPostView from "../Feeds/MediaPostView";
import { processMentions } from "./processMention";
import PollDetails from "../Feeds/PollDetails";
import moment from "moment";
import { dummyProfile } from "@/data/DashboardData";

const stopPropagationPostItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();


const PostCard = ({ post }: { post: Post }) => {
  return (
    <div
      className={`
           rounded-md bg-transparent
       cursor-pointer p-2 `}
    >
      <div className="relative flex items-start gap-3">
        <ImageComponent
          src={post?.author?.avatar || dummyProfile}
          className="object-cover"
          figClassName="cursor-pointer flex-shrink-0 hover:opacity-70 rounded-full h-12 w-12"
          fill
        />
        <div>
          <div className="relative flex w-full items-center gap-0.5 mt-2">
            <h4 className="w-[7rem] truncate">{post?.author?.userName}</h4>
            {post?.author?.isVerified && <VerifiedIcon classNames="text-sm" />}

            <p className="cursor-pointer w-[6.5rem] truncate flex-shrink-0">
              {/* @ProductHunt ProductHunt */}
            </p>
            <p className="flex items-center gap-x-1 text-sm text-secondary">
              <span className="icon-point text-sm block pb-3">.</span>

              <span className="cursor-pointer"> {moment(post?.scheduledAt ? post?.scheduledAt : post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
            </p>
          </div>


          <div className="mt-3">
            {/* <div className="flex h-full w-full items-center justify-center rounded-md bg-black aspect-w-2 aspect-h-1">
            <video
              src={""}
              controls
              className="max-h-full max-w-full object-contain rounded-md"
            />
          </div> */}
            {/* <ImageComponent
              src={"/assets/images/post.png"}
              className="m-auto rounded-md object-cover "
              width={300}
              height={168}
              alt=""
            /> */}
            {/* {!post?.inReplyToPost && !post?.token && ( */}
              <div className=" relative">
                {post?.originalPost && (
                  <div className="absolute -left-9 top-8 h-full w-[8%] border-[1.7px] border-r-0 border-t-0 border-dashed border-borderColor"></div>
                )}
                <div className=" mt-0.5 mb-1 cursor-pointer">
                  <p className="AtWordBreak inline-block text-sm dark:text-white" onClick={stopPropagationPostItem}>
                    {processMentions(post?.text, post?.hashtags, post?._id)}
                  </p>
                </div>

                <MediaPostView post={post} />
              </div>
            {/* )} */}
            {post?.poll && <PollDetails post={post} />}


          </div>
          <div className="flex justify-between gap-4 border-t border-borderColor mt-3 pt-4">
            <Comments
              iconClass="text-secondary1"
              valueClass="text-secondary1 ml-1"
              value={post?.commentsCount}
            />
            <Repost
              iconClass="text-secondary1"
              valueClass="text-secondary1 ml-1"
              repostCount={post?.repostCount}
            />
            <Likes
              iconClass="text-secondary1"
              valueClass="text-secondary1 ml-1"
              value={post?.reactions?.find((r) => r.emoji === 'like')?.count || 0}
            />
            <Views
              iconClass="text-secondary1"
              valueClass="text-secondary1 ml-1"
              value={post?.postViews}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
