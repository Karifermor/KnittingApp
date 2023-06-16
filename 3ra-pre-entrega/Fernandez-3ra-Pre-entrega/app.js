

let cart = []


const carroStr = JSON.stringify(cart)
localStorage.setItem("cart", carroStr)








const btnChoice = document.querySelector("#btnChoice")
const inputChoice = document.querySelector("#inputChoice")


btnChoice.addEventListener("submit", (e)=> {
    e.preventDefault()
    cart.push(`${inputChoice.value}`)
    // console.log(cart)

    const patronesStr = JSON.stringify(cart)
    localStorage.setItem("patterns", patronesStr)


    const patternsArray = JSON.parse(localStorage.getItem("patterns"))

    localStorage.setItem("patterns", cart)

    // console.log(patternsArray)
})

const formulario = document.querySelector("#formulario")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")
const apply = document.querySelector("#btnApply")
const btnForm = document.querySelector("#btnForm")
const submitBtn = document.querySelector("#submitBtn")


submitBtn.addEventListener("click", applyFunction)

function applyFunction(e){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false
      })
          swalWithBootstrapButtons.fire(
            'Succes! You have applied for',
            `${inputChoice.value} pattern`,
            'success'
          )      
}


formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault()
    console.log(`Nombre del usuario ${inputName.value}, correo electronico ${inputEmail.value}`)
}



btnForm.addEventListener("click", botonForm)

function botonForm(e){
    btnConfirm()
    validarFormulario()
}



function btnConfirm(e){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Info submited',
        showConfirmButton: false,
        timer: 1500
      })
}


