"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardTitle } from "@/components/ui/card";

export default function Empl() {
  const formSchema = z.object({});
  const handleSubmit = () => {};
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  return (
    <Form {...form}>
      <Card className="">
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
            <CardTitle className=" h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
              Information Personnelle d'employé
              <br />
            </CardTitle>
            <div className="flex flex-row w-full gap-2 ">
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrer le nom"
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
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prenom </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrer le prenom"
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
            <div className="flex flex-row w-full gap-2 ">
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="date_naiss"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de naissance </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Entrer la date de naissance "
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
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="ville"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ville </FormLabel>
                      <FormControl>
                        <Input
                          type=""
                          placeholder="Entrer la ville"
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
            <div className="flex flex-row w-full gap-2 ">
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="cne"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CNE :  </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrer la CNE "
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
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse </FormLabel>
                      <FormControl>
                        <Input
                          type=""
                          placeholder="Entrer l'adresse"
                          {...field}
                        />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-row w-full gap-2 ">
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="poste_travail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Poste de travail  </FormLabel>
                      <FormControl>
                        <Input
                          type=""
                          placeholder="Entrer Poste de travail  "
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
              <div className="w-full md:w-1/2 px-4">
                <FormField
                  name="ppr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PPR </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Entrer le PPR"
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
           
          </div>
        </form>
        <div className="flex items-center justify-center gap-2  w-full pb-2 pt-7">
            <Button type="submit">Submit</Button>
          </div>
      </Card>
      
    </Form>
  );
}