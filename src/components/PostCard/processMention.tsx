import { IHashtag } from "@/interfaces/feeds.interface";
import Link from "next/link";

export const processMentions = (content: string, hashtags?: Array<IHashtag>, postId?: string) => {
    const webRegex =
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/;
    const mentionRegex =
        /([@#])\[(.+?)\]\((.+?)\)|#(\w+)|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/g;
    const lines = content?.split('\n');
    const parts: React.ReactNode[] = [];

    lines?.forEach((line, lineIndex) => {
        let lastIndex = 0;

        line.replace(mentionRegex, (match, symbol, displayName, id, simpleHashtag, index) => {
            // Push text before the match
            parts.push(line.slice(lastIndex, index));
            lastIndex = index + match.length;
            if (webRegex.test(match)) {
                let url = match;
                if (!/^https?:\/\//i.test(url)) {
                    url = `https://${url}`;
                }
                parts.push(
                    <a href={url} key={id} target="_blank">
                        <span className="text-primary hover:underline"> {`${match}`}</span>
                    </a>
                );
            } else if (symbol === '@' || symbol === '#') {
                const href = symbol === '@' ? `/${displayName}` : `/hashtags/${displayName}`;
                const txtHashtag = hashtags?.find((item) => item?._id === id);
                parts.push(
                    symbol === '@' ? (
                        <Link href={href} key={id}>
                            <span className="text-primary hover:underline"> {`${symbol}${displayName}`}</span>
                        </Link>
                    ) : (
                        // <HashNftHover hashtag={txtHashtag} postId={postId}>
                        //     <span className="text-primary hover:underline">
                        //         <Link href={`/hashtags/${txtHashtag?.name}`} className="w-full !py-2">{`${symbol}${displayName}`}</Link>
                        //     </span>
                        // </HashNftHover>
                        <span className="text-primary hover:underline">
                        <Link href={`/hashtags/${txtHashtag?.name}`} className="w-full !py-2">{`${symbol}${displayName}`}</Link>
                    </span>
                    )
                );
            } else if (simpleHashtag) {
                const txtHashtag = hashtags?.find((item) => item?.name === simpleHashtag);
                parts.push(
                    // <HashNftHover hashtag={txtHashtag} postId={postId}>
                    //     <span className="relative text-primary"> {`#${simpleHashtag}`}</span>
                    // </HashNftHover>
                    <span className="relative text-primary"> {`#${simpleHashtag}`}</span>

                );
            }

            // Returns nothing as the string is not getting replaced
            return '';
        });

        if (lastIndex < line.length) {
            parts.push(line.slice(lastIndex));
        }

        // Add line break if it's not the last line
        if (lineIndex < lines.length - 1) {
            parts.push(<br key={`br-${lineIndex}`} />);
        }
    });

    return parts;
};