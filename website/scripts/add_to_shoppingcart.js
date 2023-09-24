// variabler til store
const wClothes = document.getElementById("wClothes")
const mClothes = document.getElementById("mClothes")
const cClothes = document.getElementById("cClothes")
const glasses = document.getElementById("glasses")
const parfume = document.getElementById("parfume")
const pen = document.getElementById("pen")

let summen = document.getElementById("summen")
let lstProducts = document.getElementById("lstProducts")
let products = []
let totalsum = 0
let streng = ""

// variabler til shoppingcart/checkout
const submit = document.getElementById("submitco");
const mainSC = document.getElementById("mainsc1")
let shoppingcart = document.getElementById("mainsc2");
let submitted = document.getElementById("submitted");
const opensc = document.getElementById("open")
const closesc = document.getElementById("close")
const closesub = document.getElementById("closesub")

let countW = 0
let countM = 0
let countC = 0
let countPe = 0
let countG = 0
let countPa = 0

let strengW = ""
let strengM = ""
let strengC = ""
let strengPe = ""
let strengG = ""
let strengPa = ""

// hardkoding av knappene i store (ja jeg vet det er ueffektivt:))
wClothes.addEventListener("click", function() {
  totalsum += 9990
  countW += 1
  strengW = `<li> ` + countW + `xProduct: Clothes (fitted for women)</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengW + strengPe + strengG + strengPa + strengC + strengM
})

mClothes.addEventListener("click", function() {
  totalsum += 9990
  countM += 1
  strengM = `<li> ` + countM + `xProduct: Clothes (fitted for men)</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengM + strengPe + strengPa + strengG + strengC + strengW
})

cClothes.addEventListener("click", function() {
  totalsum += 4900
  countC += 1
  strengC = `<li> ` + countC + `xProduct: Clothes (children)</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengC + strengPe + strengPa + strengG + strengM + strengW
})

pen.addEventListener("click", function() {
  totalsum += 49
  countPe += 1
  strengPe = `<li> ` + countPe + `xProduct: Pen-recorder</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengPe + strengPa + strengG + strengC + strengM + strengW
})

parfume.addEventListener("click", function() {
  totalsum += 1500
  countPa += 1
  strengPa = `<li> ` + countPa + `xProduct: Toxic Parfume</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengPa + strengPe + strengG + strengC + strengM + strengW
})

glasses.addEventListener("click", function() {
  totalsum += 990
  countG += 1
  strengG = `<li> ` + countG + `xProduct: Camera-glasses</li><br>`
  summen.innerHTML = totalsum
  lstProducts.innerHTML = strengG + strengPe + strengPa + strengC + strengM + strengW
})

function openCart() {
    mainSC.style.width = "50%";
    mainSC.style.height = "495px";
    mainSC.style.display = "block"
    mainSC.style.position = "fixed"
    mainSC.style.top = "100px";
    shoppingcart.style.display = "flex"
  }

  
function closeCart() {
  mainSC.style.display = "none"

}

function closeSub() {
  submitted.style.display = "none"
  mainSC.style.display = "none"
}

opensc.addEventListener("click", function() {
  openCart()
})

closesc.addEventListener("click", function() {
  closeCart()
})

closesub.addEventListener("click", function() {
  closeSub()
})

// funksjon for å sende skjema
submit.addEventListener("click", function(event){
    event.preventDefault()
    shoppingcart.style.display = "none";
    submitted.style.display = "block";
});