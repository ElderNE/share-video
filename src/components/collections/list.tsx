import * as React from "react" 
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
   
interface Videos {
    url: string,
    name: string
}   

export default function List({
    listHeader,
    videos,
    setChoosenVideo
}:{
    listHeader:string,
    videos:Array<Videos>,
    setChoosenVideo:any
}) {
    return (
      <ScrollArea className="h-screen w-48 rounded-md border m-1 pt-2 pb-2">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">{listHeader}</h4>
          {videos.map((data, key) => (
            <div    key={key} 
                    className="text-sm" 
                    onClick={()=>setChoosenVideo(Number(key))}>
                <video  width="320" 
                        height="240" 
                        preload="metadata" 
                        className="rounded-lg border"
                        key={key}>
                        <source src={data.url} 
                                type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <p className="w-full truncate h-5 pl-2">{data.name}</p>
                <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  }