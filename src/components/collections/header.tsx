import {
    Hammer,
    CreditCard,
    Settings,
    FilePlus2,
    User,
} from "lucide-react";

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
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
   
export default function Header({id}:{id:string}) {

    const avatarName = id[0].toUpperCase() + id[1].toUpperCase();

    return (
    <header className="m-1">
      <Command className="rounded-lg border shadow-md">
        <CommandList>
          <Avatar className="mt-4 mb-4 mr-auto ml-auto">
            <AvatarImage src={`/assets/images/avatars/${id}.jpg`} alt={id} />
            <AvatarFallback className="bg-regal-orange">{avatarName}</AvatarFallback>
          </Avatar>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Videos">
            <CommandItem>
              <FilePlus2 className="mr-2 h-4 w-4" />
              <span>Add video</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Hammer className="mr-2 h-4 w-4" />
              <span>Edit video</span>
              <CommandShortcut> ⌘R</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      </header>
    )
  }