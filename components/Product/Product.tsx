import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function Product({index, item}) {
    return (
        <TouchableOpacity key={index} style={styles.pokebox}>
            <View style={styles.pokebox}>
                <View style={styles.pokeboxText}>
                    <Text style={styles.pokeboxIdText}>{item.nom}</Text>
                    <Text style={styles.pokeboxNameText}>{item.categorie.nom}</Text>
                    <Text style={styles.pokeboxIdText}>{item.prix}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.pokemonImage} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pokebox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
    },
    pokeboxText: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    pokeboxNameText: {
        fontSize: 20,
    },
    pokeboxIdText: {
        fontSize: 14,
        color: 'grey',
    },
    pokemonImage: {
        width: 50,
        height: 50,
    },
});