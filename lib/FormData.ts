interface InfoPersonnel {
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
  }
  
  interface AntecedentMédicaux {
    Antecedents_Familiaux: string[];
    Antecedents_Personnelle: string[];
  }
  
  interface AntecedentProfessionnels {
    Formation_Scolaire_Profess: string;
    Activités_Profess_Antérieur: string;
    Accidents_Contract_Service: string;
    Maladie_contracté_Service: string;
  }
  
  interface Vaccination {
    Type: string;
    date_V: string;
    Rappels: string;
    observation: string;
  }
  
  interface FormData {
    nbr_Dossier: string;
    delegation_Medicale: string;
    Formation_Santaire: string;
    InfoPersonnel: InfoPersonnel;
    Antecedent_médicaux: AntecedentMédicaux;
    Antecedent_Professionnels: AntecedentProfessionnels;
    Vaccination: Vaccination[];
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
      Antecedent_médicaux: {
          Antecedents_Familiaux: [],
          Antecedents_Personnelle: [],
      },
      Antecedent_Professionnels: {
          Formation_Scolaire_Profess: "",
          Activités_Profess_Antérieur: "",
          Accidents_Contract_Service: "",
          Maladie_contracté_Service: "",
      },
      Vaccination: [],
      append: function (name: string, value: string | Blob): void {
          throw new Error("Function not implemented.");
      },
      delete: function (name: string): void {
          throw new Error("Function not implemented.");
      },
      get: function (name: string): FormDataEntryValue | null {
          throw new Error("Function not implemented.");
      },
      getAll: function (name: string): FormDataEntryValue[] {
          throw new Error("Function not implemented.");
      },
      has: function (name: string): boolean {
          throw new Error("Function not implemented.");
      },
      set: function (name: string, value: string | Blob): void {
          throw new Error("Function not implemented.");
      },
      forEach: function (callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void {
          throw new Error("Function not implemented.");
      },
      entries: function (): IterableIterator<[string, FormDataEntryValue]> {
          throw new Error("Function not implemented.");
      },
      keys: function (): IterableIterator<string> {
          throw new Error("Function not implemented.");
      },
      values: function (): IterableIterator<FormDataEntryValue> {
          throw new Error("Function not implemented.");
      },
      [Symbol.iterator]: function (): IterableIterator<[string, FormDataEntryValue]> {
          throw new Error("Function not implemented.");
      }
  };
  