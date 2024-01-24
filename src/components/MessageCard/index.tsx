import React from "react";
import ImageComponent from "../ImageComponent";
const reactions = [
  "/assets/images/reactions/like.svg",
  "/assets/images/reactions/joy.svg",
  "/assets/images/reactions/clap.svg",
  "/assets/images/reactions/joy.svg",
];
const MessageCard = ({ key }: any) => {
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative" key={key}>
      <h4 className="">Reported Message</h4>
      <div className="flex gap-2 items-start mt-2">
        <div className="">
          <p className="text-secondary1 text-xs">
            An NFT (non-fungible token) collection is a series of unique digital
            assets that are stored on a blockchain...
          </p>
          <div className="flex gap-4 mt-2">
            <div>
              <p className="text-lightGray text-xs font-semibold">
                Type of Chat
              </p>
              <p className="text-secondary1">One to one</p>
            </div>
            <div>
              <p className="text-lightGray text-xs font-semibold">
                Reported User
              </p>
              <div className="flex items-center gap-1">
                <ImageComponent
                  className="rounded-full object-cover"
                  src={"/assets/images/placeholders/avatar1.png"}
                  alt=""
                  fill
                  figClassName="h-4 w-4 rounded-full"
                />
                <p className="text-secondary1">user_name</p>
              </div>
            </div>
            <div>
              <p className="text-lightGray text-xs font-semibold">Reactions</p>
              <div className="flex gap-1 mt-1">
                {reactions.map((path, i) => (
                  <div
                    className="rounded-sm bg-grayColor p-1.5 flex-shrink-0 cursor-pointer"
                    key={i}
                  >
                    <ImageComponent
                      className="object-cover"
                      src={path}
                      alt=""
                      fill
                      figClassName="h-3 w-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-1 mt-4">
            <div className="border-r border-borderColor px-1 text-center ">
              <h4>12K</h4>
              <p className="text-secondary1 text-xs">Followers</p>
            </div>
            <div className="border-r border-borderColor px-1 text-center ">
              <h4>11.6K</h4>
              <p className="text-secondary1 text-xs">Following</p>
            </div>
            <div className="border-r border-borderColor px-1 text-center">
              <h4>112</h4>
              <p className="text-secondary1 text-xs">Minted </p>
            </div>
            <div className="border-r border-borderColor px-1 text-center">
              <h4>12K</h4>
              <p className="text-secondary1 text-xs">Listed </p>
            </div>
            <div className="border-r border-borderColor px-1 text-center ">
              <h4>12K</h4>
              <p className="text-secondary1 text-xs">Bought</p>
            </div>
            <div className="border-r border-borderColor px-1 text-center ">
              <h4>12K</h4>
              <p className="text-secondary1 text-xs px-1">Sold</p>
            </div>
          </div>
        </div>
        <ImageComponent
          className="object-cover "
          src={"/assets/images/nft.png"}
          alt=""
          fill
          figClassName="h-12 w-7 flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default MessageCard;
