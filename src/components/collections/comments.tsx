import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { colorizer } from "./utils/colorizer";
import { nameReducer } from "./utils/name_reducer";

import { memo } from "react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface Comment {
    id:string,
    comment: string,
}

function Comments({
    comments
}:{
    comments:Array<Comment>
}) {

    return (
        <ScrollArea className="w-full rounded-md mb-2 shrink-0 h-[calc(50vh-20px)] lg:h-[calc(50vh-74px-1rem)] relative">
            {comments.length>0 && comments.map((data, key) => (
                <div    key={key} 
                        className="flex flex-col">
                    <div className="flex flex-row">
                        <Avatar className="w-px48 grow-0 shrink-0">
                            <AvatarImage    src={`/assets/images/avatars/${data.id}.jpg`} 
                                            alt={data.id} />
                            <AvatarFallback className={colorizer(key)}>
                                            {nameReducer(data.id)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col grow">
                            <p className="w-full overflow-hidden h-5 pl-2 font-bold ">
                                {data.id}
                            </p>
                            <p className="w-full overflow-hidden pl-2 max-h-24">
                                {data.comment}
                            </p>
                        </div>
                    </div>
                    <Separator className="my-2" />
                </div>
            ))}
            {comments.length===0 && <p className="mt-2">
                There are no comments here yet
            </p>}
            <div className="absolute bottom-0 left-0 z-10 w-full h-[10vh] bg-gradient-to-t from-white to-fff-0"></div>
            <div className="absolute top-0 left-0 z-10 w-full h-[2vh] bg-gradient-to-b from-white to-fff-0"></div>
        </ScrollArea>
    );
  }

export default memo(Comments);