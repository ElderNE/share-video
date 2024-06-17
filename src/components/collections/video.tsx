import { memo } from "react";

function Video({
    video,
    choosenVideo
}:{
    video:string,
    choosenVideo: number,
}) {
    return (
        <video  controls
                playsInline
                autoPlay
                preload="metadata"
                key={choosenVideo+video}
                className="w-[100%] h-[calc(100%-50px)] lg:max-h-[calc(58vw-365px)] bg-white rounded-lg">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
    );
  }

  export default memo(Video);