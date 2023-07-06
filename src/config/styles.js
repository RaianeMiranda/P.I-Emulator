import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //PÁGINA INICIAL

  textwrite: {
    color: "black",
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
    marginLeft: 20
  },
  buttoncarousel: {
    backgroundColor: "#F1C4A5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    width: 250,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,

  },
  buttoncarousel2: {
    backgroundColor: "#BCE4E4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    width: 250,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 30
  },
  textcard: {
    fontSize: 20,
    padding: 5,
    color: "black"
  },
  imagechevron: {
    height: 20,
    width: 20,
  },
  imagechevron2: {
    height: 20,
    width: 20,
  },

  viewcardper: {
    marginBottom: 30
  },
  ///=======================================================================================================
  //LOGIN
  textinput_email: {
    width: 240,
    height: 40,
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 10
  },

  textinput_senha: {
    width: 240,
    height: 40,
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 10,
  },
  containerlogin1: {
    backgroundColor: "white",
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 45,
    height: 620,
  },
  containerCad: {
    backgroundColor: "white",
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 45,
    height: 650,
  },
  containerlogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF2D8",
    height: "100%",
    justifyContent: "center",
  },
  buttoncontinuar1: {
    marginTop: 7,
    backgroundColor: "#F6EB60",
    borderRadius: 10,
    width: 140,
    height: 40,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttoncadgoogle1: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    height: 60,
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  buttoncadface1: {
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    height: 60,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  imagetextgoogle: {
    display: "flex",
    flexDirection: "row",
    margin: 0
  },
  imagetextface: {
    display: "flex",
    flexDirection: "row",
    margin: 0

  },
  imagedocks: {
    width: 80,
    height: 80,
    margin: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  paragraphbv: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 23,

  },
  paragraphbv1: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 23,
  },
  textbv: {
    alignSelf: "center",
  },
  textbv1: {
    alignSelf: "center",
    margin: 0
  },
  text_cont: {
    color: "black",
    fontWeight: 500,
  },
  text_ou: {
    alignSelf: "center",
  },
  imageface: {
    width: 30,
    height: 30,
    marginBottom: 1,
    marginTop: 5
  },
  textcadface: {
    color: "black",
    fontSize: 13,
    marginLeft: 12,
  },
  textcadface2: {
    color: "black",
    alignSelf: "center",
    fontSize: 13,
  },
  buttoncadgoogle: {
    backgroundColor: "transparent",
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    height: 60,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imagegoogle: {
    width: 32,
    height: 32,
    marginLeft: 1,
    borderRadius: 20,
    marginTop: 5
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
    marginLeft: 17
  },
  label: {
    color: "black",
  },
  link: {
    fontWeight: "bold",
    color: "black",
  },

  //====================================================================================================
  //DRAWER
  drawerFotoDocks: {
    height: 40,
    width: 40,
    marginLeft: 20,
  },
  drawerFotoVoltar: {
    width: 13,
    height: 24,
    marginLeft: 20
  },

  //====================================================================================================
  //ALTETAPASNOW
  buttonSalvarEtapa: {
    backgroundColor: "#F4CCC8",
    margin: 10,
    width: 0,
    padding: 0,
    height: 0,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderRadius: 1,
  },

  buttondeletar: {
    backgroundColor: "#E88A8A",
    margin: 30,
    minWidth: 80,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderRadius: 1,
    padding: 5,
  },

  //====================================================================================================
  //Biblioteca

  nomeLivro: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20
  },

  containerLivros: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 40,
    rowGap: 30,
    paddingLeft: 30,
  },

  nomeUsuariobi: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 35,
    marginTop: 20,
  },

  container: {
    backgroundColor: "#FFF2D8",
    height: "100%",

  },

  containerBiblio: {
    backgroundColor: "#FFF2D8",
    height: "100%",
  },

  buttonCL: {
    borderWidth: 5,
    borderColor: '#FED576',
    borderStyle: 'solid',
    borderRadius: 8,
    width: 200,
    height: 50,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  textBL: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },

  LivroB: {
    height: 150,
    width: 130,
  },

  //CadMundo
  containercriacaoper: {
    backgroundColor: "#FFF2D8",
    height: "100%",
  },
  containermodal: {
    display: "flex",
    flexDirection: "row",
  },
  containernomeper: {
    marginTop: 15,
    marginBottom: 10,
    display: "flex",
  },
  paragraphper: {
    fontWeight: 600,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputper: {
    backgroundColor: "white",
    width: 90,
    height: 20,
    marginLeft: 10,
    // borderRadius: 0,
    // borderColor: '#FED576',
    // borderStyle: 'solid',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    alignSelf: "center",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },

  buttonclose: {
    fontSize: 28,
    display: "flex",
    marginLeft: 300,
    justifyContent: "flex-end",
  },



  modalText2: {
    marginRight: 0,
  },
  modalText3: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },
  modalText4: {
    marginRight: 0,
    marginBottom: 10,
    marginTop: 10,
  },
  modalText5: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalText6: {
    fontWeight: "bold",
  },
  iconinfo: {
    fontSize: 24,
    marginLeft: 0,
    marginTop: 15,
  },
  containermodal: {
    display: "flex",
    flexDirection: "row",
  },

  containersalvarper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,

  },
  containersalvar2button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,

  },
  //====================================================================================================
  //CAPÍTULOS
  capitulosparagraph: {
    fontWeight: 600,
    fontSize: 25,
    marginTop: 15,
    marginLeft: 30,
  },
  buttoncapitulos: {
    borderWidth: 3,
    borderColor: "#F1C4A5",
    borderStyle: "solid",
    borderRadius: 0,
    height: 50,
    width: 260,
    marginTop: 13,
    marginLeft: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buttonSalvarCap: {
    backgroundColor: "#F1C4A5",
    margin: 10,
    width: 0,
    padding: 0,
    height: 0,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderRadius: 1,

  },

  buttonsalvar: {
    borderWidth: 3,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    height: 40,
    width: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  capitulosub: {
    marginTop: 3,
    width: 120,
    color: "black",
    marginBottom: 2,
    fontSize: 12,
  },
  viewcapitulos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 240,
  },
  imagelixeira: {
    width: 15,
    height: 15,
  },
  buttonadicionar: {
    borderWidth: 3,
    borderColor: "#F1C4A5",
    borderStyle: "solid",
    borderRadius: 5,
    height: 40,
    width: 200,
    marginLeft: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    justifyContent: "center",
    backgroundColor: "#FFA974",

  },
  textadicionar: {
    color: "black",
  },
  iconplus: {
    fontSize: 30,
    color: "black"
  },
  containerplustext: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  header: {
    color: "#222",
    backgroundColor: "#2250",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20

  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  //INFORMATIVOS===================================================================================================================================================
  pagdocks: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 50,
    marginTop: 28,
  },

  iconinfo: {
    fontSize: 24,
    marginTop: 15,
  },

  linear: {
    maxWidth: 320,
    alignSelf: "center",
  },

  pagPersona: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 50,
    marginTop: 28,
  },
  imagedocks_mao: {
    width: 150,
    height: 100,
  },
  imgcontainer: {
    flex: 1,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    paddingTop: 20

  },
  mentor: {
    width: 200,
    height: 100,

  },
  logodocks: {
    width: 200,
    height: 200,
  },
  paty: {
    width: 20,
    height: 350,
  },
  psicopato: {
    width: 90,
    height: 150,
    backgroundColor: "#FFF2D8",
  },
  textdocks: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  containernome: {
    marginBottom: 20,
  },
  textdocks2: {
    fontSize: 15,
    textAlign: "center",
  },

  textversion: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 50,
  },

  containersalvarEtapa: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },

  containernome: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textmentor: {
    fontWeight: "bold",
    marginRight: 10,
  },
  textpaty: {
    fontWeight: "bold",
    marginRight: 10,
  },
  textdock_mao: {
    fontWeight: "bold",
    marginRight: 10,
  },
  textpsicopato: {
    fontWeight: "bold",
    marginRight: 10,
  },
  containercriadoras: {
    fontWeight: "bold",
    alignSelf: "center",
    display: "flex",
    fontSize: 25,
    marginTop: 50,
  },
  containercriadoras2: {
    backgroundColor: "white",
    width: 330,
    height: 300,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  containercriadoras3: {
    fontWeight: "bold",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  nomesdevs1: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 15,
    marginTop: 5,
  },
  nomesdevs: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 15,
  },
  nomesfun: {
    fontSize: 13,
    marginBottom: 10,
  },
  containerfototext: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  containerfototext_: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 15,
  },
  nomesdevs1_: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 15,
    marginTop: 5,
  },

});



export const colors = [
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
  "rgba(235,222,240,1)",
  "rgba(235,222,240,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
  "rgba(235,222,240,1)",
  "rgba(235,222,240,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
];

export const locations = [
  0,
  0.1,
  0.1,
  0.2,
  0.2,
  0.3,
  0.3,
  0.3,
  0.4,
  0.4,
  0.5,
  0.5,
  0.6,
  0.6,
  0.7,
  0.7,
  0.8,
  0.8,
  0.9,
  0.9,
  1];
