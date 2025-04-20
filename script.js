// Este é para o meu menu ficar ativado(azul) na seção que estiver
let iconeMenu = document.querySelector("#icone-menu");
let menu = document.querySelector(".menu");

iconeMenu.onclick = () => {
    iconeMenu.classList.toggle("bx-x");
    menu.classList.toggle("ativado")
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("ativado");
                document.querySelector("header nav a[href*=" + id + ']').classList.add("ativado");
            })
        }
    })

    iconeMenu.classList.remove("bx-x");
    menu.classList.remove("ativado")

};

// Para ter um scroll mais fluída e com elementos chegando de todas as direções
ScrollReveal({
    distance: "80px",
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-inicio, .titulo-section', { origin: "top" });
ScrollReveal().reveal('.img-inicio, .container-servicos, .portfolio-box, .contato form', { origin: "bottom" });
ScrollReveal().reveal('.segundo-txt, .sobre-img', { origin: "left" });
ScrollReveal().reveal('.conteudo-inicio p, .conteudo-sobre', { origin: "right" });


// Animação de digitação para ativar só quando tiver abaixo de 1024 pixels de largura
if (window.innerWidth <= 1023) {
    document.getElementById("escrita-ativa").innerHTML = "Front-end Developer"
} else {
    function iniciarAnimacaoDigitando() {

        new Typed('.digitando', {
            strings: ['Front-end Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

    }
}

document.addEventListener('DOMContentLoaded', iniciarAnimacaoDigitando);

// Aqui é a abertura de popups dos cards serviço
document.addEventListener('DOMContentLoaded', function() {
    const cardServicos = document.querySelectorAll('.card-servicos');
    const popups = {
        'sites': document.getElementById('popup-sites'),
        'logos': document.getElementById('popup-logos'),
        'videos': document.getElementById('popup-videos')
    };
    const botoesFechar = document.querySelectorAll('.fechar-popup');

    cardServicos.forEach(card => {
        const botaoLerMais = card.querySelector('.ler-mais-btn');
        const servico = card.dataset.servico;
        const popupAlvo = popups[servico];

        if (botaoLerMais && popupAlvo) {
            botaoLerMais.addEventListener('click', function(event) {
                event.preventDefault(); // Evita que o link "#" navegue para o topo
                popupAlvo.style.display = 'flex'; // ou 'block', dependendo do seu layout flex/grid
            });
        }
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener('click', function() {
            const popupPai = this.closest('.popup');
            if (popupPai) {
                popupPai.style.display = 'none';
            }
        });
    });

    // Fechar o pop-up ao clicar fora da área do conteúdo
    window.addEventListener('click', function(event) {
        Object.values(popups).forEach(popup => {
            if (popup.style.display === 'flex' || popup.style.display === 'block') {
                if (event.target === popup) {
                    popup.style.display = 'none';
                }
            }
        });
    });
});