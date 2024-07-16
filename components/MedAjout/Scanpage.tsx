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
import { ChangeEvent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
// import { tree } from "next/dist/build/templates/app-page";
import { FormData, PremierExam } from "@/lib/FormData";
import { Scan } from "lucide-react";
import { boolean, z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


interface FormProps {
  onFormSubmit : (formData: FormData1) => void;
  disabed? : boolean;
  data? : any;

}
interface FormData1 {
  PremierExam: {
    Date_exam: string;
    Docteur: string;
    Post_de_Travail: string;
    Poids: string;
    Taille: string;
    Appareil_auditif: { OG: string; OD: string; Scan: any[] };
    Appareil_Oculaire: {
      Appareil_Oculaire_AC: {
        OD_Pres: string;
        OG_Pres: string;
        OD_Loin: string;
        OG_Loin: string;
      };

      Appareil_Oculaire_SC: {
        OD_Pres: string;
        OG_Pres: string;
        OD_Loin: string;
        OG_Loin: string;
      };
      Scan: any[];
    };
    Téguments: { observation: string; autre: string };
    Examen_radiologique: { observation: string; Scan: any[]; autre: string };
    Appareil_respiratoire_rhinopharynx: { observation: string; Scan: any[] };
    Appareil_cadiovasculaire: { observation: string; Scan: any[] };
    Varices: { observation: string; autre: string };
    T_A: string;
    Pouls: string;
    Appareil_digestif: {observation : string , Scan: any[]};
    Appareil_hématologique_réticulaire: {observation : string , Scan: any[]};
    Gangloins: string;
    Rate: string;
    Glandes_endocriniennes: {
      Thyroïde: {
        Check: boolean;
        sousNom: string;
        observation: string;
        autreobservation: string;
      };
      Glandes_surrénales: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      Hypophyse: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      Autres: string;
      Scan: any[];
    };
    Système_nerveux: {
      Lesion_cérébrale: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      NCB: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      Hernie_discale: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      Maladie_neurologique: {
        Check: boolean;
        observation: string;
        autreobservation: string;
      };
      Scan: any[];
    };
    Tremblement: { observation: string; autre: string };
    Trouble_equilibre: { observation: string; autre: string };
    Réflexes: { observation: string; autre: string };
    Psychisme: { 
      Nevrose: 
      {
        Anxiété : boolean,
        Depression : boolean,
        Stress : boolean,
        TOC : boolean,
        autre : string,
      }, 
      Psychose: 
      {
        Bipolarité : boolean,
        Schizophrénie : boolean,
        Paranoïaque : boolean,
        autre : string,
      }, 
      Scan : any[],};
    Appareil_locomoteur: {
      Membres_Supérieurs: {
        observation :string , autre :string
      };
      Articulations: {
        observation :string , autre :string
      };
      Membres_Inférieur: {
        observation :string , autre :string
      };
      Scan : any[],
    };
    Appareil_génital: {
      type: string,
      Prostate : {Check : boolean ,observation :string },
      Troubles_érectiles : {Check : boolean ,observation :string }
      MST : {Check : boolean ,observation :string , autre :string},
      Leucorrhée : {Check : boolean ,observation :string , autre :string},
      Trouble_menstruels : {Check : boolean ,observation :string , autre :string},
      Seins : {Check : boolean ,observation :string , autre :string},
      Episiotomie : {Check : boolean ,observation :string , autre :string},
      autre : {Check : boolean ,nom : string , observation : string},
      Scan : any[],
    };
    Appareil_urinaire: {
      Reins : {observation :string , autre :string},
      Trouble_urinaires : {
        Mictionnelles  : {Check : boolean ,observation :string , autre :string},
        Brûlures : {Check : boolean ,observation :string , autre :string},
        Pollokinire : {Check : boolean ,observation :string , autre :string},
        Dysurie : {Check : boolean ,observation :string , autre :string},
      },
      Scan : any[],
    };
    Alb: string;
    Sucre: string;
    Autres_constatations: string;
    Examens_complémentaires: string;
    Conclusions_Médicales: string;
    Conclusions_Professionnels: string;
  };
}
const formSchema = z.object({
  Docteur: z.string().nonempty("Le nom de l'équipement est oblégatoire"),
  // etat: z.boolean(),
  // operationel: z.boolean(),
});
const initialPremierExam1 = {
  Date_exam: "", // Initialize with today's date in YYYY-MM-DD format
  Docteur: "Dr Najdioui",
  Post_de_Travail: "",
  Poids: "",
  Taille: "",
};

const initialPremierExam2 = {
  Appareil_auditif: { OG: "", OD: "", Scan: [] },
  Appareil_Oculaire: {
    Appareil_Oculaire_AC: { OD_Pres: "", OG_Pres: "", OD_Loin: "", OG_Loin: "" },
    Appareil_Oculaire_SC: { OD_Pres: "", OG_Pres: "", OD_Loin: "", OG_Loin: "" },
    Scan: [],
  },
  Téguments: { observation: "", autre: "" },
  Examen_radiologique: { observation: "", Scan: [], autre: "" },
};

const initialPremierExam3 = {
  Appareil_respiratoire_rhinopharynx: { observation: "", Scan: [] },
  Appareil_cadiovasculaire: { observation: "", Scan: [] },
  Varices: { observation: "", autre: "" },
  T_A: "",
  Pouls: "",
};

const initialPremierExam4 = {
  Appareil_digestif: { observation: '', Scan: [] },
  Appareil_hématologique_réticulaire: { observation: '', Scan: [] },
  Gangloins: "",
  Rate: "",
  Glandes_endocriniennes: {
    Thyroïde: { Check: false, sousNom: "", observation: "", autreobservation: "" },
    Glandes_surrénales: { Check: false, observation: "", autreobservation: "" },
    Hypophyse: { Check: false, observation: "", autreobservation: "" },
    Autres: "",
    Scan: [],
  },
};

const initialPremierExam5 = {
  Système_nerveux: {
    Lesion_cérébrale: { Check: false, observation: "", autreobservation: "" },
    NCB: { Check: false, observation: "", autreobservation: "" },
    Hernie_discale: { Check: false, observation: "", autreobservation: "" },
    Maladie_neurologique: { Check: false, observation: "", autreobservation: "" },
    Scan: [],
  },
  Tremblement: { observation: "", autre: "" },
  Trouble_equilibre: { observation: "", autre: "" },
  Réflexes: { observation: "", autre: "" },
  Psychisme: {
    Nevrose: { Anxiété: false, Depression: false, Stress: false, TOC: false, autre: '' },
    Psychose: { Bipolarité: false, Schizophrénie: false, Paranoïaque: false, autre: '' },
    Scan: [],
  },
};

const initialPremierExam6 = {
  Appareil_locomoteur: {
    Membres_Supérieurs: { observation: "" , autre: "" },
    Articulations: { observation: "", autre: "" },
    Membres_Inférieur: { observation: "", autre: "" },
    Scan: [],
  },
  Appareil_génital: {
    type: '',
    Prostate: { Check: false, observation: '' },
    Troubles_érectiles: { Check: false, observation: '' },
    MST: { Check: false, observation: '', autre: '' },
    Leucorrhée: { Check: false, observation: '', autre: '' },
    Trouble_menstruels: { Check: false, observation: '', autre: '' },
    Seins: { Check: false, observation: '', autre: '' },
    Episiotomie: { Check: false, observation: '', autre: '' },
    autre: { Check: false, nom: '', observation: '' },
    Scan: [],
  },
  Appareil_urinaire: {
    Reins: { observation: "", autre: "" },
    Trouble_urinaires: {
      Mictionnelles: { Check: false, observation: "", autre: "" },
      Brûlures: { Check: false, observation: "", autre: "" },
      Pollokinire: { Check: false, observation: "", autre: "" },
      Dysurie: { Check: false, observation: "", autre: "" },
    },
    Scan: [],
  },
  Alb: "",
  Sucre: "",
  Autres_constatations: "",
  Examens_complémentaires: "",
  Conclusions_Médicales: "",
  Conclusions_Professionnels: "",
};
export default function Scanpage({ onFormSubmit , data , disabed}: FormProps) {
  // const [formData, setFormData] = useState<FormData1>({
  //   PremierExam: {
  //     Date_exam: "", // Initialize with today's date in YYYY-MM-DD format
  //     Docteur: "Dr Najdioui",
  //     Post_de_Travail: "",
  //     Poids: "",
  //     Taille: "",
  //     Appareil_auditif: { OG: "", OD: "", Scan: [] },
  //     Appareil_Oculaire: {
  //       Appareil_Oculaire_AC: {
  //         OD_Pres: "",
  //         OG_Pres: "",
  //         OD_Loin: "",
  //         OG_Loin: "",
  //       },
  //       Appareil_Oculaire_SC: {
  //         OD_Pres: "",
  //         OG_Pres: "",
  //         OD_Loin: "",
  //         OG_Loin: "",
  //       },
  //       Scan: [],
  //     },
  //     Téguments: { observation: "", autre: "" },
  //     Examen_radiologique: { observation: "", Scan: [], autre: "" },
  //     Appareil_respiratoire_rhinopharynx: { observation: "", Scan: [] },
  //     Appareil_cadiovasculaire: { observation: "", Scan: [] },
  //     Varices: { observation: "", autre: "" },
  //     T_A: "",
  //     Pouls: "",
  //     Appareil_digestif: { observation: '', Scan: [] },
  //   Appareil_hématologique_réticulaire: { observation: '', Scan: [] },
  //     Gangloins: "",
  //     Rate: "",

  //     Glandes_endocriniennes: {
  //       Thyroïde: {
  //         Check: false,
  //         sousNom: "",
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Glandes_surrénales: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Hypophyse: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Autres: "",
  //       Scan: [],
  //     },
  //     Système_nerveux: {
  //       Lesion_cérébrale: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       NCB: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Hernie_discale: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Maladie_neurologique: {
  //         Check: false,
  //         observation: "",
  //         autreobservation: "",
  //       },
  //       Scan : [],
  //     },
  //     Tremblement: { observation: "", autre: "" },
  //     Trouble_equilibre: { observation: "", autre: "" },
  //     Réflexes: { observation: "", autre: "" },
  //     Psychisme: {
  //       Nevrose : 
  //       {
  //         Anxiété : false,
  //         Depression : false,
  //         Stress : false,
  //         TOC : false,
  //         autre : ''
  //       }, 
  //       Psychose: 
  //       {
  //         Bipolarité : false,
  //         Schizophrénie : false,
  //         Paranoïaque : false,
  //         autre : ''
  //       },
  //       Scan : [],
      
  //     },
  //     Appareil_locomoteur: {
  //       Membres_Supérieurs: {
  //         observation : "" , 
  //         autre :""
  //       },
  //       Articulations: {
  //         observation :"" , 
  //         autre :""
  //       },
  //       Membres_Inférieur: {
  //         observation :"" , 
  //         autre :""
  //       },
  //       Scan : [],
  //     },
  //     Appareil_génital:  {
  //       type: '',
  //       Prostate : { Check : false , observation :''},
  //       Troubles_érectiles : {Check : false , observation :'' },
  //       MST : {Check : false , observation :'' , autre :''},
  //       Leucorrhée : {Check : false , observation :'' , autre :''},
  //       Trouble_menstruels : {Check : false , observation :'' , autre :''},
  //       Seins : {Check : false , observation :'' , autre :''},
  //       Episiotomie : {Check : false , observation :'' , autre :''},
  //       autre : {Check : false , nom : '' , observation : ''},
  //       Scan : [],
  //     },
  //     Appareil_urinaire: {
  //       Reins : {observation :"" , autre :""},
  //       Trouble_urinaires : {
  //         Mictionnelles  : {Check : false ,observation :"" , autre :""},
  //         Brûlures : {Check : false ,observation :"" , autre :""},
  //         Pollokinire : {Check : false ,observation :"" , autre :""},
  //         Dysurie : {Check : false ,observation :"" , autre :""},
  //       },
  //       Scan : [],
  //     },
  //     Alb: "",
  //     Sucre: "",
  //     Autres_constatations: "",
  //     Examens_complémentaires: "",
  //     Conclusions_Médicales: "",
  //     Conclusions_Professionnels: "",
  //   },
  // });
  const [premierExam1, setPremierExam1] = useState(initialPremierExam1);
  const [premierExam2, setPremierExam2] = useState(initialPremierExam2);
  const [premierExam3, setPremierExam3] = useState(initialPremierExam3);
  const [premierExam4, setPremierExam4] = useState(initialPremierExam4);
  const [premierExam5, setPremierExam5] = useState(initialPremierExam5);
  const [premierExam6, setPremierExam6] = useState(initialPremierExam6);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Docteur: "Dr Najdioui",
    },
  });
  useEffect(() => {
    const formData = {
      PremierExam: {
        ...premierExam1,
        ...premierExam2,
        ...premierExam3,
        ...premierExam4,
        ...premierExam5,
        ...premierExam6,
      },
    };
    onFormSubmit(formData);
  }, [premierExam1, premierExam2, premierExam3, premierExam4, premierExam5, premierExam6, onFormSubmit]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleRadioChange = (name: string, value: string) => {
    updateFormData(name, value);
  };

  const handleChangeSelect = (value: string, name: string) => {
    updateFormData(name, value);
  };

  const handleChangecheck = (value: string | boolean, name: string) => {
    updateFormData(name, value);
  };

  const handleFilesChange = (files: string[], name: string) => {
    updateFormData(name, files);
  };

  const handleDeleteFile = (index: number, name: string) => {
    const keys = name.split(".");
    let sectionStateUpdater: any;
    let sectionState: any;
  
    if (keys[0] === "PremierExam" && keys[1] in premierExam1) {
      sectionStateUpdater = setPremierExam1;
      sectionState = premierExam1;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam2) {
      sectionStateUpdater = setPremierExam2;
      sectionState = premierExam2;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam3) {
      sectionStateUpdater = setPremierExam3;
      sectionState = premierExam3;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam4) {
      sectionStateUpdater = setPremierExam4;
      sectionState = premierExam4;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam5) {
      sectionStateUpdater = setPremierExam5;
      sectionState = premierExam5;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam6) {
      sectionStateUpdater = setPremierExam6;
      sectionState = premierExam6;
    }
  
    if (sectionStateUpdater) {
      let updatedData = { ...sectionState };
      let obj: any = updatedData;
      keys.slice(1, -1).forEach((key) => {
        obj = obj[key];
      });
  
      const scanArray = obj[keys[keys.length - 1]];
      const updatedFiles = [...scanArray];
      updatedFiles.splice(index, 1);
      obj[keys[keys.length - 1]] = updatedFiles;
  
      sectionStateUpdater(updatedData);
    }
  };

  const updateFormData = (name: string, value: any) => {
    const keys = name.split(".");
    let sectionStateUpdater: any;
    let sectionState: any;

    if (keys[0] === "PremierExam" && keys[1] in premierExam1) {
      sectionStateUpdater = setPremierExam1;
      sectionState = premierExam1;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam2) {
      sectionStateUpdater = setPremierExam2;
      sectionState = premierExam2;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam3) {
      sectionStateUpdater = setPremierExam3;
      sectionState = premierExam3;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam4) {
      sectionStateUpdater = setPremierExam4;
      sectionState = premierExam4;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam5) {
      sectionStateUpdater = setPremierExam5;
      sectionState = premierExam5;
    } else if (keys[0] === "PremierExam" && keys[1] in premierExam6) {
      sectionStateUpdater = setPremierExam6;
      sectionState = premierExam6;
    }

    if (sectionStateUpdater) {
      let updatedData = { ...sectionState };
      let obj: any = updatedData;
      keys.slice(1).forEach((key, index) => {
        if (index === keys.length - 2) {
          obj[key] = value;
        } else {
          obj = obj[key];
        }
      });
      sectionStateUpdater(updatedData);
    }
  };
  
  // useEffect(() => {
  //   onFormSubmit(formData);
  // }, [formData, onFormSubmit]);

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   const keys = name.split(".");
  //   let updatedData = { ...formData };

  //   let obj: any = updatedData;
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj = obj[key];
  //     }
  //   });
  //   setFormData(updatedData);
  // };
  // const handleRadioChange = (name: string, value: string) => {
  //   const keys = name.split(".");
  //   let updatedData = { ...formData };

  //   let obj: any = updatedData;
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj = obj[key];
  //     }
  //   });
  //   setFormData(updatedData);
  // };

  // const handleChangeSelect = (value: string, name: string) => {
  //   const keys = name.split(".");
  //   let updatedData = { ...formData };

  //   let obj: any = updatedData;
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj = obj[key];
  //     }
  //   });

  //   setFormData(updatedData);
  // };
  // const handleChangecheck = (value: string | boolean, name: string) => {
  //   const keys = name.split(".");
  //   let updatedData = { ...formData };

  //   let obj: any = updatedData;
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj = obj[key];
  //     }
  //   });

  //   setFormData(updatedData);
  // };
  // const handleFilesChange = (files: string[] , name : string ) => {
  //   updateFormData(name, files);
  // };

  // const handleDeleteFile = (index: number , name : string) => {
  //   const updatedFiles = [...premierExam2.Appareil_auditif.Scan];
  //   updatedFiles.splice(index, 1);
  //   updateFormData(name, updatedFiles);
  // };

  // const updateFormData = (name: string, value: any) => {
  //   const keys = name.split(".");
  //   let updatedData = { ...formData };

  //   let obj: any = updatedData;
  //   keys.forEach((key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj = obj[key];
  //     }
  //   });

  //   setFormData(updatedData);
  // };
  ////////////////////////////////////////////////////////////////////////////////
  const [autresObs_ExaRad, setAutresObs_ExaRad] = useState(false);
  const [GlandesSelectTer, setGlandesSelectTer] = useState(false);
  const [GlandesSelectHyp, setGlandesSelectHyp] = useState(false);
  const [GlandesSelectGland, setGlandesSelectGland] = useState(false);
  const [Tremb_Obs, setTremb_Obs] = useState(false);
  const [Equil_Obs, setEquil_Obs] = useState(false);
  const [Varice_Obs, setVarice_Obs] = useState(false);
  const [Reflex_Obs, setReflex_Obs] = useState(false);
  const [Membre_Sup, setMembre_Sup] = useState(false);
  const [Membre_Inf, setMembre_Inf] = useState(false);
  const [Articula, setArticula] = useState(false);
  const [MSTautres, setMSTautres] = useState(false);
  const [MSTautresFemme, setMSTautresFemme] = useState(false);
  const [leucorrhée_autres, setleucorrhée_autres] = useState(false);
  const [Trouble_sexuel_autres, setTrouble_sexuel_autres] = useState(false);

  //         app urinaire
  const [app_urinaire_Dysurie, setapp_urinaire_Dysurie] = useState(false);
  const [Dysurieautres, setDysurieautres] = useState(false);
  const [app_urinaire_Pollokinire, setapp_urinaire_Pollokinire] =
    useState(false);
  const [Pollokinireautres, setPollokinireautres] = useState(false);
  const [app_urinaire_brûlures, setapp_urinaire_brûlures] = useState(false);
  const [brûluresautres, setbrûluresautres] = useState(false);
  const [app_urinaire_mictionnelles, setapp_urinaire_mictionnelles] =
    useState(false);
  const [mictionnellesautres, setmictionnellesautres] = useState(false);

  const [Reinsautres, setReinsautres] = useState(false);

  /////////////////////////////////////

  const [Seins_autres, setSeins_autres] = useState(false);
  const [episiotomie_autres, setepisiotomie_autres] = useState(false);

  const [Sex, setSex] = useState("");
  const [app_urin, setapp_urin] = useState("");

  const [
    App_genital_troubles_erectiles_homme,
    setApp_genital_troubles_erectiles_homme,
  ] = useState(false);

  const [App_genital_AutresMaladie_homme, setApp_genital_AutresMaladie_homme] =
    useState(false);

  const [App_genital_AutresMaladie_Femme, setApp_genital_AutresMaladie_Femme] =
    useState(false);

  const [App_genital_prostate_homme, setApp_genital_prostate_homme] =
    useState(false);

  const [App_genital_MST_homme, setApp_genital_MST_homme] = useState(false);
  const [App_genital_MST_femme, setApp_genital_MST_femme] = useState(false);
  const [App_genital_leucorrhée, setApp_genital_leucorrhée] = useState(false);
  const [App_genital_Troub_Sexu, setApp_genital_Troub_Sexu] = useState(false);
  const [App_genital_seins, setApp_genital_seins] = useState(false);
  const [App_genital_episiotomie, setApp_genital_episiotomie] = useState(false);

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
            name="PremierExam.Date_exam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date d'Examen </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer la Date d'Examen"
                    type="date"
                    name="PremierExam.Date_exam"
                    value={premierExam1.Date_exam}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            name="PremierExam.Docteur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Docteur </FormLabel>
                <FormControl>
                  <Input
                    name="PremierExam.Docteur"
                    placeholder="Entrer Docteur"
                    value={premierExam1.Docteur}
                    onChange={handleChange}
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

      {/* ----------------  Post du travail  -------------------- */}
      <div className="w-full px-4 py-3 ">
        <FormField
          name="PremierExam.Post_de_Travail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Poste de travail (caractéristique, risques ...){" "}
              </FormLabel>
              <FormControl>
                <Textarea
                  name="PremierExam.Post_de_Travail"
                  value={premierExam1.Post_de_Travail}
                  onChange={handleChange}
                  placeholder="Entrer le Poste de travail  du patient"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      {/* ----------------  Poids Tailles  -------------------- */}

      <div className=" px-4 grid grid-cols-4 gap-2 w-full ">
        <div className="grid grid-row-4 gap-2 py-4">
          <div className="w-full row-span-2 items-center ">
            <FormField
              name="PremierExam.Poids"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Poids : </FormLabel>
                  <FormControl>
                    <Input
                      name="PremierExam.Poids"
                      type="number"
                      placeholder="Entrer le poids du patient (Kg)"
                      value={premierExam1.Poids}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full py-3 row-span-2 ">
            <FormField
              name="PremierExam.Taille"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taille : </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Entrer taille du patient (cm)"
                      name="PremierExam.Taille"
                      value={premierExam1.Taille}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* ----------------  Appareil auditif  -------------------- */}

        <div className=" p-3 border-l-2 border-green-600 border-lg ">
          <p>Appareil auditif :</p>
          <FormField
            name="PremierExam.Appareil_auditif.OG"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OG : </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Remplire OG"
                    name="PremierExam.Appareil_auditif.OG"
                    value={premierExam2.Appareil_auditif.OG}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="PremierExam.Appareil_auditif.OD"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OD : </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Remplire OD"
                    type="number"
                    name="PremierExam.Appareil_auditif.OD"
                    value={premierExam2.Appareil_auditif.OD}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-3">
          <DrawerScan
          // handleFilesChange={handleFilesChange(files,"PremierExam.Appareil_auditif.Scan" )}
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_auditif.Scan')}
          name={"PremierExam.Appareil_auditif.Scan"}
          placeholder={"Appareil auditif"}
          selectedFiles={premierExam2.Appareil_auditif.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_auditif.Scan')}
        />
          </div>
        </div>
        <div className="col-span-2 border-l-2  border-green-600 border-lg">
          {/* ----------------  appareil Oculairef  -------------------- */}

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
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OG_Pres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Remplire OG "
                            type="number"
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OG_Pres"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_SC.OG_Pres
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OD_Pres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OD_Pres"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_SC.OD_Pres
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OG_Loin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OG_Loin"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_SC.OG_Loin
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OD_Loin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_SC.OD_Loin"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_SC.OD_Loin
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
              <div className="pr-4 grid grid-rows-7 gap-2 col-span-2">
                <p className="text-center ">AC :</p>

                <div className=" grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OG_Pres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OG_Pres"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_AC.OG_Pres
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OD_Pres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OD_Pres"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_AC.OD_Pres
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 row-span-3">
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OG_Loin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OG "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OG_Loin"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_AC.OG_Loin
                            }
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OD_Loin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OD : </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Remplire OD "
                            name="PremierExam.Appareil_Oculaire.Appareil_Oculaire_AC.OD_Loin"
                            value={
                              premierExam2.Appareil_Oculaire
                                .Appareil_Oculaire_AC.OD_Loin
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
            <div className="">
           
              <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_Oculaire.Scan')}
          name={"PremierExam.Appareil_Oculaire.Scan"}
          placeholder={"Appareil Oculaire"}
          selectedFiles={premierExam2.Appareil_Oculaire.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_Oculaire.Scan')}
        />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>

      {/* {/*  */}
      <div className="w-full p-4 grid grid-cols-4 gap-2 ">
        <FormField
          name="PremierExam.Téguments.observation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téguments</FormLabel>
              <FormControl>
                {/* <RadioGroup */}
                <RadioGroup
                  onValueChange={(value) =>
                    handleRadioChange(field.name, value)
                  }
                  value={premierExam2.Téguments.observation}
                  name="PremierExam.Téguments.observation"
                >
                  {/* value={premierExam2.Téguments.observation}
                  name="PremierExam.Téguments.observation"
                > */}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Bien Colorés" />
                    </FormControl>
                    <FormLabel className="font-normal">Bien Colorés</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="pâle" />
                    </FormControl>
                    <FormLabel className="font-normal">Pâle</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-3 pt-4">
          <FormField
            name="PremierExam.Téguments.autre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="autre observation sur le teguments"
                    name="PremierExam.Téguments.autre"
                    value={premierExam2.Téguments.autre}
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
            name="PremierExam.Examen_radiologique.observation"
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
                      handleRadioChange(field.name, radio);
                    }}
                    value={premierExam2.Examen_radiologique.observation}
                    name="PremierExam.Examen_radiologique.observation"
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
              name="PremierExam.Examen_radiologique.autre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="observation sur le scan"
                      name="PremierExam.Examen_radiologique.autre"
                      value={premierExam2.Examen_radiologique.autre}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="">
            {/* <DrawerScan
 handleFilesChange={handleChange}              name={"Scan_examen_radiologique"}
              placeholder={"Examen radiologique"}
            /> */}
             <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Examen_radiologique.Scan')}
          name={"PremierExam.Examen_radiologique.Scan"}
          placeholder={"Examen radiologique"}
          selectedFiles={premierExam2.Examen_radiologique.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Examen_radiologique.Scan')}
        />
          </div>
        </div>
        <div className="border-l-2 col-span-4  border-green-600 border-lg grid grid-rows-3 p-4 gap-3">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <FormField
                // control={form.control}
                name="PremierExam.Appareil_respiratoire_rhinopharynx.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appareil respiratoire - rhinopharynx </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="observation sur le scan d'Appareil respiratoire - rhinopharynx"
                        name="PremierExam.Appareil_respiratoire_rhinopharynx.observation"
                        value={
                          premierExam3.Appareil_respiratoire_rhinopharynx.observation
                        }
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-row-4 gap-2">
              <div className="row-start-4 row-span-2">
                {/* <DrawerScan
 handleFilesChange={handleChange}                  name={"scan_Appareil_respir"}
                  placeholder={"Appareil respiratoire - rhinopharynx"}
                /> */}
                <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_respiratoire_rhinopharynx.Scan')}
          name={"PremierExam.Appareil_respiratoire_rhinopharynx.Scan"}
          placeholder={"Appareil respiratoire - rhinopharynx"}
          selectedFiles={premierExam3.Appareil_respiratoire_rhinopharynx.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_respiratoire_rhinopharynx.Scan')}
        />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <FormField
                // control={form.control}
                name="PremierExam.Appareil_cadiovasculaire.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appareil cadiovasculaire: </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="observation sur le scan d'Appareil cadiovasculaire "
                        name="PremierExam.Appareil_cadiovasculaire.observation"
                        value={
                          premierExam3.Appareil_cadiovasculaire.observation
                        }
                        onChange={handleChange}
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
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_cadiovasculaire.Scan')}
          name={"PremierExam.Appareil_cadiovasculaire.Scan"}
          placeholder={"Appareil cadiovasculaire"}
          selectedFiles={premierExam3.Appareil_cadiovasculaire.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_cadiovasculaire.Scan')}
        />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <FormField
              // control={form.control}
              name="PremierExam.Pouls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pouls : </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="entrer le nombre de pulsation "
                      name="PremierExam.Pouls"
                      value={premierExam3.Pouls}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="PremierExam.T_A"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> T.A :</FormLabel>
                  <FormControl>
                    <Input
                      type=""
                      placeholder="saisir le T.A  "
                      name="PremierExam.T_A"
                      value={premierExam3.T_A}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel>Varices :</FormLabel>
              <FormField
                //   control={form.control}
                name="PremierExam.Varices.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(radio) => {
                          if (radio == "Oui") setVarice_Obs(true);
                          else {
                            setVarice_Obs(false);
                          }
                          handleRadioChange(field.name, radio);
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
              {Varice_Obs && (
                <div className="pt-2 ">
                  <FormField
                    // control={form.control}
                    name="PremierExam.Varices.autre"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="observation sur le Varice "
                            name="PremierExam.Varices.autre"
                            value={premierExam3.Varices.autre}
                            onChange={handleChange}
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
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-cols-5 gap-3 p-4">
        <div className="col-span-4">
          <FormField
            //   control={form.control}
            name="PremierExam.Appareil_digestif.observation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appareil digestif :</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Entrer votre observation "
                    name="PremierExam.Appareil_digestif.observation"
                    value={premierExam4.Appareil_digestif.observation}
                    onChange={handleChange}
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
            {/* <DrawerScan
 handleFilesChange={handleChange}              name={"scan_Appareil_digestif"}
              placeholder={" Appareil digestif :"}
            /> */}
             <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_digestif.Scan')}
          name={"PremierExam.Appareil_digestif.Scan"}
          placeholder={" Appareil digestif :"}

          selectedFiles={premierExam4.Appareil_digestif.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_digestif.Scan')}
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
              name="PremierExam.Appareil_hématologique_réticulaire.observation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appareil hématologique et réticulaire :</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Entrer observation :"
                      name="PremierExam.Appareil_hématologique_réticulaire.observation"
                      value={
                        premierExam4.Appareil_hématologique_réticulaire.observation
                      }
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-row-4 gap-2">
            <div className="row-start-4 row-span-2">
              {/* <DrawerScan
 handleFilesChange={handleChange}                name={"scan_Examen_Radoilogique"}
                placeholder={"Appareil hématologique et réticulaire :"}
              /> */}
              <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_hématologique_réticulaire.Scan')}
          name={"PremierExam.Appareil_hématologique_réticulaire.Scan"}
          placeholder={"Appareil hématologique et réticulaire :"}
          selectedFiles={premierExam4.Appareil_hématologique_réticulaire.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_hématologique_réticulaire.Scan')}
        />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="w-auto  ">
            <FormField
              // control={form.control}
              name="PremierExam.Gangloins"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gangloins : </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Entrer la Gangloins "
                      name="PremierExam.Gangloins"
                      value={premierExam4.Gangloins}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-auto ">
            <FormField
              name="PremierExam.Rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate </FormLabel>
                  <Select
                    onValueChange={(value) => {
                      handleChangeSelect(value, "PremierExam.Rate");
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                    name="PremierExam.Rate"
                    value={premierExam4.Rate}
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
      <div>
        <div className="p-4">
          <FormField
            name={`PremierExam.Glandes_endocriniennes.maladie`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Glandes endocriniennes :</FormLabel>
                <div className="grid grid-cols-4 gap-4 p-3 ">
                <div className="grid grid-flow-row gap-2">
        <FormField
          name="PremierExam.Glandes_endocriniennes.Thyroïde.Check"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    handleChangecheck(checked, field.name);
                  }}
                />
              </FormControl>
              <FormLabel className="font-normal">Thyroïde</FormLabel>
            </FormItem>
          )}
        />
        {premierExam4.Glandes_endocriniennes.Thyroïde.Check && (
          <div className="pl-2 pt-3 grid grid-flow-row gap-3">
            <div>
              <FormField
                name="PremierExam.Glandes_endocriniennes.Thyroïde.sousNom"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(selectedValue) => {
                        field.onChange(selectedValue);
                        handleChangeSelect( selectedValue ,field.name );
                      }}
                         name="PremierExam.Glandes_endocriniennes.Thyroïde.sousNom"

                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Entrer Maladies contractées au serice du patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="TSH">TSH</SelectItem>
                        <SelectItem value="T3">T3</SelectItem>
                        <SelectItem value="T4">T4</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div id="PremierExam.Glandes_endocriniennes.Thyroïde.observation">
              <FormField
                name="PremierExam.Glandes_endocriniennes.Thyroïde.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(radio) => {
                          setGlandesSelectTer(radio === "autres");
                          handleRadioChange(field.name, radio);
                          field.onChange(radio);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="RAS" />
                          </FormControl>
                          <FormLabel className="font-normal">RAS</FormLabel>
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
              {GlandesSelectTer && (
                <div className="pt-2">
                  <FormField
                    name="PremierExam.Glandes_endocriniennes.Thyroïde.autreobservation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="observation sur le scan"  
                    name="PremierExam.Glandes_endocriniennes.Thyroïde.autreobservation"
                          onChange={handleChange}
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
        )}
      </div>

      {/* Hypophyse */}
      <div className="grid grid-flow-row gap-2">
        <FormField
          name="PremierExam.Glandes_endocriniennes.Hypophyse.Check"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    handleChangecheck(checked, field.name);
                  }}
                />
              </FormControl>
              <FormLabel className="font-normal">Hypophyse</FormLabel>
            </FormItem>
          )}
        />
        {premierExam4.Glandes_endocriniennes.Hypophyse.Check && (
          <div className="pl-2 pt-3 grid grid-flow-row gap-3">
            <div id="PremierExam.Glandes_endocriniennes.Hypophyse.observation">
              <FormField
                name="PremierExam.Glandes_endocriniennes.Hypophyse.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(radio) => {
                          setGlandesSelectHyp(radio === "autres");
                          handleRadioChange(field.name, radio);
                          field.onChange(radio);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="RAS" />
                          </FormControl>
                          <FormLabel className="font-normal">RAS</FormLabel>
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
              {GlandesSelectHyp && (
                <div className="pt-2">
                  <FormField
                    name="PremierExam.Glandes_endocriniennes.Hypophyse.autreobservation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="observation sur le scan"
                           name="PremierExam.Glandes_endocriniennes.Hypophyse.autreobservation"     onChange={handleChange} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Glandes surrénales */}
      <div className="grid grid-flow-row gap-2">
        <FormField
          name="PremierExam.Glandes_endocriniennes.Glandes_surrénales.Check"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    handleChangecheck(checked, field.name);
                  }}
                />
              </FormControl>
              <FormLabel className="font-normal">Glandes surrénales</FormLabel>
            </FormItem>
          )}
        />
        {premierExam4.Glandes_endocriniennes.Glandes_surrénales.Check && (
          <div className="pl-2 pt-3 grid grid-flow-row gap-3">
            <div id="PremierExam.Glandes_endocriniennes.Glandes_surrénales.observation">
              <FormField
                name="PremierExam.Glandes_endocriniennes.Glandes_surrénales.observation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(radio) => {
                          setGlandesSelectGland(radio === "autres");
                          handleRadioChange(field.name, radio);
                          field.onChange(radio);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="RAS" />
                          </FormControl>
                          <FormLabel className="font-normal">RAS</FormLabel>
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
              {GlandesSelectGland && (
                <div className="pt-2">
                  <FormField
                    name="PremierExam.Glandes_endocriniennes.Glandes_surrénales.autreobservation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="observation sur le scan" 
                    name="PremierExam.Glandes_endocriniennes.Glandes_surrénales.autreobservation"
                          onChange={handleChange} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
                  <FormField
                 name="PremierExam.Glandes_endocriniennes.Autres"

                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autre :</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="observation sur le scan"
                            name="PremierExam.Glandes_endocriniennes.Autres"
                            value={premierExam4.Glandes_endocriniennes.Autres}
                            onChange={handleChange} />
                         
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <DrawerScan
 handleFilesChange={handleChange}            name={`Glandes_endocriniennes_Scan`}
            placeholder={"Glandes endocriniennes"}
          /> */}
          <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Glandes_endocriniennes.Scan')}
          name={"PremierExam.Glandes_endocriniennes.Scan"}
          placeholder={"Glandes endocriniennes"}
          selectedFiles={premierExam4.Glandes_endocriniennes.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Glandes_endocriniennes.Scan')}
        />
          
        </div>
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
                  name="PremierExam.Système_nerveux.Maladie_neurologique.Check"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) {
                              setSystNerv_Maladie_neurologique(true);
                              handleChangecheck(true, field.name);
                            } else {
                              setSystNerv_Maladie_neurologique(false);
                              handleChangecheck(false, field.name);
                            }
                          }}
                          //  value={premierExam5.Système_nerveux.Maladie_neurologique.Check}
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
                          // name={`SystNerv_Maladie_neurologique_obser`}
                          name="PremierExam.Système_nerveux.Maladie_neurologique.observation"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    // handleRadioChange(radio ,'PremierExam.Système_nerveux.Maladie_neurologique.observation');
                                    handleRadioChange(field.name, radio);
                                    if (radio == "autres")
                                      setMaladie_neurologique_Obs(true);
                                    else {
                                      setMaladie_neurologique_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  value={
                                    premierExam5.Système_nerveux
                                      .Maladie_neurologique.observation
                                  }
                                  name="PremierExam.Système_nerveux.Maladie_neurologique.observation"
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
                              name="PremierExam.Système_nerveux.Maladie_neurologique.autreobservation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      name="PremierExam.Système_nerveux.Maladie_neurologique.autreobservation"
                                      value={
                                        premierExam5.Système_nerveux
                                          .Maladie_neurologique.autreobservation
                                      }
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      {/* <DrawerScan
                  handleFilesChange={handleChange}                        name={`SystNerv_Maladie_neurologique_Scan`}
                        placeholder={"Maladie neurologique"}
                      /> */}
                       
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* //Hernie_discale */}
            <div className="pl-6">
              <div>
                <FormField
                  name="PremierExam.Système_nerveux.Hernie_discale.Check"
                  // name="SystNerv_Hernie_discale"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) {
                              setSystNerv_Hernie_discale(true);
                              handleChangecheck(true, field.name);
                            } else {
                              setSystNerv_Hernie_discale(false);
                              handleChangecheck(false, field.name);
                            }
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
                          name="PremierExam.Système_nerveux.Hernie_discale.observation"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    handleRadioChange(field.name, radio);
                                    if (radio == "autres")
                                      setHernie_discale_Obs(true);
                                    else {
                                      setHernie_discale_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  value={
                                    premierExam5.Système_nerveux
                                      .Hernie_discale.observation
                                  }
                                  name="PremierExam.Système_nerveux.Hernie_discale.observation"
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
                              name="PremierExam.Système_nerveux.Hernie_discale.autreobservation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      value={
                                        premierExam5.Système_nerveux
                                          .Hernie_discale.autreobservation
                                      }
                                      name="PremierExam.Système_nerveux.Hernie_discale.autreobservation"
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      {/* <DrawerScan
            handleFilesChange={handleChange}                        name={`SystNerv_Hernie_discale_Scan`}
                        placeholder={"Hernie discale"}
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* NCB  */}
         
            <div className="pl-6">
              <div>
                <FormField
                  name="PremierExam.Système_nerveux.NCB.Check"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) {
                              setSystNerv_NCB(true);
                              handleChangecheck(true, field.name);
                            } else {
                              setSystNerv_NCB(false);
                              handleChangecheck(false, field.name);
                            }
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
                      <div id="SystNerv_NCB_obser">
                        <FormField
                          name="PremierExam.Système_nerveux.NCB.observation"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    handleRadioChange(field.name, radio);
                                    if (radio === "autres") {
                                      setNCB_Obs(true);
                                    } else {
                                      setNCB_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  value={
                                    premierExam5.Système_nerveux.NCB
                                      .observation
                                  }
                                  name="PremierExam.Système_nerveux.NCB.observation"
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
                              name="PremierExam.Système_nerveux.NCB.autreobservation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      value={
                                        premierExam5.Système_nerveux.NCB
                                          .autreobservation
                                      }
                                      name="PremierExam.Système_nerveux.NCB.autreobservation"
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      {/* <DrawerScan
              handleFilesChange={handleChange}                        name="SystNerv_NCB_Scan"
                        placeholder={"NCB"}
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Lesion_cérébrale */}
            {/* Lesion cérébrale */}
            <div className="pl-6">
              <div>
                <FormField
                  name="PremierExam.Système_nerveux.Lesion_cérébrale.Check"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked) {
                              setSystNerv_Lesion_cérébrale(true);
                              handleChangecheck(true, field.name);
                            } else {
                              setSystNerv_Lesion_cérébrale(false);
                              handleChangecheck(false, field.name);
                            }
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
                      <div id="SystNerv_Lesion_cérébrale_obser">
                        <FormField
                          name="PremierExam.Système_nerveux.Lesion_cérébrale.observation"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(radio) => {
                                    handleRadioChange(field.name, radio);
                                    if (radio === "autres") {
                                      setLesion_cérébrale_Obs(true);
                                    } else {
                                      setLesion_cérébrale_Obs(false);
                                    }
                                    field.onChange(radio);
                                  }}
                                  value={
                                    premierExam5.Système_nerveux
                                      .Lesion_cérébrale.observation
                                  }
                                  name="PremierExam.Système_nerveux.Lesion_cérébrale.observation"
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
                              name="PremierExam.Système_nerveux.Lesion_cérébrale.autreobservation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="observation sur le scan"
                                      value={
                                        premierExam5.Système_nerveux
                                          .Lesion_cérébrale.autreobservation
                                      }
                                      name="PremierExam.Système_nerveux.Lesion_cérébrale.autreobservation"
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
                      {/* <DrawerScan
            handleFilesChange={handleChange}                        name="SystNerv_Lesion_cérébrale_Scan"
                        placeholder={"Lesion cérébrale"}
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Système_nerveux.Scan')}
          name={"PremierExam.Système_nerveux.Scan"}
          placeholder={"Système nerveux"}
          selectedFiles={premierExam5.Système_nerveux.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Système_nerveux.Scan')}
        />
          </div>

          <div>
            <FormLabel>Tremblement :</FormLabel>
            <FormField
              //   control={form.control}
              name="PremierExam.Tremblement.observation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        handleRadioChange(field.name , radio);
                        if (radio == "Oui") setTremb_Obs(true);
                        else {
                          setTremb_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      value={
                        premierExam5.Tremblement.observation
                      }
                      name="PremierExam.Tremblement.observation"
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
                  name="PremierExam.Tremblement.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le tremblement "
                          value={
                            premierExam5.Tremblement.autre
                          }
                          name="PremierExam.Tremblement.autre"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          {/*                 Equilibre                    */}
          <div>
            <FormLabel>Trouble de l'équilibre :</FormLabel>
            <FormField
              //   control={form.control}
              name="PremierExam.Trouble_equilibre.observation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        handleRadioChange(field.name , radio);
                        if (radio == "Oui") setEquil_Obs(true);
                        else {
                          setEquil_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      value={
                        premierExam5.Trouble_equilibre.observation
                      }
                      name="PremierExam.Trouble_equilibre.observation"
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
                  name="PremierExam.Trouble_equilibre.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le Equilibre "
                          value={
                            premierExam5.Trouble_equilibre.autre
                          }
                          name="PremierExam.Trouble_equilibre.autre"
                          onChange={handleChange}
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
              name="PremierExam.Réflexes.observation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                        handleRadioChange(field.name , radio);

                        if (radio == "Non") setReflex_Obs(true);
                        else {
                          setReflex_Obs(false);
                        }
                        field.onChange(radio);
                      }}
                      value={
                        premierExam5.Réflexes.observation
                      }
                      name="PremierExam.Réflexes.observation"
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
                  name="PremierExam.Réflexes.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="observation sur le Réflexes "
                          value={
                            premierExam5.Réflexes.autre
                          }
                          name="PremierExam.Réflexes.autre"
                          onChange={handleChange}
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

