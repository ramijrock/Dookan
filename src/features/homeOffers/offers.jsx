import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, Image, FlatList, StyleSheet, View, Text, Animated } from "react-native";
import { Offers } from "../../utils/productCategory";
import { useFocusEffect } from "@react-navigation/native";

const {width, height} = Dimensions.get('screen');
const AUTO_SCROLL_INTERVAL = 3000;

const Offer = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const intervalRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [activeIndex]);

    const startAutoScroll = () => {
        stopAutoScroll();
        intervalRef.current = setInterval(() => {
            let nextIndex = activeIndex + 1;
            if (nextIndex >= Offers.length) nextIndex = 0;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setActiveIndex(nextIndex);
        }, AUTO_SCROLL_INTERVAL);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const onMomentumScrollEnd = (e) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
        setActiveIndex(newIndex);
    };

    const RenderItem =({item}) => {
        return(
            <View style={{
                height: height * 0.24, 
                width: width*0.9, 
                borderRadius: 8, 
                marginHorizontal: 4
            }}>
                <Image style={styles.offerImg} source={item.image} />
            </View>
        )
    }

    return (
        <>
            <View style={styles.offerBox}>
                <FlatList 
                    data={Offers}
                    renderItem={({item})=> <RenderItem item={item} />}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    ref={flatListRef}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    getItemLayout={(data, index) => (
                        {length: width * 0.93, offset: width * 0.93 * index, index}
                    )}
                    initialScrollIndex={0}
                />
                <View style={styles.dotSection}>
                    {Offers.map((_, idx) => (
                        <View
                            key={idx}
                            style={[styles.dot, activeIndex === idx && styles.activeDot]}
                        />
                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    offerBox:{
        height:height*0.24 + 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    offerImg: {
        height: height * 0.24, 
        width: width*0.9,
        resizeMode: "cover",
        borderRadius: 8
    },
    dotSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#2D9CDB',
        width: 24,
        borderRadius: 6,
    },
})

export default Offer;