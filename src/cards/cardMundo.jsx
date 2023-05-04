import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { database } from '../config/firebase/firebase';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const SLIDER_HEIGHT = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29);

export const CarouselCards2 = ({ bookId, userId, navigation }) => {
    console.log(navigation)
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const [mundo, setMundo] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(database, 'mundo'),
            querySnapshot => {
                const mundoTemp = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.bookId === bookId) {
                        mundoTemp.push({
                            ...data,
                            id: doc.id,
                        });
                    }
                });
                setMundo(mundoTemp);
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
            body: "Criação de mundo",
            image: require("../Images/mundo.png"),
            onPress: () =>
                navigation.navigate("Criação de Mundos", { index: 0, bookId, userId }),
        },
        {
            image: require("../Images/mais.png"),
            onPress: () =>
                navigation.navigate("Criação de Mundo", {
                    index: cardArray.length - 1,
                    bookId,
                    userId,
                }),
        },
    ];

    const newCards = mundo.map((mundo) => ({
        body: mundo.nomeMundo,
        onPress: () =>
            navigation.navigate("Alteração de Mundo", {
                index: 1,
                bookId,
                mundoId: mundo.id,
                userId,
            }),
        id: mundo.id,
    }));

    const updatedCardArray = [...cardArray.slice(0, 1), ...newCards, ...cardArray.slice(1)];

    const CarouselCardItem = ({ item, index }) => {
        const isFirstItem = index === 0;
        const isLastItem = index === updatedCardArray.length - 1;
        const headerStyle = isFirstItem ? styles.headerFirst : (isLastItem ? styles.headerLast : styles.header);
        const containerStyle = isFirstItem ? styles.containerFirst : (isLastItem ? styles.containerLast : styles.container);
        const bodyStyle = isFirstItem ? styles.bodyFirst : (isLastItem ? styles.bodyLast : styles.body);
        const imageStyle = isFirstItem ? styles.imageFirst : (isLastItem ? styles.imageLast : styles.image);

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
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={updatedCardArray}
                sliderWidth={SLIDER_WIDTH}
                sliderHeight={SLIDER_HEIGHT}
                renderItem={({ item, index }) => (
                    <CarouselCardItem item={item} index={index} navigation={navigation} onPress={handlePress} />

                )}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={100}
                contentContainerCustomStyle={{ paddingLeft: 25 }}

            />
            <Pagination
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)',
                }}
                useRef={{
                    paddingLeft: 8.5,
                    paddingRight: 158.5,
                    marginBottom: 30
                }}
                inactiveDotOpacity={0}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5ECB6',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 0,
        alignItems: "center",
        marginBottom: 20,

    },

    containerFirst: {
        backgroundColor: '#D5ECB6', // change the color of the first card here
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 40,
    },
    containerLast: {
        backgroundColor: '#FFF2D8',
        borderWidth: 5,
        borderColor: '#D5ECB6',
        borderStyle: 'solid',
        borderRadius: 8,
        borderRadius: 10,
        width: 40,
        height: 40,
        marginTop: "40%",
        justifyContent: "center",

    },
    header: {
        color: "#222",
        backgroundColor: "#2250",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },

    headerFirst: {
        color: "#fff", // change the text color of the first card here
        backgroundColor: "#FFF2D8", // change the background color of the first card here
        borderWidth: 4,
        borderColor: '#D5ECB6',
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        paddingTop: "45%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

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
        fontSize: 14,
        fontWeight: 600,
        paddingLeft: 15,
        paddingLeft: 20,
        paddingRight: 15,
        marginTop: "25%",

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
    imageLast: {
        width: 20,
        height: 20,
        marginBottom: 40,
        marginLeft: 5,
      

    },
})

