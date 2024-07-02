"use client"
import UniteDeSante from "@/components/tables/rapport/UniteDeSante"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react"

export default function Rapport() {
  const [currentTable, setCurrentTable] = useState(1)
  useEffect(() => {
    console.log(currentTable)
    console.log(currentTable === 2)
  }, [currentTable])
  return (
    <Card className="h-full overflow-auto flex flex-col">
      <CardHeader>
        <CardTitle>
          Rapport d'activité des unités de santé au travail.
        </CardTitle>
        <CardDescription>
          Remplir les tableaux pour générer le rapport.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-auto">
        <form>
          <UniteDeSante hidden={currentTable === 1 ? false : true} />
          <UniteDeSante hidden={currentTable === 2 ? false : true} />
          <UniteDeSante hidden={currentTable === 3 ? false : true} />
        </form>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => setCurrentTable(1)}
                isActive={currentTable === 1 ? true : false}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => setCurrentTable(2)}
                isActive={currentTable === 2 ? true : false}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => setCurrentTable(3)}
                isActive={currentTable === 3 ? true : false}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}
