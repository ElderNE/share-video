"use client"

import Header from "./header";
import List from "./list";
import Video from "./video";

import { useState } from 'react';

export default function Collections({id}:{id:string}) {

  const listHeader = id[0].toUpperCase() + id.slice(1) + "'s videos";

  const [ choosenVideo, setChoosenVideo ] = useState<number>(0);
  
  //sourse https://www.pexels.com/
  const videosList = [
    {
      url: "https://videos.pexels.com/video-files/19880357/19880357-hd_1280_720_24fps.mp4",
      name: "video"
    },
    {
      url: "https://videos.pexels.com/video-files/18951310/18951310-hd_1280_720_30fps.mp4",
      name: "video"
    },
    {
      url: "https://videos.pexels.com/video-files/3697850/3697850-hd_1280_720_24fps.mp4",
      name: "video"
    },
    {
      url: "https://videos.pexels.com/video-files/7206746/7206746-hd_1280_720_25fps.mp4",
      name: "video"
    }
  ]

  return (
    <div className="w-full min-h-screen flex flex-row justify-between">
      <Header id={id} />
      <Video  video={videosList[choosenVideo].url}
              choosenVideo={choosenVideo}/>
      <List   listHeader={listHeader} 
              videos={videosList}
              setChoosenVideo={setChoosenVideo}/>
    </div>
  );
}