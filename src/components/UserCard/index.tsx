import React, { Fragment } from "react";
import King from "../_Icons/King";
import dynamic from "next/dynamic";
import Supporter from "../_Icons/Supporter";
import ImageComponent from "../ImageComponent";
import VerifiedIcon from "../_Icons/VerifiedIcon";
import ContentCreator from "../_Icons/ContentCreator";
import { IUser } from "@/interfaces/user.interface";
import Speedometer from "../Speedometer";
import { dummyProfile } from "@/data/DashboardData";

const UserCard = ({ user }: { user: IUser }) => {
  if (!user) return <Fragment></Fragment>
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative">
      <div className="flex items-center gap-1">
        <ImageComponent
          className="rounded-full object-cover"
          src={user.avatar || dummyProfile}
          alt=""
          fill
          figClassName="h-6 w-6 rounded-full"
        />
        <h4 className="ml-2">{user.userName}</h4>
        {user.isVerified && <VerifiedIcon />}
        {user.isSCC && <ContentCreator classNames="h-4 w-4" />}


      </div>
      <div className="absolute -top-3 -right-2">
        <Speedometer value={Number(user.points || 0)} />
      </div>
      <p className="text-secondary1 mt-2 text-xs">
        {user.bio ?? "‎"}
      </p>
      <div className="flex justify-center flex-col items-center mt-3 gap-4">
        <div className="flex gap-1">
          <div className="border-r border-borderColor px-1 text-center ">
            <h4>{user?.followersCount ?? 0}</h4>
            <p className="text-secondary1 text-xs">Followers</p>
          </div>
          <div className="border-r border-borderColor px-1 text-center ">
            <h4>{user?.followingCount ?? 0}</h4>
            <p className="text-secondary1 text-xs">Following</p>
          </div>
          <div className="border-r border-borderColor px-1 text-center ">
            <h4>{user?.mintedNFTs ?? 0}</h4>
            <p className="text-secondary1 text-xs">Minted </p>
          </div>
          <div className="text-center ">
            <h4>{user?.listedNFTs ?? 0}</h4>
            <p className="text-secondary1 text-xs">Listed </p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-r border-borderColor px-1 text-center ">
            <h4>{user?.boughtNFTs ?? 0}</h4>
            <p className="text-secondary1 text-xs">Bought</p>
          </div>
          <div className="border-r border-borderColor px-1 text-center ">
            <h4>{user?.soldNFTs ?? 0}</h4>
            <p className="text-secondary1 text-xs px-2">Sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
