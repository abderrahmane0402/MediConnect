"use client";
import DossierMedicalPDF from "@/components/pdfs/DossierMedicalPDF";
import { Button } from "@/components/ui/button";

import { pdf, PDFDownloadLink } from "@react-pdf/renderer";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  FileText,
  FolderPlus,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react";

import { DataTableRowActions } from "./dropActions";
import { DataTableColumnHeader } from "./data-table-column-header";
import { priorities, statuses } from "./data/data";
import { useState } from "react";

export type Dossier = {
  id: number;
  nom: string;
  prenom: string;
  ppr: string;
  natureEmploi: string;
  sanguin: string;
  dateExamen: string;
  postTravail: string;
  nbrVisite: string;
};

// export const dossierColumns: ColumnDef<Dossier>[] = [
//   {
//     accessorKey: "nom",
//     header: "Nom",
//   },
//   {
//     accessorKey: "prenom",
//     header: "Prénom",
//   },
//   {
//     accessorKey: "ppr",
//     header: "DPPR",
//   },
//   {
//     accessorKey: "natureEmploi",
//     header: "Nature de l'emploi",
//   },
//   {
//     accessorKey: "sanguin",
//     header: "Gr. sanguin",
//   },
//   {
//     accessorKey: "dateExamen",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Date d'examen
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: "postTravail",
//     header: "Poste de travail",
//   },
//   {
//     accessorKey: "nbrVisite",
//     header: "Nombre de visites",
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell:  ({ row }) => {  return(<DataTableRowActions row={row}  />);},
//   },

//   // {
//   //   id: "actions",
//   //   enableHiding: false,
//   //   cell: ({ row }) =>  {
//   //     const payment = row.original
//   //     const handleOpenPDF = async () => {
//   //       const blob = await pdf(<DossierMedicalPDF />).toBlob();
//   //       const url = URL.createObjectURL(blob);
//   //       window.open(url, '_blank');
//   //     };
//   //     return (
//   //       <DropdownMenu>
//   //         <DropdownMenuTrigger asChild>
//   //           <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
//   //             <MoreHorizontal className="h-4 w-4" />
//   //           </Button>
//   //         </DropdownMenuTrigger>
//   //         <DropdownMenuContent align="end">
//   //           <DropdownMenuLabel>Les actions</DropdownMenuLabel>
//   //           <DropdownMenuSeparator />
//   //           <DropdownMenuItem asChild>
//   //             {/* <PDFDownloadLink document={<DossierMedicalPDF />}>
//   //               <FileText className="mr-2 h-4 w-4" />
//   //               Plus de détails
//   //             </PDFDownloadLink> */}
//   //             <Link href={""} onClick={handleOpenPDF} >
//   //           <FileText className="mr-2 h-4 w-4" />
//   //           Plus de détails
//   //         </Link>
//   //           </DropdownMenuItem>
//   //           <DropdownMenuItem asChild>
//   //             <Link href={"/visite"}>
//   //               <FolderPlus className="mr-2 h-4 w-4" />
//   //               Ajouter visite
//   //             </Link>
//   //           </DropdownMenuItem>
//   //           <DropdownMenuItem>
//   //           <Link href={"/dossierMedical/update"}>
//   //           <span><SquarePen className="mr-2 h-4 w-4" /><span>Modifer dossier</span></span>
//   //            </Link>

//   //           </DropdownMenuItem>
//   //           <DropdownMenuItem>
//   //             <Trash2 className="mr-2 h-4 w-4" />
//   //             Supprimer dossier
//   //           </DropdownMenuItem>
//   //         </DropdownMenuContent>
//   //       </DropdownMenu>
//   //     )
//   //   },
//   // },
// ]

export const columns: ColumnDef<Dossier>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nom")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prénom" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("prenom")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "ppr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DPPR" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("ppr")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "sanguin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gr. sanguin" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("sanguin")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "natureEmploi",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nature de l'emploi"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {
              //@ts-ignore
              row.getValue("natureEmploi")
              // .slice(0, 10)
            }
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "dateExamen",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date d'examen
"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {
              //@ts-ignore
              row.getValue("dateExamen")
              // .slice(0, 10)
            }
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "postTravail",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Poste de travail"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {
              //@ts-ignore
              row.getValue("postTravail")
              // .slice(0, 10)
            }
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "nbrVisite",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nombre de visites"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {
              //@ts-ignore
              row.getValue("nbrVisite")
              // row.getValue("id")
              // .slice(0, 10)
            }
          </span>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "id",
  
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       title="Nombre de visites"
  //     />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate font-medium">
  //           {
  //             //@ts-ignore
  //             row.getValue("id")
  //             // row.getValue("id")
  //             // .slice(0, 10)
  //           }
  //         </span>
  //       </div>
  //     );
  //   },
  // },

  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue("nbrVisite")
  //     );

  //     if (!status) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // {
  //   accessorKey: "latest_exam",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Preassure" />
  //   ),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue("latest_exam")
  //     );
  //     const [Color, setColors] = useState("");

  //     if (!priority) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className={
  //             priority.label === "High" || priority.label === "Low"
  //               ? "text-red-600 font-bold mr-2 h-4 w-4 text-muted-foreground"
  //               : "mr-2 h-4 w-4 text-muted-foreground"
  //           } />
  //         )}
  //         <span
  //           className={
  //             priority.label === "High" || priority.label === "Low"
  //               ? "text-red-600 font-bold"
  //               : ""
  //           }
  //         >
  //           {priority.label}
  //         </span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DataTableRowActions row={row} />;
    },
  },
];
