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
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function EmployerDataTable<TData, TValue>({
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
    <div className="flex flex-col gap-2 h-full overflow-auto">
      <div className="flex flex-col-reverse md:flex-row md:px-3 gap-2 mt-1 mx-1">
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
            <SelectItem value="cin">CIN</SelectItem>
            <SelectItem value="posteTravail">Poste de travail</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        className="rounded-md border overflow-auto max-h-full"
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
        <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} sur{" "}
          {table.getFilteredRowModel().rows.length} lignes selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
