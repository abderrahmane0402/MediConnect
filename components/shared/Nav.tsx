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
import { usePathname } from "next/navigation"
import { session } from "@/stores/session"

export default function Nav() {
  const { user } = session((state) => state)
  let path = usePathname()
  if (path == "/main/dossierMedical/ajouter") path = "/main/dossierMedical"
  if (path == "/main/materiel/ajouter") path = "/main/materiel"
  if (path == "/main/employe/ajouter") path = "/main/employe"
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {user?.user_type == "admin" && (
          <NavigationMenuItem>
            <Link href="/main" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  path == "/main" &&
                    "border-b-2 text-green-600 border-green-600"
                )}
              >
                Acceuil
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}

        {(user?.user_type == "medecin" || user?.user_type == "secretaire") && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={
                path == "/main/dossierMedical"
                  ? "border-b-2 text-green-600 border-green-600"
                  : ""
              }
            >
              Dossier Medical
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem
                  href="/main/dossierMedical"
                  title="Liste des dossiers medicaux"
                >
                  Cette page contient la list des dossiers medicaux
                </ListItem>
                {user?.user_type == "medecin" && (
                  <ListItem
                    href="/main/dossierMedical/ajouter"
                    title="Ajouter un nouveau dossier medical"
                  >
                    Cette page enregistre un nouveau dossier medical.
                  </ListItem>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {(user?.user_type == "medecin" || user?.user_type == "secretaire") && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={
                path == "/main/materiel"
                  ? "border-b-2 text-green-600 border-green-600"
                  : ""
              }
            >
              Equipements médicaux
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem
                  href="/main/materiel"
                  title="Liste des équipements médicaux"
                >
                  Cette page affiche les informations sur les équipements
                  médicaux
                </ListItem>
                {user?.user_type == "medecin" && (
                  <ListItem
                    href="/main/materiel/ajouter"
                    title="Ajouter un Equipement médical"
                  >
                    Cette page enregistre un nouveau équipement médical
                  </ListItem>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {user?.user_type == "admin" && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={
                path == "/main/employer"
                  ? "border-b-2 text-green-600 border-green-600"
                  : ""
              }
            >
              Employés
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/main/employe" title="Liste des employés">
                  Cette page contient la list des employés du cabinet
                </ListItem>
                <ListItem
                  href="/main/employe/ajouter"
                  title="Ajouter un employé"
                >
                  Cette page enregistre un nouveau employé
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
        {/* <NavigationMenuItem>
          <Link href="/rapport" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                path == "/rapport" &&
                  "border-b-2 text-green-600 border-green-600"
              )}
            >
              Rapport
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="w-full h-full p-4 rounded-lg hover:bg-blue-100/70 transition ease-linear delay-75">
      <Link href={href}>
        <div className="text-base font-medium leading-none">{title}</div>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
}
