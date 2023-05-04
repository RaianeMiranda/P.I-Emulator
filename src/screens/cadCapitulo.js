import React, { useEffect, useState } from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, View, Text } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { database } from "../config/firebase/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function cadCapitulos({ route, navigation }) {
    const richTextRef = React.createRef();
    const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
    const richText = React.useRef();
    const [nomeCapitulos, setNomeCapitulos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [userId, setUserId] = useState('');


    useEffect(() => {
        console.log(bookId)
    }, [])

    const handleChange = (event, editor) => {
        setDescricao(editor.getData());
    }

    const handleSalvar = async () => {
        try {
            const docRef = await addDoc(collection(database, "capitulos"), {
                nomeCapitulos: nomeCapitulos,
                descricao: descricao,
                bookId: bookId, // add bookId to the document object
            });
            navigation.navigate("Capítulos", { bookId: bookId });
            console.log("capítulo adicionado com ID: ", docRef.id);


        } catch (error) {
            console.error("Erro ao adicionar capítulo: ", error.message);
        }
    };


    useEffect(() => {
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        } // reset nomeMundo and descricao when bookId changes
        setNomeCapitulos("");
        setDescricao("");

    }, [bookId, route.params.bookId]);


    return (
        <SafeAreaProvider style={styles.containercriacaoper}>

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
                            onChangeText={text => setNomeCapitulos(text)}
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
                    <ScrollView>
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                            <RichEditor
                                ref={richText}
                                onChangeText={text => setDescricao(text)}
                                initialContentHTML={descricao}
                                initialHeight={300}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View
                style={{
                    flexBasis: "20%"
                }}
            >
                <View>
                    <View style={styles.containersalvarEtapa}>
                        <TouchableOpacity style={styles.buttonsalvar} mode="contained" onPress={handleSalvar}>
                           <Text style={{fontSize: 13, color:"black"}}> Salvar</Text>
                        </TouchableOpacity>
                    </View>
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

        </SafeAreaProvider >
    );
}
