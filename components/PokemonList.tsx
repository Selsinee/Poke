import { Pokemon } from '@/hooks/pokemonHooks'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PokemonRow from './PokemonRow'

type PokemonListProps = {
    pokemons: Pokemon[]
}

export default function PokemonList(props: PokemonListProps) {
  return (
    <FlatList
    data={props.pokemons}
    renderItem={({ item }) => {
        return <PokemonRow name={item.name} url={item.url}/>
    }}
    style={{
        padding: 16
    }}
    keyExtractor={(item) => item.name}
    />
  )
}

const styles = StyleSheet.create({})