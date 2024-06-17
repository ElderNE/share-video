import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { memo } from "react";

function CommentsControl({
    openClose,
    addCommentBusstonState,
    setshowComments,
    handlerSubmitCommentControl
}:{
    openClose: boolean,
    addCommentBusstonState:string,
    setshowComments:React.Dispatch<React.SetStateAction<boolean>>,
    handlerSubmitCommentControl: (e: React.SyntheticEvent) => Promise<void>
}) {

    return (
        <div    className="w-full flex flex-col lg:flex-row justify-end items-end lg:h-[40px] lg:mb-1">
                {openClose && <form className="flex flex-row grow w-[100%]"
                                    onSubmit={handlerSubmitCommentControl}>
                                    <Input  type="text" 
                                            id="content" 
                                            placeholder="Text" 
                                            className="w-full lg:w-[calc(100%-42rem)] grow mb-1 lg:mb-0"/>
                                    <Button className="w-32 ml-2 shrink-0 mb-1 lg:mb-0 grow lg:grow-0">
                                            {addCommentBusstonState}
                                    </Button>
                </form>}
                <Button className="w-32 ml-2 mb-1 lg:mb-0 shrink-0 bg-regal-orange text-regal-gray
                                hover:bg-regal-gray hover:text-white"
                        onClick={ () => setshowComments(!openClose) }>
                        {openClose?"Close comments":"Show comments"}
                </Button>
        </div>
    );
  }

export default memo(CommentsControl);