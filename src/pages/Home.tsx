import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Style';

const COLORS = [
    { id: '1', color: "#0500FF" },
    { id: '2', color: "#0057FF" },
    { id: '3', color: "#00FFD1" },
    { id: '4', color: "#00FF66" },
    { id: '5', color: "#24FF00" },
    { id: '6', color: "#ADFF00" },
    { id: '7', color: "#CCFF00" },
    { id: '8', color: "#FBA500" },
    { id: '9', color: "#FF4D00" },
    { id: '10', color: "#FF0000" },

]

// Arrow function - const função = (parâmetro) => {}
export const Home = () => {

    const [volume, setVolume] = useState<number>(0);
    const boxes = [];

    for (var i = 0; i < 10; i++) {

        const data = {
            id: i + 1,
            color: "#C4C4C4"
        };
        boxes[i] = data;
    }

    function handleAddVolume() {
        if (volume < 10) {
            setVolume(volume + 1)
        }

    }

    function handleSubVolume() {
        if (volume > 0) {
            setVolume(volume - 1)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>
                    Equalizador
                </Text>
            </View>

            <View style={styles.content}>
                <View>
                    <TouchableOpacity
                        style={[styles.volumeBox, { marginBottom: 157 }]}
                        activeOpacity={0.8}
                        onPress={handleAddVolume}
                    />

                    <TouchableOpacity
                        style={styles.volumeBox}
                        activeOpacity={0.8}
                        onPress={handleSubVolume}
                    />
                </View>

                <View>
                    {/**BARRA */
                        boxes.map(box => (

                            < View style={[styles.colorBox, { backgroundColor: box.color }]} />
                        ))
                    }
                </View>


            </View>

            <TouchableOpacity style={styles.subBox}>
                <Text style={styles.subText}>
                    Subscribe
                </Text>
            </TouchableOpacity>

        </View>
    )
}