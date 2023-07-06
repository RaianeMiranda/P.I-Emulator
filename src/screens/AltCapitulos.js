import React, { useEffect, useState } from "react";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, View, Modal, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../config/firebase/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AltCapitulos({ route, navigation }) {
    const richTextRef = React.createRef();
    const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
    const richText = React.useRef();
    const [nomeCapitulos, setNomeCapitulos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [capId, setCapId] = useState('');

    const handleChange = (event, richEditor) => {
        setDescricao(richEditor?.getData());
    };

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "capitulos", route.params.capId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setNomeCapitulos(docSnap.data().nomeCapitulos);
                    setDescricao(docSnap.data().descricao);
                    console.log("Descricao:", docSnap.data().descricao);
                    setDescricao(docSnap.data().descricao);
                    

                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();
    }, [route.params.capId]);

    const handleUpdate = async () => {
        try {
            console.log(route);
            const docRef = doc(database, "capitulos", route.params.capId);

            await updateDoc(docRef, {
                nomeCapitulos: nomeCapitulos,
                descricao: descricao,
            });
            navigation.navigate("Capítulos", { bookId: bookId, capId: capId });
            console.log("Mundo atualizado com ID: ", route.params.capId);
        } catch (error) {
            console.error("Erro ao atualizar mundo: ", error.message);
        }
    }

    useEffect(() => {
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        } // reset nomeMundo and descricao when bookId changes
        setNomeCapitulos('');
        setDescricao('');

    }, [bookId, route.params.bookId]);

    useEffect(() => {
        if (route.params.capId !== capId) {
            setBookId(route.params.capId);
        } // reset nomeMundo and descricao when bookId changes
        setNomeCapitulos('');
        setDescricao('');

    }, [bookId, route.params.capId]);

    return (
        <ScrollView>
            <SafeAreaProvider style={styles.containercriacaoper}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexBasis: "10%" }}>
                        <View>
                            <LinearGradient
                                // Background Linear Gradient 
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={colors}
                                locations={locations}
                                style={{ height: 7, width: "100%" }}
                            />
                        </View>


                        <View style={styles.containernomeper}>
                            <Paragraph style={styles.paragraphper}>Nome do Capítulo:
                                <TextInput style={styles.inputper}
                                    value={nomeCapitulos}
                                    onChangeText={(text) => setNomeCapitulos(text)}
                                    editable={true}
                                />
                            </Paragraph>
                        </View>
                    </View>
                    <View style={
                        {
                            // maxWidth: 300,
                            flexBasis: "75%",
                        }
                    }
                    >
                        <View
                            style={{
                                height: 7,
                                backgroundColor: '#F1C4A5',
                                marginBottom: 10 //opcional
                            }}
                        />
                        <SafeAreaView>
                            <RichToolbar
                                editor={richText}
                                actions={[actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, actions.insertBulletsList,
                                actions.insertOrderedList, actions.checkboxList, actions.insertLink]}
                                iconMap={{ [actions.heading1]: handleHead }}
                            />

                            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                                <RichEditor
                                    ref={richText}
                                    onChangeText={handleChange}
                                    initialContentHTML={descricao}
                                    initialHeight={300}
                                />
                            </KeyboardAvoidingView>

                        </SafeAreaView>
                    </View>
                    <View
                        style={{
                            flexBasis: "20%"
                        }}
                    >
                        <View style={styles.containersalvarEtapa}>
                            <TouchableOpacity style={{
                                backgroundColor: "#F1C4A5",
                                margin: 30,
                                width: 60,
                                height: 40,
                                alignItems: "center",
                                borderWidth: 3,
                                borderColor: "#D9D9D9",
                                borderStyle: "solid",
                                borderRadius: 1,
                                padding: 5,
                            }}
                                mode="contained"
                                onPress={handleUpdate}>
                                <Text style={{ color: "black", fontWeight: 450, fontSize: 15 }}>Salvar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View>
                        <LinearGradient
                            // Background Linear Gradient 
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={colors}
                            locations={locations}
                            style={{ height: 7, width: "100%", marginTop: 438 }}
                        />
                    </View>

                </View>
            </SafeAreaProvider>
        </ScrollView>
    );
}
