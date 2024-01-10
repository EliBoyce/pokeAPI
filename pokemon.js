fetch("https://pokeapi.co/api/v2/pokemon/" + location.href.split("=")[1])
.then(function(res){
    return res.json();
})
.then(function(data){
   console.log(data);
   console.log(data.name);
   var name = data.name
   document.querySelector("h1").textContent = name
   console.log(data.sprites.other["official-artwork"].front_default)
   var picture = data.sprites.other["official-artwork"].front_default
   document.querySelector("img").src = picture
   document.querySelector("h3").textContent = "Weight: " + data.weight
   document.querySelector("#order").textContent = "Order: " + data.order
   document.querySelector("#id").textContent = "List Number: " + data.id
   document.querySelector("#height").textContent = "Height: " + data.height
   document.querySelector("#type1").textContent = "Type 1: " + data.types[0].type.name
   document.querySelector("#type2").textContent = "Type 2: " + data.types[1].type.name
})
