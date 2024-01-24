import React from "react";
import King from "../_Icons/King";
import Supporter from "../_Icons/Supporter";
import ImageComponent from "../ImageComponent";
import VerifiedIcon from "../_Icons/VerifiedIcon";
import ContentCreator from "../_Icons/ContentCreator";
import { Collection } from "@/interfaces/collection.interface";
import { formatCount, slicedAddress } from "@/utils/functions";
import { dummyProfile } from "@/data/DashboardData";
import { useQuery } from "@apollo/client";
import { GET_WALLET_BY_ADDRESS } from "@/graphql/user";
import { Button } from "../Button";
import { IUser } from "@/interfaces/user.interface";
const CollectionCard = ({
  report,
  banHandler,
  blocking,
}: {
  report: { _collection: Collection; user: IUser; _id: string };
  banHandler: Function;
  blocking: boolean;
}) => {
  const collection = report._collection;

  // const { data } = useQuery(GET_WALLET_BY_ADDRESS, {
  //   variables: { address: collection?.owner },
  //   skip: !collection?.owner
  // })

  // let user = data?.wallet?.userId || null

  if (!collection) return <div></div>;
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative">
      {/* <h4 className="">{collection.name}</h4> */}
      <p className="text-secondary1 mt-2 text-xs">
        {/* {collection.description} */}
      </p>
      <div className="flex gap-4">
        <div>
          {/* <p className="text-lightGray text-xs mt-5 font-semibold">Followers</p>
          <p className="text-secondary1">{collection.followersCount}</p> */}
        </div>
        <div>
          {/* <p className="text-lightGray text-xs mt-5 font-semibold">Royalty</p>
          <p className="text-secondary1">{collection.royalty}%</p> */}
        </div>
        <div>
          {/* <p className="text-lightGray text-xs mt-5 font-semibold">Volume</p>
          <p className="text-secondary1">{collection.volume_total.toFixed(2)} {collection.symbol}</p> */}
        </div>
        <div>
          {/* <p className="text-lightGray text-xs mt-5 font-semibold">
            Floor Price
          </p>
          <p className="text-secondary1">{collection.floor_price} {collection.symbol}</p> */}
        </div>
      </div>
      {/* <p className="text-lightGray text-xs mt-2 font-semibold mb-1">Creator</p> */}
      <div className="flex items-center gap-1">
        <ImageComponent
          className="rounded-md object-cover"
          src={collection?.image || dummyProfile}
          alt=""
          fill
          figClassName="h-32 w-full "
        />
        {/* <h4 className="ml-2 max-w-[4rem] truncate">{user ? user?.userName : slicedAddress(collection.owner)}</h4> */}
        {/* {
          user?._id
          &&
          <Button isLoading={blocking} className="ml-auto" size="xs" color="danger" onClick={() => banHandler(user._id, report._id)}>
            Life Time Ban User
          </Button>
        } */}

        {/* <VerifiedIcon />
        <King classNames="h-4 w-4" />
        <Supporter classNames="h-4 w-4" />s
        <ContentCreator classNames="h-4 w-4" /> */}
      </div>
    </div>
  );
};

export default CollectionCard;
