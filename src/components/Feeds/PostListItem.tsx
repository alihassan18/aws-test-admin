// import Link from 'next/link';
// import { Address } from 'wagmi';
// import { format } from 'timeago.js';
// import PollDetails from './PollDetails';
// import Loader from '../Loader';
// // import NftCard from '@components/NftCard'; 
// import { useSelector } from 'react-redux';
// // import Comments from '@components/Comments';
// import MediaPostView from './MediaPostView';
// import { Sockets } from 'src/hoc/withSocket';
// import LinkPreview from '@modals/LinkPreview';
// import TimeHover from '@components/TimeHover';
// import ShowRepostTitle from './ShowRepostTitle';
// import { userSelector } from 'src/store/selectors';
// import SettingsModal from '@modals/SettingsModals';
// import HashNftHover from '@components/HashNftHover';
// import SocketContext from 'src/contexts/SocketContext';
// import ImageComponent from '@components/ImageComponent';
// // import MediaComponent from '@components/MediaComponent';
// import VerifiedIcon from '@components/_Icons/VerifiedIcon';
// // import CollectionHover from '@components/CollectionHover';
// import { Feed, IHashtag, Post, PostAsFeed, Token } from 'src/interfaces';
// import RepostDropdown from './CommentsThreads/RepostDropdown';
// import NameWithDetailHover from '@components/NameWithDetailHover';
// import RepostForComments from './CommentsThreads/RepostForComments';
// // import OriginalPost from 'src/modules/feeds/components/OriginalPost';
// // import CommentsDetail from 'src/modules/commentsDetail/CommentsDetail';
// import { useDynamicTokens } from '@reservoir0x/reservoir-kit-ui';
// import React, { memo, useContext, useEffect, useRef, useState } from 'react';
// import { FacebookEmbed, InstagramEmbed, TwitterEmbed, LinkedInEmbed, YouTubeEmbed, TikTokEmbed } from 'react-social-media-embed';
// import { facebookPostRx, instagramPostRx, linkedinPostRx, tiktokPostRx, twitterPostRx, youtubeVideoRx } from '@utils/commonRegex';
// import { extractUrls } from '@utils/regex';
// import LikePost from '@components/Likes/LikePost';
// import KingdomIcon from '@components/_Icons/Kingdom';
// import SelectorIcon from '@components/_Icons/Selector';
// import SupporterBadge from '@components/_Icons/SupporterBadge';
// import KycHover from '@components/KycHover';
// import KingHover from '@components/KingHover';
// import SupporterHover from '@components/SupporterHover';

// import StakingCardDetail from 'src/modules/StakingModule/components/StakingCardDetail';
// import chains from '@utils/chains';
// import CreatorHover from '@components/CreatorHover';
// import { isEmpty, isNull } from 'lodash';
// import CollectionCard from '@components/CollectionCard';

// type Props = {
//     feed: Feed | PostAsFeed;
//     feeds: Array<Feed> | PostAsFeed[];
//     likedPost?: object;
//     setLikedPost?: Function;
//     fetchMoreFeeds: Function;
//     setIsShowDetailView: Function;
//     setSelectedFeed: Function;
//     screenSize?: number;
//     setMobileView?: Function;
// };

// type PostItemProps = {
//     post: Post;
//     options?: boolean;
//     feeds: Feed[];
//     feed: Feed;
// };

// export const processMentions = (content: string, hashtags?: Array<IHashtag>, postId?: string) => {
//     const webRegex =
//         /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/;
//     const mentionRegex =
//         /([@#])\[(.+?)\]\((.+?)\)|#(\w+)|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/g;
//     const lines = content?.split('\n');
//     const parts: React.ReactNode[] = [];

//     lines?.forEach((line, lineIndex) => {
//         let lastIndex = 0;

