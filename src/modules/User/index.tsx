import TotalCounts from "@/components/TotalCounts";
import { TotalUserCountsData } from "@/data/CounterData";
import React, { useState } from "react";
import UserTable from "./_components/UserTable";
import SortSelect from "@/components/SortSelect";
import { useQuery } from "@apollo/client";
import { GET_USERS_DATA, GET_USERS_STATS, } from "@/graphql/user";
import { IusersStats } from "@/interfaces/usersData.interface";



const filterData = [
  { title: "Most commented", value: "commentCount" },
  { title: "Most liked", value: "likeCount" },
  { title: "Most Reposted", value: "repostCount" },
  { title: "Blocked Users", value: "blocked" }, 
  { title: "Ban Users", value: "banned" },
];

type Item = {
  title: string;
  value: string
};

const User = () => {
  const [selected1, setSelected1] = useState<Item>();
  const { data } = useQuery(GET_USERS_STATS);
  const usersStats: IusersStats = data?.usersStats;

  const TotalUserCountsData = [
    { icon: "icon-user-filled", title: "Total Users", counts: usersStats?.usersCount || 0 },
    { icon: "icon-verified", title: "KYC", counts: usersStats?.kycCount || 0 },
    // { icon: "icon-land-leader", title: "Land-Kings", counts: data?.usersStats?.kingsCount ?? 0 },
    // { icon: "icon-supporters", title: "Day One Supporters", counts: data?.usersStats?.day1SupportersCount ?? 0 },
    { icon: "icon-favorite", title: "Selected Content Creators", counts: data?.usersStats?.contentCreators ?? 0 },
    { icon: "icon-user-block", title: "Blocked Users", counts: data?.usersStats?.blockedUsersCount ?? 0 },
    { icon: "icon-user-block", title: "Banned Users", counts: data?.usersStats?.bannedUsersCount ?? 0 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-semibold text-white ">User’s Data</h2>
        <div className="flex gap-2">
          {/* <SortSelect
            data={selectdata}
            selected={selected}
            onSelect={setSelected}
            placeholder="Filter By"
          /> */}
          <SortSelect
            data={filterData}
            selected={selected1}
            onSelect={(val) => setSelected1(val)}
            placeholder="Sort By"
          />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-5">
        {TotalUserCountsData?.map((item, i) => (
          <div key={i}>
            <TotalCounts
              icon={item.icon}
              title={item.title}
              counts={item.counts}
            />
          </div>
        ))}
      </div>
      <UserTable filter={selected1?.value} />
    </div>
  );
};

export default User;
