const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];


let orderetList = document.createElement('ol');
document.body.appendChild(orderetList);

users.forEach(element => {
    let listitem = document.createElement('li');
    listitem.innerHTML = element.firstName +' '+ element.lastName;
    orderetList.appendChild(listitem);

    listitem.setAttribute('data-id' , element.id);
    
    
});

orderetList.style.listStyle = 'none';
