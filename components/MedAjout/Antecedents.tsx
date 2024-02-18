"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FC, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface FormProps {
    form: any; 
  }


const  Antecedents :FC<FormProps> = ({form,...props}) => {
const items = [
    {
      id: "Tabac",
      label: "Tabac",
    },
    {
      id: "Alcool",
      label: "Alcool",
    },
  ] as const;
  
  const vaccinations = [
    {
      id: "B.C.G",
      label: "B.C.G",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Hépatite_B",
      label: "Hépatite_B",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Diphère",
      label: "Diphère",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Tétanos",
      label: "Tétanos",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Poliomyélite",
      label: "Poliomyélite",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Typhoide",
      label: "Typhoide",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Rubéole",
      label: "Rubéole",
      date: "",
      rappel: "",
      observation: "",
    },
    {
      id: "Autres",
      label: "Autres",
      date: "",
      rappel: "",
      observation: "",
    },
  ] as const;
  
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
                <div className=" h-8 text-center text-black text-2xl font-semibold font-['Inter']">
                  Antecedents Medicaux / Professionnels et Vaccinations
                  <br />
                </div>
                <div className=" pl-[2%]   text-black text-xl font-semibold font-['Inter']">
                  Antecedents Medicaux :
                  <br />
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="antc_fam"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Antécédents Familiaux : </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer l'Antécédents Familiaux du patient"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="antc_pers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Antécédents Presonnels </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer le Antécédents presonnels du patient"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="prise_medic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prise Mèdicamenteuse : </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Entrer le Prise mèdicamenteuse du patient"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* <div className="w-full md:w-1/2 px-4 grid grid-cols-2 gap-4"> */}

                  <div className="w-full md:w-1/2 px-4 flex items-center space-x-4">
                    <FormField
                    //   control={form.control}
                      name="items"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Addiction :</FormLabel>
                          {items.map((item) => (
                            <FormField
                              key={item.id}
                            //   control={form.control}
                              name="items"
                              render={({ field }) => {
                                return (
                                  <div className="flex items-center space-x-2">
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            item.id
                                          )}
                                          onCheckedChange={(checked: any) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  item.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value: string) =>
                                                      value !== item.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                    //   control={form.control}
                      name="Autres"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              defaultValue=""
                              name="Autres"
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value="Autres"
                                id="Autres"
                                onClick={handlechange_Autre}
                              />
                              <Label htmlFor="Autres">Autres</Label>
                            </RadioGroup>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {isAutre && (
                      <>
                        <div className="  w-full  ">
                          <FormField
                            // control={form.control}
                            name="Autres"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Autres : </FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Entrer autre addiction du patient"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />{" "}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className=" pl-[2%]  text-black text-xl font-semibold font-['Inter']">
                  Antecedents Professionnels :
                  <br />
                </div>
                <div className="flex flex-row w-full gap-2  ">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="form_scol_profss"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Formation Scolaire et Professionnelle :{" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer la Formation Scolaire et Professionnelle du patient"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="actv_profss_anter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Activités Professionnells Antèrieurs :{" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer le Activités Professionnells Antèrieurs  du patient"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/*                          */}
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                    //   control={form.control}
                      name="mald_con"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Maladies contractées au serice :{" "}
                          </FormLabel>
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

                  <div className="w-full md:w-1/2 px-4 flex items-center space-x-2">
                    <FormField
                    //   control={form.control}
                      name="accid_trav_antr"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Accidents de Travail Antèrieurs :{" "}
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              defaultValue=""
                              name="accid_trav_antr"
                              className="flex  items-center space-x-2"
                            >
                              <div className="flex  items-center space-x-2">
                                <RadioGroupItem
                                  value="true"
                                  id="accid_trav_antr"
                                  onClick={handlechange_Acc_Tra}
                                />
                                <Label htmlFor="accid_trav_antr">oui</Label>
                                <RadioGroupItem
                                  value="false"
                                  id="accid_trav_antr"
                                  onClick={handlechange_Acc_Tra}
                                />
                                <Label htmlFor="accid_trav_antr">Non</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {isAcc_Tra_ant && (
                      <>
                        <div className=" flex w-full md:w-1/2 ">
                          <FormField
                            // control={form.control}
                            name="nature_accid"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nature d'accidant : </FormLabel>
                                <FormControl>
                                  <Input
                                    type=""
                                    placeholder="Entrer la nature de accidants  du patient"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />{" "}
                        </div>
                        <div className=" flex w-full md:w-1/2 ">
                          <FormField
                            // control={form.control}
                            name="ipp"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>IPP : </FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="Entrer la IPP  du patient"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />{" "}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className=" pl-[2%]  text-black text-xl font-semibold font-['Inter']">
                  Vaccinations :
                  <br />
                </div>
                <div className="w-full  px-4">
                  <FormField
                    // control={form.control}
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
                            {vaccinations.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <FormField
                                    key={item.id}
                                    name={`vaccinations.${item.id}`}
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={
                                              field.value?.id === item.id
                                            }
                                            //@ts-ignore
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? form.setValue(
                                                    //@ts-ignore
                                                    `vaccinations.${item.id}`,
                                                    {
                                                      id: item.id,
                                                      date: "",
                                                      rappel: "",
                                                      observation: "",
                                                    }
                                                  )
                                                : form.setValue(
                                                    //@ts-ignore
                                                    `vaccinations.${item.id}`,
                                                    null
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </TableCell>
                                <TableCell>
                                  <FormField
                                    name="vaccinations.${item.id}.date"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            type="date"
                                            placeholder="Enter date"
                                            {...form.register(
                                              //@ts-ignore
                                              `vaccinations.${item.id}.date`
                                            )}
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </TableCell>
                                <TableCell>
                                  <FormField
                                    name="vaccinations.${item.id}.rappel"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            placeholder="Enter rappel"
                                            {...form.register(
                                              //@ts-ignore
                                              `vaccinations.${item.id}.rappel`
                                            )}
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </TableCell>
                                <TableCell>
                                  <FormField
                                    name="vaccinations.${item.id}.observation"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Textarea
                                            placeholder="Enter observation"
                                            className="resize-none"
                                            //@ts-ignore
                                            {...form.register(
                                              //@ts-ignore
                                              `vaccinations.${item.id}.observation`
                                            )}
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
    )
}
export default Antecedents;