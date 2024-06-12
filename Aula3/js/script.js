trocatema = () => {
    // alert ("mudo o tema pae")
    // const html = document.documentElement
    document.documentElement.classList.toggle("light");

    const islight = document.documentElement.classList.contains("light");
    const imagem = islight ? "./img/jpg.jpg" : "./img/romero.jpg" ;

    document.querySelector("#perfil img").setAttribute("src", imagem);

}