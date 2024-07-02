import SignInForm from '@/components/forms/SignInForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <Card className="w-[450px] shadow-lg">
        <CardHeader>
          <CardTitle className="tracking-wide">Authentifier</CardTitle>
          <CardDescription>
            entrer vos information pour connecter a l'application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  )
}

export default page