"use strict";
const btn = document.querySelector('button');
const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "img/barbara-ramos-graphic-designer.jpg"
  }
];
const row = document.querySelector(".row");

for (let i = 0; i < members.length; i++) {
    membersCards(members[i]);
}

function membersCards(members){
    const col = document.createElement("div");
    col.classList.add("col-4", "my-3", "text-center");
    const template = `
    <div class="card">
            <img class="card-img-top" src="${members.picture}" alt="">
            <div class="card-body">
                <h4 class="card-title">${members.name}</h4>
                <p>${members.role}</p>
            </div>
        </div>
    `;
    col.innerHTML = template;
    row.append(col);
}

btn.addEventListener('click', function(){
    const newMember =  {
      name: document.getElementById('name').value,
      role: document.getElementById('role').value,
      picture: document.getElementById('picture').value
    }
    members.push(newMember);
    console.log(newMember);
    membersCards(newMember);
})

//ticket
   /*
    <div class="card text-start">
            <img class="card-img-top" src="img/wayne-barnett-founder-ceo.jpg" alt="">
            <div class="card-body">
                <h4 class="card-title"></h4>
                <p class="card-text">
                    
                </p>
            </div>
        </div>

    */