import {
    Document,
    Image,
    Page,
    StyleSheet,
    Text,
    View
} from "@react-pdf/renderer"

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
    borderBottom:1
  },
  subTitle:{
    paddingVertical: 6,
    borderBottom:1,
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  }
})



export default function DossierMedicalPDF(){
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
              <Text style={{ fontSize: 8 }}>Prenom :                                                                                                                  NOM :</Text>
              <Text style={{ fontSize: 8 }}>Ne(e) le :                                                                                                                  a:</Text>
              <Text style={{ fontSize: 8 }}>Situation familiale :</Text>
              <Text style={{ fontSize: 8 }}>Adresse :</Text>
            </View>
            <View style={styles.i3}>
              <Text style={{ fontSize: 8 }}>Grade :                                                                                                                                DRPP :</Text>
              <Text style={{ fontSize: 8 }}>Nature de l'emploi occupe :                                                                                                depuis :</Text>
            </View>
            <View style={styles.subTitle}><Text>ANTECEDENTS MEDICAUX</Text></View>
            <View style={styles.i3}>
              <Text style={{ fontSize: 8 , height:40 }}>Antecedents familiaux :</Text>
              <Text style={{ fontSize: 8 , height:40 }}>Antecedents personnels :</Text>
            </View>
            <View style={styles.subTitle}><Text>ANTECEDENTS PRODESSIONNELS</Text></View>
            <View style={styles.i3}>
              <Text style={{ fontSize: 8 , height:20 }}>Formation scolaire et professionnelle :</Text>
              <Text style={{ fontSize: 8 , height:20 }}>Activites professionnelles anterieures :</Text>
              <Text style={{ fontSize: 8 , height:20 }}>Accidents contractes au service :</Text>
              <Text style={{ fontSize: 8 , height:20 }}>Maladies contractees au service :</Text>
            </View>
            <View style={styles.subTitle}><Text>VACCINATIONS</Text></View>
            <View style={{flexDirection:"column" , fontSize:10 , flex:1}}>
              <View style={{flexDirection:"row" , fontWeight:"bold" , borderBottom:1}}>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}>Type</Text>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}>Date</Text>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}>Rappels</Text>
                <Text style={{flex:1 , textAlign:"center" , paddingVertical:5}}>Observations</Text>
              </View>
              <View style={{flexDirection:"row" , fontWeight:"bold" , flex:1}}>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}></Text>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}></Text>
                <Text style={{width:"20%" , textAlign:"center" , borderRight:1 , paddingVertical:5}}></Text>
                <Text style={{flex:1 , textAlign:"center" , paddingVertical:5}}></Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 , position:"relative" }}>
            <View style={{position:"absolute" , flexDirection:"column" , width:"100%" , height:"100% " , paddingTop:260}}>
              <View style={{position:"absolute" , flexDirection:"column",transform:"rotate(90deg)" , fontSize:8 , gap:10 , bottom:540, left:-80, width:"240px"}}>
                <Text>Nom :</Text>
                <Text>Prenom :</Text>
              </View>
              <View style={{width:"80%" , height:60 , border:1}}></View>
              <View style={{width:"80%" , height:60 , border:1}}></View>
              <View style={{width:"80%" , height:60 , border:1}}></View>
              <View style={{width:"80%" , height:60 , border:1}}></View>
              <View style={{width:"80%" , height:60 , border:1}}></View>
              <View style={{position:"absolute" , flexDirection:"column",transform:"rotate(90deg)" , fontSize:8 , gap:10 , bottom:-40, left:-80, width:"240px"}}>
                <Text>Group sanguin :</Text>
                <Text>..............................</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
    )
}