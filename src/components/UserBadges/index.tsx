import SelectorIcon from '../_Icons/Selector';
import VerifiedIcon from '../_Icons/VerifiedIcon';

export interface UserBadgesProps {
    isVerified?: Boolean;
    isSCC?: Boolean;
    hover?: boolean;
    classNames?: {
        isVerified?: String;
        isSCC?: String;
    };
    user?: {
        isVerified?: Boolean;
        isSCC?: Boolean;
    };

    forceStop?: {
        isVerified?: Boolean;
        isSCC?: Boolean;
    };
}

export const UserBadges = ({ isVerified, isSCC, hover, user, forceStop, classNames }: UserBadgesProps) => {
    return (
        <div className="flex cursor-pointer items-center gap-1">
            {!forceStop?.isVerified && (isVerified || user?.isVerified) && (
                <>
                    {hover && hover ? (
                        <VerifiedIcon classNames={classNames?.isVerified as string} />
                    ) : (
                        <VerifiedIcon classNames={classNames?.isVerified as string} />
                    )}
                </>
            )}
            {!forceStop?.isSCC && (isSCC || user?.isSCC) && (
                <>
                    {hover && hover ? (
                        <SelectorIcon classNames={`cursor-pointer ${classNames?.isSCC as string}`} />
                    ) : (
                        <SelectorIcon classNames={`cursor-pointer ${classNames?.isSCC as string}`} />
                    )}
                </>
            )}
        </div>
    );
};

export default UserBadges;
