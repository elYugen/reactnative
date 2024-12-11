import React, {useState} from 'react';
import {Image, StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { usePokedex } from "@/hooks/usePokedex";
import { useApi} from "@/hooks/useApi";
import TopBar from "@/components/TopBar/TopBar";
import MyTask from "@/components/MyTask/MyTask";
import Product from "@/components/Product/Product";

export default function HomeScreen() {
  const pokedex = usePokedex();
  const api = useApi() // utilisation de l'api ingrédient;
  const [categselec, setCategselec] = useState(null);  // etat des catégories
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("touché");
    setCount(count + 1);
  }

  const produitfiltre = categselec // récupère l'état selectedCategory
  ? api.filter(item => item.categorie.nom === categselec) // filtre api par item et chaque categorie.nom est envoyé dans l'etat
  : api; // pas de filtre si 0 categ

  const categories = []; // initialise un tableau vide
  api.forEach(item => { // pour chaque item contenu dans api
    if (!categories.includes(item.categorie.nom)) { // verif si categories existe pas dans le tableau
        categories.push(item.categorie.nom); // si existe pas alors push dans le tableau
    }
  });


  return (
      <SafeAreaView>
        <ScrollView>
          <TopBar/>
          <View style={styles.container}>
          <MyTask/>

            <Pressable onPress={handleClick}><Text>{count}</Text></Pressable>
            <Pressable onPress={handleClick}><Text>{count}</Text></Pressable>

            <View style={styles.header}>
              <Text style={styles.headerText}>Ingrédients</Text>
            </View>
            
            <ScrollView horizontal style={styles.categorySelector}>
                <TouchableOpacity onPress={() => setCategselec(null)}>
                    <Text style={[styles.pokebox, !categselec && styles.activeCategory]}>
                        Tout
                    </Text>
                </TouchableOpacity>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => setCategselec(category)}>
                        <Text style={[styles.pokebox, categselec === category && styles.activeCategory]}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {produitfiltre.map((item, index) => (
              <Product key={index} item={item} />
            ))}
            <View style={styles.header}>
              <Text style={styles.headerText}>Pokedex</Text>
            </View>
            {pokedex.map((pokemon, index) => (
                    <TouchableOpacity key={index} style={styles.pokebox}>
                      <View key={index} style={styles.pokebox}>
                        <View style={styles.pokeboxText}>
                          <Text style={styles.pokeboxNameText}>{pokemon.name}</Text>
                          <Text style={styles.pokeboxIdText}>#{index + 1}</Text>
                        </View>
                        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }} style={styles.pokemonImage}/>
                      </View>
                    </TouchableOpacity>
                ))}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    gap: 15,
  },
  header: {
    display: 'flex',
  },
  headerText: {
    fontSize: 20,
  },
  pokebox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  categorySelector: {
    flexDirection: "row",
    marginBottom: 10,
},
categoryText: {
    marginHorizontal: 10,
    fontSize: 16,
},
activeCategory: {
    fontWeight: "bold",
    color: "blue",
},
});
