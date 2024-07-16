"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm ,FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import InfoGeneral, { useFormStore } from "@/components/MedAjout/InfoGenerale";
import Antecedents from "@/components/MedAjout/Antecedents";
import Scanpage from "@/components/MedAjout/Scanpage";
import { useRouter } from "next/navigation";

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
  PremierExam :z.object({
    Docteur: z.string().nonempty("Le nom de l'équipement est oblégatoire"),
    // etat: z.boolean(),
    // operationel: z.boolean(),
  }),
});


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

  const last_page: number = 3;
  const [current_page, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, last_page));
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<any>({
    // Initial form data
    // Define the initial form data structure here
  });
  const [formDataScan, setFormDataScan] = useState<any>({
    // Initial form data
    // Define the initial form data structure here
  });

    const router = useRouter();
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  const handleFormSubmit = (data :any) => {
    console.log(JSON.stringify(data));
    setFormData((prevData:any) => {
      const newFormData = { ...prevData, ...data };
      if (JSON.stringify(prevData) !== JSON.stringify(newFormData)) {
        return newFormData;
      }
      return prevData;
    });
  };
  const handleFormSubmit2 = (data :any) => {
    // console.log(JSON.stringify(data));
    setFormDataScan((prevData:any) => {
      const newFormData = { ...prevData, ...data };
      if (JSON.stringify(prevData) !== JSON.stringify(newFormData)) {
        return newFormData;
      }
      return prevData;
    });
  };
  const {resetFormData } = useFormStore();
  const handleFormSubmitglobale = async () => {
    try {
      console.log(JSON.stringify(formData));
      const response = await fetch("http://localhost:3001/dossier/add_Dossier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // clearFormData();
      resetFormData();

      router.push("/main/dossierMedical");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
 
  return (
    <>

<Form {...form}>   
       <Card className="">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault(); // Prevent default form submission
              handleFormSubmitglobale(); 
            }}
            // onSubmit={form.handleSubmit(handleSubmit4)} className="space-y-8"
            >
            {current_page === 1 && (
              <InfoGeneral onFormSubmit={handleFormSubmit} disabed={false} />
            )}
            {/* --------------------Anticedent Medicaux ----------------------------------- */}
            {current_page === 2 && <Antecedents onFormSubmit={handleFormSubmit}  disabed={false}   />}
            {current_page === 3 && <Scanpage onFormSubmit={handleFormSubmit}  disabed={false}  
            //  onFormSubmitScan={handleFormSubmit2} 
             />}
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
              <Button
                className=""
                onClick={() => {
                  handleNextPage(); 

                }}
              >
                Next
              </Button>
            )}
            {current_page === 3 && (
              <Button type="button" 
              onClick={handleFormSubmitglobale}
              >
                Submit
              </Button>
            )}
          </div>
        </Card>
      </Form>
      {/* </FormProvider> */}
    </>
  );
}
