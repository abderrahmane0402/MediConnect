"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import myAxios from "@/lib/axios";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  FileText,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const dynamic = 'force-dynamic'

export type Equipement = {
  _id : any
  nomEquipement: string;
  etat: boolean;
  operationel: boolean;
};

export const equipementColumns: ColumnDef<Equipement>[] = [
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "nomEquipement",
    header: "Nom de l'équipement",
  },
  {
    accessorKey: "etat",
    header: "État",
    cell: ({ row }) => {
      const op = row.getValue("etat");
      return op || op=="true"  ? "Disponible" : "Indisponible";
    },
  },
  {
    accessorKey: "operationel",
    header: "Opérationnel",
    cell: ({ row }) => {
      const op = row.getValue("operationel");
      return op || op=="true"  ? "Oui" : "Non";
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const equipement = row.original;
      // console.log(equipement.id);
      // console.log(equipement._id);
      const router = useRouter();

      router.refresh()

      return (
        <>
        {/* <Dialog open={logoutOpen} onOpenChange={setLogOutOpen} >
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action expire your session and you have to login back to
              access your dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-4">
            <Button
              variant="destructive"
              onClick={() => {
                logoutUser();
              }}
              className="bg-red-500"
            >
              Yes Logout!
            </Button>
            <DialogClose>
              <Button>Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {/* Profile Image update  */}
      {/* <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Change profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={updateProfile}>
            <div className="mb-2">
              <Label htmlFor="profile">Profile Image</Label>
              <Input
                type="file"
                onChange={handleImageChange}
                className="file:text-white"
                accept="image/png,image/svg,image/jpeg,image/webp"
              />
              <span className="text-red-400">{errors.profile_image?.[0]}</span>
            </div>
            <div className="mb-2">
              <Button className="w-full" disabled={loading}>
                {" "}
                {loading ? "Processing.." : "Update Profile"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog> */} 
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Les actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SquarePen className="mr-2 h-4 w-4" />
              <Link
                href={{
                  pathname: "/main/materiel/update",
                  query: {
                    data: JSON.stringify(equipement),
                  },
                }}
              >
                Modifier Equipement
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                await myAxios.delete(`materiel/delete/${equipement._id}`)
                router.refresh()
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer Equipement
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </>
        
      )
    },
  },
];
