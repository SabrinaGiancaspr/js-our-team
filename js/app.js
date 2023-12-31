// console.log('our team')

//-definire l'array di membri del team
//- aggiungere tutte le info
const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-caroll-chief-editor.jpg', 
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
];


//-stampare in pagina collegando il DOM 
const teamInfoDomElement = document.getElementById('teaminfo');

//creo ciclo for con template literal per stampare su pagina
//ciclo for per la lunghezza dell'array
for (let i = 0; i < teamMembers.length; i++) {
  //valore dell'elemento corrente dell'array
  const member = teamMembers[i];

  //template literal per sovrascrivere html
  const memberInfoHTMLString = ` <div class="card">
                              <img src="./img/${member.foto}" alt="">
                              <h2>${member.nome}</h2>
                              <p>${member.ruolo}</p>
                           </div> `;
  //inserire la stringa HTML
  teamInfoDomElement.innerHTML += memberInfoHTMLString;
}