"use client";
import profilePic from "../../public/avatars/lungs-lung-svgrepo-com.svg";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import DrawerScan from "./DrawerScan";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { tree } from "next/dist/build/templates/app-page";
const Glandes = [
  { id: "Thyroïde", type: [{ id: "TSH" }, { id: "T3" }, { id: "T4" }] },
  { id: "Hypophyse" },
  { id: "Glandes surrénales" },
];
const Nevrose = [
  { id: "Anxiété", value: "Anxiété" },
  { id: "Depression", value: "Depression" },
  { id: "Stress", value: "Stress" },
  { id: "TOC", value: "TOC" },
];
const Psychose = [
  { id: "Bipolarité", value: "Bipolarité" },
  { id: "Schizophrénie", value: "Schizophrénie" },
  { id: "Paranoïaque ", value: "Paranoïaque " },
 
];
export default function Scanpage() {
  const [autresObs_ExaRad, setAutresObs_ExaRad] = useState(false);
  const [GlandesSelectTer, setGlandesSelectTer] = useState(false);
  const [GlandesSelectHyp, setGlandesSelectHyp] = useState(false);
  const [GlandesSelectGland, setGlandesSelectGland] = useState(false);
  const [Tremb_Obs, setTremb_Obs] = useState(false);
  const [Equil_Obs, setEquil_Obs] = useState(false);
  const [Reflex_Obs, setReflex_Obs] = useState(false);

  const [SystNerv_Maladie_neurologique, setSystNerv_Maladie_neurologique] =
    useState(false);
  const [Maladie_neurologique_Obs, setMaladie_neurologique_Obs] =
    useState(false);
  //Hernie_discale
  const [SystNerv_Hernie_discale, setSystNerv_Hernie_discale] = useState(false);
  const [Hernie_discale_Obs, setHernie_discale_Obs] = useState(false);
  //NCB
  const [SystNerv_NCB, setSystNerv_NCB] = useState(false);
  const [NCB_Obs, setNCB_Obs] = useState(false);
  //Lesion_cérébrale
  const [SystNerv_Lesion_cérébrale, setSystNerv_Lesion_cérébrale] =
    useState(false);
  const [Lesion_cérébrale_Obs, setLesion_cérébrale_Obs] = useState(false);

  return (
    <div className=" flex flex-col   {isVisible ? '' : 'hidden'} ">
      <div className=" py-2  text-center text-black text-2xl font-semibold font-serif">
        Premier Examen Médical
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
                    defaultValue="Dr Najdiwi"
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
                      type="text"
                      placeholder="Entrer le poids du patient (Kg)"
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
                      type="text"
                      placeholder="Entrer taille du patient (cm)"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className=" p-3 border-l-2 border-green-600 border-lg ">
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
          <div className="pt-3">
            <DrawerScan
              name={"Scan_appareil_auditif"}
              placeholder={"Appareil auditif"}
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
            <div className="">
              <DrawerScan
                name={"Scan_appareil_oculaire"}
                placeholder={"Appareil Oculaire"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>

      <div className="w-full p-4 grid grid-cols-4 gap-2 ">
        <FormField
          // control={form.control}
          name="teguments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téguments </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="bien_coloré" />
                    </FormControl>
                    <FormLabel className="font-normal">Bien Colorés</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="perles" />
                    </FormControl>
                    <FormLabel className="font-normal">Perles</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-3 pt-4">
          <FormField
            // control={form.control}
            name="autre_teguments"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="autre observation sur le teguments  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 px-4">
        <div className="py-4 grid grid-rows-5 gap-2 ">
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
                  <RadioGroup
                    onValueChange={(radio) => {
                      if (radio == "autres") setAutresObs_ExaRad(true);
                      else {
                        setAutresObs_ExaRad(false);
                      }
                      field.onChange(radio);
                    }}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ITN" />
                      </FormControl>
                      <FormLabel className="font-normal">ITN</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="autres" />
                      </FormControl>
                      <FormLabel className="font-normal">Autres</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {autresObs_ExaRad && (
            <FormField
              // control={form.control}
              name="autres_observation_examen_radiologique"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="observation sur le scan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="">
            <DrawerScan
              name={"Scan_examen_radiologique"}
              placeholder={"Examen radiologique"}
            />
          </div>
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
                      <Textarea
                        placeholder="observation sur le scan d'Appareil respiratoire - rhinopharynx"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-row-4 gap-2">
              <div className="row-start-4 row-span-2">
                <DrawerScan
                  name={"scan_Appareil_respir"}
                  placeholder={"Appareil respiratoire - rhinopharynx"}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <FormField
                // control={form.control}
                name="observ_app_cardiovas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appareil cadiovasculaire: </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="observation sur le scan d'Appareil cadiovasculaire "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-row-4 gap-2">
              <div className="row-start-4 row-span-2">
                <DrawerScan
                  name={"scan_Appareil_cardiovas"}
                  placeholder={"Appareil cadiovasculaire"}
                />
              </div>
            </div>
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
                  <Textarea
                    placeholder="Entrer votre observation "
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
                    <Textarea placeholder="Entrer observation :" {...field} />
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Entrer le Rate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="normale">Normale</SelectItem>
                      <SelectItem value="splenectomisé">
                        Splenectomisé
                      </SelectItem>
                      <SelectItem value="splenomegalie">
                        Splénomégalie
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="p-4">
        <FormField
          //   control={form.control}
          name="glande_endo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Glandes endocriniennes :</FormLabel>
              <div className="grid grid-cols-3 gap-4 p-3 ">
                {Glandes.map((item) => (
                  <div key={item.id} className="grid grid-flow-row gap-2">
                    <FormField
                      key={item.id}
                      // control={form.control}
                      name={item.id}
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={
                                  Array.isArray(field.value) &&
                                  field.value.includes(item.id)
                                }
                                onCheckedChange={(checked) => {
                                  const updatedValue = field.value || [];

                                  return checked
                                    ? field.onChange([...updatedValue, item.id])
                                    : field.onChange(
                                        updatedValue.filter(
                                          (value: any) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.id}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />

                    {item.id == "Thyroïde" && (
                      <div className="pl-2 pt-3 grid grid-flow-row gap-3 ">
                        <div>
                          <FormField
                            name="Sous_Gland"
                            render={({ field }) => (
                              <FormItem>
                                <Select
                                  onValueChange={(selectedValue) => {
                                    field.onChange(selectedValue);
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Entrer Maladies contractées au serice du patient" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {item.type?.map((itemType) => (
                                      <SelectItem
                                        key={itemType.id}
                                        value={itemType.id}
                                      >
                                        {itemType.id}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div id={`${item.id}._obser`}>
                          <FormField
                            // control={form.control}
                            name={`${item.id}._obser`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={(radio) => {
                                      if (radio == "autres")
                                        setGlandesSelectTer(true);
                                      else {
                                        setGlandesSelectTer(false);
                                      }
                                      field.onChange(radio);
                                    }}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="RAS" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        RAS
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="autres" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Autres
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {GlandesSelectTer && (
                            <div className="pt-2">
                              <FormField
                                // control={form.control}
                                name={`${item.id}._obser_autre`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="observation sur le scan"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          )}
                        </div>
                        <DrawerScan
                          name={`${item.id}._Scan`}
                          placeholder={item.id}
                        />
                      </div>
                    )}
                    {item.id === "Hypophyse" && (
                      <div className="pl-2 pt-3 grid grid-flow-row gap-3">
                        <div id={`${item.id}._obser`}>
                          <FormField
                            // control={form.control}
                            name={`${item.id}._obser`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={(radio) => {
                                      if (radio == "autres")
                                        setGlandesSelectHyp(true);
                                      else {
                                        setGlandesSelectHyp(false);
                                      }
                                      field.onChange(radio);
                                    }}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="RAS" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        RAS
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="autres" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Autres
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {GlandesSelectHyp && (
                            <div className="pt-2">
                              <FormField
                                // control={form.control}
                                name={`${item.id}._obser_autre`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="observation sur le scan"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          )}
                        </div>
                        <DrawerScan
                          name={`${item.id}._Scan`}
                          placeholder={item.id}
                        />
                      </div>
                    )}
                    {item.id === "Glandes surrénales" && (
                      <div className="pl-2 pt-3 grid grid-flow-row gap-3">
                        <div id={`${item.id}._obser`}>
                          <FormField
                            // control={form.control}
                            name={`${item.id}._obser`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={(radio) => {
                                      if (radio == "autres")
                                        setGlandesSelectGland(true);
                                      else {
                                        setGlandesSelectGland(false);
                                      }
                                      field.onChange(radio);
                                    }}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="RAS" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        RAS
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="autres" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Autres
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {GlandesSelectGland && (
                            <div className="pt-2">
                              <FormField
                                // control={form.control}
                                name={`${item.id}._obser_autre`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="observation sur le scan"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          )}
                        </div>
                        <DrawerScan
                          name={`${item.id}._Scan`}
                          placeholder={item.id}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-flow-col gap-4 px-4 ">
        <div className="py-4 col-span-3 grid grid-flow-row gap-2   ">
          <div className="grid grid-flow-row gap-3">
            <FormLabel>Système nerveux :</FormLabel>
            {/* //// Maladie neurologique */}
            <div className="pt-2 pl-6">
              <div>
                <FormField
                  name="SystNerv_Maladie_neurologique"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) setSystNerv_Maladie_neurologique(true);
                            else setSystNerv_Maladie_neurologique(false);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Maladie neurologique
                      </FormLabel>
                    </FormItem>
                  )}
                />
                {SystNerv_Maladie_neurologique && (
                  <div>
                    <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                      <div id={`SystNerv_Maladie_neurologique_obser`}>
                        <FormField
                          // control={form.control}
                          name={`SystNerv_Maladie_neurologique_obser`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    if (radio == "autres")
                                      setMaladie_neurologique_Obs(true);
                                    else {
                                      setMaladie_neurologique_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="RAS" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      RAS
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="autres" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Autres
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {Maladie_neurologique_Obs && (
                          <div className="pt-2">
                            <FormField
                              // control={form.control}
                              name={`SystNerv_Maladie_neurologique_obser_autre`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      <DrawerScan
                        name={`SystNerv_Maladie_neurologique_Scan`}
                        placeholder={"Maladie neurologique"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* //Hernie_discale */}
            <div className="pl-6">
              <div>
                <FormField
                  name="SystNerv_Hernie_discale"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) setSystNerv_Hernie_discale(true);
                            else setSystNerv_Hernie_discale(false);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Hernie discale
                      </FormLabel>
                    </FormItem>
                  )}
                />
                {SystNerv_Hernie_discale && (
                  <div>
                    <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                      <div id={`SystNerv_Hernie_discale_obser`}>
                        <FormField
                          // control={form.control}
                          name={`SystNerv_Hernie_discale_obser`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    if (radio == "autres")
                                      setHernie_discale_Obs(true);
                                    else {
                                      setHernie_discale_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="RAS" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      RAS
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="autres" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Autres
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {Hernie_discale_Obs && (
                          <div className="pt-2">
                            <FormField
                              // control={form.control}
                              name={`SystNerv_Hernie_discale_obser_autre`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      <DrawerScan
                        name={`SystNerv_Hernie_discale_Scan`}
                        placeholder={"Hernie discale"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* NCB  */}
            <div className="pl-6">
              <div>
                <FormField
                  name="SystNerv_NCB"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) setSystNerv_NCB(true);
                            else setSystNerv_NCB(false);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">NCB</FormLabel>
                    </FormItem>
                  )}
                />
                {SystNerv_NCB && (
                  <div>
                    <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                      <div id={`SystNerv_NCB_obser`}>
                        <FormField
                          // control={form.control}
                          name={`SystNerv_NCB_obser`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    if (radio == "autres") setNCB_Obs(true);
                                    else {
                                      setNCB_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="RAS" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      RAS
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="autres" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Autres
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {NCB_Obs && (
                          <div className="pt-2">
                            <FormField
                              // control={form.control}
                              name={`SystNerv_NCB_obser_autre`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      <DrawerScan
                        name={`SystNerv_NCB_Scan`}
                        placeholder={"NCB"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Lesion_cérébrale */}
            <div className="pl-6">
              <div>
                <FormField
                  name="SystNerv_Lesion_cérébrale"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) setSystNerv_Lesion_cérébrale(true);
                            else setSystNerv_Lesion_cérébrale(false);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Lesion cérébrale
                      </FormLabel>
                    </FormItem>
                  )}
                />
                {SystNerv_Lesion_cérébrale && (
                  <div>
                    <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                      <div id={`SystNerv_Lesion_cérébrale_obser`}>
                        <FormField
                          // control={form.control}
                          name={`SystNerv_Lesion_cérébrale_obser`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    if (radio == "autres")
                                      setLesion_cérébrale_Obs(true);
                                    else {
                                      setLesion_cérébrale_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="RAS" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      RAS
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="autres" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Autres
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {Lesion_cérébrale_Obs && (
                          <div className="pt-2">
                            <FormField
                              // control={form.control}
                              name={`SystNerv_Lesion_cérébrale_obser_autre`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      <DrawerScan
                        name={`SystNerv_Lesion_cérébrale_Scan`}
                        placeholder={"Lesion cérébrale"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <FormLabel>Tremblement :</FormLabel>
            <FormField
              //   control={form.control}
              name="tremblement"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        if (radio == "Oui") setTremb_Obs(true);
                        else {
                          setTremb_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Non" />
                        </FormControl>
                        <FormLabel className="font-normal">Non</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Oui" />
                        </FormControl>
                        <FormLabel className="font-normal">Oui</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            {Tremb_Obs && (
              <div className="pt-2 ">
                <FormField
                  // control={form.control}
                  name={`tremblement_autres`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le tremblement "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div>
            <FormLabel>Equilibre :</FormLabel>
            <FormField
              //   control={form.control}
              name="equilibre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        if (radio == "Non") setEquil_Obs(true);
                        else {
                          setEquil_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Oui" />
                        </FormControl>
                        <FormLabel className="font-normal">Oui</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Non" />
                        </FormControl>
                        <FormLabel className="font-normal">Non</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            {Equil_Obs && (
              <div className="pt-2 ">
                <FormField
                  // control={form.control}
                  name={`Equilibre_autres`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le Equilibre "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div>
            <FormLabel>Réflexes :</FormLabel>
            <FormField
              //   control={form.control}
              name="réflexes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        if (radio == "Non") setReflex_Obs(true);
                        else {
                          setReflex_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Bien" />
                        </FormControl>
                        <FormLabel className="font-normal">Bien</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Non" />
                        </FormControl>
                        <FormLabel className="font-normal">Non</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            {Reflex_Obs && (
              <div className="pt-2 ">
                <FormField
                  // control={form.control}
                  name={`Réflexes_autres`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le Réflexes "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
        </div>

        <div className=" col-span-2 py-4  pl-4 w-full grid grid-flow-row    border-l-2 border-green-600 border-lg">
          <FormLabel>Psychisme :</FormLabel>
          <div className="pl-2">
          <FormItem>
              <FormLabel>Nevrose : </FormLabel>
          {Nevrose.map((item) => (
                <FormField
                  key={item.value}
                  name="Nevrose"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.value}
                        className="flex flex-row items-start space-x-3 space-y-0 pl-3"
                      >
                        <FormControl>
                          
                          <Checkbox
                            checked={field.value?.includes(item.value)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.onChange([
                                  ...(field.value || []),
                                  item.value,
                                ]);
                              } else {
                                field.onChange(
                                  (field.value || []).filter(
                                    (value: string) => value !== item.value
                                  )
                                );
                              }
                            }}
                          />
                        </FormControl>

                        <FormLabel className="font-normal">
                          {item.id}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <div className="pt-2">
              <FormField
                name="Nevrose_autres"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Entrer autre maladie Nevrose"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              </FormItem>
          </div>
          <div className="pl-2">
          <FormItem>
              <FormLabel>Psychose : </FormLabel>
          {Nevrose.map((item) => (
                <FormField
                  key={item.value}
                  name="Psychose"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.value}
                        className="flex flex-row items-start space-x-3 space-y-0 pl-3"
                      >
                        <FormControl>
                          
                          <Checkbox
                            checked={field.value?.includes(item.value)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.onChange([
                                  ...(field.value || []),
                                  item.value,
                                ]);
                              } else {
                                field.onChange(
                                  (field.value || []).filter(
                                    (value: string) => value !== item.value
                                  )
                                );
                              }
                            }}
                          />
                        </FormControl>

                        <FormLabel className="font-normal">
                          {item.id}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <div className="pt-2">
              <FormField
                name="Psychose_autres"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Entrer autre maladie Psychose"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              </FormItem>
          </div>
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
                  <Textarea
                    placeholder="Entrer votre observation "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-row-4 gap-2">
          <div className="row-start-4 row-span-2">
            <DrawerScan
              name={"scan_Appareil_locomoteur"}
              placeholder={"Appareil locomoteur"}
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-3 gap-3 px-4 ">
        <div className="py-4">
          <FormField
            //   control={form.control}
            name="obser_appr_génital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil génital :</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Entrer votre observation sur appareil génital  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-2">
            <DrawerScan
              name={"scan_Appareil_génital"}
              placeholder={"Appareil génital"}
            />
          </div>
        </div>
        <div className="  border-l-2 border-green-600 border-lg py-4 pl-2  ">
          <FormField
            //   control={form.control}
            name="obser_appr_urinaire"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil urinaire :</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Entrer votre observation sur appareil urinaire  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <DrawerScan
              name={"scan_Appareil_urinaire"}
              placeholder={"Appareil urinaire"}
            />
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
                <Textarea
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
                <Textarea
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
