import React from 'react';
import ImageComponent from '../ImageComponent';
import VerifiedIcon from '../_Icons/VerifiedIcon';

const Mentions = ({ entry }: any) => {
    return (
        <div className={`flex items-center gap-2`}>
            <div className="flex-shrink-0">
                {entry?.avatar ? (
                    <ImageComponent className="rounded-full" fill figClassName="h-9 w-9" src={entry?.avatar} alt="" />
                ) : (
                    <ImageComponent className="rounded-full" fill figClassName="h-9 w-9" src="/assets/images/avatars/userProfile.png" alt="" />
                )}
            </div>
            <div className="w-full truncate">
                <div className="flex items-center gap-1">
                    <p className="max-w-full truncate text-sm font-bold text-white">{entry?.name}</p>
                    {entry.isVerified && <VerifiedIcon />}
                </div>
                <p className="truncate">@{entry?.userName}</p>
            </div>
        </div>
    );
};

export default Mentions;
