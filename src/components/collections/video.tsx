export default function Video({
    video,
    choosenVideo,
    openClose
}:{
    video:string,
    choosenVideo: number,
    openClose:boolean
}) {

    return (
      <div className={`rounded-lg border shadow-md m-1 flex flex-col justify-start p-4 ${openClose?"lg:h-[calc(50vh-5px)]":"lg:h-[calc(100vh-69px)]"} backdrop-blur-sm backdropFilter lg:backdrop-blur-none duration-200`}>
        <video  controls
                playsInline
                autoPlay
                muted
                preload="metadata"
                key={choosenVideo}
                className="w-[100%] h-[100%] lg:max-h-[calc(58vw-265px)] bg-white">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    );
  }