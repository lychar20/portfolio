function createElement(container, tag, name, indexDom, index) {
    const element = document.createElement(tag);
    element.textContent = name + " : " + project[index]['children'][indexDom].textContent;
    element.classList.add("card-text");
    container.appendChild(element);
    return element;
}

// Fonction pour charger le fichier XML avec fetch
async function loadXMLDoc(filename) {
    try {
        const response = await fetch(filename)
        console.log(response);
        if (!response.ok) {
            throw new error('Problème de chargement.')
        }
        const textXml = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(textXml, "text/xml");
        return doc;

    } catch (error) {
        console.error(error);
    }
}

// Fonction pour afficher les livres
function displayBooks(xml) {

    const bookListElement = document.getElementById("book-list");
    bookListElement.classList.add('row');
    project = xml.getElementsByTagName("projet");

    for (let i = 0; i < project.length; i++) {
        const bookElement = document.createElement("div");
        const bodyElement = document.createElement("div");
        const moreElement = document.createElement('button');
        moreElement.textContent = "Voir plus...";
         createElement(bodyElement, "h2", "Titre", 0, i).classList.add('text-primary');
        createElement(bodyElement, "p", "Techno", 1, i).classList.add('text-secondary');
        createElement(bodyElement, "p", "Date", 2, i).classList.add('text-secondary');
        // createElement(bodyElement, "p", "Editeur", 3, i).classList.add('text-secondary');
        // createElement(bodyElement, "p", "Date", 4, i).classList.add('text-secondary');
        const synospisElement = createElement(bodyElement, "p", "detail", 3, i);

        bookListElement.appendChild(bookElement);
        bookElement.appendChild(bodyElement);
        bookElement.classList.add("card", "col-sm-3", "m-5", "p-2");
        bodyElement.classList.add("card-body");
        bodyElement.appendChild(moreElement);
        synospisElement.classList.add('d-none', 'text-secondary');
        moreElement.classList.add('btn', 'btn-primary', 'hide')
        // moreElement.classList.add('btn', 'btn-primary','data-bs-toggle')
        // moreElement.setAttribute(data-bs-toggle, "modal");
        // moreElement.setAttribute(data-bs-target, "#synopsys"+this.);

        moreElement.addEventListener('click', (e) => {
            synospisElement.classList.toggle('d-none');

        })
    }
}

// Charger et afficher les livres au chargement de la page
window.onload = function () {
    loadXMLDoc("toto/project.xml")
        .then(displayBooks)
        .catch(function (error) {
            console.error(error);
        });
};