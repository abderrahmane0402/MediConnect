"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  FileText,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react";

export type Equipement = {
  id: number;
  nomEquipement: string;
  etat: boolean;
  operationel: boolean;
};

export const equipementColumns: ColumnDef<Equipement>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nomEquipement",
    header: "Nom de l'équipement",
  },
  {
    accessorKey: "etat",
    header: "État",
    cell: ({ row }) => {
      const op = row.getValue("etat");
      return op ? "disponible" : "indisponible";
    },
  },
  {
    accessorKey: "operationel",
    header: "Opérationnel",
    cell: ({ row }) => {
      const op = row.getValue("operationel");
      return op ? "est Opérationnel" : "non Opérationnel";
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const equipement = row.original;
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
              Modifier Equipement
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer Equipement
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
