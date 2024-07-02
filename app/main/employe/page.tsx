"use client"
import { employe } from "@/components/tables/employe/columns"
import { EmployerDataTable } from "@/components/tables/employe/table-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteUser, getUsers } from "@/api/user"
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
import Link from "next/link"

export default function Employes() {
  const queryClient = useQueryClient()
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: ["getUsers"], //Array according to Documentation
  })

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers"] })
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const employeColumns: ColumnDef<employe>[] = [
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
              <Link
                href={{
                  pathname: "/main/employe/update",
                  query: {
                    id: row.original._id,
                  },
                }}
              >
                <DropdownMenuItem>
                  <SquarePen className="mr-2 h-4 w-4" />
                  Modifer dossier
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => deleteMutation.mutate(row.original._id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Supprimer dossier
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.log(error)
    return <p>Error</p>
  }

  return (
    <Card className="h-full overflow-auto flex flex-col">
      <CardHeader>
        <CardTitle>Liste des employés du cabinet</CardTitle>
        <CardDescription>
          consulter , modifier et supprimer Les employés du cabinet
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <EmployerDataTable columns={employeColumns} data={data} />
      </CardContent>
    </Card>
  )
}