{/* Nevrose */}
<div className="pl-2">
  <FormItem>
    <FormLabel>Nevrose :</FormLabel>
    <FormField
              name="PremierExam.Psychisme.Nevrose.Anxiété"        
              render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Nevrose.Anxiété"        
                  />
          </FormControl>
          <FormLabel className="font-normal">Anxiété</FormLabel>
        </FormItem>
      )}
    />
    <FormField
              name="PremierExam.Psychisme.Nevrose.Depression"        
              render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Nevrose.Depression"        
                  />
          </FormControl>
          <FormLabel className="font-normal">Depression</FormLabel>
        </FormItem>
      )}
    />
    <FormField
              name="PremierExam.Psychisme.Nevrose.Stress"
              render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
           onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Nevrose.Stress"
            />
          </FormControl>
          <FormLabel className="font-normal">Stress</FormLabel>
        </FormItem>
      )}
    />
    <FormField
      name="PremierExam.Psychisme.Nevrose.TOC"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Nevrose.TOC"

            />
          </FormControl>
          <FormLabel className="font-normal">TOC</FormLabel>
        </FormItem>
      )}
    />
    <div className="pt-2">
      <FormField
        name="PremierExam.Psychisme.Nevrose_autres"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Entrer autre maladie Nevrose"
                name="PremierExam.Psychisme.Nevrose.autre"
                value={premierExam5.Psychisme.Nevrose.autre}
                onChange={handleChange}
               />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </FormItem>
