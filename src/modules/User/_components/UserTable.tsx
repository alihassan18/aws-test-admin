import ImageComponent from "@/components/ImageComponent";

import MoreOptions from "@/components/MoreOption";
import ClipInfo from "@/components/_Icons/ClipInfo";
import ContentCreator from "@/components/_Icons/ContentCreator";
import King from "@/components/_Icons/King";
import Supporter from "@/components/_Icons/Supporter";
import Verified from "@/components/_Icons/Verified";
import { dummyProfile } from "@/data/DashboardData";
import {
  BAN_USER_BY_ADMIN,
  BLOCK_USER_BY_ADMIN,
  EDIT_PROFILE_BY_ADMIN,
  GET_USERS_DATA,
  GET_USERS_STATS,
} from "@/graphql/user";
import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Menu, Transition } from "@headlessui/react";
import Search from "@/components/Forms/Search";
import clsx from "clsx";
import { IUser } from "@/interfaces/user.interface";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { useIntersectionObserver } from "usehooks-ts";
import moment from "moment";

const ListViewHeadings =
  "px-2 py-3 text-xs font-normal tracking-wider leading-0 text-center text-white uppercase";
const ListViewItems =
  "px-2 py-2 whitespace-nowrap text-center text-xs text-secondary group-hover:text-white text-secondary";

