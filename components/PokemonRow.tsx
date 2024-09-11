import { usePokemonSprite } from '@/hooks/pokemonHooks';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

type PokemonRowProps = {
    name: string;
    url: string;
}

export default function PokemonRow(props: PokemonRowProps) {

    const { error, isLoading, sprite} = usePokemonSprite(props.url)

  return (
    <View style={styles.card}>
        {
            isLoading ? (
                <ActivityIndicator style={styles.image} color={'black'}/>
            ) : error ? (
                <Text>Error</Text>
            ) : sprite && (
                <Image source={{
                    uri: sprite
                }} style={styles.image}/>
            )
        }
        
        <Text style={styles.cardText}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
    width: 50,
    height: 50
    },
    cardText: {
    fontSize: 16,
    marginLeft: 16
    },
    card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
    }
})