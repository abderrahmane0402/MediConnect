import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Nav from "./Nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import Image from "next/image";

const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false });

export default function Header() {
  return (
    <header className="sticky w-full h-auto flex justify-between items-center px-1 md:px-4 lg:px-14 py-1 md:py-2 border-b bg-white shadow-sm">
      <div className="flex gap-5 items-center">
        <img src={"/logo-ministere-sante.png"} alt="ministaire de sante logo" width={70} height={40}/>
        <Nav />
      </div>
      <div className="flex flex-row-reverse">
        <MobileNav />
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:block">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>déconnexion</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
