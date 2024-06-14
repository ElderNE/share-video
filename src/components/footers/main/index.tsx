import { Command } from "@/components/ui/command";

export default function Footer() {
    return (
      <footer className="w-full p-1">
        <Command className="rounded-lg border shadow-md h-min">
          <p className="text-sm font-medium leading-none ml-1 mt-4 mb-4">&copy; All Rights Reserved</p>
        </Command>
      </footer>
    );
  }