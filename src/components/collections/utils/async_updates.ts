//endpoints
const endPointComments = process.env.END_POINT_COMMENTS || "";
const endPointVideos = process.env.END_POINT_VIDEOS || "";

//utils
import { isHttps } from "./is_https";
import { textProtection } from "./text_potection";

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

interface VideosList {
    url:string,
    name:string,
    id: string
    description: string,
}

interface GivenData {
    videos: Array<{
      video_url:string,
      title:string,
      id:string,
      description:string
    }>
}

interface GivebComments {
    comments:Array<{
      user_id:string,
      content:string
    }>
}

export const addNewComment = async(data: {
    user_id: string,
    content: string,
    video_id: string
}) => {
    try{
      const response = await fetch (endPointComments, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const req = await response.json();
      if(req?.success) {
        return "success"
      } else {
        return "error"
      }
    } catch {
      return "Error"
    }
}

export const addOrUpdateWithVideo = async(workMethod:string, data: CreateVideo | EditVideo) => {
    if(workMethod==="POST" || workMethod==="PUT") {
      try{
        const response = await fetch (endPointVideos, {
          method: workMethod,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })
        const req = await response.json();
        if(req?.success) {
          return "success"
        } else {
          return "error"
        }
      } catch {
        return "error"
      }
    }
}

export const getAllVideos = async(id:string) => {
    const endPoint = `${endPointVideos}?user_id=${id}`
    try{
      const req = await fetch (endPoint);
      const res = await req.json() as GivenData;
      const newRes:Array<VideosList> = [];
      if(Array.isArray(res.videos)) {
        res.videos.forEach(element => {
          if(element?.video_url && isHttps(element.video_url) && element.title)
            newRes.push({
              url: element.video_url,
              name: textProtection(element.title),
              id: element.id,
              description: textProtection(element.description)
            })
        });
      }
      return {
        result: "success",
        data: newRes
      }
    } catch {
      return {
        result: "error",
        data: []
      }
    }
}

export const getAllComments = async(id:string) => {
    const endPoint = `${endPointComments}?video_id=${id}`;
    try{
      const req = await fetch (endPoint);
      const res = await req.json() as GivebComments;
      const newRes:Array<{id:string,comment:string}> = [];
      if(Array.isArray(res.comments)) {
        res.comments.forEach(element => {
          if(element?.user_id && element.content)
            newRes.push({
              id: textProtection(element.user_id),
              comment: textProtection(element.content)
            })
        });
      }
      return {
        result: "success",
        data: newRes
      }
    } catch {
      return {
        result: "error",
        data: []
      }
    }
}