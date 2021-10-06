const getAllP = async () => {
    let all = []
    for (let i = 1; i <= 10; i++) {
        const url = await (await fetch(`https://swapi.dev/api/people/${i}/`)).json();
        const homeWorld = await (await fetch(url.homeWorld)).json()

        let people = {
            name: url.name,
            height: url.height,
            hair_color: url.hair_color,
            planet: {
                homeWorld: homeWorld.name,
                population: homeWorld.population
            }
        }
        all.push(people)
    }
    console.log(all)
}
getAllP()
createTable()

function createTable(tableOfPerson) {

    let table =
        `<table style="width:100%">
  <tr>
    <th>name</th>
    <th>hair</th>
    <th>height</th>
    <th>planet name</th>
    <th>planet population</th>
  </tr>`
  
    for (let tableOfPerson of tableOfPerson) {
        table +=
            `<tr class="oddTr">
   <td>${tableOfPerson.name}</td>
   <td>${tableOfPerson.hair_color}</td>
   <td>${tableOfPerson.height}</td>
   <td>${tableOfPerson.planet.homeWorld}</td>
   <td>${tableOfPerson.planet.population}</td>
   </tr>`

    }
    table += '</table>'
    document.body.innerHTML = table;
}


// const createTable = async () => {
//     const table = document.createElement('tr');
//     starWare.append(table);
//     for (let j = 0; j < 10; j++) {
//         const tr = document.createElement('tr');
//         for (let i = 0; i < 5; i++) {
//             const td = document.createElement('td');
//             td.innerHTML = "data" + i;
//         }
//     }
// }



