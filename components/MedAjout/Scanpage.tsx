
"use client";
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
import { Checkbox } from "@radix-ui/react-checkbox";
import { CardTitle } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FC, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Dropzone from "../Drag&Drop";
export default function Scanpage() {
    return (
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
                <div className="flex items-center justify-center">
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
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-2 border justify-center flex bg-[#66C3E8] border-[#A9DAED]  rounded-lg"></div>
                </div>
                <div className="flex  w-full gap-2 ">               
                  <div className="w-full md:w-1/3 px-4 flex items-center ">
                    <FormField
                      // control={form.control}
                      name="appr_auditif"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appareil auditif : </FormLabel>
                          <FormControl>
                            <div className="flex justify-center items-center w-full gap-8  ">
                              <div className="flex w-1/3   ">
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
                              <div className="flex w-1/3  ">
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
                  </div>
                  <div className="w-full md:w-2/3 px-4 flex items-center ">
                    <FormField
                      // control={form.control}
                      name="appr_Oculaire"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appareil Oculaire : </FormLabel>
                          <FormControl>
                            <div className="flex justify-center items-center w-full  gap-5 ">
                              <div className="flex justify-center items-center w-full  gap-5 ">
                                <FormLabel className="w-full ">
                                  Sans Correction
                                </FormLabel>
                                <div className="flex w-1/3   ">
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
                                <div className="flex w-1/3  ">
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
                              <div className="flex justify-center items-center w-full  gap-5 ">
                                <FormLabel className="w-full ">
                                  Avec Correction
                                </FormLabel>
                                <div className="flex w-1/3   ">
                                  <RadioGroup
                                    defaultValue=""
                                    name="appr_occulaire_avecCorr_pres"
                                  >
                                    <FormLabel> De prés : </FormLabel>
                                    <div className="flex  gap-3 ">
                                      <RadioGroupItem
                                        value="appr_occulaire_avecCorr_pres_OD"
                                        id="appr_occulaire_avecCorr_pres_OD"
                                        // onClick={handlechange_Acc_Tra}
                                      />
                                      <Label htmlFor="appr_occulaire_avecCorr_pres_OD">
                                        OD
                                      </Label>
                                      <RadioGroupItem
                                        value="appr_occulaire_avecCorr_pres_OG"
                                        id="appr_occulaire_avecCorr_pres_OG"
                                      />
                                      <Label htmlFor="appr_occulaire_avecCorr_pres_OG">
                                        OG
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="flex w-1/3  ">
                                  <RadioGroup
                                    defaultValue=""
                                    name="appr_occulaire_avecCorr_loin"
                                  >
                                    <FormLabel> De loin : </FormLabel>
                                    <div className="flex gap-3 ">
                                      <RadioGroupItem
                                        value="appr_occulaire_avecCorr_loin_OD"
                                        id="appr_occulaire_avecCorr_loin_OD"
                                      />
                                      <Label htmlFor="appr_occulaire_avecCorr_loin_OD">
                                        OD
                                      </Label>
                                      <RadioGroupItem
                                        value="appr_occulaire_avecCorr_loin_OG"
                                        id="appr_occulaire_avecCorr_loin_OG"
                                      />
                                      <Label htmlFor="appr_occulaire_avecCorr_loin_OG">
                                        OG
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                              </div>
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
                  </div>
                </div>
                <div className="flex items-center justify-center">
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
                                    <Button className="w-[50%]">Submit</Button>
                                    <DrawerClose asChild>
                                      <Button variant="outline" className="w-[50%]">Cancel</Button>
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
                                    <Button className="w-[50%]">Submit</Button>
                                    <DrawerClose asChild>
                                      <Button variant="outline" className="w-[50%]">Cancel</Button>
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
                                    <Button className="w-[50%]">Submit</Button>
                                    <DrawerClose asChild>
                                      <Button variant="outline" className="w-[50%]">Cancel</Button>
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
    )
}