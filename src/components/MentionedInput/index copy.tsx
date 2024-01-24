import { MentionsInput, Mention, OnChangeHandlerFunc } from 'react-mentions';
import React, { useEffect, useState, useCallback, useRef /* useMemo */ } from 'react';
import { SEARCH_USERS } from 'src/graphql/user';
import { LINK_PREVIEW_QUERY, SEARCH_HASHTAGS } from 'src/graphql/feeds';
import { initializeApollo } from 'src/services/graphql';
import { useLazyQuery } from '@apollo/client';
import LinkPreview from '@modals/LinkPreview';
import { UseFormSetValue } from 'react-hook-form';
import { ICreatePost } from '@modals/CreatePost';
import ImageComponent from '@components/ImageComponent';
import classNames from './mentioned.module.css';
import RepliesMention from './RepliesMention.module.css';
import VerifiedIcon from '@components/_Icons/VerifiedIcon';
import { FacebookEmbed, InstagramEmbed, TwitterEmbed, LinkedInEmbed, YouTubeEmbed, TikTokEmbed } from 'react-social-media-embed';
import { facebookPostRx, instagramPostRx, linkedinPostRx, tiktokPostRx, twitterPostRx, youtubeVideoRx } from '@utils/commonRegex';
import { userSelector } from 'src/store/selectors';
import { useSelector } from 'react-redux';
import { divide } from 'lodash';
import { Comment } from 'src/interfaces';
import Mentions from './Mentions';
import HashTags from './HashTags';
interface Iprops {
    group?: any;
    styles?: string;
    placeHolder?: string;
    singleLine?: boolean;
    autoFocus?: boolean;
    textsize?: string;
    content: string;
    isFileUploaded?: boolean;
    replies?: boolean;
    onChange: OnChangeHandlerFunc | undefined;
    handleKeyDown: Function;
    handleKeyUp: Function;
    setValue?: UseFormSetValue<ICreatePost>;
    hovertop: boolean;
    selectedComment?: Comment;
}
interface ILinkPreview {
    url?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
}
type SuggestionDataItem = {
    displayName: string;
    id: string;
};

const defaultStyle = (hovertop: Boolean) => ({
    control: {
        width: '100%',
        border: '0px'
    },

    suggestions: {
        marginTop: '30px',
        marginLeft: '10px',
        borderRadius: '10px',
        zIndex: '100',

        // list: {
        //     width: '19rem',
        //     backgroundColor: '#19191D',
        //     border: '1px solid #5C5C63',
        //     borderRadius: '10px',
        //     overflow: 'hidden',
        //     position: 'relative',
        //     marginTop: hovertop ? '-320px' : '0px'
        // },

        '&singleLine': {
            display: 'inline-block',
            width: 180,

            highlighter: {
                padding: 1,
                border: '2px inset transparent'
            },
            input: {
                focus: 'outline-none',
                padding: 1,
                border: '2px inset'
            }
        },
        '&multiLine': {
            control: {
                fontFamily: 'monospace',
                minHeight: 63
            },
            highlighter: {
                padding: 9,
                border: '1px solid transparent'
            },
            input: {
                focus: 'outline-none',
                padding: 9,
                border: '1px solid silver'
            }
        },

        item: {
            padding: '7px 12px',
            borderBottom: '1px solid #2b2b3a',

            '&focused': {
                backgroundColor: '#202327'
            }
        }
    }
});

