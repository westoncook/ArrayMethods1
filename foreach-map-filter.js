/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach((a)=>{
        newArr.push(a*2)
    })
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/
function onlyEvenValues(arr){
    return arr.filter((a)=>{
        return a % 2 === 0;
    })
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

*/
function showFirstAndLast(arr){
    return arr.map((a)=>{
        return `${a[0]}${a[a.length - 1]}`;
    })
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
*/
function addKeyAndValue(arr,key,value){
    return arr.map((obj)=>{
        obj[key] = value;
        return obj;
    })
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(str){
    let s = Array.from(str.toLowerCase());
    let vowels = 'aeiou';
    let obj = {};
    s.map((char)=>{
        if(vowels.indexOf(char) >= 0){
            if (obj[char]){
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
        }
    })
    return obj
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

function doubleValuesWithMap(arr) {
    return arr.map((a)=>{
        return a*2;
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/

function valTimesIndex(arr){
    return arr.map((a,i)=>{
        return a*i;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/

function extractKey(arr, key){
    return arr.map((a)=>{
        return a[key];
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map((a)=>{
        return `${a.first} ${a.last}`
    })
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/

function filterByValue(arr, key) {
    return arr.filter((a)=>{
        return a[key];
    })
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/

function find(arr, searchValue) {
    let found = arr.filter((a)=>{
        return a === searchValue;
    })
    return found[0]
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
*/

function findInObj(arr, key, searchValue) {
    let foundObjs = arr.filter((a)=>{
        return a[key] === searchValue;
    })
    return foundObjs[0]
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/

function removeVowels(str) {
    let s = Array.from(str.toLowerCase());
    let noVowels = s.filter((a)=>{
        return 'aeiou'.indexOf(a) === -1
    })
    let noVowelStr = '';
    for (let char of noVowels){
        noVowelStr += char;
    }
    return noVowelStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
*/

function doubleOddNumbers(arr) {
    return arr.filter((a)=>{
        return a % 2 !== 0;
    }).map((a)=>{
        return a * 2
    })
}
