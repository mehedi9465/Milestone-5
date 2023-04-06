// Event Listeners
document.getElementById('memory-Btn').addEventListener('click', function(event){
    setPrice(event.target.innerText);
    const allPrices = getPrice(memory, storage, delivery);
    updateTotalPrice(allPrices);
});

document.getElementById('storage-Btn').addEventListener('click', function(event){
    setPrice(event.target.innerText);
    const allPrices = getPrice(memory, storage, delivery);
    updateTotalPrice(allPrices);
});

document.getElementById('delivery-Btn').addEventListener('click', function(event){
    setPrice(event.target.innerText);
    const allPrices = getPrice(memory, storage, delivery);
    updateTotalPrice(allPrices);
});

document.getElementById('pomo-Btn').addEventListener('click', function(){
    applyPomo();
});


// Components
const memory = document.getElementById('memory-Cost');
const storage = document.getElementById('storage-Cost');
const delivery = document.getElementById('delivery-Cost');
const totalPrice = document.getElementById('total-Cost');
const payablePrice = document.getElementById('footerComponentPrice');


// Functions
function setPrice(customize){
    
    if (!customize.localeCompare(document.getElementById('8GB-Btn').innerText)) {
        document.getElementById('memory').innerText = '8GB';
        memory.innerText = '0';
    } 

    else if (!customize.localeCompare(document.getElementById('16GB-Btn').innerText)) {
        document.getElementById('memory').innerText = '16GB';
        memory.innerText = '180';
    } 

    else if (!customize.localeCompare(document.getElementById('256GB-Btn').innerText)) {
        document.getElementById('storage').innerText = '256GB';
        storage.innerText = '0';
    } 

    else if (!customize.localeCompare(document.getElementById('512GB-Btn').innerText)) {
        console.log(!customize.localeCompare(document.getElementById('512GB-Btn').innerText));
        document.getElementById('storage').innerText = '512GB';
        storage.innerText = '100';
    } 

    else if (!customize.localeCompare(document.getElementById('1TB-Btn').innerText)) {
        document.getElementById('storage').innerText = '1TB'
        storage.innerText = '180';
    } 

    else if (!customize.localeCompare(document.getElementById('aug25-Btn').innerText)) {
        delivery.innerText = '0';
    } 
    
    else {
        delivery.innerText = '20'
    }
}

function updateTotalPrice(allPrices){
    let finalCost = 1299;
    for(const price of allPrices){
        finalCost = finalCost + price;
    }
    totalPrice.innerText = finalCost;
    payablePrice.innerText = finalCost
}

function getPrice(memory, storage, delivery){
    let cost = []; 
    cost.push(parseFloat(memory.innerText));
    cost.push(parseFloat(storage.innerText));
    cost.push(parseFloat(delivery.innerText));
    return cost;
}

function applyPomo(){
    const pomoCode = document.getElementById('pomo').value;
    let discount = 0;
    if(pomoCode.localeCompare(' ') == -1){
        alert('Please insert a pomo code');
        document.getElementById('pomo').value = '';
    }
    else if(!pomoCode.localeCompare('stevekaku')){
        discount = (20 / 100) * parseFloat(payablePrice.innerText);
        document.getElementById('pomo').value = '';
        document.getElementById('pomo-Btn').setAttribute('disabled', true);
    }

    else{
        alert('Invalid pomo code');
        document.getElementById('pomo').value = '';
    }
    payablePrice.innerText = parseFloat(payablePrice.innerText) - discount;

}