const MentionedInput = ({
    group,
    styles,
    placeHolder,
    singleLine,
    autoFocus,
    content,
    isFileUploaded,
    onChange,
    setValue,
    replies,
    handleKeyDown,
    handleKeyUp,
    hovertop,
    selectedComment
}: Iprops) => {
    const [linkPreview, setLinkPreview] = useState<ILinkPreview>();
    const [embededComponent, setEmbededComponent] = useState<Element | unknown | null>(null);
    const [backupLinkPreview, setBackupLinkPreview] = useState<ILinkPreview>();
    const owner = useSelector(userSelector);
    const inputRef = useRef();
    const webRegex =
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/;

    // const [emoji, setEmoji] = useState(null);

    const fetchMentionSuggestions = useCallback(async (type: string, query: string) => {
        const searchQuery = type === 'user' ? SEARCH_USERS : SEARCH_HASHTAGS;
        const searchType = type === 'user' ? 'searchUsers' : 'searchHashtags';

        try {
            const client = initializeApollo();
            const { data } = await client.query({
                query: searchQuery,
                variables: {
                    query,
                    ...(type === 'user' && { loggedUserId: owner?._id }),
                    ...(type === 'user' && group?._id && { groupId: group?._id })
                },
                fetchPolicy: 'no-cache'
            });

            const mentions = data[searchType].map((item: { [x: string]: string; _id: string }) =>
                type == 'user'
                    ? {
                          avatar: item?.avatar,
                          userName: item?.userName,
                          isVerified: item?.isVerified,
                          name: item?.firstName + ' ' + item?.lastName,
                          id: item._id,
                          //   display: item[`firstName`] + ' ' + item['lastName']
                          display: item?.userName
                      }
                    : {
                          followersCount: item?.followersCount,
                          id: item._id,
                          display: item['name']
                      }
            );

            return mentions;
        } catch (error) {
            console.error('Error fetching mention suggestions:', error);
            return [];
        }
    }, []);

    const fetchUsers = useCallback(
        async (query: string, callback: (data: SuggestionDataItem[]) => void) => {
            const userMentions = await fetchMentionSuggestions('user', query.toLowerCase());
            callback(userMentions);
        },
        [fetchMentionSuggestions]
    );

    const fetchHashtags = useCallback(
        async (query: string, callback: (data: SuggestionDataItem[]) => void) => {
            const hashtags = await fetchMentionSuggestions('hashtags', query.toLowerCase());
            callback(hashtags);
        },
        [fetchMentionSuggestions]
    );

    // const [firstGroup, secondGroup] = useMemo(() => splitParagraph(content), [content]);
    // console.log(secondGroup, 'secondGroup');

    // const parsePastedContent = async (text: string) => {
    //     const words = text.split(/\s+/);
    //     const parsedWords = await Promise.all(
    //         words.map(async (word) => {
    //             if (word.startsWith('@')) {
    //                 const userMentions = await fetchMentionSuggestions('user', word.slice(1));
    //                 if (userMentions.length > 0) {
    //                     const user = userMentions[0];
    //                     return `@[${user.display}](${user.id})`;
    //                 }
    //             } else if (word.startsWith('#')) {
    //                 const hashtagMentions = await fetchMentionSuggestions('hashtags', word.slice(1));
    //                 if (hashtagMentions.length > 0) {
    //                     const hashtag = hashtagMentions[0];
    //                     return `#[${hashtag.display}](${hashtag.id})`;
    //                 }
    //             }
    //             return word;
    //         })
    //     );
    //     return parsedWords.join(' ');
    // };

    // const parsePastedContent = async (text: string) => {
    //     const words = text.split(/\s+/);
    //     const parsedWords = await Promise.all(
    //         words.map(async (word) => {
    //             if (word.startsWith('@')) {
    //                 const userMentions = await fetchMentionSuggestions('user', word.slice(1));
    //                 if (userMentions.length > 0) {
    //                     const user = userMentions[0];
    //                     return `@[${user.display}](${user.id})`;
    //                 }
    //             } else if (word.startsWith('#')) {
    //                 const hashtagMentions = await fetchMentionSuggestions('hashtags', word.slice(1));
    //                 if (hashtagMentions.length > 0) {
    //                     const hashtag = hashtagMentions[0];
    //                     return `#[${hashtag.display}](${hashtag.id})`;
    //                 }
    //             }
    //             return word;
    //         })
    //     );
    //     return parsedWords.join(' ');
    // };

    // const handlePaste = (event) => {
    //     event.preventDefault();
    //     const pastedText = event.clipboardData.getData('text');
    //     const parsedText = parsePastedContent(pastedText);
    //     const newContent = `${content} ${parsedText}`;
    //     onChange({ target: { value: newContent } });
    // };
    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, [selectedComment]);

    useEffect(() => {
        if (!isFileUploaded && Object.keys(!linkPreview).length === 0) {
            setLinkPreview(backupLinkPreview);
        }
    }, [isFileUploaded]);

    // --------- METADATA LINK EXTRACTER --------------------------------

    function extractUrls(content: string) {
        const regex = /(?:^|\s)((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(?:\/\S*)?)/g;
        // let _url = regex.exec(content);

        // return _url ? _url[1] : [];
        return content.match(regex) || [];
    }

    const [linkPrevQ, { loading: linkPrevLoading, data }] = useLazyQuery(LINK_PREVIEW_QUERY);

    useEffect(() => {
        if (data?.linkPreview && (data?.linkPreview?.description || data?.linkPreview?.imageUrl || data?.linkPreview?.title)) {
            setLinkPreview(data.linkPreview);
        }
    }, [linkPrevLoading]);

    useEffect(() => {
        setValue && setValue('linkPreview', JSON.stringify(linkPreview));
    }, [linkPreview]);

    function fetchLinkPreview(url: string) {
        if (!url) return setEmbededComponent(null);
        // ---------- EMBED SOCAIL LINKS --------

        switch (true) {
            case youtubeVideoRx.test(url):
                return setEmbededComponent(<YouTubeEmbed url={url} width={480} />);

            case facebookPostRx.test(url):
                return setEmbededComponent(<FacebookEmbed url={url} width={480} />);

            case instagramPostRx.test(url):
                return setEmbededComponent(<InstagramEmbed url={url} width={480} />);

            case twitterPostRx.test(url):
                return setEmbededComponent(<TwitterEmbed url={url} width={480} />);

            case linkedinPostRx.test(url):
                return setEmbededComponent(<LinkedInEmbed url={url} width={480} />);

            case tiktokPostRx.test(url):
                return setEmbededComponent(<TikTokEmbed url={url} width={480} />);

            default:
                linkPrevQ({ variables: { link: url } });
                return setEmbededComponent(null);
        }
    }

    useEffect(() => {
        if (extractUrls(content).length > 0) {
            fetchLinkPreview(content);
        }
        if (content == '') {
            setLinkPreview({});
            setEmbededComponent(null);
        }
    }, [content]);

    return (
        // <div>
        <div className={`${styles} h-full`}>
            <div className={`AtMention h-full`}>
                <MentionsInput
                    autoFocus={autoFocus}
                    autoComplete="off"
                    id="mention-input"
                    maxLength={300}
                    value={content}
                    // onPaste={handlePaste}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    onChange={onChange}
                    style={defaultStyle(hovertop)}
                    singleLine={singleLine}
                    classNames={replies ? RepliesMention : classNames}
                    placeholder={placeHolder}
                    inputRef={inputRef}
                >
                    <Mention
                        trigger="@"
                        data={fetchUsers}
                        displayTransform={(id: string, display: string) => `@${display}`}
                        markup="@[__display__](__id__)"
                        className={classNames.mentions__mention}
                        renderSuggestion={(entry: any) => {
                            return <Mentions entry={entry} />;
                        }}
                    />
                    <Mention
                        trigger="#"
                        data={fetchHashtags}
                        displayTransform={(id, display) => `#${display}`}
                        markup="#[__display__](__id__)"
                        className={classNames.mentions__mention}
                        renderSuggestion={(entry: any) => {
                            return <HashTags entry={entry} />;
                        }}
                    />
                    <Mention
                        trigger=":"
                        markup="__id__"
                        data={(search) => console.log(search, 'sdsd')}
                        regex={webRegex}
                        className={classNames.mentions__mention}
                    />
                    {/* there ccommited code i pasted at bottom */}
                </MentionsInput>

                {/* <div className="absolute top-2 left-3 !-z-20" contentEditable={false}>
                    <span className="text-lg text-inherit">{firstGroup}</span>
                    <span className=" bg-red1 text-inherit">{secondGroup}</span>
                </div> */}
            </div>
            {/* {loading && 'Loading...'} */}
            {linkPreview?.url && !isFileUploaded && (
                <LinkPreview preview={linkPreview} setLinkPreview={setLinkPreview} setBackupLinkPreview={setBackupLinkPreview} />
            )}

            {!linkPreview?.url && !isFileUploaded && embededComponent && embededComponent}
        </div>
    );
};

export default MentionedInput;
{
    /* <Mention
                        trigger="@"
                        data={(search) => [{ id: search, display: search }]}
                        markup="@__id__"
                        displayTransform={(id) => `@${id}`}
                        regex={/@(\S+)/}
                        className={classNames.mentions__mention}
                    />
                    <Mention
                        trigger="#"
                        data={(search) => [{ id: search, display: search }]}
                        markup="#__id__"
                        displayTransform={(id) => `#${id}`}
                        regex={/#(\S+)/}
                        className={classNames.mentions__mention}
                    /> */
}