//         line.replace(mentionRegex, (match, symbol, displayName, id, simpleHashtag, index) => {
//             // Push text before the match
//             parts.push(line.slice(lastIndex, index));
//             lastIndex = index + match.length;
//             if (webRegex.test(match)) {
//                 let url = match;
//                 if (!/^https?:\/\//i.test(url)) {
//                     url = `https://${url}`;
//                 }
//                 parts.push(
//                     <a href={url} key={id} target="_blank">
//                         <span className="text-primary hover:underline"> {`${match}`}</span>
//                     </a>
//                 );
//             } else if (symbol === '@' || symbol === '#') {
//                 const href = symbol === '@' ? `/${displayName}` : `/hashtags/${displayName}`;
//                 const txtHashtag = hashtags?.find((item) => item?._id === id);
//                 parts.push(
//                     symbol === '@' ? (
//                         <Link href={href} key={id}>
//                             <span className="text-primary hover:underline"> {`${symbol}${displayName}`}</span>
//                         </Link>
//                     ) : (
//                         <HashNftHover hashtag={txtHashtag} postId={postId}>
//                             <span className="text-primary hover:underline">
//                                 <Link href={`/hashtags/${txtHashtag?.name}`} className="w-full !py-2">{`${symbol}${displayName}`}</Link>
//                             </span>
//                         </HashNftHover>
//                     )
//                 );
//             } else if (simpleHashtag) {
//                 const txtHashtag = hashtags?.find((item) => item?.name === simpleHashtag);
//                 parts.push(
//                     <HashNftHover hashtag={txtHashtag} postId={postId}>
//                         <span className="relative text-primary"> {`#${simpleHashtag}`}</span>
//                     </HashNftHover>
//                 );
//             }

//             // Returns nothing as the string is not getting replaced
//             return '';
//         });

//         if (lastIndex < line.length) {
//             parts.push(line.slice(lastIndex));
//         }

//         // Add line break if it's not the last line
//         if (lineIndex < lines.length - 1) {
//             parts.push(<br key={`br-${lineIndex}`} />);
//         }
//     });

//     return parts;
// };

// const PostListItem = (props: Props) => {
//     const { setMobileView, feed, feeds, setIsShowDetailView, setSelectedFeed, screenSize } = props;
//     const user = useSelector(userSelector);
//     const [popup, setPopup] = useState(false);

//     // stop propogation on Click function
//     const stopPropagationPostList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();
//     const [state, setState] = useState(0);
//     const mainPost: Post = feed.post?.originalPost ? feed.post.originalPost : feed.post?.inReplyToPost ? feed.post?.inReplyToPost : feed.post;

//     return (
//         <>
//             <div
//                 className={`${
//                     !Comment
//                         ? 'rounded-0 rounded-none border-0 border-t-2 border-t-primary'
//                         : 'mt-[5px] border-b border-lightBorder bg-white dark:border-borderColor dark:bg-transparent md:rounded-md md:border'
//                 } cursor-pointer p-3 px-4 hover:bg-lightHover dark:hover:bg-dark md:px-3`}
//                 key={feed?.post?._id}
//             >
//                 <PostItem post={feed?.post} feeds={feeds} feed={feed} />{' '}
//                 <div
//                     className={`${
//                         !isNull(feed?.post?.inReplyToPost) ? 'w-[96%] pl-0 md:pl-10' : 'w-[96%] pl-10'
//                     } relative flex cursor-pointer items-center justify-between pt-3`}
//                 >
//                     <div className="absolute left-0 top-0 hidden h-1 w-full pl-10 md:block">
//                         <div className="h-1 w-full border-t border-lightBorder dark:border-borderColor"></div>
//                     </div>
//                     <span
//                         onClick={(e) => {
//                             if (!user) {
//                                 // setState(10);
//                                 // setPopup(true);
//                             } else {
//                                 setSelectedFeed(feed);
//                                 e.stopPropagation();
//                                 if (screenSize && screenSize >= 668) {
//                                     setIsShowDetailView(true);
//                                 } else {
//                                     setMobileView(true);
//                                     // alert(screenSize);
//                                 }
//                             }
//                         }}
//                         className=" w-14"
//                     >
//                         <Comments
//                             post={mainPost}
//                             valueClass={
//                                 user && mainPost?.commentsBy && mainPost?.commentsBy.find((x) => x._id === user._id)
//                                     ? 'text-xs dark:text-primary'
//                                     : 'dark:text-secondary text-xs'
//                             }
//                             iconClass={
//                                 user && mainPost?.commentsBy && mainPost?.commentsBy.find((x) => x._id === user._id)
//                                     ? 'text-sm  dark:text-primary'
//                                     : 'dark:text-secondary text-sm'
//                             }
//                         />
//                     </span>
//                     <div className="w-14 leading-0 " onClick={stopPropagationPostList}>
//                         <RepostDropdown
//                             post={mainPost}
//                             iconClass={
//                                 user && mainPost.repostedBy && mainPost.repostedBy?.find((x) => x?._id === user?._id)
//                                     ? 'text-[#02885b] text-sm '
//                                     : ' dark:text-secondary text-sm'
//                             }
//                             valueClass={
//                                 user && mainPost.repostedBy && mainPost.repostedBy?.find((x) => x?._id === user?._id)
//                                     ? 'text-[#02885b] text-xs'
//                                     : 'text-xs  dark:text-secondary'
//                             }
//                         />
//                     </div>
//                     {/* <AnimateLike /> */}
//                     <span onClick={stopPropagationPostList} className="w-14">
//                         {/* <Likes post={feed.post} likedPost={likedPost} setLikedPost={setLikedPost} /> */}
//                         <LikePost post={mainPost} iconClass=" text-secondary text-sm" valueClass="text-xs" />
//                     </span>
//                     <div className=" relative  w-14" onClick={stopPropagationPostList}>
//                         View : 
//                         {/* <Views post={mainPost} iconClass="text-sm dark:text-secondary" valueClass="text-xs  dark:text-secondary" viewAlign={true} /> */}
//                     </div>
//                 </div>
//                 {/* {state > 0 && <FeedModals state={state} setState={setState} popup={popup} setPopup={setPopup} data={{ post: feed.post }} />} */}
//             </div>
//             <SettingsModal state={state} setState={setState} popup={popup} setPopup={setPopup} />
//         </>
//     );
// };

