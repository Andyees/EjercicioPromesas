var input= document.getElementById("input")
var button=document.getElementById("button")
var container=document.getElementById("container")

const template = (bandera, nombre, capital, poblacion) => {
    return `
        <div class="col-6 col-md-3 mb-3">
            <div class="card">
                <img class="size" src="${bandera}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Capital: ${capital}</p>
                    <p class="card-text">Población: ${poblacion}</p>
                </div>
            </div>
        </div>
    `;  
};


const search=async(nombre)=>{
    const url= 'https://restcountries.com/v3.1/name/'+nombre
    const res=await fetch(url);
    if(!res.ok){
        container.innerHTML=`<div class="alert alert-primary" role="alert">
        Not found
      </div>`
    }
    else{
        container.innerHTML=""
        const data=await res.json();
        data.forEach(element => {
            container.innerHTML+= template(element.flags.svg,element.name.common,element.capital,element.population)       
        });
    
    }

}



button.addEventListener("click", ()=>{
    search(input.value)
})
input.addEventListener("keyup", ()=>{
    search(input.value)
})


