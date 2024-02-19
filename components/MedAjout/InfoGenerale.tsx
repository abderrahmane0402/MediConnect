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
  SelectGroup,
  SelectItem,
  SelectLabel,
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
                <FormControl>
                  <Input
                    placeholder="Entrer Formation Santaire/Hopital"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display Formation.
                </FormDescription> */}
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
                <FormLabel>Prenom </FormLabel>
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
                <FormControl>
                  <Input
                    placeholder="Entrer la Situation Familaile  du patient"
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
                <FormControl>
                  <Input
                    type=""
                    placeholder="Entrer la Nature de l'emploi occupé  du patient"
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
