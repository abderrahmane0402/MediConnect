"use client"
import DossierMedicalPDF from "@/components/pdfs/DossierMedicalPDF"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  FileText,
  FolderPlus,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react"
import Link from "next/link"

export type Dossier = {
  id: number
  nom: string
  prenom: string
  ppr: string
  natureEmploi: string
  sanguin: string
  dateExamen: string
  postTravail: string
  nbrVisite: string
}

export const dossierColumns: ColumnDef<Dossier>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Prénom",
  },
  {
    accessorKey: "ppr",
    header: "DPPR",
  },
  {
    accessorKey: "natureEmploi",
    header: "Nature de l'emploi",
  },
  {
    accessorKey: "sanguin",
    header: "Gr. sanguin",
  },
  {
    accessorKey: "dateExamen",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date d'examen
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "postTravail",
    header: "Poste de travail",
  },
  {
    accessorKey: "nbrVisite",
    header: "Nombre de visites",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
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
            <DropdownMenuItem asChild>
              {/* <PDFDownloadLink document={<DossierMedicalPDF />}>
                <FileText className="mr-2 h-4 w-4" />
                Plus de détails
              </PDFDownloadLink> */}
              <Link href={"/dossierMedical/update"}>
                <FileText className="mr-2 h-4 w-4" />
                Plus de détails
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={"/visite"}>
                <FolderPlus className="mr-2 h-4 w-4" />
                Ajouter visite
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SquarePen className="mr-2 h-4 w-4" />
              Modifer dossier
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer dossier
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
