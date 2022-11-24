let xadres = "torre"


switch (xadres.toLowerCase()) {
    case "rei":
    console.log("uma casa em qualquer direção")
    break

    case "bispo":
    console.log("diagonal")
    break

    case "peao":
    console.log("uma casa diagonal")
    break

    case "torre":
    console.log("vertical e horizontal") 
    break
    
    case "rainha":
    console.log("qualquer direção e quntas casas quiser")
    break
    
    case "cavalo":
    console.log("movimento em L, 3 casas total")
    break
    
    default:
        console.log("Erro, peça inválida")
    break
};
