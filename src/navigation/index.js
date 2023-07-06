import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { LoginScreen } from "../screens/LoginScreen";
import { CadScreen } from "../screens/CadScreen";
import { BiblioScreen } from "../screens/BiblioScreen";
import cadMundo from "../screens/cadMundo";
import { PaginaInicial } from "../screens/InicialScreen";
import ModalCadLivros from "../screens/cadLivro";
import AltLivro from "../screens/AltLivro";
import AltMundo from "../screens/AltMundo";
// import { listMundo } from "../screens/listMundo";
import CadPersona from "../screens/CadPersona";
import Altpersonagens from "../screens/AltPersona";
// import cadEtapaSnow from "../screens/cadEtapaSnow";
import AltEtapasSnow from "../screens/AltEtapasSnow";
import CadCapitulos from "../screens/cadCapitulo";
import AltCapitulos from "../screens/AltCapitulos";
import ListCapitulos from "../screens/ListCapitulos";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../config/styles";
import { Image } from "react-native";
import { auth, onAuthStateChanged } from "../config/firebase/firebase";
import { useEffect, useState } from "react";
import { MundoScreen } from "../screens/MundoScreen";
import { PersonagemScreen } from "../screens/PersonagemScreen";
import { SnowflakeScreen } from "../screens/SnowflakeScreen";
import { SobreScreen } from "../screens/SobreScreen";
import { JornadaScreen } from "../screens/JornadaScreen";
import LogOutScreen from "../screens/logOutScreen";
// import { ConfigScreen } from "../screens/ConfigScreen";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>

    );
};

export function MyDrawer() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            useLegacyImplementation
            screenOptions={{
                drawerStyle: {
                    width: 250,
                    height: 700,
                    marginTop: 60,
                },
                drawerPosition: "right",
                headerRight: () => {
                    const navigation = useNavigation();
                    return (
                        <Ionicons
                            name="menu"
                            size={35}
                            color="black"
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.openDrawer()}
                        />
                    );
                },
                headerLeft: () => {
                    return;
                },
                headerStyle: { backgroundColor: "#D5ECB4" },
            }}
        >

            <Drawer.Screen
                name="Biblioteca"
                component={user ? BiblioScreen : LoginScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Image
                                source={require("../Images/logodocks.png")}
                                style={styles.drawerFotoDocks}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                }}
            />

            <Drawer.Screen
                name="Página Inicial"
                component={PaginaInicial}
                options={{
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                            <Image
                                source={require("../Images/Voltar.png")}
                                style={styles.drawerFotoVoltar}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                }}
            />

            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }}
                name="Jornada do Herói" component={JornadaScreen}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }}
                name="Snowflake" component={SnowflakeScreen}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }}
                name="Criação de Mundos" component={MundoScreen}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 16,
                },
            }}
                name="Criação de Personagens" component={PersonagemScreen}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }} name="Sobre nós" component={SobreScreen}
            />

            {/* // <Drawer.Screen options={{
            //     headerTitleAlign: "center",
            //     headerLeft: () => (
            //         <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
            //             <Image
            //                 source={require("../Images/Voltar.png")}
            //                 style={styles.drawerFotoVoltar}
            //             />
            //         </TouchableOpacity>
            //     ),
            //     headerTitleStyle: {
            //         fontWeight: "bold",
            //         fontSize: 20,
            //     },
            // }} name="Configurações" component={ConfigScreen}
            // /> */}


            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{ drawerLabel: () => null }}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Atualizar Livros" component={AltLivro}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Criar Livro" component={ModalCadLivros}
            />


            {user && (
                <Drawer.Screen
                    name="Sair (logout)"
                    component={LogOutScreen}
                />
            )}


            {/* <Drawer.Screen options={{ drawerLabel: () => null }} name="ListMundo" component={listMundo} /> */}

            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Alteração de Mundo" component={AltMundo}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Criação de Personagem" component={CadPersona}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Alteração de Personagem" component={Altpersonagens}
            />

            {/* <Drawer.Screen options={{ drawerLabel: () => null }} name="Criação de Etapa" component={cadEtapaSnow} /> */}

            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Alteração de Etapa" component={AltEtapasSnow}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Capítulos")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Criação de Capítulo" component={CadCapitulos}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Alterar capítulo" component={AltCapitulos}
            />


            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Capítulos" component={ListCapitulos}
            />


            <Drawer.Screen options={{ drawerLabel: () => null, headerShown: false }} name="Cadastro" component={CadScreen} />

            <Drawer.Screen options={{
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Biblioteca")}>
                        <Image
                            source={require("../Images/Voltar.png")}
                            style={styles.drawerFotoVoltar}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                }, drawerLabel: () => null
            }} name="Criação de Mundo" component={cadMundo}
            />

        </Drawer.Navigator>
    );
};
