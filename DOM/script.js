

document.getElementById('fire').addEventListener('click', function(){
  console.log("Hello", arr1, arr2, arr3)
  ButtonProcession(arr1, arr2, arr3)
  console.log("Hello", arr1, arr2, arr3)
})

let arr1 = document.getElementById('container1').childNodes
let arr2 = document.getElementById('container2').childNodes
let arr3 = document.getElementById('container3').childNodes

const ButtonProcession = (arr1, arr2, arr3) => {
    let con1 = arr1.pop();
    let con2 = arr2.pop();

    arr2.push(con1)
    arr3.push(con2)

    let con3 = arr2.shift()
    let con4 = arr3.shift()

    arr1.unshift(con3)
    arr2.unshift(con4)
}

