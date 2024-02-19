"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface FormProps {
  form: any;
}

const Antecedents: FC<FormProps> = ({ form, ...props }) => {
  const [isAutre, setAutres] = useState(false);
  const [isAcc_Tra_ant, setAcc_Tra_ants] = useState(false);
  const handlechange_Autre = () => {
    setAutres(!isAutre!);
  };
  const handlechange_Acc_Tra = () => {
    setAcc_Tra_ants(!isAcc_Tra_ant);
  };
  return (
    <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
      <div className="pt-2   text-center text-black text-2xl font-semibold font-serif">
        Antecedents Medicaux / Professionnels et Vaccinations
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" pl-[2%]  text-center  text-black text-xl font-semibold font-serif">
        Antecedents Medicaux :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="px-4 space-y-2">
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="antc_fam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antécédents Familiaux :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Antécédents Familiaux :"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                          This is your public display Delegation Medicale.
                        </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="antc_pers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antécédents Presonnels : </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Antécédents Presonnels"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display Formation.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" pl-[2%] text-center  text-black text-xl font-semibold font-serif">
        Antecedents Professionnels :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="px-4 space-y-2">
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="form_scol_profss"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Formation Scolaire et Professionnelle ::</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Formation Scolaire et Professionnelle ::"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                          This is your public display Delegation Medicale.
                        </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="actv_profss_anter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activités Professionnells Antèrieurs : : </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Activités Professionnells Antèrieurs :"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display Formation.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/*                          */}
      <div className="px-4 space-y-2">
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="accid_trav_service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accidents de Travail au service : </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer l' Accidents de Travail au service du patient"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="mald_con_service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maladies contractées au serice : </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer la Maladies contractées au serice du patient"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>

      <div className=" pl-[2%] text-center text-black text-xl font-semibold font-serif">
        Vaccinations :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="w-full  px-4">
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
                  <TableRowD />
                </TableBody>
              </Table>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
export default Antecedents;
function TableRowD() {
  const [empty, setEmpty] = useState(true);
  const [type, setType] = useState(""); 
  
  const handleTypeChange = (e: { target: { value: any; }; }) => {
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
            type="number"
            name={`${type}._date`} 
          />
        </TableCell>
        <TableCell className="px-4 py-2 border-r border-gray-300">
          <Input
            placeholder="entrer le rappels"
            name={`${type}._rappels`} 
          />
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