// export default memo(PostListItem);

// /* This component is represent the post content */
// export const PostItem = ({ post, options, feed }: PostItemProps) => {
//     const postRef = useRef();
//     const socketRef = useRef<Sockets['namespace2']>();

//     const user = useSelector(userSelector);
//     const [embededComponent, setEmbededComponent] = useState<Element | unknown | null>(null);
//     const sockets: Sockets = useContext(SocketContext);
//     // stop propogation on Click function
//     const stopPropagationPostItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

//     function fetchLinkPreview(url: string) {
//         if (!url) return setEmbededComponent(null);
//         // ---------- EMBED SOCAIL LINKS --------

//         switch (true) {
//             case youtubeVideoRx.test(url):
//                 return setEmbededComponent(<YouTubeEmbed url={url} width={480} />);

//             case facebookPostRx.test(url):
//                 return setEmbededComponent(<FacebookEmbed url={url} width={480} />);

//             case instagramPostRx.test(url):
//                 return setEmbededComponent(<InstagramEmbed url={url} width={480} />);

//             case twitterPostRx.test(url):
//                 return setEmbededComponent(<TwitterEmbed url={url} width={480} />);

//             case linkedinPostRx.test(url):
//                 return setEmbededComponent(<LinkedInEmbed url={url} width={480} />);

//             case tiktokPostRx.test(url):
//                 return setEmbededComponent(<TikTokEmbed url={url} width={480} />);

//             default:
//                 return setEmbededComponent(null);
//         }
//     }

//     useEffect(() => {
//         if (post?.text && extractUrls(post.text)) {
//             fetchLinkPreview(post.text);
//         }
//     }, [post?.text]);

//     useEffect(() => {
//         if (sockets.namespace2) {
//             socketRef.current = sockets.namespace2;
//         }
//         // Setup Intersection Observer
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // If the post is in the viewport, join the post
//                         const postId = entry.target.getAttribute('data-id'); // Assumes that your posts have a 'data-id' attribute with the post ID
//                         socketRef.current && socketRef.current.emit('joinPost', postId);
//                         // entry.target.style.border = '2px solid blue';
//                     } else {
//                         // If the post is not in the viewport, leave the post
//                         const postId = entry.target.getAttribute('data-id');
//                         socketRef.current && socketRef.current.emit('leavePost', postId);
//                         // entry.target.style.border = 'none';
//                     }
//                 });
//             },
//             {
//                 root: null, // null means to use the viewport
//                 rootMargin: '0px',
//                 threshold: 0.1 // 10% of the post needs to be visible to be considered "in the viewport"
//             }
//         );

//         // Observe the post
//         postRef?.current && observer.observe(postRef?.current);

//         // Cleanup on unmount
//         return () => {
//             if (socketRef.current) {
//                 socketRef.current.off('joinPost');
//             }
//             if (observer?.unobserve) {
//                 postRef.current && observer?.unobserve?.(postRef.current);
//             }
//         };
//     }, [sockets]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

