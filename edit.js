const pinos = (torres) => {
    const sectionToAppend = document.querySelector('.varetas')

    const divTorre1 = document.createElement('div')
    const divTorre2 = document.createElement('div')
    const divTorre3 = document.createElement('div')

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')

    divTorre1.classList.add('pino', 'torre1')
    divTorre2.classList.add('pino', 'torre2')
    divTorre3.classList.add('pino', 'torre3')

    div1.classList.add('barra1')
    div2.classList.add('barra2')
    div3.classList.add('barra3')
    div4.classList.add('barra4')

    divTorre1.appendChild(div1)
    divTorre1.appendChild(div2)
    divTorre1.appendChild(div3)
    divTorre1.appendChild(div4)

    sectionToAppend.appendChild(divTorre1)
    sectionToAppend.appendChild(divTorre2)
    sectionToAppend.appendChild(divTorre3)

    divTorre1.addEventListener('click', cliquePinos)
    divTorre2.addEventListener('click', cliquePinos)
    divTorre3.addEventListener('click', cliquePinos)
}

const main = document.querySelector('main')
const guardaBlocos = document.createElement('div')
guardaBlocos.classList.add('display')
main.appendChild(guardaBlocos)

const cliquePinos = (event) => {
    
    let elementCount = event.currentTarget.childElementCount
    
    if (guardaBlocos.childElementCount === 0) {
        
        let ultimoElemento = event.currentTarget.lastElementChild
        guardaBlocos.appendChild(ultimoElemento)
        
    }else if(elementCount > 0 && guardaBlocos.childElementCount === 1){

        let ultimoElemento = event.currentTarget.lastChild.clientWidth
        if(guardaBlocos.firstChild.clientWidth < ultimoElemento){
            event.currentTarget.appendChild(guardaBlocos.firstChild)
        }
    }else if(guardaBlocos.childElementCount === 1) {
        event.currentTarget.appendChild(guardaBlocos.firstChild)
    }
}

pinos()
