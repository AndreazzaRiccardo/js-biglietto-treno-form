// DATI

const usernameElem = document.getElementById("user");
const distanceElem = document.getElementById("distance");
const userAgeElem = document.getElementById("age");
const ticket = document.querySelector(".ticket");

const genBtn = document.getElementById("generate")
genBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const username = usernameElem.value;
    const distance = parseInt(distanceElem.value);
    const userAge = userAgeElem.value;
    const kmPrice = 0.21;
    const discountMinors = 0.2;
    const discountOver = 0.4;
    let ticketPrice = distance * kmPrice;

    if (userAge === "minorenne") {
        ticketPrice = ticketPrice - (ticketPrice * discountMinors);
    } else if (userAge === "standard") {
        ticketPrice = ticketPrice;
    } else if (userAge === "over-65") {
        ticketPrice = ticketPrice - (ticketPrice * discountOver);
    }

    if ((username == "") || (distance == "") || (userAge == "")) {
        alert("Inserisci dei dati validi");
        usernameElem.value = "";
        distanceElem.value = "";
        userAgeElem.value = "";
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
clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    ticket.classList.add("hidden");
    usernameElem.value = "";
    distanceElem.value = "";
    userAgeElem.value = "";
})

