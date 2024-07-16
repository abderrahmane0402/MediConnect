"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  FileText,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react"
import { useRouter } from "next/navigation"

export type employe = {
  _id: string
  id: number
  nom: string
  prenom: string
  cin: string
  posteTravail: string
}
export const dynamic = 'force-dynamic'

export const employeColumns: ColumnDef<employe>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Prénom",
  },
  {
    accessorKey: "cin",
    header: "CIN",
  },
  {
    accessorKey: "posteTravail",
    header: "Poste de travail",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      const router = useRouter();

      router.refresh()
      return (
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
              Modifer employé
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer employé
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
