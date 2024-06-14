"use client"

import Header from "./header";
import List from "./list";
import Video from "./video";
import Comments from "./comments";

import { useState } from 'react';
import Modal from "./modal";

export default function Collections({id}:{id:string}) {

  //data for elements
  const listHeader = id[0].toUpperCase() + id.slice(1) + "'s videos";

  const [ choosenVideo, setChoosenVideo ] = useState<number>(0);
  const [ modalToDo, setModalToDo ] = useState<string>("");
  const [ showComments, setshowComments ] = useState<boolean>(false);
  
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
      name: "https://videos.pexels.com/video-files/7206746/7206746-hd_1280_720_25fps.mp4"
    }
  ]

  interface Comment {
    id:string,
    comment:string
  }
  const comments:Array<Comment> = [{id:"default",comment:"Wow!!!"}, {id:"w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between",comment:"w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"},{id:"Vasya",comment:"w-full min-h-screen flex flex-row justify-between"}];
  
  return (
    <div className="w-full lg:h-[100vh] flex flex-col lg:flex-row lg:justify-between relative">
      <Modal  toDo={modalToDo}
              setModalToDo={setModalToDo}/>
      <Header id={id}
              setModalToDo={setModalToDo}/>
      <div className="lg:h-[calc(100vh-5px)] flex flex-col justify-between w-full lg:w-[calc(100%-470px)] sticky top-0 z-10">
        <Video  video={videosList[choosenVideo].url}
                choosenVideo={choosenVideo}
                openClose={showComments}/>
        <Comments comments={comments}
                  openClose={showComments}
                  setshowComments={setshowComments}/>
      </div>
      <List   listHeader={listHeader} 
              videos={videosList}
              setChoosenVideo={setChoosenVideo}/>
    </div>
  );
}