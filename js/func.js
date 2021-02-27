

alert("Hello world")




const view=(e)=>{
    e.preventDefault();
    const In=document.getElementById("in").value;
    document.getElementById("name").innerHTML += In;
}

document.getElementById("action").addEventListener("click",view);
