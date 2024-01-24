import React from "react";
import King from "../_Icons/King";
import Supporter from "../_Icons/Supporter";
import ImageComponent from "../ImageComponent";
import VerifiedIcon from "../_Icons/VerifiedIcon";
import ContentCreator from "../_Icons/ContentCreator";

const StageCard = ({ key }: any) => {
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative" key={key}>
      <h4 className="">Stage Title</h4>
      <p className="text-secondary1 mt-2 text-xs">
        this is my Bio i really enjoy to follow NFT creators from around the
        world, NFT lover!
      </p>
      <div className="flex gap-4">
        <div>
          <p className="text-lightGray text-xs mt-5 font-semibold">
            Participants
          </p>
          <p className="text-secondary1">1.4k</p>
        </div>
        <div>
          <p className="text-lightGray text-xs mt-5 font-semibold">
            Notified Users
          </p>
          <p className="text-secondary1">1,123</p>
        </div>
        <div>
          <p className="text-lightGray text-xs mt-5 font-semibold">Reposts</p>
          <p className="text-secondary1">221</p>
        </div>
        <div>
          <p className="text-lightGray text-xs mt-5 font-semibold">Status</p>
          <p className="text-primary">Live</p>
        </div>
      </div>
      <p className="text-lightGray text-xs mt-2 font-semibold mb-1">Creator</p>
      <div className="flex items-center gap-1">
        <ImageComponent
          className="rounded-full object-cover"
          src={"/assets/images/placeholders/avatar1.png"}
          alt=""
          fill
          figClassName="h-6 w-6 rounded-full"
        />
        <h4 className="ml-2">user_name</h4>
        <VerifiedIcon />
        <King classNames="h-4 w-4" />
        <Supporter classNames="h-4 w-4" />
        <ContentCreator classNames="h-4 w-4" />
      </div>
    </div>
  );
};

export default StageCard;
