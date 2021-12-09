const array1 = ["alma", "körte", "banán"];
const array2 = ["barack", "szilva", "szőlő"];

//arr is módosul
function addValueToEndOfArray(arr, val) {
    arr.push(val);
    return arr;
} 

//Copy
function addValueToEndOfNewArray(arr, val){
    const newArray = [];
    for (const i of arr) {
        newArray.push(i);
    }
    newArray.push(val);
    return newArray;
}

//Rövidebb copy -> Shallow
function addValueToEndOfNewArray2(arr, val){
    /*
    const newArray = [...arr];
    newArray.push(val);
    return newArray;
    */
    return [...arr, val]; 
}

//console.log(addValueToEndOfArray(array2, "dió"));
//console.log(array2)

//console.log(addValueToEndOfNewArray(array2, "dió"));
//console.log(array2)

//console.log(addValueToEndOfNewArray2(array2, "dió"));
//console.log(array2)

function addNewArray(arr1, arr2){
    /*
    for (const item of arr2) {
        arr1.push(item);
    }
    return arr1;
    */
   //return [...arr1,...arr2];
   return arr1.concat(arr2);
}

//console.log(addNewArray(array1,array2));
//console.log(array1)

const array3 = [
    {
        name:"Garfield",
        type:"cat"
    },
    {
        name:"Ubul",
        type:"dog"
    }
];

function filterTheCat(creatures){
    /*
    const cats = [];
    for (const animal of creatures) {
        if (animal.type === "cat"){
            animal.note = "This is an amazing cat";
            cats.push(animal);
        }
    }
    return cats;
    */

    /*
   const result = creatures.filter(animal => {
       if (animal.type === "cat"){
           //const newAnimal = JSON.parse(JSON.stringify(animal));
           //newAnimal["note"] = "This is an amazing cat";  
           return true;     //callback true vagy false -ra fordul le, azért nem lehet módosítani
        }
    } );
    //result[0].note = "This is my amazing cat";
    */

    /*
    const result = creatures.map(creature => {
        if (creature.type === "cat") {
            //const newCreature = {...creature, note: "This is an amazing cat"};
            //newCreature.note = "This is an amazing cat";
            //return newCreature;
            return {...creature, note: "This is an amazing cat"};
        }
    }).filter(creature => creature);
    */
    return creatures.map(creature => creature.type === "cat" ? {...creature, note: "This is an amazing cat"} : undefined).filter(creature => creature);

}

console.log(filterTheCat(array3));
console.log(array3);


/*

//COPY

let a = 1;
let b = a;

a = 2;
console.log("a:",a," b:",b );

//Objektum másolás: ugyanoda mutat
let c = {key: 1};

console.log({} === {})
let e = {key: 1};
console.log(c === e)

let d = c;
c.key = 2;
console.log("c:",c," d:",d );
d.key = 3;
console.log("c:",c," d:",d );


console.log("alma" === "alma");

//Shallow Copy
let f = {...c}; //spread operator -> csak a tartalmat másolja
c.key = 2;
console.log("c:",c," f:",f );


//SHALLOW COPY - csak az első réteg másolodik, subkey ugyanoda mutatnak
//Object Assign 
let f2 = Object.assign({},c);
console.log("c:",c," f2:",f2 );

let c2 = {
    key:1,
    key2: {
        subkey:2
    }
}

let g = c2.key2;

let f3 = Object.assign({},c2);
c2.key = 2;
c2.key2.subkey=5;
f3.key = 3;
f3.key2.subkey = 6;
g.subkey=8;
console.log("c2:",c2," f2:",f2, " g:",g );

//DEEP COPY
let c3 = {
    key:1,
    key2: {
        subkey:2
    }
}

let g2 = c3.key2;
let f4 = JSON.parse(JSON.stringify(c));
c3.key = 2;
c3.key2.subkey=5;
f3.key = 3;
f3.key2.subkey = 6;
g.subkey=8;
console.log("c3:",c3," f2:",f2, " g2:",g2 );

*/











