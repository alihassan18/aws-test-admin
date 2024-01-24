import React from "react";
import EthIcon from "../_Icons/EthIcon";
import ImageComponent from "../ImageComponent";
import { Token } from "@/interfaces/token.interface";
const NftCard = ({ report }: { report: { nft: Token } }) => {
  const { nft } = report;
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative">
      {/* <h4 className="">{nft.name}</h4> */}
      <div className="flex gap-2 items-start mt-2">
        <div className="">
          <p className="text-secondary1 text-xs">{/* {nft.description} */}</p>
          {/* <div className="flex gap-9">
            <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">
                Attributes
              </p>
            </div>
            <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">
                Royalty
              </p>
              <p className="text-secondary1">6%</p>
            </div>
            <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">Chain</p>
            </div>
            <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">Price</p>
            </div>
          </div> */}
          <div className="flex gap-3  mt-2">
            <div className="">
              {/* <p className="text-lightGray text-xs font-semibold mb-1">
                Collection
              </p> */}
              <div className=" relative">
                {nft.image && (
                  <ImageComponent
                    className="rounded-md object-cover"
                    src={nft.image}
                    alt=""
                    fill
                    figClassName="h-24 w-52 lg:w-80 "
                  />
                )}

                {/* <h4 className="">{nft?.contractName}</h4> */}
              </div>
            </div>
            {/* <div className="">
              <p className="text-lightGray text-xs font-semibold mb-1">
                Collection     
              </p>
              <div className="flex items-center gap-1">
                <ImageComponent
                  className="rounded-full object-cover"
                  src={"/assets/images/placeholders/avatar1.png"}
                  alt=""
                  fill
                  figClassName="h-6 w-6 rounded-full"
                />
                <h4 className="">user_name</h4>
              </div>
            </div>
            <div className="">
              <p className="text-lightGray text-xs font-semibold mb-1">
                Creator
              </p>
              <div className="flex items-center gap-1">
                <ImageComponent
                  className="rounded-full object-cover"
                  src={"/assets/images/placeholders/avatar1.png"}
                  alt=""
                  fill
                  figClassName="h-6 w-6 rounded-full"
                />
                <h4 className="">user_name</h4>
              </div>
            </div> */}
          </div>
        </div>
        {/* {
          nft?.nftscanUri
          &&
          <ImageComponent
            className="object-cover "
            src={nft.nftscanUri}
            alt=""
            fill
            figClassName="h-12 w-7 flex-shrink-0"
          />
        } */}
      </div>
    </div>
  );
};

export default NftCard;