</div>

{/* Psychose */}
<div className="pl-2">
  <FormItem>
    <FormLabel>Psychose :</FormLabel>
    <FormField
        name="PremierExam.Psychisme.Psychose.Bipolarité"
        render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
             onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Psychose.Bipolarité"
            />
          </FormControl>
          <FormLabel className="font-normal">Bipolarité</FormLabel>
        </FormItem>
      )}
    />
    <FormField
       name="PremierExam.Psychisme.Psychose.Schizophrénie"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Psychose.Schizophrénie"
            />
          </FormControl>
          <FormLabel className="font-normal">Schizophrénie</FormLabel>
        </FormItem>
      )}
    />
    <FormField
        name="PremierExam.Psychisme.Psychose.Paranoïaque"
        render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              // onCheckedChange={(checked) => handleChangecheck(checked, "PremierExam.Psychisme.Paranoïaque")}
               onCheckedChange={(checked) => handleChangecheck(checked, field.name)}
              name="PremierExam.Psychisme.Psychose.Paranoïaque"
            />
          </FormControl>
          <FormLabel className="font-normal">Paranoïaque</FormLabel>
        </FormItem>
      )}
    />
    <div className="pt-2">
      <FormField
          name="PremierExam.Psychisme.Psychose.autre"
          render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Entrer autre maladie Psychose"
              name="PremierExam.Psychisme.Psychose.autre"
              //  value={premierExam5.Psychisme.Psychose.autre}
               onChange={handleChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </FormItem>
</div>

<div className="pt-2">
  {/* <DrawerScan  handleFilesChange={handleChange}name="Psychisme_Scan" placeholder="Psychisme" /> */}
  <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Psychisme.Scan')}
          name={"PremierExam.Psychisme.Scan"}
          placeholder="Psychisme"
          selectedFiles={premierExam5.Psychisme.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Psychisme.Scan')}
        />
</div>
        </div>
      </div>
      <div className="border-2 border-green-600 border-lg"></div>
      {/* ----------------------------------Appareil locomoteur---------------------- */}
      <div className="p-4">
        {" "}
        <FormLabel>Appareil locomoteur :</FormLabel>
        <div className="pl-4">
          <div className="grid grid-cols-5 ">
            <FormField
              //   control={form.control}
            name="PremierExam.Appareil_locomoteur.Membres_Supérieurs.observation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membres Supérieurs :</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                          handleRadioChange(field.name, radio);
                        if (radio == "Autres") setMembre_Sup(true);
                        else {
                          setMembre_Sup(false);
                        }
                        field.onChange(radio);
                      }}
                       name="PremierExam.Appareil_locomoteur.Membres_Supérieurs.observation"
                      value={premierExam6.Appareil_locomoteur.Membres_Supérieurs.observation}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="RAS" />
                        </FormControl>
                        <FormLabel className="font-normal">RAS</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Autres" />
                        </FormControl>
                        <FormLabel className="font-normal">Autres</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {Membre_Sup && (
              <div className="pt-2 content-end col-span-4 justify-start items-start">
                <FormField
                  // control={form.control}
                         name="PremierExam.Appareil_locomoteur.Membres_Supérieurs.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Entrer votre observation "
                         name="PremierExam.Appareil_locomoteur.Membres_Supérieurs.autre"
                          //  value={premierExam6.Appareil_locomoteur.Membres_Supérieurs.autre}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-5 ">
            <FormField
              //   control={form.control}
              name="PremierExam.Appareil_locomoteur.Membres_Inférieur.observation"

              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membres Inférieur :</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                       handleRadioChange(field.name, radio);
                        if (radio == "Autres") setMembre_Inf(true);
                        else {
                          setMembre_Inf(false);
                        }
                        field.onChange(radio);
                      }} 
                      name="PremierExam.Appareil_locomoteur.Membres_Inférieur.observation"
                      value={premierExam6.Appareil_locomoteur.Membres_Inférieur.observation}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="RAS" />
                        </FormControl>
                        <FormLabel className="font-normal">RAS</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Autres" />
                        </FormControl>
                        <FormLabel className="font-normal">Autres</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {Membre_Inf && (
              <div className="pt-2 content-end col-span-4 justify-start items-start">
                <FormField
                  // control={form.control}
                       name="PremierExam.Appareil_locomoteur.Membres_Inférieur.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Entrer votre observation"
                       name="PremierExam.Appareil_locomoteur.Membres_Inférieur.autre"
                          //  value={premierExam6.Appareil_locomoteur.Membres_Inférieur.autre}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-5 ">
            <FormField
              //   control={form.control}
            name="PremierExam.Appareil_locomoteur.Articulations.observation"

              render={({ field }) => (
                <FormItem>
                  <FormLabel>Articulations :</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(radio) => {
                      handleRadioChange(field.name, radio);
                        if (radio == "Autres") setArticula(true);
                        else {
                          setArticula(false);
                        }
                        field.onChange(radio);
                      }}
                       name="PremierExam.Appareil_locomoteur.Articulations.observation"
                          //  value={premierExam6.Appareil_locomoteur.Articulations.observation}
                       
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 pt-2 pl-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="RAS" />
                        </FormControl>
                        <FormLabel className="font-normal">RAS</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Autres" />
                        </FormControl>
                        <FormLabel className="font-normal">Autres</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {Articula && (
              <div className="pt-2 content-end col-span-4 justify-start items-start">
                <FormField
                  // control={form.control}
                    name="PremierExam.Appareil_locomoteur.Articulations.autre"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Entrer votre observation "
                        name="PremierExam.Appareil_locomoteur.Articulations.autre"
                          //  value={premierExam6.Appareil_locomoteur.Articulations.autre}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          <div className="pt-2">
            {/* <DrawerScan
 handleFilesChange={handleChange}              name={`Appareil_locomoteur_Scan`}
              placeholder={"Appareil locomoteur Scan "}
            /> */}
             <DrawerScan
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_locomoteur.Scan')}
          name={"PremierExam.Appareil_locomoteur.Scan"}
          placeholder={"Appareil locomoteur Scan "}
          selectedFiles={premierExam6.Appareil_locomoteur.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_locomoteur.Scan')}
        />
          </div>
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>
      <div className="p-4">
        <FormLabel>Appareil génital :</FormLabel>
        <div>
          <FormField
            //   control={form.control}
            name="PremierExam.Appareil_génital.type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={(radio) => {
                      if (radio == "Homme") setSex("Homme");
                      else {
                        setSex("Femme");
                      }
                      handleRadioChange(field.name,radio);
                      field.onChange(radio);
                    }}
                    value={premierExam6.Appareil_génital.type}
                    name="PremierExam.Appareil_génital.type"
                    defaultValue={field.value}
                    className="flex flex-rows space-y-1 pt-2 pl-6"
                  >
                    <FormItem className="flex items-center w-[50%] space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Homme" />
                      </FormControl>
                      <FormLabel className="font-normal">Homme</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center w-[50%] space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Femme" />
                      </FormControl>
                      <FormLabel className="font-normal">Femme</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 w-full">
            {Sex == "Homme" && (
              <div className="  content-start items-end pl-6">
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                        name="PremierExam.Appareil_génital.Prostate.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked)
                                  setApp_genital_prostate_homme(true);
                                else setApp_genital_prostate_homme(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.Prostate.Check"
                              // value={premierExam6.Appareil_génital.Prostate.Check}
                              />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Prostate
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_prostate_homme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_prostate_homme_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Prostate.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        handleRadioChange(field.name, radio)
                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_génital.Prostate.observation"
                                      value={premierExam6.Appareil_génital.Prostate.observation}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Normale" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Normale
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="HBP" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          HBP
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Cancer_de_prostate" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Cancer de la prostate
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_prostate_homme_Scan`}
                            placeholder={"Appareil génital (Prostate) "}
                          /> */}
                         
                          
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                          name="PremierExam.Appareil_génital.MST.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_MST_homme(true);
                                else setApp_genital_MST_homme(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.MST.Check"
                              // value={premierExam6.Appareil_génital.MST.Check}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">MST</FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_MST_homme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_MST_homme_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.MST.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Oui") setMSTautres(true);
                                        else setMSTautres(false);
                                        handleRadioChange(field.name,radio);
                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_génital.MST.observation"
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Non" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Non
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Oui" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Oui
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {MSTautres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.MST.autre"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.MST.autre"

                                          value={premierExam6.Appareil_génital.MST.autre}
                                            onChange={handleChange}

                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_MST_homme_Scan`}
                            placeholder={"Appareil génital (MST)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                  name="PremierExam.Appareil_génital.Troubles_érectiles.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked)
                                  setApp_genital_troubles_erectiles_homme(true);
                                else
                                  setApp_genital_troubles_erectiles_homme(
                                    false
                                  );
                                  handleChangecheck(checked,field.name)
                                }}
                                name="PremierExam.Appareil_génital.Troubles_érectiles.Check"
                                // value={premierExam6.Appareil_génital.Troubles_érectiles.Check}
                                />

            
                          </FormControl>
                          <FormLabel className="font-normal">
                            Troubles érectiles
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_troubles_erectiles_homme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div
                            id={`App_genital_troubles_erectiles_homme_obser`}
                          >
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Troubles_érectiles.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Entrer votre observation   "
                                      name="PremierExam.Appareil_génital.Troubles_érectiles.observation"
                                value={premierExam6.Appareil_génital.Troubles_érectiles.observation}
                                onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_troubles_erectiles_homme_Scan`}
                            placeholder={
                              "Appareil génital (Troubles érectiles) " */}
                            {/* }
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                      name="PremierExam.Appareil_génital.autre.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked)
                                  setApp_genital_AutresMaladie_homme(true);
                                else setApp_genital_AutresMaladie_homme(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.autre.Check"
                              // value={premierExam6.Appareil_génital.autre.Check}
                              />
                          </FormControl>
                          <FormLabel className="font-normal">Autres</FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_AutresMaladie_homme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_troubles_erectiles_homme`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.autre.nom"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom de la maladies :</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Entrer le nom de la maladies"
                                      name="PremierExam.Appareil_génital.autre.nom"
                                      value={premierExam6.Appareil_génital.autre.nom}
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.autre.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Observation sur maladie:
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Entrer votre observation"
                                      name="PremierExam.Appareil_génital.autre.observation"
                                      value={premierExam6.Appareil_génital.autre.observation}
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_AutresMaladie_homme_Scan`}
                            placeholder={"Appareil génital () "}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {Sex == "Femme" && (
              <div className=" col-start-2  pl-6 ">
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                        name="PremierExam.Appareil_génital.MST.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_MST_femme(true);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.MST.Check"
                              // value={premierExam6.Appareil_génital.Prostate.Check}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">MST</FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_MST_femme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_MST_femme_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.MST.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Oui")
                                          setMSTautresFemme(true);
                                        else setMSTautresFemme(false);
                                          handleRadioChange(field.name , radio);
                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_génital.MST.observation"
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Non" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Non
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Oui" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Oui
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {MSTautresFemme && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.MST.autre"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.MST.autre"
                                          value={premierExam6.Appareil_génital.MST.autre}
                                          onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_MST_femme_Scan`}
                            placeholder={"Appareil génital (MST)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                        name="PremierExam.Appareil_génital.Leucorrhée.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_leucorrhée(true);
                                else setApp_genital_leucorrhée(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.Leucorrhée.Check"
                              // value={premierExam6.Appareil_génital.Leucorrhée.Check}
                               />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Leucorrhée
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_leucorrhée && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_leucorrhée_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Leucorrhée.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Oui")
                                          setleucorrhée_autres(true);
                                        else setleucorrhée_autres(false);

                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_génital.Leucorrhée.observation"
                                      value={premierExam6.Appareil_génital.Leucorrhée.observation}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Non" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Non
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Oui" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Oui
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {leucorrhée_autres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.Leucorrhée.autre"

                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.Leucorrhée.autre"
                                          value={premierExam6.Appareil_génital.Leucorrhée.autre}
                                          onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_leucorrhée_Scan`}
                            placeholder={"Appareil génital (Leucorrhée)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                              name="PremierExam.Appareil_génital.Trouble_menstruels.Check"
                              render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_Troub_Sexu(true);
                                else setApp_genital_Troub_Sexu(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_génital.Trouble_menstruels.Check"
                              // value={premierExam6.Appareil_génital.Trouble_menstruels.Check}
                               />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Trouble menstruels
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_Troub_Sexu && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_Troub_Sexu_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Trouble_menstruels.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Oui")
                                          setTrouble_sexuel_autres(true);
                                        else setTrouble_sexuel_autres(false);
                                        handleRadioChange(field.name, radio);
                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_génital.Trouble_menstruels.observation"
                                      value={premierExam6.Appareil_génital.Trouble_menstruels.observation}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Non" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Non
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="Oui" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Oui
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {Trouble_sexuel_autres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.Trouble_menstruels.autre"

                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.Trouble_menstruels.autre"
                                      value={premierExam6.Appareil_génital.Trouble_menstruels.autre}
                                     onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_Troub_Sexu_Scan`}
                            placeholder={
                              "Appareil génital (Troubles menstruels )" */}
                            {/* }
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                         name="PremierExam.Appareil_génital.Seins.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_seins(true);
                                else setApp_genital_seins(false);
                                handleChangecheck(checked,field.name)
                              }}
                                name="PremierExam.Appareil_génital.Seins.Check"
                                // value={premierExam6.Appareil_génital.Trouble_menstruels.Check}
                                 />
                          </FormControl>
                          <FormLabel className="font-normal">Seins</FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_seins && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_seins_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Seins.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                          setSeins_autres(true);
                                        else setSeins_autres(false);

                                        field.onChange(radio);
                                        handleRadioChange(field.name,radio);
                                      }}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                      name="PremierExam.Appareil_génital.Seins.observation"
                                      // value={premierExam6.Appareil_génital.Trouble_menstruels.Check}
                                
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
                                          <RadioGroupItem value="Autres" />
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
                            {Seins_autres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.Seins.autre"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.Seins.autre"
                                          value={premierExam6.Appareil_génital.Seins.autre}
                                onChange={handleChange}    
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_seins_Scan`}
                            placeholder={"Appareil génital (Seins)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                        name="PremierExam.Appareil_génital.Episiotomie.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setApp_genital_episiotomie(true);
                                else setApp_genital_episiotomie(false);
                                handleChangecheck(checked,field.name)
                              }}
                                name="PremierExam.Appareil_génital.Episiotomie.Check"
                                // value={premierExam6.Appareil_génital.Episiotomie.Check}
                                 />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Episiotomie
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_episiotomie && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_episiotomie_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.Episiotomie.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                          setepisiotomie_autres(true);
                                        else setepisiotomie_autres(false);
                                        handleRadioChange(field.name, radio);
                                        field.onChange(radio);
                                      }}
                                     name="PremierExam.Appareil_génital.Episiotomie.observation"

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
                                          <RadioGroupItem value="Autres" />
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
                            {episiotomie_autres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_génital.Episiotomie.autre"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_génital.Episiotomie.autre"
                                value={premierExam6.Appareil_génital.Episiotomie.autre}
                                      onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_episiotomie_Scan`}
                            placeholder={"Appareil génital (Episiotomie)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                      name="PremierExam.Appareil_génital.autre.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked)
                                  setApp_genital_AutresMaladie_Femme(true);
                                else setApp_genital_AutresMaladie_Femme(false);
                                handleChangecheck(checked,field.name)
                              }}
                                name="PremierExam.Appareil_génital.autre.Check"
                                // value={premierExam6.Appareil_génital..Check}
                                 />
                          </FormControl>
                          <FormLabel className="font-normal">Autres</FormLabel>
                        </FormItem>
                      )}
                    />
                    {App_genital_AutresMaladie_Femme && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_genital_troubles_erectiles_Femme`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.autre.nom"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom de la maladies :</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Entrer le nom de la maladies"
                                      name="PremierExam.Appareil_génital.autre.nom"
                                      value={premierExam6.Appareil_génital.autre.nom}
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_génital.autre.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Observation sur maladie:
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Entrer votre observation"
                                      name="PremierExam.Appareil_génital.autre.observation"
                                      value={premierExam6.Appareil_génital.autre.observation}
                                      onChange={handleChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_genital_AutresMaladie_Femme_Scan`}
                            placeholder={"Appareil génital () "}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
       <div className="p-2"> 
        <DrawerScan 
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_génital.Scan')}
          name={"PremierExam.Appareil_génital.Scan"}
          placeholder="Appareil génital "
          selectedFiles={premierExam6.Appareil_génital.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_génital.Scan')}
        />
        </div>  
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>

      <div className=" p-4  ">
        <FormLabel>Appareil urinaire :</FormLabel>
        <div>
          <FormField
            name="App_urinaire"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={(radio) => {
                      if (radio == "Trouble_urinaires")
                        setapp_urin("Trouble_urinaires");
                      else {
                        setapp_urin("Reins");
                      }
                      // handleRadioChange(field.name , radio);
                      field.onChange(radio);
                    }}
            
                
  
                    defaultValue={field.value}
                    className="flex flex-rows space-y-1 pt-2 pl-6"
                  >
                    <FormItem className="flex items-center w-[50%] space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Trouble_urinaires" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Trouble urinaires
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Reins" />
                      </FormControl>
                      <FormLabel className="font-normal">Reins</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 w-full">
            {app_urin == "Trouble_urinaires" && (
              <div className=" content-start items-end pl-6">
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                            name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setapp_urinaire_Dysurie(true);
                                else setapp_urinaire_Dysurie(false);
                                handleChangecheck(checked,field.name);
                              }}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.Check"
                              // value={premierExam6.Appareil_urinaire.Trouble_urinaires.Dysurie.Check}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Dysurie{" "}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {app_urinaire_Dysurie && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_urin_Dysurie_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                          setDysurieautres(true);
                                        else setDysurieautres(false);
                                              handleRadioChange(field.name, radio);
                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.observation"
                                      value={premierExam6.Appareil_urinaire.Trouble_urinaires.Dysurie.observation}
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
                                          <RadioGroupItem value="Autres" />
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
                            {Dysurieautres && (
                              <div className="pt-2">
                                <FormField
                               name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.autre"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.autre"
                                          value={premierExam6.Appareil_urinaire.Trouble_urinaires.Dysurie.autre}
                                        onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_urin_Dysurie_Scan`}
                            placeholder={"Appareil urinaires (Dysurie)"}
                          /> */}
                      
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                                   name="PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.Check"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setapp_urinaire_Pollokinire(true);
                                else setapp_urinaire_Pollokinire(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.Check"
                              // value={premierExam6.Appareil_urinaire.Trouble_urinaires.Dysurie.Check}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Pollokinire{" "}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {app_urinaire_Pollokinire && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_urin_Pollokinire_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                          setPollokinireautres(true);
                                        else setPollokinireautres(false);
                                        handleRadioChange(field.name, radio);

                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.observation"
                                      value={premierExam6.Appareil_urinaire.Trouble_urinaires.Pollokinire.observation}
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
                                          <RadioGroupItem value="Autres" />
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
                            {Pollokinireautres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.autre"

                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.autre"
                                          value={premierExam6.Appareil_urinaire.Trouble_urinaires.Pollokinire.autre}
                                         onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_urin_Pollokinire_Scan`}
                            placeholder={"Appareil urinaires (Pollokinire)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                                name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) setapp_urinaire_brûlures(true);
                                else setapp_urinaire_brûlures(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.Check"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Brûlures{" "}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {app_urinaire_brûlures && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_urin_brûlures_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.observation"

                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                          setbrûluresautres(true);
                                        else setbrûluresautres(false);
                                        handleRadioChange(field.name, radio);

                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.observation"
                                      value={premierExam6.Appareil_urinaire.Trouble_urinaires.Brûlures.observation}
                                     
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
                                          <RadioGroupItem value="Autres" />
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
                            {brûluresautres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.autre"

                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.autre"
                                          value={premierExam6.Appareil_urinaire.Trouble_urinaires.Brûlures.autre}
                                         onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_urin_brûlures_Scan`}
                            placeholder={"Appareil urinaires (Brûlures)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-2 pl-6">
                  <div>
                    <FormField
                      name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.Check"

                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked)
                                  setapp_urinaire_mictionnelles(true);
                                else setapp_urinaire_mictionnelles(false);
                                handleChangecheck(checked,field.name)
                              }}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.Check"
                              />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Mictionnelles{" "}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {app_urinaire_mictionnelles && (
                      <div>
                        <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                          <div id={`App_urin_mictionnelles_obser`}>
                            <FormField
                              // control={form.control}
                              name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.observation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(radio) => {
                                        if (radio == "Autres")
                                        setmictionnellesautres(true);
                                        else setmictionnellesautres(false);

                                        field.onChange(radio);
                                        handleRadioChange(field.name, radio);

                                        field.onChange(radio);
                                      }}
                                      name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.observation"
                                      value={premierExam6.Appareil_urinaire.Trouble_urinaires.Mictionnelles.observation}
                                     
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
                                          <RadioGroupItem value="Autres" />
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
                            {mictionnellesautres && (
                              <div className="pt-2">
                                <FormField
                                  // control={form.control}
                                  name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.autre"

                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="observation sur le scan"
                                          name="PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.autre"
                                          value={premierExam6.Appareil_urinaire.Trouble_urinaires.Mictionnelles.autre}
                                         onChange={handleChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          {/* <DrawerScan
 handleFilesChange={handleChange}                            name={`App_urin_mictionnelles_Scan`}
                            placeholder={"Appareil urinaires (Mictionnelles)"}
                          /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {app_urin == "Reins" && (
              <div className=" col-start-2  pl-6 ">
                <div className="pl-6 pt-3 grid grid-flow-row gap-3">
                  <div id={`App_urin_Reins_obser`}>
                    <FormField
                      // control={form.control}
                      name="PremierExam.Appareil_urinaire.Reins.observation"

                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(radio) => {
                                if (radio == "Autres") setReinsautres(true);

                                else setReinsautres(false);
                                handleRadioChange(field.name, radio);
                              
                                field.onChange(radio);
                              }}
                              name="PremierExam.Appareil_urinaire.Reins.observation"
                              value={premierExam6.Appareil_urinaire.Reins.observation}
                            
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
                                  <RadioGroupItem value="Autres" />
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
                    {Reinsautres && (
                      <div className="pt-2">
                        <FormField
                          // control={form.control}
                          name="PremierExam.Appareil_urinaire.Reins.autre"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="observation sur le scan"
                                  name="PremierExam.Appareil_urinaire.Reins.autre"
                                  value={premierExam6.Appareil_urinaire.Reins.autre}
                                  onChange={handleChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                  {/* <DrawerScan
 handleFilesChange={handleChange}                    name={`App_urin_Reins_Scan`}
                    placeholder={"Appareil urinaires (Reins)"}
                  /> */}
                </div>
              </div>
            )}
          </div>

          <div className="p-2"> 
        <DrawerScan 
          handleFilesChange={(files) => handleFilesChange(files, 'PremierExam.Appareil_urinaire.Scan')}
          name={"PremierExam.Appareil_urinaire.Scan"}
          placeholder="Appareil urinaire "
          selectedFiles={premierExam6.Appareil_urinaire.Scan}
          onDeleteFile={(index) => handleDeleteFile(index, 'PremierExam.Appareil_urinaire.Scan')}
        />
        </div> 
        </div>
      </div>

      <div className="border-2 border-green-600 border-lg"></div>
      <div className="grid grid-rows-2 gap-3   p-4 ">
        <FormField
          //   control={form.control}
          name="PremierExam.Alb"

          render={({ field }) => (
            <FormItem>
              <FormLabel>Alb :</FormLabel>
              <FormControl>
                <Input placeholder="Entrer l'alb " 
                name="PremierExam.Alb"
                value={premierExam6.Alb}
                onChange={handleChange}
                 />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          //   control={form.control}
          name="PremierExam.Sucre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sucre :</FormLabel>
              <FormControl>
                <Input placeholder="Entrer le sucre   " 
                 name="PremierExam.Sucre"
                 value={premierExam6.Sucre}
                 onChange={handleChange}/>
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
          name="PremierExam.Autres_constatations"

          render={({ field }) => (
            <FormItem>
              <FormLabel>Autres constatations :</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Entrer  Autres constatations  "
                  name="PremierExam.Autres_constatations"
                  value={premierExam6.Autres_constatations}
                  onChange={handleChange}/>
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
          name="PremierExam.Examens_complémentaires"

          render={({ field }) => (
            <FormItem>
              <FormLabel> Examens complémentaires :</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Entrer l'Examens complémentaires   "
                  name="PremierExam.Examens_complémentaires"
                  value={premierExam6.Examens_complémentaires}
                  onChange={handleChange}/>
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
          name="PremierExam.Conclusions_Médicales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conclusions Médicales :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer conclusions Médicales  "
                  name="PremierExam.Conclusions_Médicales"
                  value={premierExam6.Conclusions_Médicales}
                  onChange={handleChange}/>
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
          name="PremierExam.Conclusions_Professionnels"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conclusions Professionnels :</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrer conclusions  Professionnels  "
                  name="PremierExam.Conclusions_Professionnels"
                  value={premierExam6.Conclusions_Professionnels}
                  onChange={handleChange}/>
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
