import React, { useState, useRef, RefObject } from "react";

interface IProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  // ref:RefObject<HTMLVideoElement>
}

const VideoPlayer: React.FC<IProps> = ({
  
  src,
  className,
  controls,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLVideoElement | null>(null);

  // const handlePlayPause = () => {
  //   setIsPlaying((prevState) => !prevState);
  //   if (playerRef.current) {
  //     if (isPlaying) {
  //       playerRef.current.pause();
  //     } else {
  //       playerRef.current.play();
  //     }
  //   }
  // };

  return (
    <div className={`group relative `}>
      <video
        // ref={ref?.current}||null
        className={`${className}`}
        src={src||''}
        width="100%"
        height="100%"
        loop={loop}
        autoPlay={autoPlay} // Update autoPlay prop with `isPlaying && autoPlay`
        muted={muted}
        controls={controls}
        style={{ objectFit: "cover" }}
      />
      {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <button
          className="bg-transparent border-0 cursor-pointer"
          onClick={handlePlayPause}
        >
          {!isPlaying ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50">
              <i className="icon-play text-sm text-white"></i>{" "}
            </div>
          ) : (
            <div className=" invisible relative flex h-10 w-10 items-center  justify-center rounded-full bg-black/50 !duration-300 hover:visible group-hover:visible">
              <i className="icon-pause text-sm text-white"></i>
            </div>
          )}
        </button>
      </div> */}
    </div>
  );
};

export default VideoPlayer;
