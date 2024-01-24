import { PollOption, Post } from '@/interfaces/feeds.interface';
import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify'

type Props = {
    post: Post;
};

const PollDetails = ({ post }: Props) => {
    const [options, setOptions] = useState(post?.poll?.options);

    const onAddVoteCompleted = (data: any) => {
        const updatedOptions = data.vote.poll.options;
        setOptions(updatedOptions);
    };

    const onWithholdVoteCompleted = (data: any) => {
        const updatedOptions = data.withholdVote.poll.options;
        setOptions(updatedOptions);
    };

    const isExpire = (time: string | Date) => {
        return new Date(time) < new Date();
    };

    const calculateVotePercentage = (options: PollOption[], optionIndex: number): number => {
        const totalVotes = options.reduce((total, option) => total + option.votes, 0);

        if (totalVotes === 0) {
            return 0;
        }

        const percentage = (options[optionIndex].votes / totalVotes) * 100;
        return Number(percentage.toFixed(2));
    };

    const calculateTotalVotes = (options: PollOption[]): number => {
        const totalVotes = options.reduce((total, option) => total + option.votes, 0);

        return Number(totalVotes);
    };

    return (
        <div
            className={`${
                !Comment
                    ? 'rounded-0 rounded-none border-0  border-t-2 border-t-primary'
                    : 'mt-[5px] rounded-md border border-lightBorder dark:border-borderColor'
            }  px-4 pt-3 hover:bg-lightHover dark:hover:bg-dark`}
            key={post?._id}
        >
            <div className="grid grid-cols-1 gap-2 pb-3">
                <div className="py-2">
                    <div className="font-bold">{post?.poll?.question}</div>
                </div>

                {options?.map((option, i) => (
                    <div key={i}>
                        <div className="" key={i}>
                            <button
                                disabled={isExpire(post?.poll?.expiresAt)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                
                                }}
                                className={` group flex w-full items-center justify-between rounded-lg border px-2.5 py-2 text-left font-semibold text-secondary hover:border-borderColor  dark:border-borderColor dark:text-[#BFBFBF] dark:hover:border-primary dark:hover:bg-transparent dark:hover:!text-white
                               border-lightBorder
                                
                                `}
                            >
                                {option?.text}
                                <p className={`font-semibold text-secondary dark:text-[#BFBFBF] dark:group-hover:!text-white`}>
                                    {calculateVotePercentage(options, i)} %
                                </p>
                            </button>
                        </div>
                    </div>
                ))}
                <div className="flex items-center gap-x-2.5">
                    <p className="text-sm">{calculateTotalVotes(options)} vote</p>
                    <i className="icon-point text-[3.5px] text-secondary "></i>
                    <span className="text-sm text-secondary">
                        {isExpire(post?.poll?.expiresAt) ? 'Expired' : `Ends in ${moment(post?.poll?.expiresAt).format('MMMM Do, h:mm a')}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PollDetails;