//     return (
//         <div className="relative">
//             {/* {post?._collection && (
//                 <div className=" ml-[10.6%] mb-2 flex items-center gap-2">
//                     <span className="">posted on</span>
//                     <Link
//                         onClick={(e) => e.stopPropagation()}
//                         href={`/collection/${feed?.post._collection?.chain}/${feed.post._collection?.contract_address}`}
//                     >
//                         {' '}
//                         {feed.post._collection?.name}
//                     </Link>
//                 </div>
//             )} */}
//             {isNull(post?.inReplyToPost) && feed.type === 'REPOST' && (
//                 <div className="  mb-2.5 flex items-center gap-1 pl-10">
//                     <ShowRepostTitle
//                         feed={feed}
//                         repostIconColor={feed?.owner?._id !== user?._id ? 'text-secondary !text-xs ' : 'text-[#02885b] !text-xs'}
//                     />
//                     {post?._collection && (
//                         <Link
//                             onClick={(e) => e.stopPropagation()}
//                             href={`/collection/${feed?.post._collection?.chain}/${feed.post._collection?.contract_address}`}
//                         >
//                             {' '}
//                             <span className="text-sm">{feed.post._collection?.name}</span>
//                         </Link>
//                     )}
//                 </div>
//             )}
//             <div className="flex items-start gap-2 md:pr-6" ref={postRef} data-id={post?._id}>
//                 {isNull(post?.inReplyToPost) && (
//                     <Link href={`/@${post?.author?.userName}`} onClick={stopPropagationPostItem}>
//                         <ImageComponent
//                             src={post?.author?.avatar ?? '/assets/images/avatars/userProfile.png'}
//                             className="object-cover"
//                             figClassName="overflow-hidden cursor-pointer  flex-shrink-0 hover:opacity-70 rounded-full h-8  w-8"
//                             fill
//                         />
//                     </Link>
//                 )}

//                 <div className={`w-full pb-3`}>

//                     <div className={`${!isNull(post?.inReplyToPost) && 'md:pl-10'} relative flex w-full items-center gap-1`}>
//                         <div className="flex items-center gap-1">
//                             <div className="leading-0" onClick={stopPropagationPostItem}>
//                                 <NameWithDetailHover user={post?.author}>
//                                     <Link href={`/@${post?.author?.userName}`}>
//                                         <h6
//                                             className={`${
//                                                 !isNull(post?.inReplyToPost) && 'text-xs text-secondary'
//                                             }  cursor-pointer text-sm font-bold `}
//                                         >
//                                             {post?.author?.userName}
//                                         </h6>
//                                     </Link>
//                                 </NameWithDetailHover>
//                             </div>
//                             <div className="flex items-center gap-1">
//                                 {post?.author?.isVerified && (
//                                     <KycHover>
//                                         <VerifiedIcon classNames="text-sm" />
//                                     </KycHover>
//                                 )}
//                                 <KingHover>
//                                     <KingdomIcon />
//                                 </KingHover>
//                                 <SupporterHover>
//                                     <SupporterBadge />
//                                 </SupporterHover>
//                                 <CreatorHover>
//                                     <SelectorIcon />
//                                 </CreatorHover>
//                             </div>
//                             <i
//                                 className={` 
//                                     // isNull(post.inReplyToPost) ? '!block' : '!hidden'
//                                   icon-point  text-[3px] text-[#727279] sm:inline-block`}
//                             ></i>
//                             {!isNull(post?.inReplyToPost) ? (
//                                 ''
//                             ) : (
//                                 <TimeHover time={post?.scheduledAt ? post?.scheduledAt : post?.createdAt}>
//                                     <span className="cursor-pointer text-xs text-secondary">
//                                         {format(post?.scheduledAt ? post?.scheduledAt : post?.createdAt)}
//                                     </span>
//                                 </TimeHover>
//                             )}
//                         </div>
//                         {!isNull(post?.inReplyToPost) && (
//                             <div className="flex items-center gap-1">
//                                 <ShowRepostTitle feed={feed} repostIconColor={'text-xs text-[#727279]'} />
//                                 {post?._collection && (
//                                     <Link
//                                         onClick={(e) => e.stopPropagation()}
//                                         href={`/collection/${feed?.post._collection?.chain}/${feed.post._collection?.contract_address}`}
//                                     >
//                                         {' '}
//                                         <span className="text-sm">{feed.post._collection?.name}</span>
//                                     </Link>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                     {!feed.post?.inReplyToPost && !post?.token && (
//                         <div className=" relative">
//                             {post?.originalPost && (
//                                 <div className="absolute -left-9 top-8 h-full w-[8%] border-[1.7px] border-r-0 border-t-0 border-dashed border-borderColor"></div>
//                             )}
//                             <div className=" mt-0.5 mb-1 cursor-pointer">
//                                 <p className="AtWordBreak inline-block text-sm dark:text-white" onClick={stopPropagationPostItem}>
//                                     {processMentions(post?.text, post?.hashtags, post?._id)}
//                                 </p>
//                             </div>

