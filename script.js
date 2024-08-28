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




// Stampa in pagina
for (let i = 0; i < ourTeam.length; i++) {
    const person = ourTeam[i]
    const { firstName, role, photo } = person;
        console.log(person.firstName)
        ourTeamElement.innerHTML += `Nome: ${firstName}, ruolo, ${role}, foto: ${photo}<br>`;
}