import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Spinner from "./spinner";

import { Suspense, memo } from "react";

interface Videos {
    url: string,
    name: string
    id: string
}   

function List({
    listHeader,
    videos,
    setChoosenVideo
}:{
    listHeader:string,
    videos:Array<Videos>,
    setChoosenVideo:React.Dispatch<React.SetStateAction<number>>
}) {

    return (
      <ScrollArea className="h-[50vh] lg:h-[calc(100vh-5px)] w-[calc(100%-10px) lg:w-[320px] rounded-md border m-1 pt-2 pb-2 shrink-0">
        <div className="p-4 flex flex-col items-center">
          <h2 className="mb-4 h-4 text-sm font-medium leading-none overflow-hidden">
            {listHeader}
          </h2>
          {videos.length===0 && <Spinner />}
          {videos.length>0 && videos.map((data, key) => (
            <div    key={data.id} 
                    className="text-sm hover:cursor-pointer flex flex-col items-center w-[280px]" 
                    onClick={()=>setChoosenVideo(Number(key))}>
                <video  width="100%" 
                        height="240"
                        playsInline
                        autoPlay
                        muted
                        preload="metadata"
                        className="rounded-lg border bg-regal-light-gray"
                        key={data.id}>
                        <source src={data.url} 
                                type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <p className="overflow-hidden h-5 pl-2 w-[280px]">ID: {data.id}</p>
                <p className="overflow-hidden h-5 pl-2 w-[280px]">{data.name}</p>
                <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  }

  export default memo(List);