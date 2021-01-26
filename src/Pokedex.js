import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: 0,
            filter: true,
            type: 'a',
            size: 0,
        }
        this.onePokemon = this.onePokemon.bind(this);
        this.filterPokemon = this.filterPokemon.bind(this);
        this.startFiltering = this.startFiltering.bind(this);
        // this.newState = this.newState.bind(this);
    }

    filterPokemon() {
        if (this.state.filter) {
            // this.newState(this.props.pokemons);
            return this.props.pokemons;
        }
        const filter = this.props.pokemons.filter((each) => each.type === this.state.type);
        // this.newState(filter);
        return filter;
    }

    startFiltering(e) {
        this.setState({
            filter: false,
            type: e.target.id,
        })
    }

    onePokemon(size) {
        if (this.state.pokemon < (size - 1)) {
        this.setState((state, _props) => ({
            pokemon: state.pokemon + 1,
        }))
        } else {
            this.setState({
                pokemon: 0,
            })
        }
        console.log(this.state.pokemon);
    }

    // newState(array) {
    //     this.setState({
    //         size: array.length,
    //     })
    // }

    render() {
        const pokemons = this.filterPokemon();
        const arrayDePokemons = pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
        const types = this.props.pokemons.map((each) => each.type)
        const typesUnrepeated = [...new Set(types)];
        return (
            <div className="pokedex">
                {arrayDePokemons[this.state.pokemon]}
                <div className="buttons">
                    {typesUnrepeated.map((each) => {
                        return <button onClick={this.startFiltering} className='type' key={each} id={each}>
                        {each}
                        </button>
                    })}
                </div>
                <button className='next' onClick={() => this.onePokemon(pokemons.length)}>Próximo Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;