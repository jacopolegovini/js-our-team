// Recupera gli elementi dal DOM
const ourTeamElement = document.querySelector('.our-team')


// Crea le variabili necessarie
const ourTeam = [
    { firstName: 'Wayne Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg'},
    { firstName: 'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg'},
    { firstName: 'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg'},
    { firstName: 'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg'},
    { firstName: 'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg'},
    { firstName: 'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg'}
]


// Crea le card
for (let i = 0; i < ourTeam.length; i++) {
    const personCard = document.createElement('div');
    personCard.classList.add('person-card');
    ourTeamElement.appendChild(personCard);
}


// Recupera le card dal DOM
const personCardElement = document.querySelectorAll('.person-card');


// Stampa in pagina
for (let i = 0; i < ourTeam.length; i++) {
    const person = ourTeam[i];
    const { firstName, role, photo } = person;
    personCardElement[i].innerHTML += `<img src="img/${photo}" alt="${photo}"> <div>${firstName}</div><div>${role}</div>`;
}