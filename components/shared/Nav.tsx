"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Acceuil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dossier Medical</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="w-full h-full p-4 rounded-lg hover:bg-blue-100/70">
                <Link href="/dossierMedical">
                  <div className="text-base font-medium leading-none">Consulter les dossiers medical</div>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    cette page contient une list des dossiers medical
                  </p>
                </Link>
              </li>
              <li className="w-full h-full p-4 rounded-lg hover:bg-blue-100/70">
                <Link href="/DossierMedical/ajouter">
                  <div className="text-base font-medium leading-none">Ajouter un nouveau dossiers medical</div>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    cette page demande les informations pour enregistrer un nouveau dossier medical
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/rapport" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Rapport
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

