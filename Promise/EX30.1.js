//let mspar = [ 2, 17]

  const testNum = (num) => new Promise ((resolve, reject) => {
    if (num > 10) {
      resolve('greater than ten')
    } else {
      reject('less than ten')
    }
  })
  
  testNum(12)
    .then(function(value) {
    console.log(value)
  })
  .catch(function(error) {
    console.log(error)
  })