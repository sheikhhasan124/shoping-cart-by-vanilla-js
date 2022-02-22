
function updateProductNumber(product,price, isIncreasing){
    let caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    
if(isIncreasing == true){
    caseNumber = parseInt(caseNumber) + 1;
}else if(caseNumber>0){
    caseNumber = parseInt(caseNumber) - 1;
}
caseInput.value = caseNumber;
// update total
let caseTotal = document.getElementById(product + '-total');
caseTotal.innerHTML = caseNumber * price;
calculateTotal()
}
function getInputValue(product){
    let productInput = document.getElementById(product +'-number');
    let productTotal = parseInt(productInput.value);
    return productTotal
   
    
}

function calculateTotal(){
  let phoenTotal = getInputValue('phone') * 1219;
  let caseTotal =  getInputValue('case')  * 69;
    let subTotal = phoenTotal + caseTotal;
    let tax = subTotal/10;
    let total = subTotal + tax;
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = total;
    
}

// updat mobile  
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber( 'phone',1219, true)
 })
 document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false)
 })

 // updat mobile casing 
 document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',59, true)
 })
 document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',59, false)
 })
 