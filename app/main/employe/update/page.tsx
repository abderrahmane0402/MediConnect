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
import { addUser, getUser, updateUser } from "@/api/user"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function UpdateEmpl() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
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
    password: z.optional(z.string().min(8)),
    confirmPassword: z.optional(z.string().min(8)),
    telephone: z.string(),
    user_type: z.string(),
  })

  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => await getUser(id!),
    queryKey: ["getUser"],
    gcTime: 0,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers", "getUser"] })
      router.replace("/main/employe")
    },
    onError: (error) => {
      console.error(error)
    },
  })
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate({ id: id!, data: values })
  }

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <Card className="">
            <div className=" flex flex-col gap-3  {isVisible ? '' : 'hidden'} ">
              <CardTitle className=" h-8 pt-2 text-center text-black text-2xl font-semibold font-['Inter']">
                Information Personnelle d'employe
                <br />
              </CardTitle>
              <div className="flex flex-row w-full gap-2 ">
                <div className="w-full md:w-1/2 px-4">
                  <FormField
                    name="nom"
                    defaultValue={data?.nom}
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
                    defaultValue={data?.prenom}
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
                    defaultValue={
                      new Date(data?.daten).toISOString().split("T")[0]
                    }
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
                    defaultValue={data?.telephone}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>telephone
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
                    defaultValue={data?.cin}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CIN : </FormLabel>
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
                    defaultValue={data?.adresse}
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
                    defaultValue={data?.posteTravail}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Poste de travail </FormLabel>
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
                    defaultValue={data?.PPR}
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
                        <FormLabel>mot de passe</FormLabel>
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
                        <FormLabel>confirmer le mot de passe</FormLabel>
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
                    defaultValue={data?.user_type}
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
              <Button type="submit">Submit</Button>
            </div>
          </Card>
        </form>
      </Form>
    </FormProvider>
  )
}
