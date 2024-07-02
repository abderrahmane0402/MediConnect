import VisiteForm from "@/components/forms/VisiteForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import React from "react"

const Visite = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-center">Visite Périodique</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <VisiteForm />
      </CardContent>
    </Card>
  )
}

export default Visite
