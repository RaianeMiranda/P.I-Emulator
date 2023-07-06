import { LinearGradient } from "expo-linear-gradient";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Paragraph } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";

//AQUELE ERRO DE "SRC" NULL E TALS TENHO QUE 
//VERIFICAR TODOS OS URLS SE ESTÃO COM O ENDEREÇO 
//DA IMAGEM CORRETAS

export const SobreScreen = () => {
    return (
        <ScrollView>
            <View style={{ flexBasis: "100%" }}>
                <View style={styles.containerBiblio}>
                    <LinearGradient // Background Linear Gradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={colors}
                        locations={locations}
                        style={{ height: 7, width: "100%" }}
                    />
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={require("../Images/dockinha.png")}
                            style={{ width: 100, height: 100, marginTop: 30 }}
                        />
                    </View>
                    <View style={{ flexBasis: "100%" }}>
                        <View>
                            <Text style={styles.textdocks}>DOCKS</Text>

                            <Text style={styles.textdocks2}>Versão: 1.0</Text>
                        </View>
                        <Text style={styles.textversion}>Sobre o Docks</Text>
                        <View style={styles.linear}>
                            <Paragraph>
                                {" "}
                                O Docks é uma plataforma de aprendizagem, que foi criado por leitoras
                                com o objetivo de suprir a carência de aplicativos na área da escrita.{" "}
                            </Paragraph>
                            <Paragraph>
                                {" "}
                                O site proporciona a aprendizagem do método de escrita, o Snowflake e
                                outros recursos como: Criação de Mundos, Personagens e o roteiro da
                                Jornada do Herói.
                            </Paragraph>
                            <Paragraph>
                                {" "}
                                O objetivo final é a criação de um livro bem estruturado.
                                Os escritores iniciantes são a nossa principal motivação,
                                pois através do
                                Docks desenvolvem melhor a escrita e a estrutura de suas histórias,
                                possibilitando assim o crescimento de escritores na literatura
                                nacional.{" "}
                            </Paragraph>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.imgcontainer}>
                                <View style={{ marginRight: 15 }}>
                                    <Image
                                        source={require("../Images/mentor.png")}
                                        style={{ width: 90, height: 90 }}
                                        resizeMode="contain"
                                    />
                                    <View style={{ marginBottom: 20, }}>
                                        <Text style={styles.textmentor}>Mentor</Text>
                                    </View>
                                </View>
                                <View style={{ marginRight: 15 }}>
                                    <Image
                                        source={require("../Images/patydocks.png")}
                                        style={{ width: 90, height: 90 }}
                                        resizeMode="contain"
                                    />
                                    <View style={{ marginBottom: 20, }}>
                                        <Text style={styles.textpaty}>Paty</Text>
                                    </View>
                                </View>
                                <View style={{ marginRight: 15 }}>
                                    <Image
                                        source={require("../Images/docks.png")}
                                        style={{ width: 90, height: 90 }}
                                        resizeMode="contain"
                                    />
                                    <View style={{ marginBottom: 20, }}>
                                        <Text style={styles.textdock_mao}>Dock</Text>
                                    </View>
                                </View>
                                <View style={{ marginRight: 15 }}>
                                    <Image
                                        source={require("../Images/psicopato.png")}
                                        style={{ width: 90, height: 90 }}
                                        resizeMode="contain"
                                    />
                                    <View style={{ marginBottom: 20, }}>
                                        <Text style={styles.textpsicopato}>Psicopato</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexBasis: "100%" }}>
                            <Text style={styles.containercriadoras}>Conheça o Time</Text>

                            <View style={styles.containercriadoras2}>
                                <View style={styles.containerfototext_}>
                                    <Image
                                        source={require("../Images/clara.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                        }}
                                    />

                                    <View>
                                        <View style>
                                            <Text style={styles.nomesdevs1_}>Clara Vasconcelos</Text>
                                            <Text style={styles.nomesfun}>Desenvolvedora</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.containerfototext}>
                                    <Image
                                        source={require("../Images/helena.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                        }}
                                    />

                                    <View>
                                        <View style>
                                            <Text style={styles.nomesdevs1}>Helena Meirelles</Text>
                                            <Text style={styles.nomesfun}>Desenvolvedora</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.containerfototext}>
                                    <Image
                                        source={require("../Images/heloisa.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                        }}
                                    />

                                    <View>
                                        <View style>
                                            <Text style={styles.nomesdevs1}>Heloísa Rebello</Text>
                                            <Text style={styles.nomesfun}>Desenvolvedora</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.containerfototext}>
                                    <Image
                                        source={require("../Images/raiane.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                        }}
                                    />

                                    <View>
                                        <View style>
                                            <Text style={styles.nomesdevs1}>Raiane Miranda</Text>
                                            <Text style={styles.nomesfun}>Desenvolvedora</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.containerfototext}>
                                    <Image
                                        source={require("../Images/dockinha.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                        }}
                                    />

                                    <View>
                                        <View style>
                                            <Text style={styles.nomesdevs1}>Você!!!</Text>
                                            <Text style={styles.nomesfun}>Usuário do Docks</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                marginTop: 30,
                                height: 7,
                                backgroundColor: '#F4CCC8',
                                marginBottom: 10 //opcional
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 30, marginBottom: 15, marginTop: 20 }}>Contate-nos</Text>
                        </View>
                        <View style={{ display: "flex" }}>
                            <View>
                                <View style={{ marginLeft: 30, display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 15 }}>
                                    <Image source={require("../Images/email.png")}
                                        style={{
                                            width: 21,
                                            height: 15,
                                            marginRight: 10,
                                        }} />
                                    <View style={{ display: "flex", flexDirection: "column" }}>
                                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>E-mail</Text>
                                        <View>
                                            <Text style={{ fontSize: 12 }}>escritadocks@gmail.com</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 30, display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 15 }}>
                                    <Image source={require("../Images/Instagram.png")}
                                        style={{
                                            width: 21,
                                            height: 21,
                                            marginRight: 10,
                                        }} />
                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Instagram</Text>
                                        <TouchableOpacity

                                            onPress={() => Linking.openURL('https://www.instagram.com/docks_escrita/')}
                                        >
                                            <Text style={{ fontSize: 12, fontWeight: "bold", color: '#CE4BA8' }}>@docks_escrita</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <View style={{ marginLeft: 30, display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 15 }}>
                                    <Image source={require("../Images/facebook.png")}
                                        style={{
                                            width: 21,
                                            height: 21,
                                            marginRight: 10,
                                        }} />
                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>facebook</Text>
                                        <TouchableOpacity

                                            onPress={() => Linking.openURL('https://www.facebook.com/Docks-Escrita-Criativa-100220319398159')}
                                        >
                                            <Text style={{ fontSize: 12, fontWeight: "bold", color: '#CE4BA8' }}>Docks Escrita Criativa</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <LinearGradient // Background Linear Gradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={colors}
                            locations={locations}
                            style={{ height: 7, width: "100%", marginTop: 50 }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};
