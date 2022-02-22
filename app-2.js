
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
 