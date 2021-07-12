// Kullanıcı ismini çekip ekrana veriyoruz


fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    document.getElementById("header").innerHTML = "Merhaba, " + data.name;
  });


 let foodListDom = document.querySelector(".container")
 // API üzerinden yemek listesi çekiyoruz

 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(response => response.json())
 .then(responseJson => {
     for (let i = 0; i < responseJson.length; i++) {
         let counter = responseJson[i];
         let foodCard = `<div class="card"><h3 id="foodTitle">${counter.title}</h3></div>`
         document.querySelector('.container').innerHTML += foodCard; 
         
     }
     
 }).finally(()=> {
   const z = document.getElementsByClassName('card');
//    console.log(z)
//    debugger;
//     z.map(x => x.addEventListener("click", myFunction))

  for (let index = 0; index < z.length; index++) {
      const element = z[index];
      element.addEventListener("click", () => myFunction(element))
  }

 function myFunction(x){
   
   x.classList.add("xyz");
};
 })
 
