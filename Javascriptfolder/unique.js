let arry = [1, 2, 2, 3, 3, 4, 4, 7, 6, 6, 8, 9];
let data = [];

// let updatedata = [...new Set(arry)];

// let data = updatedata.indexOf(8);


for (let i = 0; i < arry.length; i++) {
    if (arry[i] !== arry[i + 1]) {
        data.push(arry[i]);
    }
}



// console.log(updatedata);
console.log(data);










