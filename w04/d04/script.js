//exercise
// axios.get('https://api.myjson.com/bins/bygvt').then((response) => {
//     console.log(response.data);
//     let aliases = response.data.aliases;
//     for (let i=0; i < aliases.length; i++)
//     console.log(aliases[i]);
//     let actor = response.data.playedBy;
//     console.log(actor.actor);
//     let myActor = document.getElementById("my-actor");
//     myActor.innerText = actor.actor;    
// })

//Red Bull API Workshop
let child = document.querySelector(".child");

axios.get('https://www.redbullshopus.com/products.json').then((response) => {
    let data = response.data;
    console.log(data);
    let products = data.products;
    for (let i=0; i < products.length; i++){
        let title = products[i].title;
        console.log(title);
    }})
