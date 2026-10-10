let users=[
    {
        name:"John Doe",
        gender:"Male",
        img:"assets/john.png"
    },
    {
        name:"Jane Doe",
        gender:"Female",
        img:"assets/jane.png"
    }
]

let index=0;
function toggleUser(){
    if(index==0) index=1;
    else index=0;

    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-img").src=users[index].img;
}

function randomUser(){
    fetch("https://randomuser.me/api")
    .then((response)=>response.json())
    .then((data)=>{
         let user=data.results[0];
        document.getElementById("user-name").innerText=user.name.title+" "+ user.name.first+" "+user.name.last;
        document.getElementById("user-gender").innerText=user.gender;
        document.getElementById("user-img").src=user.picture.large;
    }).catch((err)=>console.error(err));

}