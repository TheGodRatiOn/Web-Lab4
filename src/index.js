import userData from './home.js';
import getPokemonInfo from './pokemon';

const APP_ELEM = 'app'
const ELEM = document.getElementById(APP_ELEM);
const POKEMON_NAME = 'ditto';
const HOME_TAB = 'homeTab'
const POKEMON_TAB = 'pokemonTab'

function fillWithUserData() {
    ELEM.innerHTML = userData();
}

function fillWithPokemon() {
    getPokemonInfo(POKEMON_NAME).then(info => ELEM.innerHTML = info);
}

document.getElementById(HOME_TAB).onclick = fillWithUserData;
document.getElementById(POKEMON_TAB).onclick = fillWithPokemon;
fillWithUserData();