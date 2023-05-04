import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { database } from '../config/firebase/firebase';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const SLIDER_HEIGHT = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29);

export const CarouselCards1 = ({ bookId, userId, navigation }) => {
    console.log(navigation)
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const [etapas, setEtapas] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(database, 'etapas'),
            querySnapshot => {
                const etapasTemp = [];
                querySnapshot.forEach(doc => {

                    etapasTemp.push({
                        ...doc.data(),
                        id: doc.id,
                    });

                }
                );
                etapasTemp.sort((a, b) => a.nomeEtapas.localeCompare(b.nomeEtapas));
                setEtapas(etapasTemp);
            }
        );
        return () => unsubscribe();
    }, [bookId]);

    const handlePress = (index) => {
        const item = data[index];
        item.onPress();
    };


    const cardArray = [
        {
            body: "Criação de Snowflake",
            image: require("../Images/snow.png"),
            onPress: () =>
                navigation.navigate("Snowflake", { index: 0, bookId, userId }),
        },
    ];

    const newCards = etapas.map((etapas) => ({
        body: etapas.nomeEtapas,
        onPress: () =>
            navigation.navigate("Alteração de Etapa", {
                index: 1,
                bookId,
                etapasId: etapas.id,
                userId,
            }),
        id: etapas.id,
    }));

    const updatedCardArray = [...cardArray.slice(0, 1), ...newCards, ...cardArray.slice(1)];



    const CarouselCardItem = ({ item, index }) => {
        const isFirstItem = index === 0;
        const isLastItem = index === updatedCardArray.length - 1;
        const headerStyle = isFirstItem ? styles.headerFirst : styles.header;
        const containerStyle = isFirstItem ? styles.containerFirst : styles.container;
        const bodyStyle = isFirstItem ? styles.bodyFirst : styles.body;
        const imageStyle = isFirstItem ? styles.imageFirst : styles.image;


        return (
            <TouchableOpacity onPress={item.onPress}>
                <View style={containerStyle} key={index}>
                    <Text style={headerStyle}>{item.title}</Text>
                    {typeof item.body === 'string' ? (
                        <Text style={bodyStyle}>{item.body}</Text>
                    ) : (
                        <View style={{ marginVertical: 10 }}>{item.body}</View>
                    )}
                    <Image style={imageStyle} source={item.image} />
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.viewcarousel}>
            <View style={styles.viewcarouselcard}>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={updatedCardArray}
                    renderItem={({ item, index }) => (
                        <CarouselCardItem item={item} index={index} navigation={navigation} onPress={handlePress} />

                    )}
                    sliderWidth={SLIDER_WIDTH}
                    sliderHeight={SLIDER_HEIGHT}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={100}
                    contentContainerCustomStyle={{ paddingLeft: 25 }}
                >
                </Carousel>

            </View>

            {<Pagination
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 0,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)',

                }}
                useRef={{
                    paddingLeft: 18.5,
                    paddingRight: 158.5,
                }}
                inactiveDotOpacity={0}
                inactiveDotScale={0.6}
                tappableDots={true}

            />}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CCC8',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 0,
        alignItems: 'center',
    },

    header: {
        color: "#222",
        backgroundColor: "#2250",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,


    },
    bodyFirst: {
        color: "black",
        fontSize: 14,
        fontWeight: 600,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
        textAlign: "center",

    },
    body: {
        color: "black",
        fontSize: 13,
        fontWeight: 600,
        paddingLeft: 15,
        paddingLeft: 20,
        paddingRight: 15,
        marginTop: "12%",
    },

    textwrite: {
        color: "black",
        fontSize: 20,
        fontWeight: 600,
        marginTop: 20,
        marginLeft: 20
    },
    buttoncarousel: {
        borderWidth: 1,
        borderColor: '#F1C4A5',
        borderStyle: 'solid',
        backgroundColor: "#F1C4A5",
        display: "flex",
        flexDirection: "row",
        width: 250,
        marginLeft: 20,
        borderRadius: 11,
        marginTop: 15
    },
    buttoncarousel2: {
        borderWidth: 1,
        borderColor: '#BCE4E4',
        borderStyle: 'solid',
        backgroundColor: "#BCE4E4",
        display: "flex",
        flexDirection: "row",
        width: 250,
        marginLeft: 20,
        borderRadius: 11,
        marginTop: 15,
        marginBottom: 30
    },
    textcard: {
        fontSize: 18,
        color: "black"
    },
    imagechevron: {
        height: 20,
        width: 20,
        marginLeft: 135
    },
    imagechevron2: {
        height: 20,
        width: 20,
        marginLeft: 70
    },
    containerFirst: {
        backgroundColor: "#F4CCC8", // change the color of the first card here
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 40,
    },
    headerFirst: {
        color: "#fff", // change the text color of the first card here
        backgroundColor: "#FFF2D8", // change the background color of the first card here
        borderWidth: 4,
        borderColor: '#F4CCC8',
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: "45%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    image: {
        width: 10,
        height: 10
    },

    imageFirst: {
        width: 50,
        height: 50,
        display: "flex",
        position: "absolute",
        marginTop: 30,
    },


    viewcarouselcard: {
        marginBottom: 30
    },
    viewcardper: {
        marginBottom: 30
    }

})

