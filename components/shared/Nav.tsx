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
import { usePathname } from "next/navigation";

export default function Nav() {
  let path = usePathname();
  if (path == "/dossierMedical/ajouter") path = "/dossierMedical/ajouter";
  if (path == "/materiel/ajouter") path = "/materiel";
  if (path == "/employe/ajouter") path = "/employe";
  if (path == "/rapport/ajouter") path = "/rapport";
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                path == "/" && "border-b-2 text-blue-600 border-blue-600"
              )}
            >
              Acceuil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              path == "/dossierMedical"
                ? "border-b-2 text-blue-600 border-blue-600"
                : ""
            }
          >
            Dossier Medical
          </NavigationMenuTrigger>
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
          <NavigationMenuTrigger
            className={
              path == "/materiel" || path == "employer"
                ? "border-b-2 text-blue-600 border-blue-600"
                : ""
            }
          >
            Cabinet médical
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/employe" title="Les Employés">
                cette page contient une list des employees du cabinet
              </ListItem>
              <ListItem href="/employe/ajouter" title="Ajouter Employé">
                cette page demande les informations pour enregistrer un nouveau
                employe
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
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                path == "/rapport" && "border-b-2 text-blue-600 border-blue-600"
              )}
            >
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
