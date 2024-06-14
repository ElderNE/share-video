import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { colorizer } from "./utils/colorizer";
import { nameReducer } from "./utils/name_reducer";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface Comment {
    id:string,
    comment:string
}

export default function Video({
    comments,
    openClose,
    setshowComments
}:{
    comments:Array<Comment>,
    openClose: boolean,
    setshowComments:any
}) {

    return (
      <div className={`rounded-lg border shadow-md ml-1 mr-1 flex flex-col justify-start p-4 ${openClose?"h-[calc(50vh+110px)] lg:h-[50vh] bg-white":"h-[74px] backdrop-blur-sm lg:backdrop-blur-none backdropFilter"} overflow-hidden duration-200`}>
        {openClose && <ScrollArea className="w-full rounded-md mb-2 shrink-0 h-[calc(50vh-20px)] lg:h-[calc(50vh-74px-1rem)] relative">
            <div className="">
            {comments.length>0 &&comments.map((data, key) => (
                <div    key={key} 
                        className="flex flex-col">
                    <div className="flex flex-row">
                        <Avatar className="w-px48 grow-0 shrink-0">
                            <AvatarImage src={`/assets/images/avatars/${data.id}.jpg`} alt={data.id} />
                            <AvatarFallback className={colorizer(key)}>{nameReducer(data.id)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col grow">
                            <p className="w-full overflow-hidden h-5 pl-2 font-bold ">{data.id}</p>
                            <p className="w-full overflow-hidden pl-2 max-h-24">{data.comment}</p>
                        </div>
                    </div>
                    <Separator className="my-2" />
                </div>
            ))}
            {comments.length===0 && <p className="mt-2">There are no comments here yet</p>}
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-[10vh] bg-gradient-to-t from-white to-fff-0"></div>
            <div className="absolute top-0 left-0 z-10 w-full h-[2vh] bg-gradient-to-b from-white to-fff-0"></div>
        </ScrollArea>}
        <div className="w-full flex flex-row justify-end lg:h-[40px] flex-wrap lg:flex-nowrap">
            {openClose && <Input type="text" placeholder="Text" className="w-full lg:w-[calc(100%-42rem)] grow mb-2 lg:mb-0"/>}
            {openClose && <Button className="w-32 ml-2 shrink-0 mb-2 lg:mb-0 grow lg:grow-0">
                Add comment
            </Button>}
            <Button className="w-32 ml-2 shrink-0 bg-regal-orange text-regal-gray hover:bg-regal-gray hover:text-white"
                    onClick={()=>setshowComments(!openClose)}>
                {openClose?"Close comments":"Show comments"}
            </Button>
        </div>
      </div>
    );
  }