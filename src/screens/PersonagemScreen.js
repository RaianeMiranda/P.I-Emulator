import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";


export const PersonagemScreen = () => {
    return (
        <View style={styles.containerBiblio}>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "100%" }}
            />
            <View>
                <Text style={styles.pagPersona}>Método de criação de Personagem</Text>
            </View>
            <View
                style={{
                    height: 7,

                    backgroundColor: "#EBDEF0",
                    marginTop: 10,
                    marginBottom: 10, //opcional
                }}
            />
            <View style={styles.linear}>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    Uma boa narrativa quase sempre é movida por personagens marcantes. Às
                    vezes, marcantes em suas grandiosas personalidades e habilidades
                    mirabolantes. Outras, ficam presas na nossa memória por sua pura
                    simplicidade e realismo, que remete intimamente às nossas vidas.
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    O que não muda de um modelo para o outro é que uma boa personagem é
                    uma personagem complexa, bem desenvolvida. E esse desenvolvimento é
                    feito em camadas
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    Na metodologia a ser apresentada, trabalharemos com três níveis de
                    criação.
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Camada periférica:</Text> É a parte mais fácil e rápida a ser feita para
                    criar o seu personagem. Aqui vamos pensar em como nosso personagem é
                    fisicamente, como ele se comunica com outras pessoas e os dados
                    básicos
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>A camada de entorno:</Text> Nesta camada, entenderemos como o personagem
                    chegou até aqui, analisando seu histórico de vida e como foi moldada a
                    sua personalidade. Basicamente é a biografia dele.
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>A camada central:</Text> Talvez a etapa mais desafiadora na hora de criar a
                    ficha de personagem. Aqui desenvolvemos a alma, a essência do
                    personagem.
                </Paragraph>
            </View>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "110%", marginTop: "30%" }}
            />
        </View>
    );
};
