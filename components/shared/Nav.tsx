"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu className="hidden md:block">
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
              <ListItem href="/dossierMedical" title="les dossiers medicals">
                cette page contient une list des dossiers medicals
              </ListItem>
              <ListItem
                href="/dossierMedical/ajouter"
                title="Ajouter dossiers medical"
              >
                cette page demande les informations pour enregistrer un nouveau
                dossier medical
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>cabinet médical</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/employee" title="Les employee">
                cette page contient une list des employees du cabinet
              </ListItem>
              <ListItem href="/employee/ajouter" title="Ajouter Employee">
                cette page demande les informations pour enregistrer un nouveau
                employee
              </ListItem>
              <ListItem href="/materiel" title="materiel du cabinet">
                cette page affiche les informations sur le materiel du caninet
              </ListItem>
              <ListItem href="/materiel/ajouter" title="ajouter un materiel">
                cette page demande les informations pour enregistrer un nouveau
                materiel
              </ListItem>
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
  );
}

function ListItem({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
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
  );
}
