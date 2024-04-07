
import { useState } from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../ui/form";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Textarea } from "../ui/textarea";
const vaccTable = [
    {id : "B.C.G" },
    {id : "Hépatite B" },
    {id : "Hépatite A" },
    {id : "Diphtérie" },
    {id : "Tétanos" },
    {id : "Polimyélite" },
    {id : "Typhoide" },
    {id : "Rubéole" },
    {id : "Covid" }
   
]

export default function vaccinations() {
    return(
        <FormField
        name="vaccinations"
        render={() => (
          <FormItem>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Rappels</TableHead>
                  <TableHead>Observations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vaccTable.map((item) =>(
                    <TableRow className="border-gray-500">
                    <TableCell className="px-4 py-2 border-r border-gray-300">
                      {item.id}
                    </TableCell>
                    <TableCell className="px-4 py-2 border-r border-gray-300">
                      <Input
                        placeholder="entrer la date"
                        type="date"
                        name={`${item.id}._date`}
                        
                      />
                    </TableCell>
                    <TableCell className="px-4 py-2 border-r border-gray-300">
                      <Input placeholder="entrer le rappels" name={`${item.id}._rappels`} />
                    </TableCell>
                    <TableCell className="px-4 py-2 border-r border-gray-300">
                      <Textarea
                        placeholder="Enter observation"
                        className="resize-none"
                        name={`${item.id}._observation`}
                      />
                    </TableCell>
                  </TableRow>

                )      
                )}
                <TableRowD />
              </TableBody>
            </Table>
            <FormMessage />
          </FormItem>
        )}
      />
    )
}
 
function TableRowD() {
  const [empty, setEmpty] = useState(true);
  const [type, setType] = useState("");

  const handleTypeChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setEmpty(value === "");
    setType(value);
  };
  return (
    <>
      <TableRow className="border-gray-500">
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            placeholder="entrer le type de vaccin"
            name={`${type}._type`}
            onChange={handleTypeChange}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            placeholder="entrer la date"
            type="date"
            name={`${type}._date`}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input placeholder="entrer le rappels" name={`${type}._rappels`} />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Textarea
            placeholder="Enter observation"
            className="resize-none"
            name={`${type}._observation`}
          />
        </TableCell>
      </TableRow>
      {!empty && <TableRowD />}
    </>
  );
}
