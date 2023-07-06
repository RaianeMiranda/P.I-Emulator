import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";


export const SnowflakeScreen = () => {
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
                <Text style={styles.pagdocks}>Método de Snowflake</Text>
            </View>
            <View
                style={{
                    height: 7,

                    backgroundColor: "#F4CCC8",
                    marginTop: 10,
                    marginBottom: 10, //opcional
                }}
            />

            <View style={styles.linear}>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
                    O nome deriva do inglês e significa “floco de neve”, e a ideia é
                    visualizar o floco de neve como uma figura complexa, que é
                    desenvolvida por formas simples que, quando colocadas uma junto à
                    outra, evoluem até formar uma figura bem desenvolvida.
                </Paragraph>
                <Paragraph style={{ fontSize: 15, marginBottom: 10 }} >
                    {" "}
                    Esse método é ótimo para você que tem uma ideia na cabeça, mas ainda
                    não sabe como passá-la para o papel ou como organizá-la sem furos. O
                    método pega o comecinho dessa ideia, da forma que ela surgiu e
                    desenvolve através de alguns passos.
                </Paragraph>
            </View>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "110%", marginTop: "118%" }}

            />
        </View>
    );
};
