const body = document.getElementsByTagName("body")[0];
const board = document.getElementById("board");

for(let i = 0; i < 9; i++){
const img = document.createElement('p');
board.appendChild(img);
img.style.width = '200px'
img.style.width= '9vw'
img.style.height= '9vw'
img.style.display = 'flex'
img.style.justifyContent = 'center'
img.style.backgroundImage= 'url(imagecopy2.png)';
img.style.backgroundSize= 'cover';
img.id = i;
}


let arr = [1,2,3,4,5,6,7,8,0]

const mole = document.createElement('button');
    mole.style.backgroundImage = "url('image copy.png')";
    mole.style.backgroundSize = 'cover'
    mole.style.width = '6vw'
    mole.style.height = '6vw';
    mole.style.border = 'none'
    mole.style.backgroundColor = 'inherit'  





const monster = document.createElement('img');
monster.src = 'image copy 4.png';
monster.style.width = '5.1vw'
monster.style.height = '5.1vw'
mole.style.border = 'none'
mole.style.backgroundColor = 'inherit'  
document.getElementById(Math.floor(Math.random() * 9)).appendChild(mole)

const  point = document.getElementById("store");
let result = 0;

function ok(){
    document.getElementById(Math.floor(Math.random() * 9)).appendChild(mole);
    // document.getElementById(Math.floor(Math.random() * 9)).appendChild(monster);
result += 10
point.innerHTML = result;    
}
mole.onclick = ok

function ok(){
    document.getElementById(Math.floor(Math.random() * 9)).appendChild(mole);
    // document.getElementById(Math.floor(Math.random() * 9)).appendChild(monster);
result += 10
point.innerHTML = result;    
}
mole.onclick = ok