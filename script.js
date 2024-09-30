const arr = [
  { id: 1, name: "apple", price: 700, quentity: 2 },
  { id: 2, name: "orange", price: 800, quentity: 3 },
  { id: 3, name: "banana", price: 900, quentity: 5 },
];

console.log(arr);
 const addPrice =arr.map((v)=>{
    return(
        v.price
    )
} )

console.log(addPrice)

let s = 0;

for(let i = 0; i< addPrice.length; i++){
    s= s+ addPrice[i];
    
}

console.log("ss",s)

if(s > 1500){
    console.log(`There is offer. If price is more than 1500 than its cost is only 1500`)
}else{
    console.log("No offer")
}