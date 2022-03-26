// // const names=['John','sam','Peter'];
// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length-1]);

const names=['John','Sam','Peter'];
//methods of array
names.push('suresh');
console.log('After push:'+names);
//push will add the item at the end

//... is called as the spread operator
// it represents the entire items in the array
const names2=[...names,'Raj'];
console.log('name2:'+names2);

names.unshift('poppy');
console.log('unshift:'+names);//unsift adds  data in front ,so the index of the res of values will change now

const names3=['raj',...names];
console.log(names3);//this will add data at the beginning


//next method slice()
const bikes=['bianchi','miele','panasonic','miyata','RE'];
const b1=[...bikes.slice(0,2)];
console.log(b1);
//slice takes two parameters
//from ,to
//it copied the values from index 0 and assigned to b1


const b2=[...bikes.slice(3)];
console.log(b2);//from 3rd index

const newBikes=[
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes:'+newBikes);
// above code : index 0 and 1 values from bikes is copied using slice (0,2)method.The 1st 2 values are copied,
//in the second index value 'benotto' is pushed '
//the from third index again values from bikes is copied using slice(2)-the values from the 2 index of bikes are copied.


const newBikes2=[
    ...newBikes.slice(0,2),
    ...newBikes.slice(4)
];
console.log('newBikes2:'+newBikes2);

const indexOfSam=names.findIndex(names => names ==='Sam');
console.log('IndexOfSam:'+ indexOfSam);// gives the indexvalue until unshift opearation.

//below: func to delete a name from array
function deleteName(Peter,names){
    const indexOfPeter=names.findIndex(names => names ==='Peter');
    console.log('IndexOfPeter:'+ indexOfPeter);
    const newarray=[
        ...names.slice(0,indexOfPeter),
        ...names.slice(indexOfPeter+1)
    ];
    return newarray;
// console.log('newarray:'+newarray);
};
const deletedNames=deleteName('Peter',names);
console.log('After delete:'+deletedNames);
console.log('Before delete'+names);
// deleteName('Peter');

const numbers=[1,2,3,4,5,6,7,8,9];
/*
console.log(numbers);
// numbers.splice(3,2);//from 3rd index delete the NEXT TWO VALUES
//(method) Array<number>.splice(start: number,deletecount?:number)
//mutation method-modifies/deletes the value in the source array
// console.log(numbers);
//splice(staring index from where the value to be  deleted, number of values to be deleted)
//the value in numbers are modofied/deleted
const pizzaSlice=numbers.slice(4,9);//start and end index
//(method) Array<number>.slice(start?:number,end?:number):
//immutable method-does not changes the source array
console.log('pizzaSlices:'+pizzaSlice);
console.log('original Numbers:'+numbers);
*/
numbers.reverse();
console.log(numbers);
//anytime you want to use a mutation method and NOT mutate the original array
//above code is mutable that is changes the source array
//so we need to take a copy of array
//so follow below code
const numberReversed=[...numbers].reverse();
console.log(numberReversed);
