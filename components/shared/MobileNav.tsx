"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button size={"icon"} className="rounded-full w-7 h-7">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>MediConnect</SheetTitle>
          <SheetDescription>
            plateform de gestion des dossiers medical
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex flex-col gap-2 mt-4 overflow-auto">
          <Button className="rounded-sm" variant={"default"} asChild>
            <span className="truncate">
              <Link href="/">Acceuil</Link>
            </span>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <span className="truncate">
              <Link href="/">Dossier Medical</Link>
            </span>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <span className="truncate">
              <Link href="/">Ajouter Dossier Medical</Link>
            </span>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <Link href="/">
              <span className="truncate">Materiel de Cabinet</span>
            </Link>
          </Button>

          <Button className="rounded-sm" variant={"secondary"} asChild>
            <Link href="/">
              <span className="truncate">Ajouter Materiel</span>
            </Link>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <Link href="/">
              <span className="truncate">Les Employer</span>
            </Link>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <Link href="/">
              <span className="truncate">Ajouter Employer</span>
            </Link>
          </Button>
          <Button className="rounded-sm" variant={"secondary"} asChild>
            <Link href="/">
              <span className="truncate">Rapport</span>
            </Link>
          </Button>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}