const UserTable = ({ filter }: { filter?: string }) => {
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const [page, setPage] = useState(1);
  const [next, setNext] = useState(false);
  const [usersList, setUsersList] = useState<Array<any>>([]);

  const {
    data,
    loading: fetching,
    fetchMore,
    refetch,
  } = useQuery(GET_USERS_DATA, {
    variables: { page, filter, search },
    onCompleted: (data) => {
      if (data) {
        setNext(data?.usersData?.next || false);
        setUsersList(data?.usersData?.data || []);
      }
    },
  });

  useEffect(() => {
    if (filter) {
      refetch({ page: 1, filter: filter, search });
    }
  }, [filter, search]);

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadMoreObserver = useIntersectionObserver(loadMoreRef, {});

  useEffect(() => {
    const isVisible = !!loadMoreObserver?.isIntersecting;
    if (isVisible && next && usersList.length >= 20) {
      loadMore();
    }
  }, [loadMoreObserver?.isIntersecting]);

  const loadMore = () => {
    var _currentPage = page + 1;
    setPage(_currentPage);
    if (next) {
      fetchMore({
        variables: {
          page: _currentPage,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;

          const updatedData = [...usersList, ...fetchMoreResult.usersData.data];

          setNext(fetchMoreResult.usersData.next);
          setUsersList(updatedData);
          // setPageSize(fetchMoreResult.pageSize);

          console.log({ fetchMoreResult, previousResult }, "nest-=-=-=-");

          return {
            ...previousResult,
            usersData: {
              ...fetchMoreResult.usersData,
              data: updatedData,
            },
          };
        },
      });
    }
  };

  // CCHANGE
  const filteringData = (userId: string, key: string, val: boolean) => {
    const updatedUsersList = usersList.map((user: IUser) => {
      if (user._id === userId) {
        return { ...user, [key]: val };
      }
      return user;
    });
    setUsersList(updatedUsersList);
  };

  // SEARCH

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch((prev) => (prev !== searchKey ? searchKey : prev));
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchKey]);

  console.log(usersList, "usersList");

  return (
    <div className="overflow-x-auto ">
      <div className="flex justify-end mb-2">
        <Search
          Placeholder="Search User"
          className="!w-[24.6rem]"
          parentClass="absolute"
          setQuery={setSearchKey}
          query={searchKey}
        />
      </div>
      {/* <div className="inline-block min-w-full align-middle ">
        <div id="AtInfiniteContainer"
        //  className="AtScrollHide relative overflow-auto rounded border border-borderColor lg:h-[calc(100vh-312px)]"
        > */}
      {/* <InfiniteScroll
            dataLength={usersList.length}
            next={loadMore}
            hasMore={next}
            loader={<h4>Loading...</h4>}
            className="AtInfiniteScroll"

          // endMessage={<p>No more data to load.</p>}
          > */}
      <div className="h-[calc(100vh-300px)]">
        <table className="min-w-full rounded">
          <thead className="sticky top-0 z-10 h-[2.5rem] border-b border-borderColor bg-grayColor ">
            <tr>
              <th scope="col" className={ListViewHeadings}>
                Users
              </th>
              <th scope="col" className={ListViewHeadings}>
                username
              </th>
              <th scope="col" className={ListViewHeadings}>
                Followers
              </th>
              <th scope="col" className={ListViewHeadings}>
                Follows
              </th>{" "}
              <th scope="col" className={ListViewHeadings}>
                score
              </th>
              <th scope="col" className={ListViewHeadings}>
                posts
              </th>
              <th scope="col" className={ListViewHeadings}>
                <i className="icon-comment text-base"></i>
              </th>
              <th scope="col" className={ListViewHeadings}>
                <i className="icon-reposts text-base"></i>
              </th>
              <th scope="col" className={ListViewHeadings}>
                <i className="icon-like text-base"></i>
              </th>
              <th scope="col" className={ListViewHeadings}>
                <div className="flex items-center gap-1">
                  <ClipInfo />
                  <span>sent</span>
                </div>
              </th>
              <th scope="col" className={ListViewHeadings}>
                <div className="flex items-center gap-1">
                  <ClipInfo />
                  <span>got</span>
                </div>
              </th>
              <th scope="col" className={ListViewHeadings}>
                MINTED
              </th>
              <th scope="col" className={ListViewHeadings}>
                Listed
              </th>
              <th scope="col" className={ListViewHeadings}>
                BOUGHT
              </th>
              <th scope="col" className={ListViewHeadings}>
                SOLD
              </th>
              <th scope="col" className={ListViewHeadings}>
                signup
              </th>
              <th scope="col" className={ListViewHeadings}>
                Created Date
              </th>
              <th scope="col" className={ListViewHeadings}>
                Status
              </th>
              <th scope="col" className={ListViewHeadings}>
                action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#727279] relative">
            {!fetching && usersList && usersList.length === 0 ? (
              <tr>
                <td colSpan={19}>
                  <div className="flex justify-center inset-0 absolute items-center h-[50vh]">
                    No User found{" "}
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {usersList?.map((item, i: number) => (
                  <tr
                    key={"proa" + i}
                    className="cursor-pointer group bg-transparent text-white hover:bg-darkColor"
                  >
                    <td className={ListViewItems}>
                      <div className="flex justify-center">
                        <ImageComponent
                          src={item?.avatar ?? dummyProfile}
                          figClassName="flex-shrink-0 rounded object-cover overflow-hidden h-7 w-7"
                          className="rounded"
                          fill={true}
                        />
                      </div>
                    </td>
                    <td className={ListViewItems}>{item?.userName}</td>
                    <td className={ListViewItems}>
                      {item?.followersCount || 0}
                    </td>
                    <td className={ListViewItems}>
                      {item?.followingCount || 0}
                    </td>
                    <td className={ListViewItems}>
                      {item?.points < 0
                        ? 0
                        : Number(item?.points).toFixed(0) || 0}
                    </td>
                    <td className={ListViewItems}>{item?.postCount || 0}</td>
                    <td className={ListViewItems}>{item?.commentCount || 0}</td>
                    <td className={ListViewItems}>{item?.repostCount || 0}</td>
                    <td className={ListViewItems}>{item?.likeCount || 0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>{0}</td>
                    <td className={ListViewItems}>
                      {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                    <td className={ListViewItems}>
                      <div className="flex items-center justify-center gap-1">
                        {item?.isVerified ? <Verified /> : ""}
                        {item?.isSCC ? <ContentCreator /> : ""}
                        {!item?.isVerified && !item?.isSCC && "--"}
                      </div>
                    </td>
                    <td className={ListViewItems}>
                      <Options user={item} filtering={filteringData} />
                      {/* <MoreOptions Data={Data} item={item} userId={item._id} /> */}
                    </td>
                  </tr>
                ))}
                <div ref={loadMoreRef}></div>
              </>
            )}
            {fetching && (
              <div className="flex justify-center items-center inset-0 absolute">
                <Loader />
              </div>
            )}
          </tbody>
        </table>
      </div>
      {/* </InfiniteScroll> */}

      {/* </div>
      </div> */}
    </div>
  );
};

const Options = ({ user, filtering }: { user: IUser; filtering: Function }) => {
  const [blockUserByAdmin, { loading: blocking, error: errBlock }] =
    useMutation(BLOCK_USER_BY_ADMIN);

  const [banUserByAdmin, { loading: banning, error: banBlock }] =
    useMutation(BAN_USER_BY_ADMIN);

  const [removeBadge, { loading: removingBadge }] = useMutation(
    EDIT_PROFILE_BY_ADMIN
  );

  const block = () => {
    blockUserByAdmin({
      variables: {
        id: user._id,
        status: !user.isBlocked,
      },
      refetchQueries: [GET_USERS_STATS],
      onCompleted: (data) => {
        if (data?.blockUserByAdmin?.success) {
          filtering(user._id, "isBlocked", !user.isBlocked);
          toast.success(`User ${user.isBlocked ? "Unblocked" : "Blocked"}`);
        }
      },
    });
    if (errBlock) {
      toast.error("Unable to block User");
    }
  };

  const ban = () => {
    banUserByAdmin({
      variables: {
        id: user._id,
        status: !user.isBanned,
      },
      refetchQueries: [GET_USERS_STATS],
      onCompleted: (data) => {
        if (data?.banUserByAdmin?.success) {
          filtering(user._id, "isBanned", !user.isBanned);
          toast.success(`User ${user.isBanned ? "Unbannedd" : "Banned"}`);
        }
      },
    });
    if (errBlock) {
      toast.error("Unable to ban User");
    }
  };

  const removeKYC = () => {
    removeBadge({
      variables: {
        id: user._id,
        data: { isVerified: false, verifyStatus: "" },
      },
      refetchQueries: [GET_USERS_STATS],
      onCompleted: (data) => {
        if (data?.editProfileByAdmin?.success) {
          filtering(user._id, "isVerified", !user.isVerified);
          toast.success(`Removed Kyc Badge`);
        }
      },
    });
  };

  const removeSCC = () => {
    removeBadge({
      variables: {
        id: user._id,
        data: { isSCC: false, scc_status: "" },
      },
      refetchQueries: [GET_USERS_STATS],
      onCompleted: (data) => {
        if (data?.editProfileByAdmin?.success) {
          filtering(user._id, "isSCC", !user.isSCC);
          toast.success(`Removed Kyc Badge`);
        }
      },
    });
  };

  if (blocking || banning || removingBadge)
    return <Loader height={23} width={23} />;
  return (
    <Menu
      as="div"
      className="relative inline-block w-full text-left md:w-auto "
    >
      <Menu.Button className="group">
        <div className={` flex h-6 w-6 items-center justify-center`}>
          <i
            className={`icon-more flex h-6 w-6 items-center justify-center py-2 text-sm text-borderColor hover:rounded-[2px] hover:bg-primary/20 hover:px-2 hover:text-black group-hover:text-primary`}
          ></i>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            "AtShadowEffect absolute right-0 z-20 mt-1 w-[224px] origin-top-right cursor-pointer overflow-hidden rounded-md  bg-bgColor"
          )}
        >
          <Menu.Item key={1 + "c"}>
            {({ close }) => (
              <div
                key={1}
                className="flex items-center gap-3 border-b  px-4 py-3 last:!border-transparent border-borderColor hover:bg-darkColor"
                onClick={() => {
                  block();
                }}
              >
                <a className={clsx("block text-sm text-white")}>
                  {
                    // blocking ? 'Loading...' :
                    user.isBlocked ? "Unblock user" : "Block user"
                  }
                </a>
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={2 + "c"}>
            {({ active }) => (
              <div
                key={2}
                className="flex items-center gap-3 border-b  px-4 py-3 last:!border-transparent border-borderColor hover:bg-darkColor"
                onClick={() => {
                  ban();
                  // handleModal(i);
                  // handleMenuChange(item.id)
                }}
              >
                <a
                  className={clsx(active ? "" : "", "block text-sm text-white")}
                >
                  {user.isBanned ? "Unban" : "Ban"} user
                </a>
              </div>
            )}
          </Menu.Item>
          {user.isVerified && (
            <Menu.Item key={3 + "c"}>
              {({ active }) => (
                <div
                  key={3}
                  className="flex items-center gap-3 border-b  px-4 py-3 last:!border-transparent border-borderColor hover:bg-darkColor"
                  onClick={() => {
                    removeKYC();
                  }}
                >
                  <a
                    className={clsx(
                      active ? "" : "",
                      "block text-sm text-white"
                    )}
                  >
                    Remove KYC badge
                  </a>
                </div>
              )}
            </Menu.Item>
          )}
          {user.isSCC && (
            <Menu.Item key={4 + "c"}>
              {({ active }) => (
                <div
                  key={4}
                  className="flex items-center gap-3 border-b  px-4 py-3 last:!border-transparent border-borderColor hover:bg-darkColor"
                  onClick={() => {
                    removeSCC();
                  }}
                >
                  <a
                    className={clsx(
                      active ? "" : "",
                      "block text-sm text-white"
                    )}
                  >
                    Remove SCC badge
                  </a>
                </div>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserTable;
