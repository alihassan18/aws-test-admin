import { AvatarText } from '../AvatarText';
import ImageComponent from '../ImageComponent';

export interface UserAvatarProps {
    width?: Number;
    height?: Number;
    className?: String;
    avatar?: String;
    name?: String;
    user?: any;
    creator?: any;
    fontSize?: string;
    figclassname?: string;
    resizeWidth?: number;
}

const UserAvatar = ({ avatar, name, user, creator, width, height, fontSize, figclassname, className, resizeWidth }: UserAvatarProps) => {
    width = width || 32;
    height = height || 32;

    // if(avatar=="/assets/images/avatars/userProfile.png"){
    //     avatar=""
    // }

    return (
        <div>
            {avatar || user?.avatar || creator?.profile_picture ? (
                // <Image
                //     src={((avatar || user?.avatar || creator?.profile_picture) as string) || '/assets/images/avatars/userProfile.png'}
                //     width={width as number}
                //     height={height as number}
                //     className={className as string}
                //     quality={100}
                //     blurDataURL={loadingUrl.current}
                //     alt={(avatar || user?.avatar || creator?.profile_picture) as string}
                //     sizes={'auto'}
                //     style={{
                //         width: `${width}px`,
                //         height: `${height}px`,
                //         objectFit: 'cover',
                //         borderRadius: `${width}px`,
                //         minHeight: `${height}px`,
                //         maxHeight: `${height}px`,
                //         display: 'flex',
                //         minWidth: `${width}px`,
                //         maxWidth: `${width}px`
                //     }}
                // />
                figclassname ? (
                    <ImageComponent
                        forceContainer={true}
                        className={`${className} origin-center rounded-full object-cover `}
                        src={((avatar || user?.avatar || creator?.profile_picture) as string) || '/assets/images/avatars/userProfile.png'}
                        alt={(name || user?.userName || creator?.display_name) as string}
                        figclassname={figclassname}
                        resizeWidth={resizeWidth ? resizeWidth : 130}
                        layout="fill"
                    />
                ) : (
                    <ImageComponent
                        width={width as number}
                        height={height as number}
                        forceContainer={true}
                        resizeWidth={resizeWidth ? resizeWidth : 130}
                        className=" origin-center rounded-full object-cover"
                        src={((avatar || user?.avatar || creator?.profile_picture) as string) || '/assets/images/avatars/userProfile.png'}
                        alt={(name || user?.userName || creator?.display_name) as string}
                    />
                )
            ) : (
                <AvatarText
                    text={(name || user?.userName || creator?.display_name) as string}
                    height={Number(height)}
                    figclassname={figclassname}
                    width={Number(height)}
                    fontSize={fontSize}
                />
            )}
        </div>
    );
};

export default UserAvatar;
