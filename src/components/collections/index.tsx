"use client"

//elemets
import Header from "./header";
import List from "./list";
import Video from "./video";
import Comments from "./comments";
import Modal from "./modal";
import CommentsControl from "./comments_control";
import Spinner from "./spinner";

//react hooks
import { useState, useEffect, useCallback } from 'react';

//utils
import { validationLink } from "./utils/validation_link";
import { nameToHeader } from "./utils/name_to_header";
import { textProtection } from "./utils/text_potection";
import { 
  addNewComment,
  addOrUpdateWithVideo,
  getAllVideos,
  getAllComments
} from "./utils/async_updates";

interface VideosList {
  url:string,
  name:string,
  id: string
  description: string,
}

interface CreateVideo {
  user_id: string,
  description: string,
  video_url: string,
  title: string
}

interface EditVideo {
  description: string,
  video_id: string,
  title: string
}

function Collections({id, user}:{id:string, user:string}) {

  //states
  const [ infromData, seInfromData ] = useState("");                                  //showing submit process for add/edit video
  const [ addCommentBusstonState, setCommentBusstonState ] = useState("Add comment"); //showing submit process for comments
  const [ choosenVideo, setChoosenVideo ] = useState<number>(0);                      //showing vidoe (first by default)
  const [ modalToDo, setModalToDo ] = useState<string>("");                           //show modal window
  const [ showComments, setshowComments ] = useState<boolean>(false);                 //show comments
  const [ comments, setComments ] =useState<Array<{id:string,comment:string}>>([]);   //all comments
  const [ videosList, setVideosList ] = useState<Array<VideosList>>([]);              //all videos

  //fix data from objects for protect rerendering
  const video = videosList[choosenVideo]?.url?videosList[choosenVideo].url:""; 
  const description = videosList[choosenVideo]?.url?textProtection(videosList[choosenVideo].description):"";
  const videoId = videosList[choosenVideo]?.id?videosList[choosenVideo].id:"";
  
  //update videolist
  useEffect(()=>{
    const getData = async() => {
      const result = await getAllVideos(id);
      if(result.result === "success") {
        setVideosList(result.data);
      }
    }
    getData();
  },[infromData==="Sending"])
  
  //update comments
  useEffect(()=>{
    if(showComments && videosList[choosenVideo]?.id) {
      const getData = async() => {
        const result = await getAllComments(videosList[choosenVideo].id);
        if(result.result === "success") {
          setComments(result.data);
        }
      }
      getData();
    }
  },[showComments, addCommentBusstonState==="Sending", choosenVideo])
  
  //refresh button state after modal closing
  useEffect(()=>{
    if(modalToDo===""){
      seInfromData("");
    }
  },[modalToDo])
  
  //async updates comments:
  const handlerSubmitCommentControl = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    setCommentBusstonState("Sending");
    const resetForm = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & {
        content: { value: string | number};
    };
    const content = String(target.content.value);
    if(content && videosList[0]?.id) { 
        const data = {
            user_id: user,
            content: textProtection(content),
            video_id: videoId!==""?videoId:videosList[0].id,
        }
        const result = await addNewComment(data);
        console.log(result)
        if(result==="success"){
            resetForm.reset();
            setCommentBusstonState("Sent");
        } else {
            setCommentBusstonState("Error");
        }
    } else {
        console.log("data incorrect")
        setCommentBusstonState("Text needed");
    }
  }

  const callbacksSubmitCommentControl = useCallback( async(e:React.SyntheticEvent) => {
    handlerSubmitCommentControl(e);
  }, [showComments, comments]);

  //async update videos:
  const modalFormSubmit = async(e:React.SyntheticEvent, workMethod:string) => {
    e.preventDefault();
    seInfromData("Sending");
    const resetForm = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & {
      title: { value: string | number};
      link: { value: string | number};
      des: { value: string | number};
    };
    const title = String(target.title.value);
    const link = String(target.link.value);
    const des = String(target.des.value);
    if(title && link && des) { //validation
      if(validationLink(link)){
        let data: CreateVideo | EditVideo = (workMethod==="POST")?
        {
            user_id: user,
            description: des,
            video_url: link,
            title: title
        }:{
            description: des,
            video_id: link,
            title: title
        }
        const result = await addOrUpdateWithVideo(workMethod, data);
        if(result==="success"){
          resetForm.reset();
          seInfromData("Video sent");
        } else {
          seInfromData("Not valid data");
        }
      } else {
        seInfromData("Not youtobe");
      }
    }
    else {
      console.log("data incorrect")
      seInfromData("Fill all fields");
    }
  }

  const callbacksModalForm = useCallback( async(e:React.SyntheticEvent, workMethod:string) => {
    modalFormSubmit(e, workMethod);
  }, []);

  return (
    <div className="w-full lg:h-[100vh] flex flex-col lg:flex-row lg:justify-between relative">
      <Modal  toDo={modalToDo}
              setModalToDo={setModalToDo}
              modalFormSubmit={callbacksModalForm}
              informData={infromData}/>
      <Header id={id}
              setModalToDo={setModalToDo}/>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="sticky top-0 z-10 flex flex-col justify-between w-full
                        lg:w-[calc(100%-320px)] lg:h-[calc(100vh-5px)]">
          <div className={`rounded-lg border shadow-md m-1 flex flex-col justify-start p-4 
                          ${showComments?"lg:h-[calc(50vh-5px)]":"lg:h-[calc(100vh-69px)]"}
                          backdrop-blur-sm backdropFilter lg:backdrop-blur-none duration-200`}>
            {video==="" && <Spinner />}
            {video!=="" && <Video   video={video}
                                    choosenVideo={choosenVideo}/>}
            {description.length>0 && <h1 className="w-[100%] mt-[20px] h-[30px] overflow-hidden">
              {description}
            </h1>}                                  
          </div>
          <div className={`rounded-lg border shadow-md ml-1 mr-1 flex flex-col justify-start p-4
                          ${showComments?"h-[calc(50vh+110px)] lg:h-[50vh] bg-white":
                          "h-[74px] backdrop-blur-sm lg:backdrop-blur-none lg:bg-white backdropFilter"} 
                          overflow-hidden duration-200 shrink-0`}>
            <CommentsControl  openClose={showComments}
                              setshowComments={setshowComments}
                              addCommentBusstonState={addCommentBusstonState}
                              handlerSubmitCommentControl={callbacksSubmitCommentControl}/>
            {showComments && <Comments  comments={comments}/>}
          </div>
        </div>
        <List listHeader={nameToHeader(id, "videos")} 
              videos={videosList}
              setChoosenVideo={setChoosenVideo}/>
      </div>
    </div>
  );
}

export default Collections;