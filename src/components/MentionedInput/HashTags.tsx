import React from 'react';

const HashTags = ({ entry }: any) => {
    return (
        <div>
            <div className="w-full truncate">
                <div className="flex items-center gap-1">
                    <p className="max-w-full truncate text-sm font-bold text-white">#{entry?.display}</p>
                </div>
                <p className="truncate text-xs">{entry?.followersCount} Followers</p>
            </div>
        </div>
    );
};

export default HashTags;
