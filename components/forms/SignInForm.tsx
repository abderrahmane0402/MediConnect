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
import { session } from "@/stores/session"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  cin: z.string(),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
})

export default function SignInForm() {
  const router = useRouter()
  const { setToken, setUser } = session((state) => state)
  const [error, setError] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`http://localhost:3001/api/auth`, {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: values.cin, password: values.password }),
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        setToken(data.token)
        if (data.user.user_type == "admin") {
          router.replace("/main")
        }
        if (
          data.user.user_type == "medecin" ||
          data.user.user_type == "secretaire"
        ) {
          router.replace("/main/dossierMedical")
        }
      } else {
        console.log(await response.json())
        setError(true)
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {error && (
            <p className="text-red-500">login ou mot de pass et incorrect</p>
          )}
          <FormField
            control={form.control}
            name="cin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CIN</FormLabel>
                <FormControl>
                  <Input placeholder="entrer votre cin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full text-center">
            <Button type="submit" className="w-4/5">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </FormProvider>
  )
}
