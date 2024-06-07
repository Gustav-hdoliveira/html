function cliquenobotão() {
    const imagem = document.getElementById("imagemCF");
    if (imagem.style.display === "none") {
        imagem.style.display = "block"; //torna imagem visivel
    } else {
        imagem.style.display = "none"; //Oculta imagem se já estiver visivel
    }
}

document.getElementById("clickBtn").addEventListener("click", function() {
    alert('click: Acionado quando um elemento é clicado')
});

document.getElementById("dblclickBtn").addEventListener('dblclick', function() {
    alert('click: Acionado quando um elemento é clicado duas vezes')
})

document.getElementById('mousedownBtn').addEventListener('mousedown', function() {
    alert('mousedown: Acionado quando um botão do mouse é pressionado sobre um elemento.');
})

document.getElementById('mouseupBtn').addEventListener('mouseup', function() {
    alert('mouseup: acionado quando um botão do mouse é liberado sobre um elemento');
})

document.getElementById('mousemoveBtn').addEventListener('mousemove', function() {
    alert('mousemove: acionado quando o cursor do mouse passa por cima.')
})

document.getElementById('mouseoverBtn').addEventListener('mouseover', function(){
    alert('mouseover: acionado quando o curso do mouse entra em um elemento.')
})

document.getElementById('mousedownBtn').addEventListener('mousedown', function(){
    alert('mousedown: acionado quando o mouse sai do elemento')
})

document.getElementById('contextmenuBtn').addEventListener('')

document.getElementById('keydownBtn').addEventListener('keydown', function(){
    alert('keydown: acionado quando uma tecla e pressionada.')
})

document.getElementById('keypressBtn').addEventListener('keypress', function(){
    alert('keypress: Acionado ao apertar e soltar uma tecla.')
})

document.getElementById('keyupBtn').addEventListener('keyup', function(){
    alert('keyup: Acionado quando uma tecla é liberada')
})

//eventos de tempo
document.getElementById('settimeoutBtn').addEventListener('click')