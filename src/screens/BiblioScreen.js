import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { colors, locations, styles } from "../config/styles";
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

export const BiblioScreen = ({ route, navigation }) => {
  const [livros, setLivros] = useState([]);
  const [UserId, setUserId] = useState([]);

  const user = auth.currentUser;
  if (!user) {
    throw new Error("Usuário não autenticado.");
  }
  console.log(user.uid)


  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "livros"),
      (querySnapshot) => {
        const livroTemp = [];
        querySnapshot.forEach((doc) => {
          const livroData = doc.data();
          if (livroData.userId === user.uid) {
            livroTemp.push({
              ...livroData,
              id: doc.id
            });
          }
        });
        setLivros(livroTemp);
      }
    );

    return () => unsubscribe();
  }, []);



  return (
    <ScrollView>
      <View style={styles.containerBiblio}>
        <LinearGradient // Background Linear Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%" }}
        />

        <Text style={styles.nomeUsuariobi}>Seja Bem vindo(a)</Text>

        <Button
          style={styles.buttonCL}
          onPress={() => navigation.navigate("Criar Livro")}
        >
          <Text style={styles.textBL}>+ Criar novo Livro</Text>
        </Button>
        <View
          style={styles.containerLivros}
        >
          {Array.isArray(livros) &&
            livros.map((livro) => (
              <View key={livro.id}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Página Inicial", { bookId: livro.id, nomeBook: livro.nomeLivro, UserId: user.uid })
                    }
                  >
                    <Image
                      source={{ uri: livro.capaLivro }}
                      style={styles.LivroB}
                    />
                  </TouchableOpacity>
                  <View style={{ marginBottom: 40 }}>

                    <Text style={styles.nomeLivro}>{livro.nomeLivro}</Text>


                  </View>
                </View>
              </View>
            ))}


        </View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: 275, marginBottom: 20 }}
        />
      </View>
    </ScrollView>
  );
};