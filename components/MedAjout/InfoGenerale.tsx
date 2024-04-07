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

export default function InfoGeneral() {
  return (
    <div className=" flex flex-col gap-3 w-full   {isVisible ? '' : 'hidden'}  ">
      <CardTitle className=" pt-2 text-center text-black text-2xl font-semibold font-serif	">
        Information Personnelle du Patient
        <br />
      </CardTitle>
      <div className="border-2 border-green-600 border-lg"></div>
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2 ">
          <FormField
            name="nmr_dossier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dossier n°: </FormLabel>
                <FormControl>
                  <Input placeholder="Entrer le numero de dossier" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 ">
        <FormField
          // control={form.control}
          name="groupe_sangain"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Groupe sanguin</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="choisir un Groupe sanguin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB">AB</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O">O</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>

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
        <div className="w-full ">
          <FormField
            //   control={form.control}
            name="Deleg_Medic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delegation Medicale</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer Delegation Medicale" {...field} />
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
            name="Form_Sani_Hpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Formation Santaire/Hopital </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Entrer Formation Santaire/Hopital" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="rssp">RSSP </SelectItem>
                  <SelectItem value="centre_hosp">Centre Hospitalier </SelectItem>
                  <SelectItem value="person_delega">Personnel de la delegation </SelectItem>
                
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
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom </FormLabel>
                <FormControl>
                  <Input placeholder="Entrer le nom du patient" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom </FormLabel>
                <FormControl>
                  <Input placeholder="Entrer le prenom du patient" {...field} />
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
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
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
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
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
      <div className="px-4 space-y-2 ">
        <div className="w-full">
          <FormField
            //   control={form.control}
            name="situ_fam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Situation Familaile </FormLabel>
                {/* //marié (M), pacsé (O), divorcé (D), séparé (D), célibataire (C) ou veuf (V). */}
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Entrer la Situation Familaile  du patient" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Marié">Marié</SelectItem>
                  <SelectItem value="Pacsé">Pacsé</SelectItem>
                  <SelectItem value="Divorcé">Divorcé</SelectItem>
                  <SelectItem value="Séparé">Séparé</SelectItem>
                  <SelectItem value="Célibataire">Célibataire</SelectItem>
                  <SelectItem value="Veuf">Veuf</SelectItem>
                </SelectContent>
              </Select>
              
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            //   control={form.control}
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
      <div className="border-2 border-green-600 border-lg"></div>

      <div className="flex flex-row w-full gap-6 px-4 ">
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
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
        <div className="w-full md:w-1/2">
          <FormField
            //   control={form.control}
            name="ppr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DPPR : </FormLabel>
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
      <div className="flex flex-row w-full gap-6 px-4">
        <div className="w-full md:w-1/2 ">
          <FormField
            //   control={form.control}
            name="nature_empl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nature de l'emploi occupé </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Entrer la Nature de l'emploi occupé  du patient" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="Medecin_génerale">Medecin génerale </SelectItem>
                  <SelectItem value="Medecin_spécialiste">Medecin spécialiste </SelectItem>
                  <SelectItem value="Infirmier_polyvalante">Infirmier polyvalante </SelectItem>
                  <SelectItem value="Infirmier_auxiliaire">Infirmier auxiliaire </SelectItem>
                  <SelectItem value="Infirmier_Auxthesite">Infirmier Auxthesite </SelectItem>
                  <SelectItem value="Infirmier_psychiatrie">Infirmier psychiatrie </SelectItem>
                  <SelectItem value="Agent_service">Agent de service </SelectItem>
                  <SelectItem value="Agent_administration">Agent d'administration </SelectItem>
                  <SelectItem value="Technicien_dohr">Technicien de dohr </SelectItem>
                  <SelectItem value="Technicien_RX">Technicien de RX </SelectItem>
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
            name="date_empl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Depuis : </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Entrer  l'annee"
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
      <div className="border-2 border-green-600 border-lg"></div>
    </div>
  );
}
