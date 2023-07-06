import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";


export const MundoScreen = () => {
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
        <Text style={styles.pagdocks}>Método Criação de Mundo</Text>
      </View>
      <View
        style={{
          height: 7,

          backgroundColor: "#D5ECB4",
          marginTop: 10,
          marginBottom: 10, //opcional
        }}
      />
      <View style={styles.linear}>
        <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
          Na sua história pode ser usado:
        </Paragraph>
        <Paragraph style={{ fontSize: 15, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}> Um universo totalmente diferente: </Text>   
          Escrever um universo totalmente
          diferente é complicado, porque nosso imaginário é baseado no que
          conhecemos. Mas deve se considerar essa categoria quando uma história
          de ficção não tem referências óbvias à realidade, podendo ter
          distinções drásticas em relação à vida na terra. Por exemplo, se passa
          em um universo onde a atmosfera é diferente e os personagens não são
          humanos.
        </Paragraph>
        <Paragraph style={{ fontSize: 15, marginBottom: 10, marginTop: "3%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}> Um universo que supostamente é o nosso, mas com diferenças pontuais: </Text>
          Isso significa que esse mundo tem
          referências geográficas iguais às nossas. Contudo, algo ali é
          fundamentalmente diferente da realidade. Pode ser a presença de magia,
          pode ser uma sociedade futurista ou pode até mesmo ser um universo sem
          nada disso, mas no qual um evento histórico terminou de forma
          diferente, provocando mudanças em série. Por exemplo, imagine escrever
          uma história que se passe em um Brasil sem colonização.
        </Paragraph>
        <Paragraph style={{ fontSize: 15, marginBottom: 10, marginTop: "3%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}> Um universo paralelo ao nosso, que pode ser acessado por tecnologia ou
            magia:</Text>  Por fim, o universo paralelo é aquele que existe ao mesmo tempo
          que o nosso. Em outras palavras, o seu protagonista poderia viver
          aqui, no Brasil, e de repente encontrar um portal mágico que o leva
          para esse mundo totalmente diferente. Também vale para histórias com
          uma pegada tecnológica, e esse universo paralelo não necessariamente
          precisa ser, de fato, outro universo. Pode ser apenas um outro
          planeta, por exemplo, ou quem sabe uma projeção de realidade virtual.
        </Paragraph>
        <Paragraph style={{ fontSize: 15, marginBottom: 10, marginTop: "3%" }}>
          Entender onde o seu universo fictício se situa em relação à realidade
          é um ótimo ponto de partida, pois ajuda você a identificar o quanto
          você precisará trabalhar na criação de novos cenários e regras sociais
          e o quanto do mundo que você já conhece pode ser utilizado na sua
          história.
        </Paragraph>
      </View>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", marginTop: "30%" }}
      />
    </View>
  );
};
