import { RecentActivities } from "@/components/RecentActivities";
import { StatisticDossier } from "@/components/charts/StatisticDossier";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderArchive, FolderOpen, Stethoscope, TestTube } from "lucide-react";
export default function RootPage() {
  return (
    <main className="w-full">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium truncate">
              Total Dossier Medical
            </CardTitle>
            <FolderOpen className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-center sm:text-start">
              2500
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-start">
              +20.1% du mois dernier.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium truncate">
              Total Patient
            </CardTitle>
            <Stethoscope className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-center sm:text-start">
              2320
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-start">
              +5.55% du mois dernier.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium truncate">
              Dossier Medical ce mois
            </CardTitle>
            <FolderArchive className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-center sm:text-start">
              120
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-start">
              Dossier ajouter ce mois
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium truncate">
              Dossier Medical ce mois
            </CardTitle>
            <FolderArchive className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-center sm:text-start">
              120
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-start">
              Dossier ajouter ce mois
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 mt-2 md:mt-3 gap-y-2 lg:gap-x-2 lg:gap-3">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Nombre de dossiers traités par mois.
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <StatisticDossier />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Les activités récentes
            </CardTitle>
            <CardDescription>
              225 dossiers ont été traités ce mois-ci.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivities />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
