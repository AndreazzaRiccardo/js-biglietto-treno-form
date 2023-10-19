// DATI

const usernameElem = document.getElementById("user");
const distanceElem = document.getElementById("distance");
const userAgeElem = document.getElementById("age");
const ticket = document.querySelector(".ticket");

const genBtn = document.getElementById("generate")
genBtn.addEventListener("click", function() {
    const username = usernameElem.value;
    const distance = parseInt(distanceElem.value);
    const userAge = userAgeElem.value;
    let ticketPrice = distance * 0.21;

    if (userAge === "Minorenne") {
        ticketPrice = ticketPrice - (ticketPrice * 0.2);
    } else if (userAge === "Standard") {
        ticketPrice = ticketPrice;
    } else if (userAge === "Over-65") {
        ticketPrice = ticketPrice - (ticketPrice * 0.4);
    }

    if (isNaN(ticketPrice) || username == "") {
        alert("Inserisci dei dati validi");
        usernameElem.value = "";
        distanceElem.value = "";
        usernameElem.focus();
    } else {
        ticket.classList.remove("hidden");
    }

    document.getElementById("username").innerHTML = username;
    document.getElementById("offer").innerHTML = userAge;
    document.getElementById("price").innerHTML = `${ticketPrice.toFixed(2)} €`;

    let code = Math.round(Math.random() * 9999) + 10000;
    let cab = Math.round(Math.random() * 20) + 1;

    document.getElementById("code").innerHTML = code;
    document.getElementById("cab").innerHTML = cab;
});


const clearBtn = document.getElementById("cancel");
clearBtn.addEventListener("click", function(){
    ticket.classList.add("hidden");
})

