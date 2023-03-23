
const displayMenu = (mostrarMenu) => {
    const menu = document.getElementsByClassName('menu-hamburguesa');
    if(mostrarMenu){
        menu[0].style.display = 'initial';
    }else{
        menu[0].style.display = 'none';
    }

    const section = document.getElementsByTagName('section');

    for(let i = 1; i < section.length; i++){
        section[i].style.display = 'none';
        console.log(section[i])
    }
}

const navegacionSecciones = () => {
    const section = document.getElementsByTagName('section');

    for(let i = 1; i < section.length; i++){
        section[i].style.display = 'flex';
        console.log(section[i])
    }

    const menu = document.getElementsByClassName('menu-hamburguesa');
    menu[0].style.display = 'none';
}