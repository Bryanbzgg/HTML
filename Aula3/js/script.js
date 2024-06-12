trocatema = () => {
    // alert ("mudo o tema pae")
    // const html = document.documentElement
    document.documentElement.classList.toggle("light");

    const islight = document.documentElement.classList.contains("light");
    const imagem = islight ? "./img/jpg.jpg" : "./img/romero.jpg" ;

    document.querySelector("#perfil img").setAttribute("src", imagem);


    const alt = islight ? "um homem com os braços abertos comemorando" : "Foto de perfil mandando beijo com camisa de time (corinthians) e cabelo arrepiado para cima." ;

    document.querySelector("#perfil img").setAttribute("alt", alt);


}