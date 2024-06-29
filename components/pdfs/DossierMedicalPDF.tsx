import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import profilePic from "../../public/avatars/lungs-lung-svgrepo-com.svg";
import { DossierMedical } from "@/lib/FormData";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  page1: {
    flexDirection: "column",
    border: 1,
    flex: 1,
  },
  generalInfo: {
    flexDirection: "row",
    borderBottom: 1,
    width: "100%",
    height: "60px",
  },
  i1: {
    flexDirection: "column",
    width: "85%",
    borderRight: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    gap: 10,
  },
  i2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  i3: {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    paddingVertical: 10,
    gap: 10,
    borderBottom: 1,
  },
  subTitle: {
    paddingVertical: 6,
    borderBottom: 1,
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function DossierMedicalPDF(data: any) {
  console.log(data);
  console.log( data?.data?.Vaccination);
  // console.log(data?.data?.PremierExam.Appareil_auditif.Scan[0]);
  // data?.data?.PremierExam.Appareil_auditif.Scan?.map((scan : any,  index : any) => (
  //   console.log(scan)
  // ));
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Image
            src={"/Screenshot 2024-02-21 at 17-37-27 Accueil.png"}
            style={{ height: "50px" }}
          />
        </View>
        <View style={styles.title}>
          <Text>DOSSIER MEDICAL</Text>
        </View>
        <View style={styles.page1}>
          <View style={styles.generalInfo}>
            <View style={styles.i1}>
              <Text style={{ fontSize: 8 }}>
                DELEGATION MEDICALE :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}{" "}
              </Text>
              <Text style={{ fontSize: 8 }}>
                FORMATION SANITAIRE/HOPITAL :{" "}
                {data.data.Formation_Santaire
                  ? data.data.Formation_Santaire
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.i2}>
              <Text style={{ fontSize: 8 }}>
                DOSSIER n :{" "}
                {data.data.nbr_Dossier ? data.data.nbr_Dossier : "N/A"}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%", height: "100%" }}>
            <View
              style={{
                height: "100%",
                width: "85%",
                borderRight: 1,
                flexDirection: "column",
              }}
            >
              <View style={styles.i3}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>
                    Prenom :{" "}
                    {data.data.InfoPersonnel.prenom
                      ? data.data.InfoPersonnel.prenom
                      : "N/A"}
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Nom :{" "}
                    {data.data.InfoPersonnel.nom
                      ? data.data.InfoPersonnel.nom
                      : "N/A"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>
                    Ne(e) le :{" "}
                    {data.data.InfoPersonnel.Date_naiss
                      ? data.data.InfoPersonnel.Date_naiss
                      : "N/A"}
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    a :{" "}
                    {data.data.InfoPersonnel.ville
                      ? data.data.InfoPersonnel.ville
                      : "N/A"}
                  </Text>
                </View>
                <Text style={{ fontSize: 8 }}>
                  Situation familiale :{" "}
                  {data.data.InfoPersonnel.Situation_Familiale
                    ? data.data.InfoPersonnel.Situation_Familiale
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8 }}>
                  Adresse :{" "}
                  {data.data.InfoPersonnel.adresse
                    ? data.data.InfoPersonnel.adresse
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.i3}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>
                    Grade :{" "}
                    {data.data.InfoPersonnel.Grade
                      ? data.data.InfoPersonnel.Grade
                      : "N/A"}
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    DRPP :{" "}
                    {data.data.InfoPersonnel.DPPR
                      ? data.data.InfoPersonnel.DPPR
                      : "N/A"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>
                    Nature de l'emploi occupe :{" "}
                    {data.data.InfoPersonnel.Nature_emploi
                      ? data.data.InfoPersonnel.Nature_emploi
                      : "N/A"}
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    depuis :{" "}
                    {data.data.InfoPersonnel.depuis
                      ? data.data.InfoPersonnel.depuis
                      : "N/A"}
                  </Text>
                </View>
              </View>
              <View style={styles.subTitle}>
                <Text>ANTECEDENTS MEDICAUX </Text>
              </View>
              <View style={styles.i3}>
                <Text style={{ fontSize: 8 }}>Antecedents familiaux : </Text>
                <Text style={{ fontSize: 8 }}>
                  {" "}
                  {data.data.Antecedent_médicaux.Antecedents_Familiaux
                    ? data.data.Antecedent_médicaux.Antecedents_Familiaux?.join(
                        ", "
                      )
                    : "N/A"}
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}
                >
                  Antecedents personnels :{" "}
                </Text>
                <Text style={{ fontSize: 8 }}>
                  {data.data.Antecedent_médicaux.Antecedents_Personnelle
                    ? data.data.Antecedent_médicaux.Antecedents_Personnelle?.join(
                        `${" "}, `
                      )
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.subTitle}>
                <Text>ANTECEDENTS PRODESSIONNELS</Text>
              </View>
              <View style={styles.i3}>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Formation scolaire et professionnelle :{" "}
                  {data.data.Antecedent_Professionnels
                    .Formation_Scolaire_Profess
                    ? data.data.Antecedent_Professionnels
                        .Formation_Scolaire_Profess
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Activites professionnelles anterieures :{" "}
                  {data.data.Antecedent_Professionnels
                    .Activités_Profess_Antérieur
                    ? data.data.Antecedent_Professionnels
                        .Activités_Profess_Antérieur
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Accidents contractes au service :{" "}
                  {data.data.Antecedent_Professionnels
                    .Accidents_Contract_Service
                    ? data.data.Antecedent_Professionnels
                        .Accidents_Contract_Service
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Maladies contractees au service :{" "}
                  {data.data.Antecedent_Professionnels.Maladie_contracté_Service
                    ? data.data.Antecedent_Professionnels
                        .Maladie_contracté_Service
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.subTitle}>
                <Text>VACCINATIONS</Text>
              </View>

              <View style={{ flexDirection: "column", fontSize: 10, flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    fontWeight: "bold",
                    borderBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  >
                    Type
                  </Text>
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  >
                    Date
                  </Text>
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  >
                    Rappels
                  </Text>
                  <Text
                    style={{ flex: 1, textAlign: "center", paddingVertical: 5 }}
                  >
                    Observations
                  </Text>
                </View>
                {
                // Array.isArray(data?.data?.Vaccination) ? (
                   data?.data?.Vaccination.map((vaccination: any, index: any) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        fontWeight: "bold",
                        flex: 1,
                      }}
                    >
                      <Text
                        style={{
                          width: "20%",
                          textAlign: "center",
                          borderRight: 1,
                          paddingVertical: 5,
                        }}
                      >
                        {vaccination.Type}
                      </Text>
                      <Text
                        style={{
                          width: "20%",
                          textAlign: "center",
                          borderRight: 1,
                          paddingVertical: 5,
                        }}
                      >
                        {vaccination.date_V
                          ? new Date(vaccination.date_V).toLocaleDateString()
                          : ""}
                      </Text>
                      <Text
                        style={{
                          width: "20%",
                          textAlign: "center",
                          borderRight: 1,
                          paddingVertical: 5,
                        }}
                      >
                        {vaccination.Rappels}
                      </Text>
                      <Text
                        style={{
                          flex: 1,
                          textAlign: "center",
                          paddingVertical: 5,
                        }}
                      >
                        {vaccination.observation}
                      </Text>
                    </View>
                ))
              // ) : (
                // <Text>No vaccination data available</Text>)
              }
              </View>
            </View>
            <View style={{ flex: 1, position: "relative" }}>
              <View
                style={{
                  position: "absolute",
                  flexDirection: "column",
                  width: "100%",
                  height: "100% ",
                  paddingTop: 260,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    flexDirection: "column",
                    transform: "rotate(90deg)",
                    fontSize: 8,
                    gap: 10,
                    bottom: 540,
                    left: -80,
                    width: "240px",
                }}
                >
                  <Text>
                    Nom :{" "}
                    {data.data.InfoPersonnel.nom
                      ? data.data.InfoPersonnel.nom
                      : "N/A"}
                  </Text>
                  <Text>
                    Prenom :{" "}
                    {data.data.InfoPersonnel.prenom
                      ? data.data.InfoPersonnel.prenom
                      : "N/A"}
                  </Text>
                </View>
                <View style={{ width: "80%", height: 60, border: 1 }}></View>
                <View style={{ width: "80%", height: 60, border: 1 }}></View>
                <View style={{ width: "80%", height: 60, border: 1 }}></View>
                <View style={{ width: "80%", height: 60, border: 1 }}></View>
                <View style={{ width: "80%", height: 60, border: 1 }}></View>
                <View
                  style={{
                    position: "absolute",
                    flexDirection: "column",
                    transform: "rotate(90deg)",
                    fontSize: 8,
                    gap: 10,
                    bottom: -40,
                    left: -80,
                    width: "240px",
                  }}
                >
                  <Text>Group sanguin : </Text>
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  >
                    {data.data.InfoPersonnel.Groupe_sanguin
                      ? data.data.InfoPersonnel.Groupe_sanguin
                      : "N/A"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
      {/* //////////////                       Scan           */}
      {/* <Page size="A4" style={styles.page}>
      <View
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          <Text>Scan  : </Text>
          <Image
     src={data?.data?.PremierExam.Appareil_auditif.Scan[0]} // Assuming `scan` is already a valid base64 encoded string with correct `data:image/png;base64,` prefix
        style={{ width: '50%', height: 'auto' }}
      />
          {/* <Text>Scan  : {data?.data?.PremierExam.Appareil_auditif.Scan[0]}  </Text> */}
      {/* {data?.data?.PremierExam.Appareil_auditif.Scan?.map((scan : any,  index : any) => (
          
            <Image
     src={scan} // Assuming `scan` is already a valid base64 encoded string with correct `data:image/png;base64,` prefix
        style={{ width: '50%', height: 'auto' }}
      />
 
  ))}
        </View>
  </Page> */}
      <Page size="A4" style={styles.page}>
        <View
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          <Text>PREMIER EXAMEN MEDICAL</Text>
        </View>

        <View style={styles.page1}>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Date de l'examen :{" "}
              {data.data.dateExamen ? data.data.dateExamen : "N/A"}{" "}
            </Text>
            <Text style={{ fontSize: 8 }}>
              Docteur :{" "}
              {data.data.PremierExam.Docteur
                ? data.data.PremierExam.Docteur
                : "N/A"}
            </Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Poste de travail (caracteristiques , risques ...) :
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", borderBottom: 1, width: "100%" }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: 5,
                paddingVertical: 10,
                gap: 10,
                width: "30%",
                borderRight: 1,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Poinds (Kg) :{" "}
                {data.data.PremierExam.Poids
                  ? data.data.PremierExam.Poids
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8 }}>
                Taille (m) :{" "}
                {data.data.PremierExam.Taille
                  ? data.data.PremierExam.Taille
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 5,
                  paddingVertical: 10,
                  gap: 10,
                  width: "30%",
                }}
              >
                <Text style={{ fontSize: 8 }}>Appareil auditif </Text>
                <Text style={{ fontSize: 8 }}>
                  OD :{" "}
                  {data.data.PremierExam.Appareil_auditif.OD
                    ? data.data.PremierExam.Appareil_auditif.OD
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8 }}>
                  OG :{" "}
                  {data.data.PremierExam.Appareil_auditif.OG
                    ? data.data.PremierExam.Appareil_auditif.OG
                    : "N/A"}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 5,
                  paddingVertical: 10,
                  gap: 10,
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 8 }}>Appareil oculaire : </Text>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 30,
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>de pres : </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontSize: 8, position: "absolute", top: -10 }}
                      >
                        SC
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OD :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_SC.OD_Pres
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_SC.OD_Pres
                          : "N/A"}
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OG :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_SC.OG_Pres
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_SC.OG_Pres
                          : "N/A"}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontSize: 8, position: "absolute", top: -10 }}
                      >
                        AC
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OD :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_AC.OD_Pres
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_AC.OD_Pres
                          : "N/A"}
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OG :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_AC.OG_Pres
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_AC.OG_Pres
                          : "N/A"}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 30,
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>de loin : </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontSize: 8, position: "absolute", top: -10 }}
                      >
                        SC
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OD :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_SC.OD_Loin
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_SC.OD_Loin
                          : "N/A"}
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OG :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_SC.OG_Loin
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_SC.OG_Loin
                          : "N/A"}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontSize: 8, position: "absolute", top: -10 }}
                      >
                        AC
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OD :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_AC.OD_Loin
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_AC.OD_Loin
                          : "N/A"}
                      </Text>
                      <Text style={{ fontSize: 8 }}>
                        OG :{" "}
                        {data.data.PremierExam.Appareil_Oculaire
                          .Appareil_Oculaire_AC.OG_Loin
                          ? data.data.PremierExam.Appareil_Oculaire
                              .Appareil_Oculaire_AC.OG_Loin
                          : "N/A"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Tegumants :{" "}
              {data.data.PremierExam.Téguments.observation
                ? data.data.PremierExam.Téguments.observation
                : "N/A"}{" "}
              | Autres :{" "}
              {data.data.PremierExam.Téguments.autre
                ? data.data.PremierExam.Téguments.autre
                : "N/A"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottom: 1,
              width: "100%",
            }}
          >
            <View
              style={{
                borderRight: 1,
                padding: 15,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Examen radiologique :{" "}
                {data.data.PremierExam.Examen_radiologique.observation
                  ? data.data.PremierExam.Examen_radiologique.observation
                  : "N/A"}{" "}
                | Autres :{" "}
                {data.data.PremierExam.Examen_radiologique.autre
                  ? data.data.PremierExam.Examen_radiologique.autre
                  : "N/A"}
              </Text>
              <Image
                src={"/image.png"}
                style={{ height: "80px", width: "80px" }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                justifyContent: "space-around",
                padding: 5,
                paddingVertical: 10,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Appareil respiratoire - rhino-pharynx :{" "}
                {data.data.PremierExam.Appareil_respiratoire_rhinopharynx
                  .observation
                  ? data.data.PremierExam.Appareil_respiratoire_rhinopharynx
                      .observation
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8 }}>
                Appareil cardiovasculaire :{" "}
                {data.data.PremierExam.Appareil_cadiovasculaire.observation
                  ? data.data.PremierExam.Appareil_cadiovasculaire.observation
                  : "N/A"}{" "}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 8, width: "30%" }}>
                  Pouls :{" "}
                  {data.data.PremierExam.Pouls.observation
                    ? data.data.PremierExam.Pouls.observation
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8, width: "30%" }}>
                  T.A :{" "}
                  {data.data.PremierExam.T_A.observation
                    ? data.data.PremierExam.T_A.observation
                    : "N/A"}
                </Text>
                <Text style={{ fontSize: 8, width: "30%" }}>
                  Varices :
                  {data.data.PremierExam.Varices.observation
                    ? data.data.PremierExam.Varices.observation
                    : "N/A"}{" "}
                  | Autres :{" "}
                  {data.data.PremierExam.Varices.autre
                    ? data.data.PremierExam.Varices.autre
                    : "N/A"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Appareil digestif :{" "}
              {data.data.PremierExam.Appareil_digestif.observation
                ? data.data.PremierExam.Appareil_digestif.observation
                : "N/A"}{" "}
            </Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Appareil hematologique et reticulaire :{" "}
              {data.data.PremierExam.Appareil_hématologique_réticulaire
                .observation
                ? data.data.PremierExam.Appareil_hématologique_réticulaire
                    .observation
                : "N/A"}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 8, width: "50%" }}>
                Ganglions :{" "}
                {data.data.PremierExam.Gangloins
                  ? data.data.PremierExam.Gangloins
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8, width: "50%" }}>
                Rate :{" "}
                {data.data.PremierExam.Rate
                  ? data.data.PremierExam.Rate
                  : "N/A"}
              </Text>
            </View>
          </View>

          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Glandes endocriniennes: </Text>
            <Text style={{ fontSize: 8 }}>
              {data?.data?.PremierExam?.Glandes_endocriniennes?.Thyroïde?.Check
                ? `[ Thyroïde :${data.data.PremierExam.Glandes_endocriniennes.Thyroïde.sousNom} | observation: ${data.data.PremierExam.Glandes_endocriniennes.Thyroïde.observation} | Autre: ${data.data.PremierExam.Glandes_endocriniennes.Thyroïde.autreobservation}]`
                : ""}
              ,{" "}
              {data?.data?.PremierExam?.Glandes_endocriniennes
                ?.Glandes_surrénales?.Check == true
                ? `[ Glandes surrénales  :  observation: ${data.data.PremierExam.Glandes_endocriniennes.Glandes_surrénales.observation} | Autre: ${data.data.PremierExam.Glandes_endocriniennes.Glandes_surrénales.autreobservation}]`
                : ""}
              ,
              {data?.data?.PremierExam?.Glandes_endocriniennes?.Hypophyse?.Check
                ? `[ Hypophyse  :   observation: ${data.data.PremierExam.Glandes_endocriniennes.Hypophyse.observation} | Autre: ${data.data.PremierExam.Glandes_endocriniennes.Hypophyse.autreobservation}]`
                : ""}{" "}
              | Autres:{" "}
              {data?.data?.PremierExam?.Glandes_endocriniennes?.Autres
                ? data.data.PremierExam.Glandes_endocriniennes.Autres
                : ""}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", borderBottom: 1, width: "100%" }}
          >
            <View
              style={{
                width: "70%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 8, fontWeight: "bold", color: "blue" }}>
                Systeme nerveux :
              </Text>
              <Text style={{ fontSize: 8 }}>
                {data?.data?.PremierExam?.Système_nerveux?.Lesion_cérébrale
                  ?.Check
                  ? `[Lésion cérébrale : observation: ${data.data.PremierExam.Système_nerveux.Lesion_cérébrale.observation} | Autre: ${data.data.PremierExam.Système_nerveux.Lesion_cérébrale.autreobservation}]`
                  : ""}{" "}
                ,{" "}
                {data?.data?.PremierExam?.Système_nerveux?.Hernie_discale?.Check
                  ? `[Hernie discale : observation:  ${data.data.PremierExam.Système_nerveux.Hernie_discale.observation} |  Autre: ${data.data.PremierExam.Système_nerveux.Hernie_discale.autreobservation}]`
                  : ""}{" "}
                ,{" "}
                {data?.data?.PremierExam?.Système_nerveux?.NCB?.Check
                  ? `[NCB : observation:  ${data.data.PremierExam.Système_nerveux.NCB.observation} |  Autre: ${data.data.PremierExam.Système_nerveux.NCB.autreobservation}]`
                  : ""}{" "}
                ,{" "}
                {data?.data?.PremierExam?.Système_nerveux?.Maladie_neurologique
                  ?.Check
                  ? `[Maladie neurologique | observation: ${data.data.PremierExam.Système_nerveux.Maladie_neurologique.observation} | Autre: ${data.data.PremierExam.Système_nerveux.Maladie_neurologique.autreobservation}]`
                  : ""}{" "}
              </Text>

              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "bold",
                  color: "blue",
                  marginLeft: 10,
                }}
              >
                Tremblement :{" "}
              </Text>
              <Text style={{ fontSize: 8 }}>
                {data.data.PremierExam.Tremblement.observation
                  ? data.data.PremierExam.Tremblement.observation
                  : "N/A"}{" "}
                | Autres :{" "}
                {data.data.PremierExam.Tremblement.autre
                  ? data.data.PremierExam.Tremblement.autre
                  : "N/A"}{" "}
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  marginLeft: 10,
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Equilibre :{" "}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 10 }}>
                {data.data.PremierExam.Trouble_equilibre.observation
                  ? data.data.PremierExam.Trouble_equilibre.observation
                  : "N/A"}{" "}
                | Autres :{" "}
                {data.data.PremierExam.Trouble_equilibre.autre
                  ? data.data.PremierExam.Trouble_equilibre.autre
                  : "N/A"}{" "}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 10,
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Reflexes :{" "}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 10 }}>
                {data.data.PremierExam.Réflexes.observation
                  ? data.data.PremierExam.Réflexes.observation
                  : "N/A"}{" "}
                | Autres :{" "}
                {data.data.PremierExam.Réflexes.autre
                  ? data.data.PremierExam.Réflexes.autre
                  : "N/A"}{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
                Psychisme :{" "}
              </Text>
              <Text style={{ fontSize: 8 }}>Nevrose: </Text>
              <Text style={{ fontSize: 8 }}>
                {data?.data?.PremierExam?.Psychisme?.Nevrose?.Anxiété
                  ? "Anxiété, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Nevrose?.Depression
                  ? "Dépression, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Nevrose?.Stress
                  ? "Stress, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Nevrose?.TOC
                  ? "TOC, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Nevrose?.autre
                  ? `${data.data.PremierExam.Psychisme.Nevrose.autre}, `
                  : ""}
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                Psychose:{" "}
              </Text>
              <Text style={{ fontSize: 8 }}>
                {data?.data?.PremierExam?.Psychisme?.Psychose?.Bipolarité
                  ? "Bipolarité, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Psychose?.Schizophrénie
                  ? "Schizophrénie, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Psychose?.Paranoïaque
                  ? "Paranoïaque, "
                  : ""}
                {data?.data?.PremierExam?.Psychisme?.Psychose?.autre
                  ? `${data.data.PremierExam.Psychisme.Psychose.autre}`
                  : ""}
              </Text>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
              Appareil locomoteur :
            </Text>

            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontSize: 8 }}>
                Membres Supérieurs:
                {data?.data?.PremierExam?.Appareil_locomoteur
                  ?.Membres_Supérieurs?.observation
                  ? data.data.PremierExam.Appareil_locomoteur.Membres_Supérieurs
                      .observation
                  : "N/A"}{" "}
                | Autres:{" "}
                {data?.data?.PremierExam?.Appareil_locomoteur
                  ?.Membres_Supérieurs?.autre
                  ? data.data.PremierExam.Appareil_locomoteur.Membres_Supérieurs
                      .autre
                  : "N/A"}
              </Text>

              <Text style={{ fontSize: 8 }}>
                Membres Inférieur:
                {data?.data?.PremierExam?.Appareil_locomoteur?.Membres_Inférieur
                  ?.observation
                  ? data.data.PremierExam.Appareil_locomoteur.Membres_Inférieur
                      .observation
                  : "N/A"}{" "}
                | Autres:{" "}
                {data?.data?.PremierExam?.Appareil_locomoteur?.Membres_Inférieur
                  ?.autre
                  ? data.data.PremierExam.Appareil_locomoteur.Membres_Inférieur
                      .autre
                  : "N/A"}
              </Text>

              <Text style={{ fontSize: 8 }}>
                Articulations:
                {data?.data?.PremierExam?.Appareil_locomoteur?.Articulations
                  ?.observation
                  ? data.data.PremierExam.Appareil_locomoteur.Articulations
                      .observation
                  : "N/A"}{" "}
                | Autres:{" "}
                {data?.data?.PremierExam?.Appareil_locomoteur?.Articulations
                  ?.autre
                  ? data.data.PremierExam.Appareil_locomoteur.Articulations
                      .autre
                  : "N/A"}
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", borderBottom: 1, width: "100%" }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
                Appareil génital :{" "}
                {data.data.PremierExam.Appareil_génital.type
                  ? data.data.PremierExam.Appareil_génital.type
                  : "N/A"}
              </Text>
              {data.data.PremierExam.Appareil_génital.Prostate.Check ? (
                <Text style={{ fontSize: 8 }}>
                  Prostate:{" "}
                  {data.data.PremierExam.Appareil_génital.Prostate.observation}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.Troubles_érectiles
                .Check ? (
                <Text style={{ fontSize: 8 }}>
                  Troubles érectiles:{" "}
                  {
                    data.data.PremierExam.Appareil_génital.Troubles_érectiles
                      .observation
                  }
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.MST.Check ? (
                <Text style={{ fontSize: 8 }}>
                  MST: {data.data.PremierExam.Appareil_génital.MST.observation}
                  {data.data.PremierExam.Appareil_génital.MST.observation !==
                  "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_génital.MST.autre}`
                    : ""}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.Leucorrhée.Check ? (
                <Text style={{ fontSize: 8 }}>
                  Leucorrhée:{" "}
                  {
                    data.data.PremierExam.Appareil_génital.Leucorrhée
                      .observation
                  }
                  {data.data.PremierExam.Appareil_génital.Leucorrhée
                    .observation !== "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_génital.Leucorrhée.autre}`
                    : ""}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.Trouble_menstruels
                .Check ? (
                <Text style={{ fontSize: 8 }}>
                  Trouble menstruels:{" "}
                  {
                    data.data.PremierExam.Appareil_génital.Trouble_menstruels
                      .observation
                  }
                  {data.data.PremierExam.Appareil_génital.Trouble_menstruels
                    .observation !== "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_génital.Trouble_menstruels.autre}`
                    : ""}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.Seins.Check ? (
                <Text style={{ fontSize: 8 }}>
                  Seins:{" "}
                  {data.data.PremierExam.Appareil_génital.Seins.observation}
                  {data.data.PremierExam.Appareil_génital.Seins.observation !==
                  "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_génital.Seins.autre}`
                    : ""}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.Episiotomie.Check ? (
                <Text style={{ fontSize: 8 }}>
                  Episiotomie:{" "}
                  {
                    data.data.PremierExam.Appareil_génital.Episiotomie
                      .observation
                  }
                  {data.data.PremierExam.Appareil_génital.Episiotomie
                    .observation !== "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_génital.Episiotomie.autre}`
                    : ""}
                </Text>
              ) : null}

              {data.data.PremierExam.Appareil_génital.autre.Check ? (
                <Text style={{ fontSize: 8 }}>
                  Autre: {data.data.PremierExam.Appareil_génital.autre.nom} |
                  Observation:{" "}
                  {data.data.PremierExam.Appareil_génital.autre.observation}
                </Text>
              ) : null}
            </View>

            <View
              style={{
                flex: 1,
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
                Appareil urinaire :
              </Text>

              {data.data.PremierExam.Appareil_urinaire.Reins.observation !==
              "" ? (
                <Text style={{ fontSize: 8 }}>
                  Reins:{" "}
                  {data.data.PremierExam.Appareil_urinaire.Reins.observation}
                  {data.data.PremierExam.Appareil_urinaire.Reins.observation !==
                  "RAS"
                    ? ` | Autres: ${data.data.PremierExam.Appareil_urinaire.Reins.autre}`
                    : ""}
                </Text>
              ) : (
                <View>
                  <Text style={{ fontSize: 8 }}>
                    Trouble urinaires: [
                    {data.data.PremierExam.Appareil_urinaire.Trouble_urinaires
                      .Mictionnelles.Check === true
                      ? `${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Mictionnelles.observation
                        }${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Mictionnelles.observation !==
                          "RAS"
                            ? ` || Autre: ${data.data.PremierExam.Appareil_urinaire.Trouble_urinaires.Mictionnelles.autre}`
                            : ""
                        }`
                      : ""}
                    ]
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Brûlures: [
                    {data.data.PremierExam.Appareil_urinaire.Trouble_urinaires
                      .Brûlures.Check === true
                      ? `${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Brûlures.observation
                        }${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Brûlures.observation !== "RAS"
                            ? ` || Autre: ${data.data.PremierExam.Appareil_urinaire.Trouble_urinaires.Brûlures.autre}`
                            : ""
                        }`
                      : ""}
                    ]
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Pollokinire: [
                    {data.data.PremierExam.Appareil_urinaire.Trouble_urinaires
                      .Pollokinire.Check === true
                      ? `${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Pollokinire.observation
                        }${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Pollokinire.observation !== "RAS"
                            ? ` || Autre: ${data.data.PremierExam.Appareil_urinaire.Trouble_urinaires.Pollokinire.autre}`
                            : ""
                        }`
                      : ""}
                    ]
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Dysurie: [
                    {data.data.PremierExam.Appareil_urinaire.Trouble_urinaires
                      .Dysurie.Check === true
                      ? `${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Dysurie.observation
                        }${
                          data.data.PremierExam.Appareil_urinaire
                            .Trouble_urinaires.Dysurie.observation !== "RAS"
                            ? ` || Autre: ${data.data.PremierExam.Appareil_urinaire.Trouble_urinaires.Dysurie.autre}`
                            : ""
                        }`
                      : ""}
                    ]
                  </Text>
                </View>
              )}
            </View>

            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
                Alb :{" "}
                {data.data.PremierExam.Alb ? data.data.PremierExam.Alb : "N/A"}
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
                Sucre :{" "}
                {data.data.PremierExam.Sucre
                  ? data.data.PremierExam.Sucre
                  : "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
              Autres constatations :{" "}
              {data.data.PremierExam.Autres_constatations
                ? data.data.PremierExam.Autres_constatations
                : "N/A"}
            </Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
              Examens complémentaires :{" "}
              {data.data.PremierExam.Examens_complémentaires
                ? data.data.PremierExam.Examens_complémentaires
                : "N/A"}
            </Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
              Conclusions Médicales :{" "}
              {data.data.PremierExam.Conclusions_Médicales
                ? data.data.PremierExam.Conclusions_Médicales
                : "N/A"}
            </Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "blue" }}>
              Conclusions Professionnels :{" "}
              {data.data.PremierExam.Conclusions_Professionnels
                ? data.data.PremierExam.Conclusions_Professionnels
                : "N/A"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>CONCLUSIONS MEDICALES</Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          <Text>VISITES PERIODIQUES</Text>
        </View>

        <View style={styles.page1}>
          <View
            style={{ width: "100%", borderBottom: 1, flexDirection: "row" }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Date :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8 }}>
                Docteur :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              borderBottom: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Poinds (Kg) :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8 }}>
                Taille (m) :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
          <View
            style={{ width: "100%", borderBottom: 1, flexDirection: "row" }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Vision :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 20 }}>
                OG :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 20 }}>
                OD :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8 }}>
                Audition :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 20 }}>
                OG :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
              <Text style={{ fontSize: 8, marginLeft: 20 }}>
                OD :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              borderBottom: 1,
              flexDirection: "row",
              minHeight: 150,
            }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Maladies , accidents , arrets de travail depuis la dernier
                examen :
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>

          <View
            style={{
              width: "100%",
              borderBottom: 1,
              flexDirection: "row",
              minHeight: 150,
            }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Examen clinique :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              borderBottom: 1,
              flexDirection: "row",
              minHeight: 150,
            }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Examen complémentaires :{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              borderBottom: 1,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <View
              style={{
                width: "33%",
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Conclusion medicales:{" "}
                {data.data.delegation_Medicale
                  ? data.data.delegation_Medicale
                  : "N/A"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
                borderRight: 1,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
            <View
              style={{
                width: "33%",
                padding: 5,
                paddingVertical: 10,
                flexDirection: "column",
                gap: 5,
              }}
            ></View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
