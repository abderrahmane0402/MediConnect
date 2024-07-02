"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  date: z.date(),
  docteur: z.string().default("aa"),
  postTravail: z.string(),
  poid: z.number(),
  taille: z.number(),
  visionOD: z.number(),
  visionOG: z.number(),
  auditionOD: z.number(),
  auditionOG: z.number(),
  maa: z.string(),
  ExamenClinique: z.string(),
  ExamenComplementaires: z.string(),
  ConclusionMedical: z.string(),
})

export default function VisiteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <div className="grid grid-cols-2 gap-8 border-t-4 border-green-600 p-4">
          <FormField
            name="docteur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Docteur :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer la nom du docteur"
                    type="text"
                    defaultValue={""}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer la Date d'Examen"
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
          <FormField
            name="postTravail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post de travail :</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrer le post de travail"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-6 border-t-4 border-green-600 p-4">
          <div className="flex-1 flex items-center justify-center flex-col gap-4">
            <h2 className="font-bold text-lg tracking-wide">Vision</h2>
            <div className="flex gap-4">
              <FormField
                name="od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OD :</FormLabel>
                    <FormControl>
                      <Input placeholder="/10" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OG :</FormLabel>
                    <FormControl>
                      <Input placeholder="/10" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="border-x-2 border-green-600"></div>
          <div className="flex-1 flex items-center justify-center flex-col gap-4">
            <h2 className="font-bold text-lg tracking-wide">Audition</h2>
            <div className="flex gap-4">
              <FormField
                name="od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OD :</FormLabel>
                    <FormControl>
                      <Input placeholder="/10" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OG :</FormLabel>
                    <FormControl>
                      <Input placeholder="/10" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
          <FormField
            name="maa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Maladies , accidents , arrts de travail depuis le dernier
                  examen :
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
          <FormField
            name="ExamenClinique"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Examen clinique :</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
          <FormField
            name="ExamenComplementaires"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Examen Complementaires :</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 border-t-4 border-green-600 p-4">
          <FormField
            name="ConclusionMedicales"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conclusion Medicales :</FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-auto overscroll-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}
