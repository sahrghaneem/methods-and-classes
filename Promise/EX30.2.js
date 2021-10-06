let fruits = ["apples", "oranges", "mango","@"]

const makeAllCaps = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject({action: 'error', data: 'array not a string!'})
      
    }
  })

const sortWords = (words) => {
  return words.sort()
}

makeAllCaps(fruits)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))