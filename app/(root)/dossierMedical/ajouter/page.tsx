"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { tree } from "next/dist/build/templates/app-page";
import { Card, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Dropzone from "@/components/Drag&Drop";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  Autres: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  prise_medic: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  antc_pers: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  form_scol_profss: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  // vaccinations.${item.id}: z.string().min(2, {
  //   message: "Nom must be at least 2 characters.",
  // }),
  ipp: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  nature_accid: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  accid_trav_antr: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  mald_con: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  actv_profss_anter: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  nature_empl: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  antc_fam: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  date_empl: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),

  ville: z.string().min(2, {
    message: "Nom must be at least 2 characters.",
  }),
  situ_fam: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  grade: z.string().min(2, {
    message: "grade must be at least 2 characters.",
  }),
  ppr: z.number().min(1, { message: "grade must be at least 2 characters." }),
  date_naiss: z.string().min(4, { message: "Too old" }),
  Deleg_Medic: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  address: z
    .string()
    .min(2, { message: "adresss must be at least 2 characters" }),

  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  vaccinations: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  Form_Sani_Hpt: z.string().min(2, {
    message: "Formation sanitaire  must be at least 2 characters.",
  }),
});

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

export default function RootPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      Deleg_Medic: "",
      Form_Sani_Hpt: "",
      items: ["", ""],
      vaccinations: ["", ""],
      nom: "", // Add these lines
      situ_fam: "", // Add these lines
      grade: "", // Add these lines
      ppr: 1,
      ville: "",
      date_naiss: "",
      nature_empl: "",
      antc_fam: "",
      date_empl: "",
      Autres: "",
      prise_medic: "",
      antc_pers: "",
      mald_con: "",
      actv_profss_anter: "",
      form_scol_profss: "",
    },
  });

  const handleSubmit = () => {};

  const last_page: number = 3;
  const [current_page, setCurrentPage] = useState(1);
  const [isAutre, setAutres] = useState(false);
  const [isAcc_Tra_ant, setAcc_Tra_ants] = useState(false);
  const handlechange_Autre = () => {
    setAutres(!isAutre!);
  };
  const handlechange_Acc_Tra = () => {
    setAcc_Tra_ants(!isAcc_Tra_ant);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, last_page));
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  //@ts-ignore
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <Form {...form}>
        <Card className="">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            {current_page === 1 && (
              <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
                <CardTitle className=" h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
                  Information Personnelle du Patient
                  <br />
                </CardTitle>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4 ">
                    <FormField
                      control={form.control}
                      name="Deleg_Medic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delegation Medicale</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer Delegation Medicale"
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
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      control={form.control}
                      name="Form_Sani_Hpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Formation Santaire/Hopital </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer Formation Santaire/Hopital"
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
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le nom du patient"
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
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prenom </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le prenom du patient"
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
                      control={form.control}
                      name="date_naiss"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date de naissance </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              placeholder="Entrer la date de naissance  du patient"
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
                      control={form.control}
                      name="ville"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ville </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer la ville du patient"
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
                      control={form.control}
                      name="situ_fam"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Situation Familaile </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer la Situation Familaile  du patient"
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
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer l'adresse du patient"
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
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer la Grade   du patient"
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
                      control={form.control}
                      name="ppr"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PPR </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Entrer le PPR du patient"
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
                      control={form.control}
                      name="nature_empl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nature de l'emploi occupé </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer la Nature de l'emploi occupé  du patient"
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
                      control={form.control}
                      name="date_empl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Depuis : </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Entrer la depuis : du patient"
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
              </div>
            )}
            {/* --------------------Anticedent Medicaux ----------------------------------- */}
            {current_page === 2 && (
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
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
                      name="items"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Addiction :</FormLabel>
                          {items.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
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
                      control={form.control}
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
                            control={form.control}
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
                <div className="flex items-center justify-center my-4">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className=" pl-[2%]  text-black text-xl font-semibold font-['Inter']">
                  Antecedents Professionnels :
                  <br />
                </div>
                <div className="flex flex-row w-full gap-2">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                <div className="flex items-center justify-center my-4">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className=" pl-[2%]  text-black text-xl font-semibold font-['Inter']">
                  Vaccinations :
                  <br />
                </div>
                <div className="w-full  px-4">
                  <FormField
                    control={form.control}
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
            )}
            {current_page === 3 && (
              <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
                <CardTitle className=" h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
                  Premier Examen Medical
                  <br />
                </CardTitle>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/2 px-4 ">
                    <FormField
                      name="date_exam"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date d'Examen </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer la Date d'Examen"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      name="name_Doc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Docteur </FormLabel>
                          <FormControl>
                            <Input placeholder="Entrer Docteur" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="post_Trav"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Poste de travail </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le Poste de travail  du patient"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="Risque_lies_post"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Risques liés au poste de travail{" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le Risques liés au poste de travail du patient"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="autre_risque_extra"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Autres Risque extra-professionnels :{" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer autres Risque extra-professionnels du patient"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* <div  className="flex items-center justify-center">
                <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div> */}
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="moyen_prevent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Moyens de prévention proposés </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le Moyens de prévention proposés "
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="poids"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Poids </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Entrer le poids du patient"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="taille"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Taille : </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Entrer taille du patient"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className="grid grid-cols-2 w-full gap-5 px-4">
                  <FormField
                    // control={form.control}
                    name="appr_auditif"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Appareil auditif : </FormLabel>
                        <FormControl>
                          <div className="flex justify-center items-center gap-8">
                            <div className="flex">
                              <RadioGroup
                                defaultValue=""
                                name="appr_auditif_OD"
                              >
                                <FormLabel> OD : </FormLabel>
                                <div className="flex  gap-3 ">
                                  <RadioGroupItem
                                    value="true"
                                    id="appr_auditif_OD"
                                  />
                                  <Label htmlFor="appr_auditif_OD">oui</Label>
                                  <RadioGroupItem
                                    value="false"
                                    id="appr_auditif_OD"
                                  />
                                  <Label htmlFor="appr_auditif_OD">Non</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="flex">
                              <RadioGroup
                                defaultValue=""
                                name="appr_auditif_OD"
                              >
                                <FormLabel> OG : </FormLabel>
                                <div className="flex gap-3 ">
                                  <RadioGroupItem
                                    value="true"
                                    id="appr_auditif_OG"
                                  />
                                  <Label htmlFor="appr_auditif_OG">oui</Label>
                                  <RadioGroupItem
                                    value="false"
                                    id="appr_auditif_OG"
                                  />
                                  <Label htmlFor="appr_auditif_OG">Non</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className=" flex pl-2 ">
                              <Drawer>
                                <DrawerTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="bg-[#A9DAED] w-full"
                                  >
                                    Ajouter Scan
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="mx-auto w-full max-w-sm text-center">
                                    <DrawerHeader>
                                      <DrawerTitle>Enter le scan</DrawerTitle>
                                      <DrawerClose />
                                    </DrawerHeader>
                                    <div className="p-4 pb-0">
                                      <img
                                        className="flex items-center justify-center "
                                        // src={selectedFile}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <DrawerFooter></DrawerFooter>
                                </DrawerContent>
                              </Drawer>
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    // control={form.control}
                    name="appr_Oculaire"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Appareil Oculaire : </FormLabel>
                        <FormControl>
                          <div className="flex w-full gap-5 justify-between px-5">
                            <div className="flex px-5 gap-5">
                              <FormLabel className="">
                                -- Sans Correction :
                              </FormLabel>
                              <div className="flex">
                                <RadioGroup
                                  defaultValue=""
                                  name="appr_occulaire_sansCorr_pres"
                                >
                                  <FormLabel> De prés : </FormLabel>
                                  <div className="flex  gap-3 ">
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_pres_OD"
                                      id="appr_occulaire_sansCorr_pres_OD"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_pres_OD">
                                      OD
                                    </Label>
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_pres_OG"
                                      id="appr_occulaire_sansCorr_pres_OG"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_pres_OG">
                                      OG
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <Separator orientation="vertical" />
                              <div className="flex">
                                <RadioGroup
                                  defaultValue=""
                                  name="appr_occulaire_sansCorr_loin"
                                >
                                  <FormLabel> De loin : </FormLabel>
                                  <div className="flex gap-3 ">
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_loin_OD"
                                      id="appr_occulaire_sansCorr_loin_OD"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_loin_OD">
                                      OD
                                    </Label>
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_loin_OG"
                                      id="appr_occulaire_sansCorr_loin_OG"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_loin_OG">
                                      OG
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </div>
                            <div className="flex px-5 gap-5">
                              <FormLabel className="">
                                -- Sans Correction :
                              </FormLabel>
                              <div className="flex">
                                <RadioGroup
                                  defaultValue=""
                                  name="appr_occulaire_sansCorr_pres"
                                >
                                  <FormLabel> De prés : </FormLabel>
                                  <div className="flex  gap-3 ">
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_pres_OD"
                                      id="appr_occulaire_sansCorr_pres_OD"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_pres_OD">
                                      OD
                                    </Label>
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_pres_OG"
                                      id="appr_occulaire_sansCorr_pres_OG"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_pres_OG">
                                      OG
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <Separator orientation="vertical" />
                              <div className="flex">
                                <RadioGroup
                                  defaultValue=""
                                  name="appr_occulaire_sansCorr_loin"
                                >
                                  <FormLabel> De loin : </FormLabel>
                                  <div className="flex gap-3 ">
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_loin_OD"
                                      id="appr_occulaire_sansCorr_loin_OD"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_loin_OD">
                                      OD
                                    </Label>
                                    <RadioGroupItem
                                      value="appr_occulaire_sansCorr_loin_OG"
                                      id="appr_occulaire_sansCorr_loin_OG"
                                    />
                                    <Label htmlFor="appr_occulaire_sansCorr_loin_OG">
                                      OG
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </div>
                            <Drawer>
                              <DrawerTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="bg-[#A9DAED]"
                                >
                                  Ajouter Scan
                                </Button>
                              </DrawerTrigger>
                              <DrawerContent>
                                <div className="mx-auto w-full max-w-sm text-center">
                                  <DrawerHeader>
                                    <DrawerTitle>Enter le scan</DrawerTitle>
                                    <DrawerClose />
                                  </DrawerHeader>
                                  <div className="p-4 pb-0">
                                    <img
                                      className="flex items-center justify-center "
                                      // src={selectedFile}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <DrawerFooter></DrawerFooter>
                              </DrawerContent>
                            </Drawer>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      // control={form.control}
                      name="teguments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téguments </FormLabel>
                          <FormControl>
                            <Input
                              type=""
                              placeholder="Entrer la teguments du patient"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      // control={form.control}
                      name="gangloins"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gangloins : </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Entrer la Gangloins "
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4">
                    <FormField
                      name="rate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rate </FormLabel>
                          <FormControl>
                            <Input
                              // type="number"
                              placeholder="Entrer le Rate"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full md:w-1/4 px-4">
                    <FormField
                      // control={form.control}
                      name="Examen_Radoilogique"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Examen_Radoilogique : </FormLabel>
                          <FormControl>
                            <div className=" flex p1-2 ">
                              <Drawer>
                                <DrawerTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="bg-[#A9DAED] w-full"
                                  >
                                    Ajouter Scan
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="mx-auto w-full text-center">
                                    <h1 className="title text-xl font-bold">
                                      Upload Files
                                    </h1>
                                    <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" />
                                  </div>
                                  <DrawerFooter>
                                    <div className="flex flex-col justify-center items-center">
                                      <Button className="w-[50%]">
                                        Submit
                                      </Button>
                                      <DrawerClose asChild>
                                        <Button
                                          variant="outline"
                                          className="w-[50%]"
                                        >
                                          Cancel
                                        </Button>
                                      </DrawerClose>
                                    </div>
                                  </DrawerFooter>
                                </DrawerContent>
                              </Drawer>
                            </div>

                            {/* <Input
                              type=""
                              placeholder="Entrer Examen_Radoilogique"
                              {...field}
                            /> */}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-4">
                    <FormField
                      // control={form.control}
                      name="Examen_Radoilogique"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appareil digestif : </FormLabel>
                          <FormControl>
                            <div className=" flex p1-2 ">
                              <Drawer>
                                <DrawerTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="bg-[#A9DAED] w-full"
                                  >
                                    Ajouter Scan
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="mx-auto w-full  text-center">
                                    <DrawerHeader>
                                      <DrawerTitle>
                                        Enter le scan de l'appareil digestif
                                      </DrawerTitle>
                                      <DrawerClose />
                                    </DrawerHeader>
                                    <h1 className="title text-xl font-bold">
                                      Upload Files
                                    </h1>
                                    <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" />
                                  </div>
                                  <DrawerFooter>
                                    <div className="flex flex-col justify-center items-center">
                                      <Button className="w-[50%]">
                                        Submit
                                      </Button>
                                      <DrawerClose asChild>
                                        <Button
                                          variant="outline"
                                          className="w-[50%]"
                                        >
                                          Cancel
                                        </Button>
                                      </DrawerClose>
                                    </div>
                                  </DrawerFooter>
                                </DrawerContent>
                              </Drawer>
                            </div>

                            {/* <Input
                              type=""
                              placeholder="Entrer Examen_Radoilogique"
                              {...field}
                            /> */}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-4">
                    <FormField
                      // control={form.control}
                      name="Examen_Radoilogique"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Appareil hématologique et réticulaire :{" "}
                          </FormLabel>
                          <FormControl>
                            <div className=" flex p1-2 ">
                              <Drawer>
                                <DrawerTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="bg-[#A9DAED] w-full"
                                  >
                                    Ajouter Scan
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="mx-auto w-full  text-center">
                                    <DrawerHeader>
                                      <DrawerTitle>
                                        <div className="text-center">
                                          Enter le scan de l'Appareil
                                          hématologique et réticulaire
                                        </div>
                                      </DrawerTitle>
                                      <DrawerClose />
                                    </DrawerHeader>
                                    <h1 className="title text-xl font-bold">
                                      Upload Files
                                    </h1>
                                    <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" />
                                  </div>
                                  <DrawerFooter>
                                    <div className="flex flex-col justify-center items-center">
                                      <Button className="w-[50%]">
                                        Submit
                                      </Button>
                                      <DrawerClose asChild>
                                        <Button
                                          variant="outline"
                                          className="w-[50%]"
                                        >
                                          Cancel
                                        </Button>
                                      </DrawerClose>
                                    </div>
                                  </DrawerFooter>
                                </DrawerContent>
                              </Drawer>
                            </div>

                            {/* <Input
                              type=""
                              placeholder="Entrer Examen_Radoilogique"
                              {...field}
                            /> */}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </form>

          <div className="flex items-center justify-center gap-2  w-full pb-2 pt-7">
            <Button className=" " onClick={handlePrevPage}>
              Previous
            </Button>
            <div className=" pt-2 font-bold">
              {" "}
              {current_page}/{last_page}{" "}
            </div>
            {current_page != 3 && (
              <Button className=" " onClick={handleNextPage}>
                Next
              </Button>
            )}
            {current_page === 3 && <Button type="submit">Submit</Button>}
          </div>
        </Card>
      </Form>
    </div>
  );
}
