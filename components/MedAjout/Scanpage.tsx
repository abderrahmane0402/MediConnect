"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import profilePic from "../../public/avatars/lungs-lung-svgrepo-com.svg";
import { CardTitle } from "../ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Dropzone from "../Drag&Drop";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import DrawerScan from "./DrawerScan";

export default function Scanpage() {
  function handl(file: File): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" flex flex-col   {isVisible ? '' : 'hidden'} ">
      <div className=" py-2  text-center text-black text-2xl font-semibold font-serif">
        Premier Examen Medical
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="px-4 space-y-2 py-3">
        <div className="w-full  ">
          <FormField
            name="date_exam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date d'Examen </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer la Date d'Examen"
                    type="date"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            name="name_Doc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Docteur </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Docteur"
                    {...field}
                    defaultValue="Dr.El Kahoui"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="w-full px-4 py-3 ">
        <FormField
          name="post_Trav"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Poste de travail (caractéristique, risques ...){" "}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Entrer le Poste de travail  du patient"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" px-4 grid grid-cols-4 gap-2 w-full ">
        <div className="grid grid-row-4 gap-2 py-4">
          <div className="w-full row-span-2 items-center ">
            <FormField
              name="poids"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Poids : </FormLabel>
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
          <div className="w-full py-3 row-span-2 ">
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
        <div className="border-l-2  border-green-600 border-lg">
          <div className="pl-3 py-3">
            <p>Appareil auditif :</p>
            <FormField
              name="og_appareil_auditif"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OG : </FormLabel>
                  <FormControl>
                    <Input placeholder="Remplire OG" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="od_appareil_auditif"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OD : </FormLabel>
                  <FormControl>
                    <Input placeholder="Remplire OD" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="Scan_appareil_auditif"
              render={({ field }) => (
                <FormItem>
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
                              Upload File
                            </h1>
                            {/* <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={undefined} /> */}
                          </div>
                          <DrawerFooter>
                            <div className="flex flex-col justify-center items-center">
                              <Button className="w-[50%]">Submit</Button>
                              <DrawerClose asChild>
                                <Button variant="outline" className="w-[50%]">
                                  Cancel
                                </Button>
                              </DrawerClose>
                            </div>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="col-span-2 border-l-2  border-green-600 border-lg">
          <div className="pl-3 py-3">
            <p>Appareil Oculaire :</p>

            <div className=" grid grid-cols-5 gap-4">
              <div className="py-8">
                <div className="grid grid-rows-7 gap-8">
                  <p className="row-span-3"> de près : </p>
                  <p className="row-span-3"> de loin : </p>
                </div>
              </div>
              <div className=" grid grid-rows-7 gap-2 col-span-2">
                <p className="text-center ">SC :</p>
                <div className="grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="SC_pres_og_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="SC_pres_od_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="SC_loin_og_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="SC_loin_od_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="pr-4 grid grid-rows-7 gap-2 col-span-2">
                <p className="text-center ">AC :</p>

                <div className=" grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="AC_pres_og_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="AC_pres_od_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="AC_loin_og_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="AC_loin_od_appareil_oculaire"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>

      <div className="w-full p-4  ">
        <FormField
          // control={form.control}
          name="teguments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téguments </FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer la teguments du patient"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 px-4">
        <div className="py-4 grid grid-rows-4 gap-2 ">
          <p className="h-10">Examen radiologique :</p>
          <div className="row-span-2 flex justify-center">
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={95}
              height={95}
              className=" justify-items-center"
            />
          </div>

          <FormField
            // control={form.control}
            name="observation_examen_radiologique"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="observation sur le scan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="border-l-2 col-span-4  border-green-600 border-lg grid grid-rows-3 p-4 gap-3">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <FormField
                // control={form.control}
                name="obser_respir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appareil respiratoire - rhinopharynx </FormLabel>
                    <FormControl>
                      <Input
                        type=""
                        placeholder="observation sur le scan d'Appareil respiratoire - rhinopharynx"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>drawer scan</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <FormField
                // control={form.control}
                name="observ_app_cardiovas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appareil cadiovasculaire </FormLabel>
                    <FormControl>
                      <Input
                        type=""
                        placeholder="observation sur le scan d'Appareil cadiovasculaire "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>drawer scan</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <FormField
              // control={form.control}
              name="pouls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pouls : </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="entrer le nombre de pulsation "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="ta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> T.A :</FormLabel>
                  <FormControl>
                    <Input type="" placeholder="saisir le T.A  " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="varices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Varices :</FormLabel>
                  <FormControl>
                    <Input type="" placeholder="Varices " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 p-4">
        <div className="col-span-4">
          <FormField
            //   control={form.control}
            name="obser_appr_digestif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil digestif :</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer votre observation " {...field} />
                </FormControl>
                {/* <FormDescription>
                          This is your public display Delegation Medicale.
                        </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-row-4 gap-2">
            <div className="row-start-4 row-span-2">
              <DrawerScan
                name={"scan_Appareil_digestif"}
                placeholder={" Appareil digestif :"}
              />
            </div>
          </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="px-4 space-y-2 py-3">
        <div className="grid grid-cols-5 gap-3 ">
          <div className="col-span-4">
            <FormField
              //   control={form.control}
              name="obser_appr_hema_rétic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appareil hématologique et réticulaire :</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrer observation :" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-row-4 gap-2">
            <div className="row-start-4 row-span-2">
              <DrawerScan
                name={"scan_Examen_Radoilogique"}
                placeholder={"Appareil hématologique et réticulaire :"}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="w-auto  ">
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
          <div className="w-auto ">
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
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" p-4">
        <FormField
          //   control={form.control}
          name="glande_endo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Glandes endocriniennes :</FormLabel>
              <FormControl>
                <Input placeholder="Glandes endocriniennes " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 px-4 ">
        <div className="py-4 col-span-3   ">
          <FormField
            //   control={form.control}
            name="syst_nerveux"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Système nerveux :</FormLabel>
                <FormControl>
                  <Input placeholder="saisir votre observation " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //   control={form.control}
            name="tremblement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tremblement :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="saisir votre observation sur le tremblement "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //   control={form.control}
            name="equilibre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Equilibre :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="saisir votre observation sur l'equilibre "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //   control={form.control}
            name="réflexes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Réflexes :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="saisir votre observation sur le réflexes "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" col-span-2 py-4 items-center pl-4 w-full grid grid-rows-1   border-l-2 border-green-600 border-lg">
          <FormField
            //   control={form.control}
            name="syst_nerveux"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Système nerveux :</FormLabel>
                <FormControl>
                  <Input placeholder="saisir votre observation " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 p-4">
        <div className="col-span-4">
          <FormField
            //   control={form.control}
            name="obser_appr_locomotor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil locomoteur :</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer votre observation " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <p>fghjgjdfgghd</p>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-3 gap-3 px-4 ">
        <div className="grid grid-rows-2 gap-3  py-4">
          <FormField
            //   control={form.control}
            name="obser_appr_génital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil génital :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer votre observation sur appareil génital  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <p>fghjgjdfgghd</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3  border-l-2 border-green-600 border-lg p-4  ">
          <FormField
            //   control={form.control}
            name="obser_appr_urinaire"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil urinaire :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer votre observation sur appareil urinaire  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <p>fghjgjdfgghd</p>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-3  border-l-2 border-green-600 border-lg p-4 ">
          <FormField
            //   control={form.control}
            name="alb"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alb :</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer l'alb   " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //   control={form.control}
            name="sucre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sucre :</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer le sucre   " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="p-4">
        <FormField
          //   control={form.control}
          name="autres_constatations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Autres constatations :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer  Autres constatations  "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="p-4">
        <FormField
          //   control={form.control}
          name="examens_complémentaires"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Examens complémentaires :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer l'Examens complémentaires   "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="p-4">
        <FormField
          //   control={form.control}
          name="conclu_medical"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conclusions Médicales :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer conclusions Médicales  "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
    </div>
  );
}
{
  /* <div className="flex flex-row w-full gap-2 ">
        <div className="w-full md:w-1/4 p-4">
        <DrawerScan name={"Examen_Radoilogique"} placeholder={"Examen Radoilogique :"} />
          {/* <FormField
            // control={form.control}
            name="Examen_Radoilogique"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Examen Radoilogique : </FormLabel>
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
                          {/* <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={undefined} /> */
}
{
  /* </div>
                        <DrawerFooter>
                          <div className="flex flex-col justify-center items-center">
                            <Button className="w-[50%]">Submit</Button>
                            <DrawerClose asChild>
                              <Button variant="outline" className="w-[50%]">
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
                            /> */
}
{
  /* </FormControl>
                <FormMessage />
              </FormItem> */
}

//   </div>
//   <div className="w-full md:w-1/4 px-4">
//     <FormField
//       // control={form.control}
//       name="Examen_Radoilogique"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Appareil digestif : </FormLabel>
//           <FormControl>
//             <div className=" flex p1-2 ">
//               <Drawer>
//                 <DrawerTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="bg-[#A9DAED] w-full"
//                   >
//                     Ajouter Scan
//                   </Button>
//                 </DrawerTrigger>
//                 <DrawerContent>
//                   <div className="mx-auto w-full  text-center">
//                     <DrawerHeader>
//                       <DrawerTitle>
//                         Enter le scan de l'appareil digestif
//                       </DrawerTitle>
//                       <DrawerClose />
//                     </DrawerHeader>
//                     <h1 className="title text-xl font-bold">
//                       Upload Files
//                     </h1>
//                     {/* <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={undefined} /> */}
//                   </div>
//                   <DrawerFooter>
//                     <div className="flex flex-col justify-center items-center">
//                       <Button className="w-[50%]">Submit</Button>
//                       <DrawerClose asChild>
//                         <Button variant="outline" className="w-[50%]">
//                           Cancel
//                         </Button>
//                       </DrawerClose>
//                     </div>
//                   </DrawerFooter>
//                 </DrawerContent>
//               </Drawer>
//             </div>

//             {/* <Input
//                         type=""
//                         placeholder="Entrer Examen_Radoilogique"
//                         {...field}
//                       /> */}
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   </div>
//   <div className="w-full md:w-1/4 px-4">
//     <FormField
//       // control={form.control}
//       name="Examen_Radoilogique"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Appareil hématologique et réticulaire : </FormLabel>
//           <FormControl>
//             <div className=" flex p1-2 ">
//               <Drawer>
//                 <DrawerTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="bg-[#A9DAED] w-full"
//                   >
//                     Ajouter Scan
//                   </Button>
//                 </DrawerTrigger>
//                 <DrawerContent>
//                   <div className="mx-auto w-full  text-center">
//                     <DrawerHeader>
//                       <DrawerTitle>
//                         <div className="text-center">
//                           Enter le scan de l'Appareil hématologique et
//                           réticulaire
//                         </div>
//                       </DrawerTitle>
//                       <DrawerClose />
//                     </DrawerHeader>
//                     <h1 className="title text-xl font-bold">
//                       Upload Files
//                     </h1>
//                     <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={handl} />
//                   </div>
//                   <DrawerFooter>
//                     <div className="flex flex-col justify-center items-center">
//                       <Button className="w-[50%]">Submit</Button>
//                       <DrawerClose asChild>
//                         <Button variant="outline" className="w-[50%]">
//                           Cancel
//                         </Button>
//                       </DrawerClose>
//                     </div>
//                   </DrawerFooter>
//                 </DrawerContent>
//               </Drawer>
//             </div>

//             {/* <Input
//                         type=""
//                         placeholder="Entrer Examen_Radoilogique"
//                         {...field}
//                       /> */}
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   </div>
// </div> */}
