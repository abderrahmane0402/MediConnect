import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import profilePic from "../../public/avatars/lungs-lung-svgrepo-com.svg"

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
})

export default function DossierMedicalPDF() {
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
              <Text style={{ fontSize: 8 }}>DELEGATION MEDICALE :</Text>
              <Text style={{ fontSize: 8 }}>FORMATION SANITAIRE/HOPITAL :</Text>
            </View>
            <View style={styles.i2}>
              <Text style={{ fontSize: 8 }}>DOSSIER n</Text>
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
                  <Text style={{ fontSize: 8, width: "50%" }}>Prenom :</Text>
                  <Text style={{ fontSize: 8 }}>Nom :</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>Ne(e) le :</Text>
                  <Text style={{ fontSize: 8 }}>a :</Text>
                </View>
                <Text style={{ fontSize: 8 }}>Situation familiale :</Text>
                <Text style={{ fontSize: 8 }}>Adresse :</Text>
              </View>
              <View style={styles.i3}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>Grade :</Text>
                  <Text style={{ fontSize: 8 }}>DRPP :</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: 8, width: "50%" }}>
                    Nature de l'emploi occupe :
                  </Text>
                  <Text style={{ fontSize: 8 }}>depuis :</Text>
                </View>
              </View>
              <View style={styles.subTitle}>
                <Text>ANTECEDENTS MEDICAUX</Text>
              </View>
              <View style={styles.i3}>
                <Text style={{ fontSize: 8, height: 40 }}>
                  Antecedents familiaux :
                </Text>
                <Text style={{ fontSize: 8, height: 40 }}>
                  Antecedents personnels :
                </Text>
              </View>
              <View style={styles.subTitle}>
                <Text>ANTECEDENTS PRODESSIONNELS</Text>
              </View>
              <View style={styles.i3}>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Formation scolaire et professionnelle :
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Activites professionnelles anterieures :
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Accidents contractes au service :
                </Text>
                <Text style={{ fontSize: 8, height: 20 }}>
                  Maladies contractees au service :
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
                <View
                  style={{ flexDirection: "row", fontWeight: "bold", flex: 1 }}
                >
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  ></Text>
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  ></Text>
                  <Text
                    style={{
                      width: "20%",
                      textAlign: "center",
                      borderRight: 1,
                      paddingVertical: 5,
                    }}
                  ></Text>
                  <Text
                    style={{ flex: 1, textAlign: "center", paddingVertical: 5 }}
                  ></Text>
                </View>
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
                  <Text>Nom :</Text>
                  <Text>Prenom :</Text>
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
                  <Text>Group sanguin :</Text>
                  <Text>..............................</Text>
                </View>
              </View>
            </View>
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
          <Text>PREMIER EXAMEN MEDICAL</Text>
        </View>

        <View style={styles.page1}>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Date de l'examen : </Text>
            <Text style={{ fontSize: 8 }}>Docteur :</Text>
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
              <Text style={{ fontSize: 8 }}>Poinds (Kg) :</Text>
              <Text style={{ fontSize: 8 }}>Taille (m) :</Text>
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
                <Text style={{ fontSize: 8 }}>Appareil auditif :</Text>
                <Text style={{ fontSize: 8 }}>OD :</Text>
                <Text style={{ fontSize: 8 }}>OG :</Text>
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
                <Text style={{ fontSize: 8 }}>Appareil oculaire :</Text>
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
                    <Text style={{ fontSize: 8 }}>de pres :</Text>
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
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
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
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 30,
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>de loin :</Text>
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
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
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
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                      <Text style={{ fontSize: 8 }}>OD : 10/10</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Tegumants :</Text>
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
              <Text style={{ fontSize: 8 }}>Examen radiologique :</Text>
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
                Appareil respiratoire - rhino-pharynx :
              </Text>
              <Text style={{ fontSize: 8 }}>Appareil cardiovasculaire :</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 8, width: "30%" }}>Pouls :</Text>
                <Text style={{ fontSize: 8, width: "30%" }}>T.A :</Text>
                <Text style={{ fontSize: 8, width: "30%" }}>Varices :</Text>
              </View>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Appareil digestif :</Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>
              Appareil hematologique et reticulaire :
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 8, width: "50%" }}>Ganglions :</Text>
              <Text style={{ fontSize: 8, width: "50%" }}>Rate :</Text>
            </View>
          </View>

          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Glandes endocriniennes :</Text>
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
              <Text style={{ fontSize: 8 }}>Systeme nerveux :</Text>
              <Text style={{ fontSize: 8, marginLeft: 10 }}>Tremblement :</Text>
              <Text style={{ fontSize: 8, marginLeft: 10 }}>Equilibre :</Text>
              <Text style={{ fontSize: 8, marginLeft: 10 }}>Reflexes :</Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 8 }}>Psychisme :</Text>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Appareil locomoteur :</Text>
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
              <Text style={{ fontSize: 8 }}>Appareil genital :</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRight: 1,
                padding: 5,
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 8 }}>Appareil urinaire :</Text>
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
              <Text style={{ fontSize: 8 }}>Alb :</Text>
              <Text style={{ fontSize: 8 }}>Sucre :</Text>
            </View>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Autres constatations :</Text>
          </View>
          <View style={styles.i3}>
            <Text style={{ fontSize: 8 }}>Examens complémentaires :</Text>
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
    </Document>
  )
}
