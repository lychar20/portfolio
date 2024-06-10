let entete = document.getElementById("entete");
// while(entete.firstChild) {
//     entete.removeChild(entete.firstChild);
// }

let logo = document.createElement("img");
logo.setAttribute("src", "logo.PNG");
logo.setAttribute("alt", "logo");
logo.classList.add("logo");
entete.appendChild(logo);

let bond = document.createElement("input");
bond.setAttribute("id", "toggle");
bond.setAttribute("type", "checkbox");

let label = document.createElement("label");
label.setAttribute("for", "toggle");
let navigation = document.createElement("nav");
let navUl = document.createElement("ul");
navUl.classList.add("otherValue");


// let lienAccueil = document.createElement("a");
// lienAccueil.setAttribute("href", "index.html");
// lienAccueil.textContent = "Accueil";
// navigation.appendChild(lienAccueil);

// let lienApropos = document.createElement("a");
// lienApropos.setAttribute("href", "apropos.html");
// lienApropos.textContent = "A propos";
// navigation.appendChild(lienApropos);

// let lienRealisation = document.createElement("a");
// lienRealisation.setAttribute("href", "realisation.html");
// lienAccueil.textContent = "Realisation";
// navigation.appendChild(lienRealisation);

// let lienContact = document.createElement("a");
// lienContact.setAttribute("href", "contact.html");
// lienContact.textContent = "Contact";
// navigation.appendChild(lienContact);

entete.appendChild(label);
label.textContent = "☰";
label.classList.add("label");

entete.appendChild(bond);

entete.appendChild(navigation);
navigation.appendChild(label);
navigation.appendChild(bond);
navigation.classList.add("menu");
navigation.appendChild(navUl);
//navigation.appendChild(label);





function createLi(id, href, textContent, classes = []) {
    let navLI = document.createElement("li");

    let link = document.createElement("a");
    link.classList.add(...classes);
    link.id = `navlink${id}`;
    link.href = href;
    link.textContent = textContent;

    navUl.appendChild(navLI);
    navLI.appendChild(link);
}

createLi (1, "index.html", "Accueil", []);
createLi (2, "apropos.html", "A propos", []);
createLi (3, "realisation.html", "Realisation", []);
createLi (4, "contact.html", "Contact", []);





{/* <header id="entete">
        <a href="#" class="logo_company"> <img class="logo" src="logo.PNG" alt="logo_company" /> </a>
        XXXXXXX
        <nav class="menu">
            <ul>
                <li>
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Produits</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>

            </ul>
        </nav>
    </header> */}