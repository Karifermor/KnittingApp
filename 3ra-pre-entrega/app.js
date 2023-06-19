

let cart = []
let carrito = []


const carroStr = JSON.stringify(cart)
localStorage.setItem("cart", carroStr)




const listaVacia = document.querySelector("#lista-vacia")

const btnChoice = document.querySelector("#btnChoice")
const inputChoice = document.querySelector("#inputChoice")
const formulario = document.querySelector("#formulario")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")
const apply = document.querySelector("#btnApply")
const btnForm = document.querySelector("#btnForm")
const submitBtn = document.querySelector("#submitBtn")


btnChoice.addEventListener("submit", (e)=> {
    e.preventDefault()
    cart.push(`${inputChoice.value}`)
    // console.log(cart)

    const patronesStr = JSON.stringify(cart)
    localStorage.setItem("patterns", patronesStr)

    const patternsArray = JSON.parse(localStorage.getItem("patterns"))

    localStorage.setItem("patterns", cart)

    // console.log(patternsArray)
    confirmPurchaseBtn.style.display = "inline-block";

})


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

//formulario donde se agrega nombre y correo electronico
formulario.addEventListener("submit", validarFormulario)

//boton del formulario
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

//funcion que valida los datos agregados al formulario
function validarFormulario(e){
  e.preventDefault()
  console.log(`Nombre del usuario ${inputName.value}, correo electronico ${inputEmail.value}`)
}


// para agregar lo del input al carrito obteniendo la info que guardada en el localStorage 
btnChoice.addEventListener("submit", addToCart);

function addToCart(e) {
  e.preventDefault();
  const patternsForCart = localStorage.getItem("patterns");

  const itemName = inputChoice.value;
  carrito.push(itemName);

  const carritoLista = document.createElement("li");
  carritoLista.classList.add("list-group-item");
  carritoLista.textContent = itemName;
  listaVacia.appendChild(carritoLista);

  // boton para borrar cosas del carrito
  const btnBorrar = document.createElement("button");
  btnBorrar.classList.add("btn", "btn-danger", "btn-sm", "float-right");
  btnBorrar.textContent = "Delete";
  btnBorrar.addEventListener("click", () => {
    borrarCarrito(itemName);
  });

  carritoLista.appendChild(btnBorrar);

  const contar = document.querySelector("#navbarNav .badge");
  contar.textContent = carrito.length;
  inputChoice.value = "";

  updateCart();
  
}


function borrarCarrito(itemName) {
  const itemIndex = carrito.indexOf(itemName);
  if (itemIndex !== -1) {
    carrito.splice(itemIndex, 1);
    updateCart(); 

    // y lo vuelvo a guardar en el localStorage
    localStorage.setItem("patterns", JSON.stringify(carrito));
  }
}




function updateCart() {
 
  listaVacia.innerHTML = "";

  carrito.forEach((itemName) => {
    const carritoListaNuevo = document.createElement("li");
    carritoListaNuevo.classList.add("list-group-item");
    carritoListaNuevo.textContent = itemName;

    const btnBorrar = document.createElement("button");
    btnBorrar.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    btnBorrar.textContent = "Delete";
    btnBorrar.addEventListener("click", () => {
      borrarCarrito(itemName);
    });

    carritoListaNuevo.appendChild(btnBorrar);
    listaVacia.appendChild(carritoListaNuevo);
  });

  const contar = document.querySelector("#navbarNav .badge");
  contar.textContent = carrito.length;

 
}




const confirmPurchaseBtn = document.createElement("button");
confirmPurchaseBtn.classList.add("btn", "btn-success", "btn-sm", "float-right");
confirmPurchaseBtn.textContent = "Apply";
confirmPurchaseBtn.addEventListener("click", confirmPurchase);

const aceptar = document.querySelector("#cartCollapse .card")
aceptar.appendChild(confirmPurchaseBtn);
confirmPurchaseBtn.style.display = "none";



function confirmPurchase() {
  Swal.fire({
    icon: 'success',
    title: 'You have applied',
    text: 'Thank you, the pattern will be send to your email!',
    showConfirmButton: false,
    timer: 2000
  });

  carrito = [];
  updateCart();
  confirmPurchaseBtn.style.display = "none";

}
