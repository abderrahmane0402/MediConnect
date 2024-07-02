"use client"
// import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { pdf } from "@react-pdf/renderer"
import { useState } from "react"
import {
  FileText,
  FolderPlus,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DossierMedicalPDF from "@/components/pdfs/DossierMedicalPDF"
import { DossierMedical } from "@/lib/FormData"
import { taskSchema } from "./data/schema"
import { getPDFDossiers } from "@/api/getDossier"
import { DeleteDossiers } from "@/api/deleteDossier"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { session } from "@/stores/session"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter()
  const { user } = session((state) => state)

  const payment = taskSchema.parse(row.original)
  const id = payment.id
  console.log(id)
  const [data5, setdata5] = useState<any>()
  const handleOpenPDF = async () => {
    try {
      const data1 = await getPDFDossiers(id)
      setdata5(data1)
      const blob = await pdf(<DossierMedicalPDF data={data1} />).toBlob()
      const url = URL.createObjectURL(blob)

      window.open(url, "_blank")
    } catch (error) {
      console.error(
        "There was an error fetching the dossiers or generating the PDF!",
        error
      )
    }
  }
  const handleDelete = async () => {
    const result = await DeleteDossiers(id)
    // window.open("", );
    console.log(result)
    // toast.success("Patient deleted successfully!");
    router.push("/main/dossierMedical")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* <PDFDownloadLink document={<DossierMedicalPDF />}>
                 <FileText className="mr-2 h-4 w-4" />
                 Plus de détails
               </PDFDownloadLink> */}
          <Link href={""} onClick={handleOpenPDF}>
            <FileText className="mr-2 h-4 w-4" />
            Afficher plus de détails
          </Link>
        </DropdownMenuItem>
        {user?.user_type == "medecin" && (
          <>
            <DropdownMenuItem asChild>
              <Link href={"/main/visite"}>
                <FolderPlus className="mr-2 h-4 w-4" />
                Ajouter une visite
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SquarePen className="mr-2 h-4 w-4" />
              <Link href={"/main/dossierMedical/update"}>
                <span>Modifer le dossier</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>
              {/* <Ima src={data5?.PremierExam.Appareil_auditif.Scan[0]} alt=""  className=" h-4 w-4"/> */}
              <Trash2 className="mr-2 h-4 w-4" />
              {/* <Link href={"/dossierMedical"} onClick={handleDelete} > */}
              Supprimer le dossier
              {/* </Link> */}
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem asChild>
          {/* <PDFDownloadLink document={<DossierMedicalPDF />}>
                 <FileText className="mr-2 h-4 w-4" />
                 Plus de détails
               </PDFDownloadLink> */}
          <Link href={""} onClick={handleOpenPDF}>
            <FileText className="mr-2 h-4 w-4" />
            Générer le pdf
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
