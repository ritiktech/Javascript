let arr =[10,20,30,40,50,9800,90,70];
let arrlenght = arr.length;


function largest(arr){
       let arrs = arr.sort();
        return arrs;
        // return arr[arrlenght-1];
}


const result = largest(arr);

console.log(result);