// console.log('our team')

//-definire l'array di membri del team
const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome:'Angela Caroll',
    ruolo:'Chief Editor',
    foto:' angela-caroll-chief-editor.jpg',
  },
  {
    nome:'Walter Gordon',
    ruolo:'Office Manager',
    foto:'walter-gordon-office-manager.jpg',
  },
  {
    nome:'Angela Lopez',
    ruolo:'Social Media Manager',
    foto:'angela-lopez-social-media-manager.jpg',
  },
  {
    nome:'Scott Estrada',
    ruolo:'Developer',
    foto:'scott-estrada-developer.jpg',
  },
  {
    nome:'Barbara Ramos',
    ruolo:'Graphic Designer',
    foto:'barbara-ramos-graphic-designer.jpg',
  }
  
] 
console.log(teamMembers)
//- aggiungere tutte le info
for (let memberInfo in teamMembers)
console.log(memberInfo)
const valore = teamMembers[memberInfo]
console.log(valore)
//-stampare le info su console 
//-con ciclo for in 
//-stampare in pagina collegando il DOM 