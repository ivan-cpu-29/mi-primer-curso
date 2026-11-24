const sumar=(a,b)=>{
    return a+b
}

const restar=(a,b)=>{
    return a-b
}

const multiplicar=(a,b)=>{
    return a*b
}

const dividir=(a,b)=>{
    return a/b
}



const porcentaje=(a,b)=>{
    return multiplicar(dividir(a,b),100)   
}

console.log(porcentaje(59,229))




