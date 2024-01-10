var poka;
fetch("https://pokeapi.co/api/v2/pokemon?limit=1292/").
then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data.results);
     poka = data.results;
     poka.forEach(function(current) {
        console.log(current.name)
        //make an li
       let li = document.createElement("li")

       let a = document.createElement("a");
        //put text inside the li we just made
        a.innerText = current.name;
        //put the li in the orderd list

     a.href = "pokemon.html?name=" + current.name;
li.append(a);
        
        document.querySelector("ol").append(li);
     })
    // console.log(data.results);
    // data.results.forEach(function(pokemon){
    //     console.log(pokemon.name)
        
    //     let h3 = document.createElement("h3");
    //     h3.innerText = pokemon.name;
    //     let anchor = document.createElement("a");
    //     anchor.append(h3);
    //     anchor.href = pokemon.url;
    //     document.body.append(anchor);
        
    // })
})