import { memo } from "react";

import { Skeleton } from "@/components/ui/skeleton";

function Spinner() {
    return ( 
        <div className="w-[100%]">
            <Skeleton className="w-[100%] h-[40px] m-1" />
            <Skeleton className="w-[100%] h-[40px] m-1" />
            <Skeleton className="w-[80%] h-[40px] m-1" />
            <Skeleton className="w-[80%] h-[40px] m-1" />
        </div>
    );
  }

  export default memo(Spinner);