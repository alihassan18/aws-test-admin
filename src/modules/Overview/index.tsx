import TotalCounts from "@/components/TotalCounts";
import { BarChartData, TotalCountsData } from "@/data/DashboardData";
import React, { useState } from "react";
import BarChartView from "./_components/BarChartView";
import BarChartTabs from "./_components/BarChartTabs";
import { GET_USERS_GRAPH_STATS, GET_USERS_STATS, TODAY_USERS_STATS } from "@/graphql/user";
import { useQuery } from "@apollo/client";

const Overview = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const [_, setDuration] = useState("1_MONTH");

  const {data:GraphData} = useQuery(GET_USERS_GRAPH_STATS)
  const dailyStatList = GraphData?.usersGraphStats

  const { data } = useQuery(GET_USERS_STATS);

  const TotalCountsData = [
    { icon: "icon-user-filled", title: "Total Users", counts: data?.usersStats?.usersCount ?? 0 },
    { icon: "icon-verified", title: "KYC", counts: data?.usersStats?.kycCount ?? 0 },
    // { icon: "icon-land-leader", title: "Land-Kings", counts: data?.usersStats?.kingsCount ?? 0  },
    // { icon: "icon-supporters", title: "Day One Supporters", counts: data?.usersStats?.day1SupportersCount ?? 0  },
    { icon: "icon-favorite", title: "Selected Content Creators", counts: data?.usersStats?.contentCreators ?? 0 },
    { icon: "icon-like-filled", title: "Likes", counts: data?.usersStats?.likeCount ?? 0  },
    { icon: "icon-comment", title: "Comment", counts: data?.usersStats?.commentsCount ?? 0 },
    { icon: "icon-reposts", title: "Reposts", counts: data?.usersStats?.repostsCount ?? 0},
    // { icon: "icon-share", title: "Social Shared Posts", counts: data?.usersStats?.sharedPosts ?? 0  },
    { icon: "icon-comment", title: "Posts", counts: data?.usersStats?.postsCount ?? 0  },
    { icon: "icon-stage", title: "Live Stages", counts: data?.usersStats?.stageCount ?? 0  },
    { icon: "icon-hashtags", title: "Total Hashtags", counts: data?.usersStats?.hashtagCount ?? 0  },
    { icon: "icon-user-block", title: "Blocked Users", counts: data?.usersStats?.blockedUsersCount ?? 0  },
    { icon: "icon-user-block", title: "Banned Users", counts: data?.usersStats?.bannedUsersCount ?? 0  },
    { icon: "icon-groups", title: "Total Groups", counts: data?.usersStats?.groupsCount ?? 0  },
  ];

  const { data: todayStats } = useQuery(TODAY_USERS_STATS)
  
  const todayData = todayStats?.todayUsersStats
  const TodaysData = [
    { icon: "icon-user-filled", title: "Total Users", counts: todayData?.usersCount ?? 0 },
    { icon: "icon-verified", title: "KYC", counts: todayData?.kycCount ?? 0 },
    // { icon: "icon-land-leader", title: "Land-Kings", counts: todayData?.kingsCount ?? 0  },
    // { icon: "icon-supporters", title: "Day One Supporters", counts: todayData?.day1SupportersCount ?? 0  },
    { icon: "icon-favorite", title: "Selected Content Creators", counts: todayData?.contentCreators ?? 0 },
    { icon: "icon-like-filled", title: "Likes", counts: todayData?.likeCount ?? 0  },
    { icon: "icon-comment", title: "Comment", counts: todayData?.commentsCount ?? 0 },
    { icon: "icon-reposts", title: "Reposts", counts: todayData?.repostsCount ?? 0},
    // { icon: "icon-share", title: "Social Shared Posts", counts: todayData?.sharedPosts ?? 0  },
    { icon: "icon-comment", title: "Posts", counts: todayData?.postsCount ?? 0  },
    { icon: "icon-stage", title: "Live Stages", counts: todayData?.stageCount ?? 0  },
    { icon: "icon-hashtags", title: "Total Hashtags", counts: todayData?.hashtagCount ?? 0  },
    { icon: "icon-user-block", title: "Blocked Users", counts: todayData?.blockedUsersCount ?? 0  },
    { icon: "icon-user-block", title: "Banned Users", counts: todayData?.bannedUsersCount ?? 0  },
    { icon: "icon-groups", title: "Total Groups", counts: todayData?.groupsCount ?? 0  },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-2">TOTAL</h2>
      <div className="grid grid-cols-7 gap-2">
        {TotalCountsData?.map((item, i) => (
          <div key={i}>
            <TotalCounts
              icon={item.icon}
              title={item.title}
              counts={item.counts}
            />
          </div>
        ))}
      </div>
      <div className="rounded-md border border-borderColor mt-5">
        <div className="flex h-[48px] items-center justify-between gap-2 rounded-t border-b px-4 py-3  border-borderColor bg-grayColor">
          <p className="text-base text-white">New registration</p>
          <BarChartTabs
            setSelectedTabIdx={setSelectedTabIdx}
            selectedTabIdx={selectedTabIdx}
            setDuration={setDuration}
          />
        </div>
        <BarChartView data={dailyStatList} />
      </div>
      <h2 className="mb-2 mt-5 flex items-center">
        TODAY{" "}
        <span className="h-2.5 w-2.5 bg-success rounded-full block ml-4 mr-1"></span>{" "}
        LIVE
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {TodaysData?.map((item, i) => (
          <div key={i}>
            <TotalCounts
              icon={item.icon}
              title={item.title}
              counts={item.counts}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
