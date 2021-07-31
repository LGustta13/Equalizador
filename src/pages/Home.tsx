import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Style';

interface VolumeData {
    color: string,
    id: number
}

// Arrow function - const função = (parâmetro) => {}
export const Home = () => {

    const [volume, setVolume] = useState<number>(0);
    const [volumeBoxes, setVolumeBoxes] = useState<VolumeData[]>([]);

    function handleAddVolume(id: number) {
        if (volume < 10) {
            setVolume(volume + 1)
        }
    }

    function handleSubVolume() {
        if (volume > 0) {
            setVolume(volume - 1)
        }
    }

    useEffect(() => {
        for (let i = 0; i < 10; i++) {

            const data = {
                id: i + 1,
                color: "#C4C4C4"
            }

            setVolumeBoxes(oldState => [...oldState, data])
        }
    }, [])

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
                    />

                    <TouchableOpacity
                        style={styles.volumeBox}
                        activeOpacity={0.8}
                    />
                </View>

                <View>
                    {/*
                        volumeBoxes.map((data) => (
                            <View style={[styles.colorBox, { backgroundColor: data.color }]} />
                        ))
                        */}
                </View>

            </View>



            {/**BARRA */}

            <TouchableOpacity style={styles.subBox}>
                <Text style={styles.subText}>
                    Subscribe
                </Text>
            </TouchableOpacity>

        </View>
    )
}