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