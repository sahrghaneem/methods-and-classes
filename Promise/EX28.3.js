const wonderWoman = {
    name: "Diana Prince",
  };
  const batman = {
    name: "Bruce Wayne",
  };
  const superHeroes = [wonderWoman, batman];
  console.log(superHeroes);
  
  function printName() {
    console.log(`my name is ${this.name}`);
  }
  
  
  function printHeroes(allheroes, printF) {
  for(let i=0;i<allheroes.length;i++)
  printF.apply(allheroes[i])
  }
  
  printHeroes(superHeroes,printName)

