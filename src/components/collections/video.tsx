import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Video({
    video,
    choosenVideo
}:{
    video:string,
    choosenVideo: number
}) {
    return (
      <div className="rounded-lg border shadow-md grow m-1 flex flex-col justify-start p-4">
        <video  width="500" 
                height="240" 
                controls 
                preload="metadata" 
                className="rounded-lg border" 
                key={choosenVideo}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <ul>
            <li>comment1</li>
            <li>comment1</li>
        </ul>
        <div className="w-40">
            <Input type="text" placeholder="Text" className="w-full mt-3 mb-1"/>
            <Button className="w-full mt-1 mb-3">
                Add comment
            </Button>
        </div>
      </div>
    );
  }