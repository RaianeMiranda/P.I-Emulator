import { LinearGradient } from "expo-linear-gradient";
import { Image, Modal, View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";


export const JornadaScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.containerBiblio}>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "100%" }}
            />
            <View style={styles.containermodal}>
                <View>
                    <Text style={styles.pagdocks}>Jornada do Herói</Text>
                </View>
                <View style={styles.centeredView}>
                    <ScrollView>
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Icon name="close"
                                        style={styles.buttonclose}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    />


                                    <Image
                                        source={require("../Images/jornada.png")}
                                        style={{ minWidth: 240, minHeight: 642, margin: 10 }}
                                    />

                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                    <Icon name="information-outline" style={styles.iconinfo}
                        onPress={() => setModalVisible(true)} />

                </View>
            </View>


            <View
                style={{
                    height: 7,

                    backgroundColor: "#BCE4E4",
                    marginTop: 10,
                    marginBottom: 10, //opcional
                }}
            />
            <View style={styles.linear}>

                <Paragraph style={{ fontSize: 15, marginBottom: 10, fontWeight: "bold" }}>
                    Jornada do herói, ou monomito, é a estrutura de storytelling mais utilizada em mitos,
                    lendas, romances e obras narrativas em geral, criada em 1949 pelo antropólogo Joseph Campbell.
                    O conceito apresenta uma forma cíclica de contar histórias, em que o protagonista supera vários
                    desafios para se tornar um herói.

                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10, fontWeight: "bold" }} >
                    {" "}
                    Presente nas mais diversas narrativas, desde as antigas fábulas até os filmes modernos,
                    a jornada é como uma fórmula da construção de histórias, capaz de envolver os leitores e espectadores na trama.

                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10, fontWeight: "bold" }} >
                    {" "}
                    Basicamente, o modelo gira em torno da trajetória de um herói, que parte de seu mundo comum
                    para viver aventuras em outros universos e passar por grandes provações.

                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10, fontWeight: "bold" }} >
                    {" "}
                    O criador do conceito foi Joseph Campbell, mas a jornada do herói também ficou famosa pela
                    adaptação do roteirista Christopher Vogler.
                </Paragraph>
            </View>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "110%", marginTop: 150 }}

            />
        </View >
    );
};
