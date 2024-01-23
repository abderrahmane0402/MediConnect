"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DossierDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectColumn, setSelectColumn] = useState<string>("nom");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const overrideShadcnElement = () => {
    const relativeDiv = document.querySelector("#mytable")?.childNodes[0];
    // @ts-ignore
    relativeDiv.className = relativeDiv.className.replace("relative", "");
    // @ts-ignore
    console.log(relativeDiv.className);
  };

  useEffect(() => {
    overrideShadcnElement();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col-reverse md:flex-row md:px-3 gap-2">
        <Input
          placeholder="Entrez votre recherche ici"
          type="text"
          className="w-full md:w-72 border-2 border-blue-300 placeholder:tracking-wider placeholder:text-muted-foreground"
          value={
            (table.getColumn(selectColumn)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(selectColumn)?.setFilterValue(event.target.value)
          }
        />
        <Select onValueChange={setSelectColumn}>
          <SelectTrigger className="w-full md:w-[250px] border-2 border-blue-300 placeholder:tracking-wider placeholder:text-muted-foreground">
            <SelectValue placeholder="Sélectionnez une colonne" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nom">Nom</SelectItem>
            <SelectItem value="prenom">Prénom</SelectItem>
            <SelectItem value="ppr">PPR</SelectItem>
            <SelectItem value="natureEmploi">Nature de l'emploi</SelectItem>
            <SelectItem value="sanguin">Gr. sanguin</SelectItem>
            <SelectItem value="dateExamen">Date d'examen</SelectItem>
            <SelectItem value="postTravail">Poste de travail</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        className="rounded-md border h-[510px] md:h-96 overflow-auto"
        id="mytable"
      >
        <Table>
          <TableHeader className="bg-blue-100/70">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
