const textos = ["Aplicar estandares de modelos educativosinternacionales ", 
    "Fortalecer la prevención ante hechos de violencia y delitos", 
    "Abolir el servicio militar obligatorio",
    "Ampliar las rutas de las ciclovias y garantizar la seguridad al ciclista",
    "Abrogar el paquete de normas que permiten las quemas incontroladas",
    "Promover iniciativas de formación politica y liderazgo de mujeres", 
    "Fortalecer el sistema prevención de enfermedades", 
    "Reestructurar el sist ema de salud y mejorar sus protocolos organizativos",
    "Pagar los bonos y y aguinaldos pese a la crisis económica de las empresas" ];


function texto () {
	const len_textos = textos.length
	const index = Math.floor(Math.random() * len_textos)
    let index_dos = Math.floor(Math.random() * len_textos)
    while (index === index_dos){
        index_dos = Math.floor(Math.random () * len_textos)
    }
    document.getElementById('container_uno').innerHTML = textos[index]
    document.getElementById('container_dos').innerHTML = textos[index_dos]
}

export default texto;