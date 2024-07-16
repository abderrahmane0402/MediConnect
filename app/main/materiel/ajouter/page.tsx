"use client";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import myAxios from "@/lib/axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    nomEquipement: z.string().nonempty("Le nom de l'équipement est oblégatoire"),
    etat: z.boolean(),
    operationel: z.boolean(),
  });
  
  const EquipmentForm = () => {
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        nomEquipement: "",
        etat: false,
        operationel: false,
      },
    });
   const router = useRouter();
    const handleSubmit  = async  (data: any)  => {
    //   console.log(data); 
      try {
        const res = await myAxios.post("/materiel/add", data);
        console.log("Response: ", res.data);
        if (res?.status === 201) {
        router.push("/main/materiel")
        console.log("push");
        }
      } catch (err : any) {
      }
    };
  
    return (
      <FormProvider {...form}>
        <Form {...form}>
          <Card className="">
            <form
             onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <div className="flex flex-col gap-3">
                <CardTitle className="h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
                  Information sur l'équipement médical
                  <br />
                </CardTitle>
                <div className="flex flex-row w-full gap-2">
                  <div className="w-full px-4">
                    <FormField
                      name="nomEquipement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom de l'équipement</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Entrer le nom de l'équipement"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2">
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      name="etat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>État</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value === 'true')}
                              defaultValue={field.value ? 'true' : 'false'}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choisir l'etat" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="true">Disponible</SelectItem>
                                <SelectItem value="false">Indisponible</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <FormField
                      name="operationel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Opérationnel</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value === 'true')}
                              defaultValue={field.value ? 'true' : 'false'}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choisir l'etat" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="true">Oui</SelectItem>
                                <SelectItem value="false">Non</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 w-full pb-2 pt-7">
                <Button type="submit">Ajouter</Button>
              </div>
            </form>
          </Card>
        </Form>
      </FormProvider>
    );
  };
  export default EquipmentForm;