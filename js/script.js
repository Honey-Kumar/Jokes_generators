const button = document.querySelector('.btn');
const para = document.querySelector('.para');
document.addEventListener('DOMContentLoaded',getjoke);
document.getElementById('anch').addEventListener('click',getjoke);
async function getjoke(){
    const jokedata = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    });
    const jokeobject = await jokedata.json();
    para.innerHTML= jokeobject.joke;
}