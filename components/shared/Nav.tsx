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

export default function Nav() {
  let path = usePathname()
  if (path == "/dossierMedical/ajouter") path = "/dossierMedical/ajouter"
  if (path == "/materiel/ajouter") path = "/materiel"
  if (path == "/employe/ajouter") path = "/employe"
  if (path == "/rapport/ajouter") path = "/rapport"
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                path == "/main" && "border-b-2 text-green-600 border-green-600"
              )}
            >
              Acceuil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
                title="List des dossiers medicaux"
              >
                Cette page contient la list des dossiers medicaux
              </ListItem>
              <ListItem
                href="/main/dossierMedical/ajouter"
                title="Ajouter un nouveau dossier medical"
              >
                Cette page enregistre un nouveau dossier medical.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
              {/* <ListItem href="/employe" title="Employés">
                Cette page contient la list des employés du cabinet
              </ListItem>
              <ListItem href="/employe/ajouterheader" title="Ajouter un employé">
                Cette page enregistre un nouveau employé
              </ListItem> */}
              <ListItem href="/main/materiel" title="Equipement médical">
                Cette page affiche les informations sur les équipements médicaux
              </ListItem>
              <ListItem
                href="/main/materiel/ajouter"
                title="Ajouter un Equipement médical"
              >
                Cette page enregistre un nouveau équipement médical
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
              <ListItem href="/main/employe" title="Employés">
                Cette page contient la list des employés du cabinet
              </ListItem>
              <ListItem href="/main/employe/ajouter" title="Ajouter un employé">
                Cette page enregistre un nouveau employé
              </ListItem>
              {/* <ListItem href="/materiel" title="Equipement médical">
                Cette page affiche les informations sur les équipements médicaux
              </ListItem>
              <ListItem href="/materiel/ajouter" title="Ajouter un Equipement médical">
                Cette page enregistre un nouveau équipement médical
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
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
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/pdf" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                path == "/pdf" &&
                  "border-b-2 text-green-600 border-green-600"
              )}
            >
              Pdf
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
