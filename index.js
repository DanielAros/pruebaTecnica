
const displayMenu = (mostrarMenu) => {
    const menu = document.getElementsByClassName('menu-hamburguesa');
    if(mostrarMenu){
        menu[0].style.display = 'initial';
    }else{
        menu[0].style.display = 'none';
    }
    console.log(menu)
}