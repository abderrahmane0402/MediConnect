import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CardTitle } from "../ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import create from 'zustand';
import { z } from "zod";
interface FormProps {
  onFormSubmit : (formData: FormData) => void ;
  disabed? : boolean;
  data? : any;
}

interface FormData {
  nbr_Dossier: string;
  delegation_Medicale: string;
  Formation_Santaire: string;
  InfoPersonnel: {
    nom: string;
    prenom: string;
    ville: string;
    Date_naiss: string;
    Situation_Familiale: string;
    Adresse: string;
    Grade: string;
    Nature_emploi: string;
    depuis: string;
    DPPR: string;
    Groupe_sanguin: string;
  };
}


interface FormState {
  formData: FormData;
  setFormData: (newData: Partial<FormData>) => void;
  setNestedFormData: (nestedFieldName: keyof FormData['InfoPersonnel'], value: string) => void;
  resetFormData: () => void;
}

const initialFormData: FormData = {
  nbr_Dossier: "",
  delegation_Medicale: "",
  Formation_Santaire: "",
  InfoPersonnel: {
    nom: "",
    prenom: "",
    ville: "",
    Date_naiss: "",
    Situation_Familiale: "",
    Adresse: "",
    Grade: "",
    Nature_emploi: "",
    depuis: "",
    DPPR: "",
    Groupe_sanguin: "",
  },
};
export const useFormStore = create<FormState>((set) => ({
  formData: initialFormData,
  setFormData: (newData) => set((state) => ({ formData: { ...state.formData, ...newData } })),
  setNestedFormData: (nestedFieldName, value) => set((state) => ({
    formData: {
      ...state.formData,
      InfoPersonnel: {
        ...state.formData.InfoPersonnel,
        [nestedFieldName]: value,
      },
    },
  })),
  resetFormData: () => set({ formData: initialFormData }),
}));
export default function InfoGeneral({ onFormSubmit , data, disabed }: FormProps) {

  const { formData , setFormData, setNestedFormData } = useFormStore();

  useEffect(() => {
    onFormSubmit(formData);
  }, [formData, onFormSubmit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("InfoPersonnel.")) {
      const nestedFieldName = name.split(".")[1] as keyof FormData['InfoPersonnel'];
      setNestedFormData(nestedFieldName, value);
    } else {
      setFormData({ [name]: value } as Partial<FormData>);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  //   onFormSubmit(formData);
  // }, [formData, onFormSubmit]);

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   if (name.startsWith("InfoPersonnel.")) {
  //     const nestedFieldName = name.split(".")[1];
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       InfoPersonnel: {
  //         ...prevFormData.InfoPersonnel,
  //         [nestedFieldName]: value,
  //       },
  //     }));
  //   } else {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: value,
  //     }));
  //   }
  // };
 
  return (
    <div className=" flex flex-col gap-3 w-full   {isVisible ? '' : 'hidden'}  ">
      <CardTitle className=" pt-2 text-center text-black text-2xl font-semibold font-serif	">
        Information Personnelle du Patient
        <br />
      </CardTitle>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2">
          <FormField
            name="nbr_Dossier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dossier n°: </FormLabel>
                <FormControl>
                  <Input
                  disabled={true}
                    placeholder="Entrer le numero de dossier"
                    name="nbr_Dossier" 
                    value={formData.nbr_Dossier} 
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FormField
            name="InfoPersonnel.Groupe_sanguin" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Groupe sanguin</FormLabel>
                <Select
                  onValueChange={(value) => {
                    const fieldName = "InfoPersonnel.Groupe_sanguin";
                    handleChange({
                      target: {
                        name: fieldName,
                        value,
                        type: "select-one", // Add type property to match the expected type
                      },
                    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
                    field.onChange(value); // Update the value using field.onChange
                  }}
                  defaultValue={formData.InfoPersonnel.Groupe_sanguin} // Provide the corresponding value from formData
                  name="InfoPersonnel.Groupe_sanguin" // Match the structure of formData
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="choisir un Groupe sanguin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      "A",
                      "A+",
                      "A-",
                      "B",
                      "B+",
                      "B-",
                      "AB",
                      "AB+",
                      "AB-",
                      "O",
                      "O+",
                      "O-",
                    ].map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className=" border-green-600 border-2"></div>
      <div className="px-4 space-y-2">
        <div className="w-full">
          <FormField
            name="delegation_Medicale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delegation Medicale</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer Delegation Medicale"
                    name="delegation_Medicale" // Match the structure of formData
                    value={formData.delegation_Medicale} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            name="Formation_Santaire" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Formation Santaire/Hopital </FormLabel>
                <Select
                  name="Formation_Santaire"
                  
                  onValueChange={(value) => {
                    const syntheticEvent: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement
                    > = {
                      //@ts-ignore
                      target: {
                        name: "Formation_Santaire",
                        value: value,
                      },
                    };
                    field.onChange(value); // Update the value using field.onChange
                    handleChange(syntheticEvent); // Pass the synthetic event to handleChange
                  }}
                  defaultValue={formData.Formation_Santaire}
                  // Match the structure of formData
                  value={formData.Formation_Santaire} // Provide the corresponding value from formData
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Entrer Formation Santaire/Hopital" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="RSSP">RSSP </SelectItem>
                    <SelectItem value="Centre Hospitalier">
                      Centre Hospitalier{" "}
                    </SelectItem>
                    <SelectItem value="Personnel de la delegation">
                      Personnel de la delegation{" "}
                    </SelectItem>
                    <SelectItem value="SRES">SRES </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2 ">
          <FormField
            name="InfoPersonnel.nom" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer le nom du patient"
                    name="InfoPersonnel.nom" // Match the structure of formData
                    value={formData.InfoPersonnel.nom} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <FormField
            name="InfoPersonnel.prenom" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer le prenom du patient"
                    name="InfoPersonnel.prenom" // Match the structure of formData
                    value={formData.InfoPersonnel.prenom} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2 ">
          <FormField
            name="InfoPersonnel.Date_naiss" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de naissance </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Entrer la date de naissance du patient"
                    name="InfoPersonnel.Date_naiss" // Match the structure of formData
                    value={formData.InfoPersonnel.Date_naiss} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <FormField
            name="InfoPersonnel.ville" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ville </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer la ville du patient"
                    name="InfoPersonnel.ville" // Match the structure of formData
                    value={formData.InfoPersonnel.ville} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="px-4 space-y-2 ">
        <div className="w-full">
          <FormField
            name="InfoPersonnel.Situation_Familiale" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Situation Familiale </FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value); 
                    handleChange({
                      target: { name: field.name, value },
                    } as React.ChangeEvent<HTMLInputElement>); // Cast the object to the expected type
                  }}
                  defaultValue={field.value}
                  name="InfoPersonnel.Situation_Familiale" 
                  value={formData.InfoPersonnel.Situation_Familiale} 
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Entrer la Situation Familiale du patient" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      "Marié",
                      "Pacsé",
                      "Divorcé",
                      "Séparé",
                      "Célibataire",
                      "Veuf",
                    ].map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            name="InfoPersonnel.Adresse" // Match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer l'adresse du patient"
                    name="InfoPersonnel.Adresse" // Match the structure of formData
                    value={formData.InfoPersonnel.Adresse} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>

      <div className="flex flex-row w-full gap-6 px-4 ">
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
            name="InfoPersonnel.Grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade </FormLabel>
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer la Grade du patient"
                    name="InfoPersonnel.Grade" // Match the structure of formData
                    value={formData.InfoPersonnel.Grade} // Provide the corresponding value from formData
                    onChange={handleChange}
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
        <div className="w-full md:w-1/2">
          <FormField
            name="InfoPersonnel.DPPR" // Update the name attribute to match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>DPPR:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Entrer le PPR du patient"
                    name="InfoPersonnel.DPPR" // Match the structure of formData
                    value={formData.InfoPersonnel.DPPR} // Provide the corresponding value from formData
                    onChange={handleChange} // Use the existing handleChange function
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
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2">
          <FormField
            name="InfoPersonnel.Nature_emploi" // Update the name attribute to match the structure of formData
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nature de l'emploi occupé</FormLabel>
                <Select
                  onValueChange={(value) => {
                    const fieldName = "InfoPersonnel.Nature_emploi";
                    handleChange({
                      target: {
                        name: fieldName,
                        value,
                        type: "select-one", // Add type property to match the expected type
                      },
                    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
                    field.onChange(value); // Update the value using field.onChange
                  }}
                  defaultValue={formData.InfoPersonnel.Nature_emploi} // Provide the corresponding value from formData
                  name="InfoPersonnel.Nature_emploi" // Match the structure of formData
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Entrer la Nature de l'emploi occupé du patient" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Medecin générale">
                      Medecin générale
                    </SelectItem>
                    <SelectItem value="Medecin spécialiste">
                      Medecin spécialiste
                    </SelectItem>
                    <SelectItem value="Infirmier polyvalente">
                      Infirmier polyvalente
                    </SelectItem>
                    <SelectItem value="Infirmier auxiliaire">
                      Infirmier auxiliaire
                    </SelectItem>
                    <SelectItem value="Infirmier Auxthesite">
                      Infirmier Auxthesite
                    </SelectItem>
                    <SelectItem value="Infirmier psychiatrie">
                      Infirmier psychiatrie
                    </SelectItem>
                    <SelectItem value="Agent service">
                      Agent de service
                    </SelectItem>
                    <SelectItem value="Agent administration">
                      Agent d'administration
                    </SelectItem>
                    <SelectItem value="Technicien Laboratoire">
                      Technicien Laboratoire
                    </SelectItem>
                    <SelectItem value="Technicien RX">
                      Technicien de RX
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
            name="InfoPersonnel.depuis"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Depuis : </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Entrer  l'annee"
                    name="InfoPersonnel.depuis"
                    value={formData.InfoPersonnel.depuis} // Provide the corresponding value from formData
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
    </div>
  );
}
