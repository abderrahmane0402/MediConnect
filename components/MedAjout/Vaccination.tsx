import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Textarea } from "../ui/textarea";

const vaccTable = [
{ id: "B_C_G" },
{ id: "Hépatite B" },
  { id: "Hépatite A" },
  { id: "Diphtérie" },
  { id: "Tétanos" },
  { id: "Polimyélite" },
  { id: "Typhoide" },
  { id: "Rubéole" },
  { id: "Covid" },
];

const Vaccination = ({ formData, handleChange }: any) => {  // const [formData, setFormData] = useState({

  return (
    <FormField
      name="Vaccination"
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
              {vaccTable.map((item) => (
                <TableRow className="border-gray-500" key={item.id}>
                  <TableCell className="px-4 py-2 border-r border-gray-300">
                    {item.id}
                  </TableCell>
                  <TableCell className="px-4 py-2 border-r border-gray-300">
                    <Input
                      placeholder="entrer la date"
                      type="date"
                      name={`Vaccination.${item.id}.date_V`}
                      value={
                        formData.Vaccination?.find((v: any) => v.Type === item.id)?.date_V || ''
                      }
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell className="px-4 py-2 border-r border-gray-300">
                    <Input
                      placeholder="entrer le rappels"
                      name={`Vaccination.${item.id}.Rappels`}
                      value={
                        formData.Vaccination?.find((v: any) => v.Type === item.id)?.Rappels || ''
                      }
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell className="px-4 py-2 border-r border-gray-300">
                    <Textarea
                      placeholder="Enter observation"
                      className="resize-none"
                      name={`Vaccination.${item.id}.observation`}
                      value={
                        
                        formData.Vaccination?.find((v: any) => v.Type === item.id)?.observation || ''
                      }
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))}

              <TableRowD formData={formData} handleChange={handleChange} />
            </TableBody>
          </Table>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const TableRowD = ({ formData, handleChange }: any) => {
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
            name={`Vaccinationautre.${type}.Type`}
            onChange={handleTypeChange}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            placeholder="entrer la date"
            type="date"
            name={`Vaccinationautre.${type}.date_V`}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            placeholder="entrer le rappels"
            name={`Vaccinationautre.${type}.Rappels`}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Textarea
            placeholder="Enter observation"
            className="resize-none"
            name={`Vaccinationautre.${type}.observation`}
            onChange={handleChange}
          />
        </TableCell>
      </TableRow>
      {!empty && <TableRowD formData={formData} handleChange={handleChange} />}
    </>
  );
};

export default Vaccination;
