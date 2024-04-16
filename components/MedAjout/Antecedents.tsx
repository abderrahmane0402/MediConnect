"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ChangeEvent, FC, useState } from "react";
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
import Vaccination from "./Vaccination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface FormProps {
  form: any;
}
const antece = [
  { label: "Hyperthyroïdie", value: "Hyperthyroïdie" },
  { label: "Hypothyroïdie", value: "Hypothyroïdie" },
  { label: "Diabète", value: "Diabète" },
  {
    label: "Hypertension artérielle (HTA)",
    value: "Hypertension artérielle HTA",
  },
  {
    label: "Accident vasculaire cérébral (AVC)",
    value: "Accident vasculaire cérébral AVC",
  },
  {
    label: "Maladies sexuellement transmissibles (MST)",
    value: "Maladies sexuellement transmissibles MST",
  },
  { label: "Asthme", value: "Asthme" },
];

const maladie = [
  { id: "Travail_nuit", label: "Travail de nuit" },
  {
    id: "RayFonnenment_ionisants",
    label: "Rayonnenment ionisants",
    sousM: [
      { label: "Categorie A", id: "categorie_A" },
      { label: "Categorie B", id: "categorie_B" },
    ],
  },
  {
    id: "Risque_Biologique",
    label: "Risque Biologique",
    sousM: [
      { label: "VHD ,VHC ,VIH", id: "VHB_VIH" },
      { label: "Tuberculose", id: "Tuberculose" },
      { label: "Autres", id: "autres" },
    ],
  },
  {
    id: "Agents_chimiques",
    label: "Agents chimiques",
    sousM: [
      { label: "Formaldéhyde", id: "Formaldéhyde" },
      { label: "Halothane", id: "Halothane" },
      { label: "Autres", id: "autres" },
    ],
  },
  { id: "Manutention", label: "Manutention" },
  { id: "Posture_pénible", label: "Posture pénible" },
  { id: "RPS", label: "RPS" },
];

const Antecedents: FC<FormProps> = ({ form, ...props }) => {
  const [isAutre, setAutres] = useState(false);
  const [isAcc_Tra_ant, setAcc_Tra_ants] = useState(false);
  const [sousmala, setSousmala] = useState("");
  const [isAutreM, setAutresM] = useState(false);

  const handlechange_Autre = () => {
    setAutres(!isAutre!);
  };
  const handlechange_Acc_Tra = () => {
    setAcc_Tra_ants(!isAcc_Tra_ant);
  };

  return (
    <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
      <div className="pt-2   text-center text-black text-2xl font-semibold font-serif">
        Antécédents Médicaux / Professionnels et Vaccinations
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" pl-[2%]  text-center  text-black text-xl font-semibold font-serif">
        Antécédents Médicaux :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="px-4 space-y-2">
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className=" border-r-2 border-green-700">
            <FormItem>
              <FormLabel>Antécédents Familiaux: </FormLabel>
              {antece.map((item) => (
                <FormField
                  key={item.value}
                  name="antc_fam"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
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
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}

              <FormMessage />
            </FormItem>
            <div className="pt-2">
              <FormField
                name="antc_fam_autres"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Entrer autre antecedente Familiaux"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <div>
              <FormItem>
                <FormLabel>Antécédents Personnelle: </FormLabel>
                {antece.map((item) => (
                  <FormField
                    key={item.value}
                    name="antc_pers"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
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
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}

                <FormMessage />
              </FormItem>
            </div>
            <div className="pt-2">
              <FormField
                name="antc_pers_autres"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Entrer autre antecedente Personnelle"
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

      <div className="border-2 border-green-600 border-lg"></div>
      <div className=" pl-[2%] text-center  text-black text-xl font-semibold font-serif">
        Antécédents Professionnels :
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
                <FormLabel>Activités Professionnells Antèrieurs : </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Activités Professionnells Antèrieurs "
                    {...field}
                  />
                </FormControl>

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
            name="accid_contra_service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accidents contractés au service : </FormLabel>
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
        <div className="w-full grid grid-cols-3 gap-3 ">
          <div>
            <FormField
              //   control={form.control}
              name="mald_con_service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maladies contractées au serice : </FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={(selectedValue) => {
                      setSousmala(selectedValue);
                      field.onChange(selectedValue);
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Entrer Maladies contractées au serice du patient" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {maladie.map((item) => (
                        <SelectItem
                          value={item.id}
                         
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {sousmala && (
            <FormField
              //   control={form.control}
              name="Sous_mald_con_service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maladies contractées au serice : </FormLabel>
                  <Select
                    onValueChange={(selectedValue) => {
                      if (selectedValue == "autres"){
                      setAutresM(true);} else  setAutresM(false);
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
                      {maladie.map(
                        (item) =>
                          item.id === sousmala &&
                          item.sousM?.map((sous) => (
                            <SelectItem key={sous.id} value={sous.id}>
                              {sous.label}
                            </SelectItem>
                          ))
                      )}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {isAutreM && ( <FormField
            //   control={form.control}
            name="Autre_maladie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Autres: </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="autres"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />)}
        </div>
        
      </div>

      <div className="border-2 border-green-600 border-lg"></div>

      <div className=" pl-[2%] text-center text-black text-xl font-semibold font-serif">
        Vaccinations :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="w-full  px-4">
        <Vaccination />
      </div>
    </div>
  );
};
export default Antecedents;
