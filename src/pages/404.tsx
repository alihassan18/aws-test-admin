import { Button } from '@/components/Button';
import ImageComponent from '@/components/ImageComponent';
// import FacebookIcon from '@components/_Icons/FacebookIcon';
// import InstagramIcon from '@components/_Icons/Instagram';
// import LinkedinIcon from '@components/_Icons/LinkedinIcon';
// import TwitterIcon from '@/components/_Icons/TwitterIcon';
import React from 'react';

const Custom404 = () => {
    return (
        <div className="relative -mt-5 flex">
            <div className="w-1/2 bg-gray17">
                {/* <ImageComponent src="/assets/images/dotted.png" fill className="object-cover" figClassName="w-full h-[calc(100vh-68px)]" /> */}
            </div >
            <div className="flex w-1/4 flex-col items-center justify-center pr-24 text-center">

            <h1 className="text-[128px] font-bold leading-none text-[#FFC200]">404</h1>
            </div>
            {/* <div className="flex w-1/2 items-end justify-end bg-[#FFC200] p-5 ">
                <div className="flex items-center gap-2.5">
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 z-20 flex  h-[458px] w-[1034px] -translate-y-1/2 -translate-x-1/2 rounded-md bg-bgcolor">
                <div className="flex w-1/2 flex-col items-center justify-center">
                    <div className="rounded-md border border-borderColor bg-gray17 p-3.5">
                        <div className="rounded-md bg-bgcolor px-7 py-3 text-center">
                            <ImageComponent src="/assets/images/404-logo.png" fill className="object-cover" figClassName="w-[130px] h-[130px]" />
                            <p className="mt-5 text-base text-white">Minting....</p>
                            <h3 className="text-[1.75rem] font-bold leading-tight text-white">404%</h3>
                        </div>
                        <Button className="mt-2 w-full text-[1.875rem]">Free Mint</Button>
                    </div>
                </div>
                <div className="flex w-1/2 flex-col items-center justify-center pr-24 text-center">
                    <h1 className="text-[128px] font-bold leading-none text-[#FFC200]">404</h1>
                    <h3 className="whitespace-nowrap text-xl font-bold text-[#FFC200]">Why did the NFT website have a 404 error?</h3>
                    <p className="my-3 text-base  text-[#FFC200]">
                        Because even the missing pages are now considered rare digital art! Unfortunately, the masterpiece you&apos;re seeking remains
                        elusive.
                    </p>
                    <Button>Take me to the Feeds</Button>
                </div>
            </div> */}
        </div>
    );
};

export default Custom404;
