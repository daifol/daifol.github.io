document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

e.preventDefault();

const nombre =
document.getElementById("nombre").value;

const telefono =
document.getElementById("telefono").value;

const servicio =
document.getElementById("servicio").value;

const mensaje =
document.getElementById("mensaje").value;

const texto =
`Hola, mi nombre es ${nombre}
Telefono: ${telefono}
Servicio: ${servicio}

Detalle:
${mensaje}`;

const url =
`https://wa.me/5491133086008?text=${encodeURIComponent(texto)}`;

window.open(url,"_blank");

});