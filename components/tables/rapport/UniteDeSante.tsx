import { Input } from "@/components/ui/input"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"
import { useEffect, useState } from "react"

export default function UniteDeSante({ hidden }: { hidden: boolean }) {
  return (
    <>
      <h2
        className={`text-xl font-bold mb-4 underline underline-offset-2 text-center ${
          hidden ? "hidden" : ""
        }`}
      >
        Unités de santé au travail
      </h2>
      <Table
        className={`divide-x divide-gray-300 divide-y border border-gray-300 ${
          hidden ? "hidden" : ""
        }`}
      >
        <TableHeader>
          <TableRow className="border-gray-500">
            <TableHead className="px-4 py-2 border-r border-gray-300">
              Lieu d'implantation
            </TableHead>
            <TableHead className="px-4 py-2 border-r border-gray-300">
              Personnel Nom/prénom
            </TableHead>
            <TableHead className="px-4 py-2 border-r border-gray-300">
              Spécialité / fonction
            </TableHead>
            <TableHead className="px-4 py-2 border-r border-gray-300">
              GSN
            </TableHead>
            <TableHead className="px-4 py-2 border-r border-gray-300">
              Tél Bureau
            </TableHead>
            <TableHead className="px-4 py-2 border-r border-gray-300">
              Email
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRowD />
        </TableBody>
      </Table>
    </>
  )
}

function TableRowD() {
  const [empty, setEmpty] = useState(true)
  return (
    <>
      <TableRow className="border-gray-500">
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            name="test"
            onChange={(e) => setEmpty(e.target.value == "" ? true : false)}
          />
        </TableCell>
      </TableRow>
      {!empty && <TableRowD />}
    </>
  )
}
