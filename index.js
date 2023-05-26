let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count++;
    countEl.innerText = count;

}

function decrement(){
    count--;
    countEl.innerText = count;

}

function save(){
    textEl = document.getElementById("saveEl");
    textEl.innerText += " "+count+" - ";
    console.log(count);
    countEl.innerText = 0;
    count = 0;
}

let welcome = document.getElementById("welcome");
let name1 = "Sanjay Joseph";
let greetings = "Hola amigo ";
welcome.innerText = greetings + name1;
// function chumma(){
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
// } 

// chumma();