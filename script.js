/* =========================================
   HAPPY PAWS PET ADOPTION
   JavaScript
========================================= */


/* ---------- Mobile Menu ---------- */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");

}


/* ---------- Adoption ---------- */

function adoptPet(petName) {

    const answer = confirm(
        "Would you like to start the adoption process for "
        + petName
        + "?"
    );


    if (answer) {

        alert(
            "Thank you for choosing to adopt "
            + petName
            + "! ❤️\n\n"
            + "Please contact Happy Paws to continue the adoption process."
        );

    }

}


/* ---------- Contact Form ---------- */

function submitForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, "
        + name
        + "! ❤️\n\n"
        + "Your message has been received."
    );


    document.querySelector("form").reset();

}


/* ---------- Pet Search ---------- */

function searchPets() {

    const searchInput =
        document.getElementById("petSearch");


    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.toLowerCase();


    const petCards =
        document.querySelectorAll(".pet-card");


    petCards.forEach(function(card) {

        const petName =
            card.querySelector("h2").textContent.toLowerCase();


        const petDescription =
            card.querySelector("p").textContent.toLowerCase();


        if (
            petName.includes(searchText)
            ||
            petDescription.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}