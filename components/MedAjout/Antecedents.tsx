"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FC, useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import Vaccination from "./Vaccination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormData, FormData4 } from "@/lib/FormData";
interface FormProps {
  onFormSubmit : (formData: FormData4) => void;
  disabed? : boolean;
  data? : any;

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
  {
    id: "Maladie du sang",
    label: "Maladie du sang",
    sousM: [
      { label: "VHD", id: "VHB" },
      { label: "VHC", id: "VHC" },
      { label: "VIH", id: "VIH" },
    ],
  },
  { id: "Tuberculose", label: "Tuberculose" },
  { id: "Autres", label: "Autres" },
  // export default function InfoGeneral({ onFormSubmit }: FormProps) {
];
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

export default function Antecedents({ onFormSubmit ,data ,disabed }: FormProps) {
  const [isAutre, setAutres] = useState(false);
  const [isAcc_Tra_ant, setAcc_Tra_ants] = useState(false);
  const [sousmala, setSousmala] = useState("");
  const [formData, setFormData] = useState<FormData4>({
      Antecedent_médicaux: {
        Antecedents_Familiaux: [],
        Antecedents_Familiaux_autre: "",
        Antecedents_Personnelle: [],
        Antecedents_Personnelle_autre: "",
      },
      Antecedent_Professionnels: {
        Formation_Scolaire_Profess: "",
        Activités_Profess_Antérieur: "",
        Accidents_Contract_Service: "",
        Maladie_contracté_Service: "",
        Sous_mald_con_service: "",
      },
      Vaccination: vaccTable.map((vaccine) => ({
        Type: vaccine.id,
        date_V: "",
        Rappels: "",
        observation: "",
      })),
      Vaccinationautre: [
        {
          Type: "",
          date_V: "",
          Rappels: "",
          observation: "",
        }
      ],
    });
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    onFormSubmit(formData);
  }, [formData, onFormSubmit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [section, id, field] = name.split(".");

    if (section === "Antecedent_médicaux" || section === "Antecedent_Professionnels") {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [id]: value
        }
      }));
    } if (section === "Vaccination") {
      setFormData((prevState) => ({
        ...prevState,
        [section]: prevState[section].map((v : any) =>
          v.Type === id ? { ...v, [field]: value } : v
        ),
      }));
    } else if (section === "Vaccinationautre") {
      setFormData((prevState : any) => {
        const otherVaccIndex = prevState.Vaccinationautre.findIndex((v : any) => v.Type === id);
        if (otherVaccIndex !== -1) {
          return {
            ...prevState,
            [section]: prevState[section].map((v : any, index : any) =>
              index === otherVaccIndex ? { ...v, [field]: value } : v
            ),
          };
        } else {
          return {
            ...prevState,
            [section]: [...prevState[section], { Type: id, [field]: value }],
          };
        }
      });
    }
  };
  const handleMaladieChange = (value: string) => {
    handleChange({
      target: {
        name: "Antecedent_Professionnels.Maladie_contracté_Service",
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };
  if (!formData) {
    return <div>Loading...</div>;
  }

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
                  render={({ field }) => (
                    <FormItem
                      key={item.value}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={formData.Antecedent_médicaux.Antecedents_Familiaux.includes(
                            //@ts-ignore

                            item.value
                          )}
                          onCheckedChange={(checked) => {
                            const updatedValue = checked
                              ? [
                                  ...formData.Antecedent_médicaux
                                    .Antecedents_Familiaux,
                                  item.value,
                                ]
                              : formData.Antecedent_médicaux.Antecedents_Familiaux.filter(
                                  (value) => value !== item.value
                                );
                            setFormData({
                              ...formData,
                              Antecedent_médicaux: {
                                ...formData.Antecedent_médicaux,
                                //@ts-ignore
                                Antecedents_Familiaux: updatedValue,
                              },
                            });
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
              <FormMessage />
            </FormItem>

            <div className="pt-2">
              <FormField
                name="Antecedent_médicaux.Antecedents_Familiaux_autre"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        name="Antecedent_médicaux.Antecedents_Familiaux_autre"
                        placeholder="Entrer autre antecedente Familiaux"
                        value={
                          formData.Antecedent_médicaux
                            .Antecedents_Familiaux_autre
                        }
                        onChange={handleChange}
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
                    render={({ field }) => (
                      <FormItem
                        key={item.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={formData.Antecedent_médicaux.Antecedents_Personnelle.includes(
                              //@ts-ignore
                              item.value
                            )}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [
                                    ...formData.Antecedent_médicaux
                                      .Antecedents_Personnelle,
                                    item.value,
                                  ]
                                : formData.Antecedent_médicaux.Antecedents_Personnelle.filter(
                                    (value) => value !== item.value
                                  );
                              setFormData({
                                ...formData,
                                Antecedent_médicaux: {
                                  ...formData.Antecedent_médicaux,
                                  //@ts-ignore
                                  Antecedents_Personnelle: updatedValue,
                                },
                              });
                            }}
                          />
                          {/* <Checkbox
                            checked={formData.Antecedent_médicaux.Antecedents_Personnelle.includes(
                              item.value
                            )}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "Antecedents_Personnelle",
                                item.value,
                                checked!
                              )
                            }
                          /> */}
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
              </FormItem>
              <div className="pt-2">
                <FormField
                  name="Antecedent_médicaux.Antecedents_Personnelle_autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          name="Antecedent_médicaux.Antecedents_Personnelle_autre"
                          placeholder="Entrer autre antecedente Personnelle"
                          value={
                            formData.Antecedent_médicaux
                              .Antecedents_Personnelle_autre
                          }
                          onChange={handleChange}
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
                <FormLabel>Formation Scolaire et Professionnelle:</FormLabel>
                <FormControl>
                  <Input
                    name="Antecedent_Professionnels.Formation_Scolaire_Profess"
                    placeholder="Entrer Formation Scolaire et Professionnelle "
                    value={
                      formData.Antecedent_Professionnels
                        .Formation_Scolaire_Profess
                    }
                    onChange={handleChange}
                    // {...field}
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
                <FormLabel>Activités Professionnells Antèrieurs </FormLabel>
                <FormControl>
                  <Input
                    name="Antecedent_Professionnels.Activités_Profess_Antérieur"
                    placeholder="Entrer Activités Professionnelles Antérieures"
                    value={
                      formData.Antecedent_Professionnels
                        .Activités_Profess_Antérieur
                    }
                    onChange={handleChange}
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
                    name="Antecedent_Professionnels.Accidents_Contract_Service"
                    placeholder="Entrer les Accidents Contractés au Service"
                    value={
                      formData.Antecedent_Professionnels
                        .Accidents_Contract_Service
                    }
                    onChange={handleChange}
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
              name="Antecedent_Professionnels.Maladie_contracté_Service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maladies contractées au service:</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      setSousmala(value);

                      handleMaladieChange(value);
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                    value={
                      formData.Antecedent_Professionnels
                        .Maladie_contracté_Service
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Entrer Maladies contractées au service du patient" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {maladie.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
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

          {sousmala === "Maladie du sang" && (
            <FormField
              name="Antecedent_Professionnels.Sous_mald_con_service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maladies contractées au service:</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      handleChange({
                        target: {
                          name: "Antecedent_Professionnels.Sous_mald_con_service",
                          value,
                        },
                      } as React.ChangeEvent<HTMLInputElement>);
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Entrer Maladies contractées au service du patient" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {maladie
                        .filter((item) => item.id === sousmala)
                        .flatMap((item) =>
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
          {sousmala === "Autres" && (
            <FormField
              name="Autre_maladie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Autres:</FormLabel>
                  <FormControl>
                    <Input
                      type=""
                      name="Antecedent_Professionnels.Sous_mald_con_service"
                      placeholder="Autres"
                      onChange={handleChange}
                      value={
                        formData.Antecedent_Professionnels.Sous_mald_con_service
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>

      <div className=" pl-[2%] text-center text-black text-xl font-semibold font-serif">
        Vaccinations :
        <br />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="w-full  px-4">
      <Vaccination formData={formData} handleChange={handleChange} />
            </div>
    </div>
  );
}
