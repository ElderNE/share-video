import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    SquareX
} from "lucide-react";

import { memo } from "react";

function Modal({
    toDo,
    informData,
    setModalToDo,
    modalFormSubmit
}:{
    toDo:string,
    informData: string,
    setModalToDo: React.Dispatch<React.SetStateAction<string>>,
    modalFormSubmit: (e: React.SyntheticEvent, workMethod:string ) => Promise<void>
}) {

  let workMethod: "POST" | "PUT" | "" = "";
  if(toDo==="Edit")
    workMethod = "PUT";
  if(toDo==="Share")
    workMethod = "POST";

    return (
      <div className={`${toDo?"opacity-100 z-20":"opacity-0 -z-10"} flex fixed top-0 left-0 h-screen w-full flex-col justify-center bg-black bg-opacity-30 items-center ease-out duration-100`}>
        <Card className="w-[350px] min-h-1">
          <CardHeader className="flex flex-row justify-between align-middle">
            <CardTitle className="mt-[6px]">
              {toDo} video
            </CardTitle>
            <SquareX    className="h-6 w-6 hover:cursor-pointer" 
                        onClick={()=>setModalToDo("")}/>
          </CardHeader>
          <CardContent>
            <form onSubmit={ (e) => modalFormSubmit( e, workMethod )}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">
                    Title
                  </Label>
                  <Input id="title" placeholder="Title" />
                  <Label htmlFor="link">
                    {workMethod==="POST"?"Link":"Video ID"}
                  </Label>
                  <Input id="link" placeholder={workMethod==="POST"?"Link":"Video ID"} />
                  <Label htmlFor="des">
                    Description
                  </Label>
                  <Input id="des" placeholder="Description" />
                </div>
              </div>
              <div className="mt-4">
                <Button type="submit" className="w-[200px]">{toDo}{informData?".":""} {informData}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}

export default memo(Modal);