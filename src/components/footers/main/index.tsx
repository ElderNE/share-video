import { Separator } from "@/components/ui/separator"
export default function Footer() {
    return (
      <footer className="w-full">
        <Separator className="my-2" />
        <p className="text-sm font-medium leading-none ml-1 mt-4 mb-4">&copy; All Rights Reserved</p>
      </footer>
    );
  }