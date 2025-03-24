let nomeHeroi = "Kajuina";
let nivelHeroi = 6800;

if(nivelHeroi < 1000){
    nivelHeroi = "Ferro"
} else if (nivelHeroi >= 1001  && nivelHeroi <= 2000){
    nivelHeroi = "Bronze"
} else if (nivelHeroi >=2001 && nivelHeroi <= 5000){
    nivelHeroi = "Prata"
}else if (nivelHeroi >= 5001 && nivelHeroi <= 7000){
    nivelHeroi = "Ouro"
}else if (nivelHeroi >=7001 && nivelHeroi <= 8000){
    nivelHeroi = "Platina"
}else if (nivelHeroi >=8001 && nivelHeroi <= 9000){
    nivelHeroi = "Ascendente"
}else if (nivelHeroi >=9001 && nivelHeroi <= 10000){
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log(`O héroi ${nomeHeroi} está no nível de ${nivelHeroi}`)
