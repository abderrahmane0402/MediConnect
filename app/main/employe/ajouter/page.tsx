"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { tree } from "next/dist/build/templates/app-page"
import { Card, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { addUser } from "@/api/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getRandomValues } from "crypto"

export default function Empl() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const formSchema = z.object({
    nom: z.string(),
    prenom: z.string(),
    daten: z.string(),
    cin: z.string(),
    adresse: z.string(),
    posteTravail: z.string(),
    PPR: z.string(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    telephone: z.string(),
    user_type: z.string(),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      console.log("good")
      queryClient.invalidateQueries({ queryKey: ["getUsers"] })
      router.replace("/main/employe")
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values)
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <Card className="">
            <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
              <CardTitle className=" h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
                Informations Personnelles de l'employé
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
                          <Input placeholder="Entrer le nom" {...field} />
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
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prenom </FormLabel>
                        <FormControl>
                          <Input placeholder="Entrer le prenom" {...field} />
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
              <div className="flex flex-row w-full gap-2">
                <div className="w-full md:w-1/2 px-4">
                  <FormField
                    name="daten"
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
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>Télephone
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Entrer le numero de telephone"
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
                    name="cin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CIN </FormLabel>
                        <FormControl>
                          <Input placeholder="Entrer la CIN " {...field} />
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
                    name="adresse"
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
                    name="posteTravail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Poste de travail</FormLabel>
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
                    name="PPR"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PPR </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
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

              <div className="flex flex-row w-full gap-2 ">
                <div className="w-full md:w-1/2 px-4">
                  <FormField
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Entrer un mot de passe"
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
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmer le mot de passe</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="confirmer le mot de passe"
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
              <div className="flex flex-row w-full gap-2 justify-center">
                <div className="w-full md:w-1/2 px-4">
                  <FormField
                    name="user_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>type d'utilisateur </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selectionner le type de l'utilisateur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admin">
                              administrateur
                            </SelectItem>
                            <SelectItem value="medecin">medecin</SelectItem>
                            <SelectItem value="secretaire">
                              secretaire
                            </SelectItem>
                          </SelectContent>
                        </Select>
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
            <div className="flex items-center justify-center gap-2  w-full pb-2 pt-7">
              <Button type="submit">Ajouter</Button>
            </div>
          </Card>
        </form>
      </Form>
    </FormProvider>
  )
}
