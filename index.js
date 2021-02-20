function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1200;
    }
    if (product == 'case') {
        productTotal = productNewCount * 50;
    }
    document.getElementById(product + "-total").innerText = "$" + productTotal;
    calculateTotal();
}
function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue('case');
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);

    // const caseInput = document.getElementById("case-count");
    // const caseCount = parseInt(caseInput.value);
    

    const totalPrice = phoneCount * 1200 + caseCount * 50;
    document.getElementById("total-price").innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-total").innerText = "$" + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}
function getInputValue(product){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}





// document.getElementById("case-increase").addEventListener("click", function () {
//     handleProductChange(true);
// })
// document.getElementById("case-decrease").addEventListener("click", function () {
//     handleProductChange(false);
// })


// function handlePhonePrice(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById("phone-price").innerText = "$" + phonePrice;
// }



                        // ****without function code****

                            //For phone 
// document.getElementById("phone-increase").addEventListener("click", function () {
// const phoneInput = document.getElementById("phone-count");
// const phoneCount = parseInt(phoneInput.value);
// const phoneNewCount = phoneCount + 1;
// phoneInput.value = phoneNewCount;
// const phonePrice = phoneNewCount * 1219;
// document.getElementById("phone-price").innerText = "$" + phonePrice;
// })
// document.getElementById("phone-decrease").addEventListener("click", function () {
// const phoneInput = document.getElementById("phone-count");
// const phoneCount = parseInt(phoneInput.value);
// const phoneNewCount = phoneCount - 1;
// phoneInput.value = phoneNewCount;
// const phonePrice = phoneNewCount * 1219;
// document.getElementById("phone-price").innerText = "$" + phonePrice;
// )}

                            // For case                           
// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = '$' + caseTotal;
// })
// document.getElementById("case-decrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;
// })