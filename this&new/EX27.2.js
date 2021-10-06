function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
let pikachu = new Pokemon('pikachu', 'electric', ['bite', 'thunderbolt', 'roll'])

let charlizard = new Pokemon('charlizard', 'fire', ['bite', 'fireball', 'superslam'])


Pokemon.prototype.callPokemon = function() {
    console.log(`i choose you,  ${this.name}`)
};
charlizard.callPokemon()
pikachu.callPokemon()

Pokemon.prototype.attack= function(pa){
console.log(this.name + " used " + this.attackList[pa])
}

pikachu.attack(0)
charlizard.attack(2)