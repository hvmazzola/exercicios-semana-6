const nome = document.getElementById("nomeCompleto")
const rodape = document.getElementById("rodape")
const foto = document.getElementById("foto")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
const form = document.getElementById("form")
const firstName = document.getElementById("name")
const email = document.getElementById("email")

nome.addEventListener("click", () => {

    return alert("Henrique Mazzola se encontra empregado atualmente!")

})

const date = new Date().toLocaleString();
rodape.innerHTML = "Produzido por: Henrique Veras Mazzola no Curso FutudoDev SENAI. Acessado em: " + date;


foto.addEventListener("mouseover", () => {

    foto.style.filter = "grayscale(100%)";

    return foto;

    
})

foto.addEventListener("mouseout", fnMouseout);

    function fnMouseout(){

    foto.style.filter = "grayscale(0%)";

    return foto;
    }

foto.addEventListener("click", fnGetGrey);

    function fnGetGrey(){

        foto.removeEventListener("mouseout", fnMouseout);
        foto.style.filter = "grayscale(100%)";
        foto.removeEventListener("click", fnGetGrey)

        foto.addEventListener("click", fnColored);
            function fnColored(){
                foto.style.filter = "grayscale(0%)";
                foto.removeEventListener("click", fnColored);
                foto.addEventListener("click", fnGetGrey);
                foto.addEventListener("mouseout", fnMouseout);
                return foto;
            }

        return foto;

    }

submit.addEventListener("click", () => {

    return alert(firstName.value + ", você entrou em contato com Henrique sobre seu currículo. Em breve receberá um e-mail em " + email.value);


})