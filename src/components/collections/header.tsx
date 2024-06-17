import {
    Hammer,
    FilePlus2
} from "lucide-react";

import { memo } from "react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";

import { nameReducer } from "./utils/name_reducer";

import Image from "next/image";
import Link from "next/link";
   
function Header({
  id,
  setModalToDo
}:{
  id:string,
  setModalToDo: React.Dispatch<React.SetStateAction<string>>
}) {
  
    return (
      <header className="m-1 w-[calc(100%-10px)] flex flex-row lg:flex-col lg:h-[calc(100vh-5px)] lg:w-[150px]">
        <Command className="rounded-lg border shadow-md h-[90px] w-[90px] lg:h-[100px] lg:w-full mb-1 mr-1 lg:mr-0">
          <Link className="mt-4 mb-4 mr-auto ml-auto flex flex-row justify-center" 
                href={"/"}>
            <Image  src={`/assets/images/logos/LOGO_ICON.png`} 
                    alt={"to main"}
                    width={50}
                    height={50}
                    priority={true}
                    style={{objectFit:"cover"}}/>
          </Link>
        </Command>
        <Command className="rounded-lg border shadow-md grow flex flex-row lg:flex-col h-[90px] lg:h-[auto]">
          <CommandList className="max-h-[500px]">
            <div className="flex flex-row lg:flex-col">
              <Avatar className="mt-6 mb-4 ml-4 mr-4 lg:ml-auto lg:mr-auto">
                <AvatarImage  src={`/assets/images/avatars/${id}.jpg`} 
                              alt={id}/>
                <AvatarFallback className="bg-regal-orange">
                  {nameReducer(id)}
                </AvatarFallback>
              </Avatar>
              <CommandSeparator className="object-none lg:flex"/>
              <CommandGroup heading="" 
                            className="mt-2.5">
                <CommandItem  className="hover:cursor-pointer">
                  <FilePlus2 className="mr-2 h-4 w-4" />
                  <p  className="w-24" 
                      onClick={ () => setModalToDo("Share") }>
                      Add video
                  </p>
                </CommandItem>
                <CommandItem  className="hover:cursor-pointer">
                  <Hammer className="mr-2 h-4 w-4" />
                  <p  className="w-24" 
                      onClick={ () => setModalToDo("Edit") }>
                      Edit video
                  </p>
                </CommandItem>
              </CommandGroup>
            </div>
          </CommandList>
        </Command>
      </header>
    )
  }

  export default memo(Header);