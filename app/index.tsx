import PokemonList from "@/components/PokemonList";
import { usePokemons } from "@/hooks/pokemonHooks";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


export default function Index() {

  const { error, isLoading, pokemons } = usePokemons()


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.title}>Here all are my pokemons!</Text>
      {
        isLoading ? (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator size={'large'}/>
          </View>
          
        ) : error ? (
          <Text>Error</Text>
        ) : pokemons && (
          <PokemonList pokemons={pokemons ?? []}/>
        )
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 20
  },
  
})