//                             <MediaPostView post={post} />
//                         </div>
//                     )}

//                     {!post?.poll && post?.linkPreview && (
//                         <a href={JSON.parse(post?.linkPreview)?.url} target="_blank">
//                             <LinkPreview preview={JSON.parse(post?.linkPreview)} />
//                         </a>
//                     )}
//                     {!post?.poll && !post?.linkPreview && !post?.media?.length && embededComponent && embededComponent}
//                     {post?.poll && <PollDetails post={post} />}
//                     {post?.token && <TokenCard token={post?.token} />}
//                     {post?.staking && (
//                         <div className="mt-0.5 mb-1 cursor-pointer rounded-md border border-borderColor px-4 py-5">
//                             <StakingCardDetail collection={post?.staking} postCard />
//                         </div>
//                     )}
//                     {post?._collection && isEmpty(post.media) && !post.text && (
//                         <div className="  relative mx-auto  w-full px-24">
//                             <CollectionCard collection={post._collection} isFromFeed />
//                         </div>
//                     )}
//                     {post?.inReplyToPost && (
//                         <div className={`${!isNull(post?.inReplyToPost) && 'md:pl-10'}`}>
//                             <div className="mt-3 rounded-md border bg-[#F8FBFF] px-2 py-3 dark:border-borderColor dark:bg-gray17">
//                                 {post?.inReplyToPost && post.originalPost && (
//                                     <RepostForComments
//                                         post={post.originalPost}
//                                         type="main_post"
//                                         isLargeAvatar={post?.inReplyToPost && post.originalPost}
//                                         mainPost={post}
//                                         feed={feed}
//                                     />
//                                 )}
//                                 <div className={post?.inReplyToPost && post.originalPost && 'mt-1 md:ml-12'}>
//                                     {post?.inReplyToPost && (
//                                         <RepostForComments
//                                             post={post?.inReplyToPost}
//                                             type="comment"
//                                             text={post?.inReplyToPost && !post.originalPost ? '' : 'Commented'}
//                                             isLargeAvatar={!post.originalPost}
//                                             mainPost={post}
//                                             feed={feed}
//                                         />
//                                     )}
//                                 </div>
//                                 <div className={`${post?.inReplyToPost && post.originalPost ? 'md:ml-24' : 'md:ml-12'} mt-1`}>
//                                     {post?.inReplyToPost && (
//                                         <RepostForComments
//                                             post={post}
//                                             type="reply"
//                                             text={post?.inReplyToPost && post.originalPost ? 'Replied' : 'Commented'}
//                                             isLargeAvatar={false}
//                                             mainPost={post}
//                                             feed={feed}
//                                         />
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {/* End of the old post */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const TokenCard = ({ token: tokenData }: { token: Token }) => {
//     const [playingElement, setPlayingElement] = useState<HTMLAudioElement | HTMLVideoElement | null>();
//     const chain = chains.find((chain) => chain.name?.toLowerCase() === tokenData?.chain);
//     const {
//         data: tokens,
//         mutate,
//         isLoading
//     } = useDynamicTokens(
//         {
//             tokens: [`${tokenData?.contract}:${tokenData?.tokenId}`],
//             includeAttributes: true,
//             includeTopBid: true,
//             includeQuantity: true
//         },
//         {},
//         chain?.id
//     );
//     const token = tokens && tokens[0] ? tokens[0] : undefined;
//     if (isLoading) {
//         return (
//             <div className="flex items-center justify-center">
//                 <Loader />
//             </div>
//         );
//     }
//     if (token) {
//         return (
//             <div className="  relative mx-auto mt-5 w-full  px-24 ">
//                 <NftCard
//                     disable={true}
//                     token={token}
//                     address={token?.token?.owner as Address}
//                     // tokenCount={token?.token?.kind === 'erc1155' ? token.ownership?.tokenCount : undefined}
//                     mutate={mutate}
//                     rarityEnabled={false}
//                     addToCartEnabled={false}
//                     onMediaPlayed={(e) => {
//                         if (playingElement && playingElement !== e.nativeEvent.target) {
//                             playingElement.pause();
//                         }
//                         const element = (e.nativeEvent.target as HTMLAudioElement) || (e.nativeEvent.target as HTMLVideoElement);
//                         if (element) {
//                             setPlayingElement(element);
//                         }
//                     }}
//                 />
//             </div>
//         );
//     }
// };
