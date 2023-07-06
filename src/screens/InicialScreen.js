import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from "react-native"
import { Button, Paragraph } from 'react-native-paper'
import { CarouselCards3 } from '../cards/cardPersona'
import { CarouselCards2 } from '../cards/cardMundo'
import { CarouselCards1 } from '../cards/cardSnow'
import { auth, database } from '../config/firebase/firebase'
import { doc, deleteDoc } from "firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, locations, styles } from '../config/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const PaginaInicial = ({ route, navigation }) => {
  const [bookId, setBookId] = useState('');
  const [nomeBook, setNomeBook] = useState('');
  const [userId, setUserId] = useState('');
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }
  function handleExcluir(bookId) {
    deleteDoc(
      doc(database, "livros", bookId)
    ).then(() => {
      navigation.navigate("Biblioteca")
      console.log("Livro excluído com sucesso")
    })
  }
  useEffect(() => {
    setBookId(route.params.bookId);
    setNomeBook(route.params.nomeBook);
    setUserId(user.uid);
  }, [route.params.bookId])

  const CarouselCardsContainer = (props) => (
    <View>
      <CarouselCards1 bookId={props.bookId} userId={props.userId} navigation={navigation} />
      <CarouselCards2 bookId={props.bookId} userId={props.userId} navigation={navigation} />
      <CarouselCards3 bookId={props.bookId} userId={props.userId} navigation={navigation} />
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.containerBiblio}>

        <View style={{ flexBasis: 7 }}>
          <LinearGradient
            // Background Linear Gradient 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colors}
            locations={locations}
            style={{ height: 7, width: "100%" }}
          />
        </View>

        <View style={styles.containerBiblio}>
          <View style={{ flexBasis: "100%" }}>
            <Text>BOOKID: {bookId}</Text>
            <Paragraph style={styles.textwrite}>Escrevendo: <Text style={{ color: "#CE4BA8" }}>{nomeBook}</Text></Paragraph>

            <TouchableOpacity style={styles.buttoncarousel} onPress={() => navigation.navigate('Capítulos', { bookId: bookId, userId: userId })}>

              <Text style={styles.textcard}> Capítulos</Text>


              <Image style={styles.imagechevron} source={require("../Images/rightChevron.png")} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncarousel2} onPress={() => navigation.navigate("Jornada do Herói")}>

              <Text style={styles.textcard}> Jornada do Heroí</Text>
              <Image style={styles.imagechevron2}
                source={require("../Images/rightChevron2.png")} />

            </TouchableOpacity>
            <View style={styles.viewcardper}>
              <CarouselCardsContainer bookId={bookId} userId={userId} />
            </View>


            <View style={{ maxWidth: 300, alignSelf: "center", }}>
              <View style={styles.containersalvarper}>
                <TouchableOpacity style={{
                  backgroundColor: "#E88A8A", borderWidth: 3,
                  borderColor: '#D9D9D9',
                  borderStyle: 'solid',
                  borderRadius: 1,
                  height: 50,
                  width: 100,
                  fontSize: 13,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 100
                }} mode="contained" onPress={() => handleExcluir(bookId)}>
                  <Text style={{ color: "black", fontWeight: "bold", fontSize: 13 }}>Deletar Livro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#D5ECB6",
                    borderWidth: 3,
                    borderColor: '#D9D9D9',
                    borderStyle: 'solid',
                    borderRadius: 1,
                    height: 50,
                    width: 100,
                    marginLeft: 130,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mode="contained"
                  onPress={() => navigation.navigate("Atualizar Livros", { bookId: bookId, userId: userId })}
                >
                  <Text style={{ fontSize: 13, fontWeight: "bold", color: "black" }}> Editar Livro </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View >
              <LinearGradient
                // Background Linear Gradient 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "100%", marginTop: 40, marginBottom: 20 }}
              />
            </View>
          </View>
        </View>
      </View >
    </ScrollView>
  )

}
