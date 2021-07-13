let cards=[
    {
        image:"https://i.pinimg.com/236x/f6/4b/3b/f64b3b5b5949be600ef9361484f9e9b3--marine-fish-clownfish.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/f6/4b/3b/f64b3b5b5949be600ef9361484f9e9b3--marine-fish-clownfish.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/fa/ed/bc/faedbca3ce7f5d3fbf21f2dd357f1157.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/fa/ed/bc/faedbca3ce7f5d3fbf21f2dd357f1157.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://wallpaperaccess.com/full/1333533.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://wallpaperaccess.com/full/1333533.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/originals/16/25/73/162573ea34cac78f96001c44dd463075.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/16/25/73/162573ea34cac78f96001c44dd463075.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://c.stocksy.com/a/OdL000/za/83166.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://c.stocksy.com/a/OdL000/za/83166.jpg",
        value:5,
        status:"closed"
    },

  
]



let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("The Net is empty");
            location.reload();

        }

        
    }

    displayCards(cards);

}













