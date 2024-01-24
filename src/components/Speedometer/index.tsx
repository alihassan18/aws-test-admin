import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@apollo/client';
import { HIGHEST_SCORE_QUERY } from '@/graphql/scores';

interface Iprops {
    height?: number;
    width?: number;
    ringWidth?: number;
    needleHeight?: number;
    value?: number;
}
const Speedometer = ({ height, width, ringWidth, needleHeight, value }: Iprops) => {
    const [highestScore, setHighestScore] = useState<string | null>(localStorage.getItem('highestScore') || null);

    useQuery(HIGHEST_SCORE_QUERY, {
        onCompleted: (data) => {
            if (data?.highestScore?.score) {
                setHighestScore(String(data.highestScore.score));
                localStorage.setItem('highestScore', JSON.stringify(data.highestScore.score));
            }
        },
        skip: Boolean(highestScore)
    });
    return (
        <div className="">
            {/* <ReactSpeedometer
                maxSegmentLabels={0}
                segments={4}
                value={Number(value) || 0}
                maxValue={Number(highestScore) || 100000}
                segmentColors={['#D72626', '#FDCD00', '#A4C626', '#49AF46']}
                width={width ? width : 120}
                height={height ? height : 65}
                ringWidth={ringWidth ? ringWidth : 12}
                needleHeightRatio={needleHeight ? needleHeight : 0.6}
            /> */}
        </div>
    );
};

export default Speedometer;
