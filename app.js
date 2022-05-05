const ImprimirNombre=(nombre, apellido)=>{

    return new Promise((res,reject)=>{
        
        
        if(typeof nombre !=="string" || typeof nombre !=="string" ){
            setTimeout(()=>{
                reject("error no se puede Crear la persona")
            },2000)
        
        }
        else{
        let persona={
            nombre: nombre,
            Apellido: apellido,
        }
        setTimeout(()=>{
            res(persona)
        },2000)
    }})}

    const ImprimirNombre2=(nombre, apellido)=>{

        return new Promise((res,reject)=>{
            
            
            if(typeof nombre !=="string" || typeof nombre !=="string" ){
                setTimeout(()=>{
                    reject("error no se puede Crear la persona")
                },2000)
            
            }
            else{
            let persona={
                nombre: nombre,
                Apellido: apellido,
            }
            setTimeout(()=>{
                res(persona)
            },4000)
        }})}







ImprimirNombre2("Andres","Agudelo")
.then((res)=>{
        console.log(res)
    }).catch((reject)=>console.error(reject))

    

ImprimirNombre2("Juan","Agudelo")
.then((res)=>{
        console.log(res)
    }).catch((reject)=>console.error(reject))

    

ImprimirNombre2("Julian","Agudelo")
.then((res)=>{
        console.log(res)
    }).catch((reject)=>console.error(reject))





// .then((res)=>{
//     console.log(res)
//     return ImprimirNombre2("Sara","Bermudez")
//     })
// .then((res)=>{

//         console.log(res)
//     })
// .catch((reject)=>console.error(reject))


setTimeout(()=>{
console.log("Hola como estas")
},3000)
setTimeout(()=>{
    console.log("Hola como estas 2")
    },1000)