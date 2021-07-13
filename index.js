// Kullanıcı ismini çekip ekrana veriyoruz

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("header").innerHTML = "Merhaba, " + data.name;
    });

let asda = document
    .getElementById("search")
    .addEventListener("keyup", () => SearchFood());
let foodListDom = document.querySelector(".container");
// API üzerinden yemek listesi çekiyoruz
let foodList = [];

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((responseJson) => {
        GetCards(responseJson);
    })
    .finally(() => {
        AddBorderToCard();
    });
// setVisible("#top", true);
// setVisible("#loading", false);

function GetCards(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        let counter = responseJson[i];
        let foodCard = `<div class="card" tabindex="${counter.id}" name="foodcard${counter.id}"><h3 id="foodTitle${counter.id}" name="${counter.title}">${counter.title}</h3><button type="button" id="button${counter.id}"> Button</button>

        </div>`;
        document.querySelector(".container").innerHTML += foodCard;
    }
}

function SearchFood() {
    let newData = [];
    let searchFoodText = document.getElementById("search").value;
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
            data.map((x) => {
                if (x.title.startsWith(searchFoodText) == 1) {
                    newData.push(x);
                }
            });
        })
        .finally(() => {
            document.querySelector(".container").innerHTML = "";
            GetCards(newData);
            AddBorderToCard();
           
        });
}

function AddBorderToCard(){
    const z = document.getElementsByClassName("card");

    //    console.log(z)
    //    debugger;
    //     z.map(x => x.addEventListener("click", myFunction))

    for (let index = 0; index < z.length; index++) {
        const element = z[index];
        element.addEventListener("click", () => myFunction(element));
    }

    function myFunction(x) {
        
        x.classList.add("xyz");
    }
}
// function onReady(callback) {
//     var intervalId = window.setInterval(function () {
//         if (document.getElementsByTagName("body")[0] !== undefined) {
//             window.clearInterval(intervalId);
//             callback.call(this);
//         }
//     }, 1000);
// }

// function setVisible(selector, visible) {
//     document.querySelector(selector).style.display = visible ? "block" : "none";
// }

$(document)
 .on('ready',function(){
     var data = localStorage.getItem("datas");
     var localData = data ? JSON.parse(data) : [];
    localStorage.setItem("datas", JSON.stringify(localData));
 })
.on('click','[id^=button]',function(e){
    var id = e.target.id.replace('button','');
    var parentElement = $(e.target).parent();
    const currentDatas = JSON.parse(localStorage.datas || '[]');
    
    if(parentElement.hasClass('fav')){
        parentElement.removeClass('fav');
        localStorage.removeItem("datas"+e.target.id);
    }else{
        currentDatas.push({id:id});
        parentElement.addClass('fav');
        
        localStorage.setItem("datas"+e.target.id,JSON.stringify(currentDatas));
    };
})
.on('keypress', '[name^=foodcard]',function(e){
    let card = $(e.target);
    if(e.keyCode == 102){
        if(card.hasClass('fav')){
            card.removeClass('fav');
        }else{
            card.addClass('fav');
        } 
    }
    
})
;




// let favButton = document.getElementById("button")

// favButton.addEventListener("click", )