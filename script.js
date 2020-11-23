// .toFixed() fraction digits - kiek skaiciu lieka po kablelio 
// .shift() istraukia pirma elementa is ARRAY ir ji panaikina jame
// .pop() istraukia paskutini elementa is ARRAY duomenu masyvo ir ji panaikina jame
// .push() prideda elementa duomenu masyvo pabaigoje
// .unshift() prideda elemnta duomenu masyvo pradzioje
// || bent viena salyga turi buti true - atsakymas true
// && visos salygos turi buti true, jei nors viena salyga yra false - atsakymas false
// !! patikrina, ar yra contento viduje


//SYUPX-6LLWH-WD9B2-BD3EX-5DUGR 






////////////2020.10.26////////////////////
/*

// Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one that ends in "s".

function isPlural(plural){
    if(plural[plural.length -1] ==='s'){
        console.log('Plural')
    } else{
        console.log('Singular')
    }
}

isPlural("changes")
isPlural("change")
isPlural("dudes")
isPlural("magic")

////////////////////////////////

// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(randomName){
    if(randomName[randomName.length-1] === 'n'){
        return true
    } else {
        return false
    }
}
console.log(isLastCharacterN("Aiden"))
console.log(isLastCharacterN("Piet"))
console.log(isLastCharacterN("Bert"))
console.log(isLastCharacterN("Dean"))


// A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.

 function carsNeeded(people){
     return Math.ceil(people / 5)
 }

console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))


// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr, string){
    return arr.indexOf(string)
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
console.log(findIndex(["a", "g", "y", "d"], "d"))
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))


// Write a function to check if an array contains a particular number.
// use .includes() method on array to check if it has particular value inside

function check(arr1, numero){
    return arr1.includes(numero)
} 

console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))
 
// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.

function search(arr2, numbero){
    if(arr2.includes(numbero)){
        return arr2.indexOf(numbero)
    } else{
        return "-1"
    }
} 

console.log(search([1, 2, 3, 4], 3))
console.log(search([2, 4, 6, 8, 10], 8))
console.log(search([1, 3, 5, 7, 9], 11))

// Create a function that returns true if a string contains any spaces.

 function hasSpaces(text){
     if(text.includes(" ")){
         return true
     } else {
         return false
     }
 }
  

 console.log(hasSpaces("hello"))
 console.log(hasSpaces("hello, world"))
 console.log(hasSpaces(" "))
 console.log(hasSpaces(""))
 console.log(hasSpaces(",./!@#"))

// Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

 function hasSameBread(arrA,arrB){
     if(arrA[0]===arrA[arrA.length-1] && arrB[0]===arrB[arrB.length-1] && arrA[0]===arrB[0] && arrA[arrA.length-1]===arrB[arrB.length-1]){
         return 'Valgoma'
     } else {
         return 'Nevalgoma'
     }
 }

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
))

 

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
))

 

console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
))

//Creates a function that takes a string and returns the concatenated first and last character.

function firstLast(letters){
    return `${letters[0]}${letters[letters.length-1]}`
} 

console.log(firstLast("ganesh"))
console.log(firstLast("kali"))
console.log(firstLast("shiva"))
console.log(firstLast("vishnu"))
console.log(firstLast("durga"))


///Write a function that stutters a word as if someone is
///struggling to read it. The first two letters are
///repeated twice with an ellipsis ...
///and space after each, and then the word is pronounced with a question mark ?.


function stutter(wordToStutter){
    return console.log(`${wordToStutter[0]}${wordToStutter[1]}... ${wordToStutter[0]}${wordToStutter[1]}... ${wordToStutter}?`)
}

stutter("incredible")// ➞ "in... in... incredible?"
stutter("enthusiastic")// ➞ "en... en... enthusiastic?"
stutter("outstanding")// ➞ "ou... ou... outstanding?"






*/





////////////2020.10.27//////////

/*


// create for loop with 30 cycles, on each iteration check if
// for loop index is more than 20 if yes, console log "cycle index is (CYCLE ID)"

for (x = 0; x < 30; x++){
    if(x > 20){
        console.log(`Cycle index is ${x}`)
    }
}


// go through array with for loop and flip booleans to opposite value

let arrayOfBooleans = [true, false, false, true, true, true, false]

for (x = 0; x < arrayOfBooleans.length; x++){
    arrayOfBooleans[x] = !arrayOfBooleans[x]
}
console.log(arrayOfBooleans)


// goe through array with for loop, if string is 'black mamba' console log
// "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"

let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']

for(x = 0; x < getIndex.length; x++){
    if(getIndex[x] === 'black mamba'){
        console.log(`${getIndex[x]} is ${x} in array, and is one of the most poisonous snakes`)
    }
}


// create a functions which accepts array data as an argument,
// loops over all items in array and console logs each of them

let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']

function asilas(arr){
    for (x=0; x < arr.length; x++){
        console.log(arr[x])
    }
}

asilas(arrayOfStrings)




// in function loop over numbers in array multiply each by 3
// console log answer

let arrayOfNumbers = [1, 2, 3, 4, 5, 6,7,8,9]

function idioto(numbero){
    for (x = 0; x < numbero.length; x++){
        arrayOfNumbers[x] = arrayOfNumbers[x] * 3
    }
}
idioto(arrayOfNumbers)
console.log(arrayOfNumbers)

// create function do this in it: 
// with single for loop removes items from wagonsWIthCoal
// and append them to wagonsOfGasoline after this done
// check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// do the same with gasolineCargo key
// console log modified object

let freightTrain = {
    wagonsWithCoal: [1,2,3,4,5],
    coalCargo: true,
    wagonsOfGasoline: [],
    gasolineCargo: false
}

function aasile(){
    let len = freightTrain.wagonsWithCoal.length
    for (x = 0; x < len; x++){
        freightTrain.wagonsOfGasoline.push(freightTrain.wagonsWithCoal.pop())
    }
    if(freightTrain.wagonsWithCoal < 1){
        freightTrain.coalCargo = !freightTrain.coalCargo
        freightTrain.gasolineCargo = !freightTrain.gasolineCargo
    }
    console.log(freightTrain)
}
aasile()



// crete a function which takes textObject.arrayWithWords as an argument
// goe through array with words using for loop
// take first letter of each word and add to aWord key in textObject
// console log aWord key after all is done

 

let textObject = {
    arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
    aWord: ''
}

function lastOne(wordsArr){
    for(x = 0; x < wordsArr.length; x++){
        textObject.aWord += wordsArr[x][0] 
    }
}

lastOne(textObject.arrayWithWords)

console.log(textObject.aWord)
*/

/*
// check if stringVariable includes word 'doing' if yes create a function
// which takes stringVariable as an argument and counts how many spaces it has
// call that function

let stringVariable = "Hello people, how are you doing ?"

if(stringVariable.includes('doing')){
    function funk1(space){
        let tarpas = 0
        for(x=0; x < space.length; x++){
            if(space[x] === ' '){
                tarpas++
            }
        }
        console.log(tarpas)
    }
    funk1(stringVariable)
}


////////////////////////////////////////////
 

// create function which takes objectWithKeys as argument ant check which key includes
// word 'actually' in array, make function to return string "{key name} has actually in array"

let objectWithKeys = {
    firstOne: ['hi', 'what', 'is', 'good'],
    second: ['im', 'doing', 'pretty', 'well'],
    third: ['me', 'too', 'actually']
}
 
function funk(arg, name){
    if(arg.includes('actually')){
        return console.log(`${name} has actually in array`)
    }
}
funk(objectWithKeys.firstOne, 'firstOne')
funk(objectWithKeys.second, 'second')
funk(objectWithKeys.third, 'third')
////////////////////////////////////////
 
 

// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.
*/
/*

Person              Relation

Darth Vader         father
Leia                sister
Han                 brother in law
R2D2                droid

*/

/*
function relationToLuke(name){
    let say;
    if(name === 'Darth Vader'){
        say = 'father'
    }
    if(name === 'Leia'){
        say = 'sister'
    }
    if(name === 'Han'){
        say = 'brother in law'
    }
    if(name === 'R2D2'){
        say = 'droid'
    }
    console.log('Luke, i am Your '+ say)
}


relationToLuke("Darth Vader")   //➞ "Luke, I am your father."
relationToLuke("Leia")          //➞ "Luke, I am your sister."
relationToLuke("Han")           //➞ "Luke, I am your brother in law."
relationToLuke("R2D2")

///////////////////////////////////////////////////


// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr){
    for(let x = 0; x < arr.length; x++){
        arr[x] = arr[x] * 2;
    } console.log(arr)
} 

getMultipliedArr([2, 5, 3]) //➞ [4, 10, 6]
getMultipliedArr([1, 86, -5]) //➞ [2, 172, -10]
getMultipliedArr([5, 382, 0]) //➞ [10, 764, 0]
 
///////////////////////////////////////////////
 

// Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(howLong){
    for (let x = 0; x < howLong.length; x++){
        howLong[x] = howLong[x].length
    } console.log(howLong)
}


wordLengths(["hello", "world"]) //➞ [5, 5]
wordLengths(["Halloween", "Thanksgiving", "Christmas"]) //➞ [9, 12, 9]
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) //➞ [3, 5, 9, 4, 2, 3, 8]
 
/////////////////////////////////////////////
 

// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.

 function longBurp(manyR){
     let r = ''
     for (x = 0; x < manyR; x++){
         r+= 'r'
     } console.log(`Bu${r}p`)
 }

longBurp(3) //➞ "Burrrp"
longBurp(5) //➞ "Burrrrrp"
longBurp(9) //➞ "Burrrrrrrrrp"
 
////////////////////////////////////////////
 

// Create a function that takes a number and return an array
// of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(numero){
    let arr = []
    arr.push(numero/2)
    arr.push(numero/4)
    arr.push(numero/8)
    console.log(arr)
} 


halfQuarterEighth(6) //➞ [3, 1.5, 0.75]
halfQuarterEighth(22) //➞ [11, 5.5, 2.75]
halfQuarterEighth(25) //➞ [12.5, 6.25, 3.125]
 
//////////////////////////////////////////
 

// Create a function that takes a string and returns a string with spaces in between all of the characters.

 function spaceMeOut(argumento){
     let name = ''
     for(x=0; x<argumento.length; x++){
        name+= argumento[x] + ' '
     }console.log(name)
 } 

spaceMeOut("space") //➞ "s p a c e"
spaceMeOut("far out") //➞ "f a r  o u t"
spaceMeOut("elongated musk") //➞ "e l o n g a t e d   m u s k"
 
/////////////////////////////////////////
 

// Create a function that takes an array and returns the sum of all numbers in the array.

 function getSumOfItems(skaicius){
     let sum = 0
     for(x = 0; x < skaicius.length; x++){
        sum+=skaicius[x]
     } console.log(sum)
     
 }

getSumOfItems([2, 7, 4]) //➞ 13
getSumOfItems([45, 3, 0]) //➞ 48
getSumOfItems([-2, 84, 23]) //➞ 105
 



//////////////////////////////////////////////
 

// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).

function isInRange(num, range){
    if(range.min <= num && num <= range.max){
        return console.log(true)
    } else {
        return console.log(false);
    }
}


isInRange(4, { min: 0, max: 5 }) //➞ true
isInRange(4, { min: 4, max: 5 }) //➞ true
isInRange(4, { min: 6, max: 10 }) //➞ false
isInRange(5, { min: 5, max: 5 }) //➞ true

*/

/*

////////////////2020.10.28///////////

///Create a function which returns the length of a string, WITHOUT using String.length property.

length("Hello World") //➞ 11

length("Edabit") //➞ 6

length("wash your hands!") //➞ 16

function length(string){
    let short = 0
    for(let x = 0; x < string.length; x++){
        short++
    } 
    console.log(short)
} 

// Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):

//"one" 1
//"two" 2
//"three" 3
//"four" 4
//"five" 5
//"six" 6
//"seven" 7
//"eight" 8
//"nine" 9
//"zero" 0

function word(num){
    let answ = null
    num === "one" ? answ = 1 : null
    num === "two" ? answ = 2 : null
    num === "three" ? answ = 3 : null
    num === "four" ? answ = 4 : null
    num === "five" ? answ = 5 : null
    num === "six" ? answ = 6 : null
    num === "seven" ? answ = 7 : null
    num === "eight" ? answ = 8 : null
    num === "nine" ? answ = 9 : null
    num === "zero" ? answ = 0 : null
    console.log(answ)
} 


word("one") //➞ 1

word("two") //➞ 2

word("nine") //➞ 9




//Create a function that returns an array of booleans from a given number by iterating through the
//number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(num2){
    let myArr = []
    for(let x = 0; x < num2.length; x++){
        if(num2[x] === '1'){
            myArr.push('true')
        } else {
            myArr.push('false')
        }
    }console.log(myArr)
}

integerBoolean("100101") //➞ [true, false, false, true, false, true]

integerBoolean("10") //➞ [true, false]
 
integerBoolean("001") //➞ [false, false, true]





//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arg1){
    let myArr2 = []
    for(let x = 0; x < arg1.length; x++){
        if(typeof arg1[x] === 'number'){
            myArr2.push(arg1[x])
        }
    }console.log(myArr2)
}


filterArray([1, 2, 3, "a", "b", 4]) //➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]

filterArray(["Nothing", "here"]) //➞ []





// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num3){
    let kintamasis = ''
    for(let x = 0; x < num3; x++){
        kintamasis += '-' 
    }console.log(kintamasis)
}

Go(1) //➞ "-"

Go(5) //➞ "-----"

Go(3) //➞ "---"





// Create a function that adds a string ending to each member in an array.

function addEnding(wordTo, ending){
    for(let x = 0; x < wordTo.length; x++){
        wordTo[x]+= ending
    }
    console.log(wordTo)
} 

addEnding(["clever", "meek", "hurried", "nice"], "ly")

 //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")

 //➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")

 //➞ ["bending", "sharpening", "meaning"]

/////////////////////////





//Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr4){
    for( let x = 0; x < arr4.length; x++){
        arr4[x] =arr4[x] * arr4.length
    }
    console.log(arr4)
}

multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]
multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞ [7, 0, 21, 21, 49, 14, 7]
multiplyByLength([0]) //➞ ([0])





// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(num5){
    let numArr = [];
    let newNum = num5
    for (let x = 0; x <= num5; x++) {
      numArr.push(newNum--) 
    }
    console.log(numArr)
}

countdown(5) //➞ [5, 4, 3, 2, 1, 0]
countdown(1) //➞ [1, 0]
countdown(0) //➞ [0]

*/
///////////////

// Create a function that takes two arguments (item, times). The first argument (item) is the item

// that needs repeating while the second argument (times) is the number of times the item is

// to be repeated. Return the result in an array.

// function repeat(item, times){
//     let myArray = []
//         for(let x = 0; x <= times; x++){
//              myArray.push(item)
//     }
//    console.log(myArray)
// }

// repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]
// repeat(13, 5) //➞ [13, 13, 13, 13, 13]
// repeat("7", 2) //➞ ["7", "7"]
// repeat(0, 0) //➞ []





//In this exercise you will have to:
//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(nameArr){
//     let hello = ''
//     for (let x = 0; x < nameArr.length; x++) {
//          hello += 'Hello ' + nameArr[x]   
//          if(x!==nameArr.length-1){
//              hello += ', '
//          }    
//     }
//     console.log(hello)
// }

// greetPeople(["Joe"]) //➞ "Hello Joe"
// greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
// greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"




// // Create a function that repeats each character in a string n times.


// function repeat(word, count){
//     let string = ''

//     for (let i = 0; i < word.length; i++) {
//         word[i]
        
//         for (let j = 0; j < count; j++) {
//             string += word[i]
            
//         }

//     }
//     console.log(string)
// }

// repeat("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
// repeat("hello", 3) //➞ "hhheeellllllooo"
// repeat("stop", 1) //➞ "stop"














//////////////////////////////////////////////////////////////////////////////////////////   
////////////////////////////////////////////////////////////////////////////////////////// 









//Create a function that takes in two arrays: the array of user-typed words,
 // and the array of correctly-typed words and outputs an array containing
 // 1s (correctly-typed words) and -1s (incorrectly-typed words).






// function correctStream(arr1, arr2){
//     let newArr = []

//     for (let i = 0; i < arr1.length; i++) {

//         arr1[i] === arr2[i] ? newArr.push(1) : newArr.push(-1) 

//     }    

//     console.log(newArr)
// }
     


// correctStream(

//     ["it", "is", "find"],
//     ["it", "is", "fine"]
//     ) //➞ [1, 1, -1]
   
   
// correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
//     ) //➞ [1, -1, 1, 1, 1]






//////////////////////////////////////////////////////////////////////////////////////////   
////////////////////////////////////////////////////////////////////////////////////////// 











// Create a function that filters out an array of state names into two categories 
//based on the second parameter.

// Abbreviations abb
// Full names full







// function filterStateNames(arr, parameter){

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
        
//         if (parameter === 'abb'){
//             if (arr[i].length = 2){
//                 newArr.push(arr[i])
//             }
//         }else {
//             if (arr[i].length >2){
//                 newArr.push(arr[i])
//             }
            
//         }
          
//     }
//      console.log(newArr)   
//  }




 
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")

// //➞ ["CA", "NY"]


// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")

// //➞ ["Arizona", "Nevada"]


// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")

// //➞ ["MT", "NJ", "TX", "ID", "IL"]


// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")

// //➞ []









////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////




















// Hamming distance is the number of characters that differ between two strings.


//To illustrate:

//String1: "abcbba"

//String2: "abcbda"


//Hamming Distance: 1 - "b" vs. "d" is the only difference.

//Create a function that computes the hamming distance between two strings.






// function hammingDistance(string1, string2){

//     let distance = 0
    
//     for (let i = 0; i < string1.length; i++) {
//            string1[i] === string2[i] ? null : distance++
           
//     }
//     console.log(distance)
// }
    



// hammingDistance("abcde", "bcdef") // ➞ 5



// hammingDistance("abcde", "abcde") // ➞ 0



// hammingDistance("strong", "strung") // ➞ 1









////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////








// //Given a string of letters, how many capital letters are there?

// function capitalLetters(string){

//     let count = 0

//     for (let i = 0; i < string.length; i++) {
       
//         if( string[i] >= 'A' && string[i] <= 'Z'){
//             count++
//         }
        
//     }
//     console.log(count);
// }

// capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6



// capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14



// capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0






////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////






// Create a function that takes an array of strings and returns an array with
// only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.




// function numInStr(array){

//     let newArr = []

//     for (let i = 0; i < array.length; i++) {
      
//         if(/\d/.test(array[i]) === true ){
//             newArr.push(array[i])
//         }
        
//     }
//     console.log(newArr)
// }




// numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) //➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) //➞ ["test1"]







////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////





//Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.





// function jazzify(array){

//     let answer = array.map(item => {
//         if(item.includes('7')){
//             return item 
//         } else{
//             return item + '7'
//         }
//     })
   
//     console.log(answer)
// }




// jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) //➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) //➞ []







////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////











//An isogram is a word that has no duplicate letters. 
//Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".




// function isIsogram(string){
//     string = string.toUpperCase()
//     let letterArray = []
//     let boolion = true

//     for (let x = 0; x < string.length; x++){

//         if(letterArray.includes(string[x])){
//             boolion = false
//         }

//     letterArray.push(string[x])
//     }
//     console.log(boolion);
// }
 

// isIsogram("Algorism") // ➞ true

// isIsogram("PasSword") //➞ false
// // Not case sensitive.

// isIsogram("Consecutive") //➞ false







////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



 

// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.



// function reverseCase(string){

//     let answer = ``

//     for (let i = 0; i < string.length; i++) {
        
//         if(string[i] === string[i].toUpperCase()){
//             answer += string[i].toLowerCase()
//         } else {
//             answer += string[i].toUpperCase()
//         }
           
//     }
//     console.log(answer)
// }



// reverseCase("Happy Birthday") //➞ "hAPPY bIRTHDAY"

// reverseCase("MANY THANKS") //➞ "many thanks"

// reverseCase("sPoNtAnEoUs") //➞ "SpOnTaNeOuS"

 




////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
 








// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.





// function capMe(array){



//    let answer = array.map(item => {

//     let lowerCase = item.toLowerCase()

//     let firstLetter = lowerCase[0].toUpperCase() 

//     for (let i = 1; i < lowerCase.length; i++) {
       
//         firstLetter += lowerCase[i]
        
//     }
//     return firstLetter
//    }) 
//    console.log(answer)
// }

// capMe(["mavis", "senaida", "letty"]) //➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

 








////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.




// function flip(arg){

//     if(arg === 1){
//         console.log(0)
//     } else {
//          console.log(1)
//     }
//    
// }


// flip(1) //➞ 0

// flip(0) //➞ 1

 



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
 




// Create the function that takes an array with objects and returns the sum of people's budgets.



// function getBudgets(arr){

//     let sum = 0

//     arr.map(item => {
//         sum += item.budget
//     })
//     console.log(sum)
// }
 

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) //➞ 65700



// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) //➞ 62600

 



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////




 

// Create a function to check whether the given parameter is an Object or not.

//  function isObject(arg){

//     return console.log(!!arg)
// }

// isObject(function add(x,y) {return x + y}) //➞ true



// isObject(new RegExp("[a-zA-Z0-9]+$", "g")) //➞ true

 

// isObject(null) //➞ false

 

// isObject("") //➞ false



/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////










//Sam and Frodo need to be close. If they are side by side in the array, your
// function should return true. If there is a name between them, return false.





// function middleEarth(arr){

//     let sam = arr.indexOf("Sam") 

//     let frod = arr.indexOf("Frodo") 

//     if(sam - frod === 1 || sam - frod === -1){
//         return console.log(true)
//     } else {
//         return console.log(false)
//     }

// }
 

// middleEarth(["Frodo", "Sam", "Gandalf"]) //➞ true
// middleEarth(["Frodo", "Saruman", "Sam"]) //➞ false
// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) //➞ true2






///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
 
//To illustrate:
 


// function largestSwap(number){

//     let str = number.toString()

//     console.log(str[0] >= str[1] ? true : false);
// }


// largestSwap(27) //➞ false
 
// largestSwap(43) //➞ true
 
// // If 27 is our input, we should return false because swapping the 

//  //digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
 
// largestSwap(14) //➞ false
 
// largestSwap(53) //➞ true
 
// largestSwap(99) //➞ true







///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






// Create a function that takes an array of strings and returns the words that are exactly four letters.
 



// function isFourLetters(arr){

//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         if(arr[i].length == 4){
//             newArr.push(arr[i])
//         }
     
//     }
//     console.log(newArr)   
// }



// isFourLetters(["Tomato", "Potato", "Pair"]) // ➞ ["Pair"]
 
// isFourLetters(["Kangaroo", "Bear", "Fox"]) //➞ ["Bear"]
 
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) //➞ ["Ryan", "Matt"]
 
 



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////





// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.
 




// function dictionary(start, array){

//     let newArr = [];


//     array.map(word =>{
//         word.indexOf(start) === 0 ? newArr.push(word)
//     })      
//     console.log(newArr)
// }



// dictionary("bu", ["button", "breakfast", "border"]) //➞ ["button"]
 
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) //➞ ["triplet", "tries", trip"]
 
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) //➞ []







 

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
 












// Create a function that takes two parameters and, if both parameters are strings,

// add them as if they were integers or if the two parameters are integers, concatenate them.









// function stupidAddition(arg1,arg2){

//     let answer = ''

//     if(typeof arg1 === 'number' && typeof arg2 === 'number' ) {
//        return console.log(String(arg1) + String(arg2))
//     }
//     if(typeof arg1 === 'string' && typeof arg2 === 'string' ) {
//         return console.log(Number(arg1) + Number(arg2))
//     }   
//     return console.log(null);    

    

// }
 
// stupidAddition(1, 2) //➞ "12"
 
// stupidAddition("1", "2") //➞ 3
 
// stupidAddition("1", 2) //➞ null






///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////








// Create a function that changes specific words into emoticons. 
// Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

//smile    :D
//grin    :)
//sad    :(
//mad    :P


// function emotify(string){

//     let newString = 'Make me '
        
//     if(string.includes('smile')){
//          newString += ':D'
//     }
//     if(string.includes('grin')){
//         newString += ':)'
//     }
//     if(string.includes('sad')){
//         newString += ':('
//     }
//     console.log(newString)
// }


// emotify("Make me smile") //➞ "Make me :D"
// emotify("Make me grin") //➞ "Make me :)"
// emotify("Make me sad") //➞ "Make me :("

 






///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////






// Write a function that takes a string name and a number 
// num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.







// function sayHelloBye(name,num){

//     let newString = ''

//     if(num === 1){
//         newString += 'Hello ' + name
//     } else {
//         newString += 'Bye ' + name
//     }
//     console.log(newString)
// }



// sayHelloBye("alon", 1) //➞ "Hello Alon"
// sayHelloBye("Tomi", 0) //➞ "Bye Tomi"
// sayHelloBye("jose", 0) //➞ "Bye Jose"

 




/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

 




// Create a function that takes a number as an argument and returns
// true or false depending on whether the number is symmetrical or not. 
// A number is symmetrical when it is the same as its reverse.



// function isSymmetrical(num){

//     let str = num.toString()

//     let trigger = true

//     for (let i = 0; i < str.length ; i++) {
        
//         if(str[i] != str[str.length-i-1]){
//             trigger = false
//         } 
//     }
//     console.log(trigger)
// }

// isSymmetrical(7227) //➞ true
// isSymmetrical(12567) //➞ false
// isSymmetrical(44444444) //➞ true
// isSymmetrical(9939) //➞ false
// isSymmetrical(1112111) //➞ true

 






//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

 






// Arrays can be mixed with various types. Your task for this challenge 
// is to sum all the number elements in the given array. Create a function
// that takes an array and returns the sum of all numbers in the array.




// function numbersSum(arr){

//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
        
//         if(typeof arr[i] === 'number'){
//             sum += arr[i]
//         }
      
//     }
//     console.log(sum)
// }



// numbersSum([1, 2, "13", "4", "645"]) //➞ 3
// numbersSum([true, false, "123", "75"]) //➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) //➞ 15








//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////








// Create a function that takes an array of hurdle heights and a jumper's jump height,
// and determine whether or not the hurdler can clear all the hurdles.
//A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
 


// function hurdleJump(arr, howHigh){

//     let answer = true

//     for (let i = 0; i < arr.length; i++) {
    
//         if(arr[i] > howHigh){
//             answer = false
//         } 

//     }
//   console.log(answer)
// }


// hurdleJump([1, 2, 3, 4, 5], 5) //➞ true
// hurdleJump([5, 5, 3, 4, 5], 3) //➞ false
// hurdleJump([5, 4, 5, 6], 10) //➞ true
// hurdleJump([1, 2, 1], 1) //➞ false
 








///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






 
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 


// function hackerSpeak(string){

//     string = string.replace(/a/g, '4')
//     string = string.replace(/i/g, '1')
//     string = string.replace(/o/g, '0')
//     string = string.replace(/e/g, '3')
//     string = string.replace(/s/g, '5')

//     console.log(string)
// }


// hackerSpeak("javascript is cool") //➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") //➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") //➞ "b3c0m3 4 c0d3r"




 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 





// Create a function that takes in a year and returns the correct century.
 
// function century(year){

//     let cent = Math.ceil (year/100) 

//     let twoLetters = cent > 20 ? "st" : "th"

//     console.log(cent + twoLetters +' century')
    

// }

// century(1756) //➞ "18th century"
 
// century(1555) //➞ "16th century"
 
// century(1000) //➞ "10th century"
 
// century(1001) //➞ "11th century"
 
// century(2005) //➞ "21st century"
 






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Create a function that converts Celcius to Fahrenheit and vice versa.
 
// convert("35°C") //➞ "95°F"
 
// convert("19°F") //➞ "-7°C"
 
// convert("33") //➞ "Error"







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Create a function that takes a string and returns a string in which each character is repeated once.





// function doubleChar(string){

//     let newString = ''

//     for (let i = 0; i < string.length; i++) {
        
//         newString += string[i] + string[i]
        
//     }
//     console.log(newString)
// }


// doubleChar("String") // ➞ "SSttrriinngg"
// doubleChar("Hello World!") // ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") // ➞ "11223344!!__  "







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// Given a number n, write a function that returns PI to n decimal places.
 

// function myPi(n){

//     console.log(Math.PI.toFixed(n));

// }

// myPi(5) //➞ 3.14159
// myPi(4) //➞ 3.1416
// myPi(15) //➞ 3.141592653589793
 

 








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









//Create a function that takes an array as an argument and returns true or 
//false depending on whether the average of all elements in the array is a whole number or not.
 


// function isAvgWhole(arr){

//     let sum = 0

//     let trigger = false

//     arr.map(item =>{
//         sum += item
//     })

//     let average = sum / arr.length

//     if (average === Math.round(average)){
//         trigger = true
//     }

//     console.log(trigger)
// }


// isAvgWhole([1, 3]) //➞ true
// isAvgWhole([1, 2, 3, 4]) //➞ false
// isAvgWhole([1, 5, 6]) //➞ true
// isAvgWhole([1, 1, 1]) //➞ true
// isAvgWhole([9, 2, 2, 5]) //➞ false
 













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// Create a function that takes an integer and returns the
// factorial of that integer. That is, the integer multiplied by all positive lower integers.
 


// function factorial(n){
    
//     let answer = 1;

//     for(let i = n; i >= 1; i--){
//         answer = answer * i;
//     }

//     console.log(answer)
// }    
    

// factorial(3) //➞ 6
// factorial(5) //➞ 120
// factorial(13) //➞ 6227020800









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















 
//Create a recursive function that takes two parameters and repeats the 
//string n number of times. The first parameter txt is the string to be 
//repeated and the second parameter is the number of times the string is to be repeated.
 

// function repetition (string, times){

//     let newString = ''

//     for (let i = 0; i < times; i++) {
        
//         newString += string
        
//     }

//     console.log(newString)
// }

// repetition("ab", 3) //➞ "ababab"
// repetition("kiwi", 1) //➞ "kiwi"
// repetition("cherry", 2) //➞ "cherrycherry"
  













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








  
//Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices. indexes?
  




// function getOnlyEvens(arr){

//     let newArr = []

//     arr.map(num =>{
        
//         if(num%2 === 0 && num === arr.indexOf(num)){
//             newArr.push(num)
//         }
//     })

//     console.log(newArr)

// }

// getOnlyEvens([1, 3, 2, 6, 4, 8]) //➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) //➞ [0, 2, 4] 
// getOnlyEvens([1, 2, 3, 4, 5]) //➞ []
  








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







  
//Assume a program only reads .js or .jsx files. Write a function that accepts 
 //a file path and returns true if it can read the file and false if it can't.
  
 

// function isJS(string){

//     if(string.includes('.js') || string.includes('.jsx')){
//         console.log(true)
//     }   else{
//         console.log(false)
//     }


// }


// isJS("/users/user.jsx") //➞ true
// isJS("/users/user.js") //➞ true
// isJS("/users/user.ts") //➞ false
  








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  
// Create a function that takes an array of 10 numbers (between 0 and 9)
 
// and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
  

// function formatPhoneNumber(arr){

    
//     let str1 = '('
//     let str2 = ') '
//     let str3 = '-'
    

//     arr.map(num =>{

//         if(arr.indexOf(num) <= 2)
//         str1 += num

//         if(arr.indexOf(num) > 2 && arr.indexOf(num) <=5){
//             str2 += num
//         }

//         if(arr.indexOf(num) > 5){
//             str3 += num
//         }
//     })
    
//     console.log(str1 + str2 + str3)
// }


// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) //➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) //➞ "(345) 501-2527"
  
/////////////////////////////////////////////////////////////
  

















/*
//Write a function that takes a string as an argument and returns the left most digit in the string.
  
 leftDigit("TrAdE2W1n95!") //➞ 2
  
 leftDigit("V3r1ta$") //➞ 3
  
 leftDigit("U//DertHe1nflu3nC3") //➞ 1
  
 leftDigit("J@v@5cR1PT") //➞ 5


//Create a function which returns the number of true values there are in an array.
 
countTrue([true, false, false, true, false]) //➞ 2
 
countTrue([false, false, false, false]) //➞ 0
 
countTrue([]) //➞ 0
 
///////////////////////////////////////////////////////////////////////////
 
// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.
 
dis(1500, 50) //➞ 750
 
dis(89, 20) //➞ 71.2
 
dis(100, 75) //➞ 25
 
////////////////////////////////////////////////////////////////////
 
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 
arrayOfMultiples(7, 5) //➞ [7, 14, 21, 28, 35]
 
arrayOfMultiples(12, 10) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 
arrayOfMultiples(17, 6) //➞ [17, 34, 51, 68, 85, 102]
 
////////////////////////////////////////////////////////////////
 
//Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will //always be represented in the following order: quarters, dimes, nickels, pennies.
 
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
 
//quarter: 25 cents / $0.25

 //dime: 10 cents / $0.10

 //nickel: 5 cents / $0.05

 //penny: 1 cent / $0.01
 


 changeEnough([2, 100, 0, 0], 14.11) //➞ false
 
changeEnough([0, 0, 20, 5], 0.75) //➞ true
 
changeEnough([30, 40, 20, 5], 12.55) //➞ true
 
changeEnough([10, 0, 0, 50], 3.85) //➞ false
 
changeEnough([1, 0, 5, 219], 19.99) //➞ false
 
//////////////////////////////////////////////////////////////////
 
//Given an array of women and an array of men, either:
 
//Return "sizes don't match" if the two arrays have different sizes.

 //If the sizes match, return an array of pairs, with the first woman

 // paired with the first man, second woman paired with the second man, etc.
 
zipIt(["Elise", "Mary"], ["John", "Rick"])

  //➞ [["Elise", "John"], ["Mary", "Rick"]]
 
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])

  //➞ "sizes don't match"
 
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])

  //➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]


  */



// const boxOne = document.getElementById('boxOne')

// const boxTwo = document.getElementsByClassName('boxTwo')

// const boxThree = document.querySelector('span')

// const boxFour = document.querySelector('#span2')

// const boxFive = document.querySelector('.span3')

// const final = document.querySelectorAll('span')





//////// EVENTS//////// 2020.10.03





// const myButton = document.getElementById('btn1')
// myButton.addEventListener('click', doStuff)



// function doStuff(){
//     boxOne.style.backgroundColor = '#90e1fa'
//     boxOne.innerText = 'TEST GREAT SUCCESS!'



// upgrade one:
// Add two points on click. Cost: 100

// upgrade two:
// Add five points on click: Cost: 300

// upgrade three:
// Change background color: Cost: 50

// upgrade four:
// Make cookie to spin all the time: Cost 150

// upgrade five:
// change cookie image to new one: Cost: 200

// const startDiv = document.getElementById('startDiv')
// const gameDiv = document.getElementById('gameDiv')
// const shopDiv = document.getElementById('shopDiv')
// const scoreDiv = document.getElementById('scoreDiv')
// const cookiePic = document.getElementById('cookiePic')
// const backButton = document.getElementById('backButton')
// const shopButton = document.getElementById('shopButton')
// const upgradeOne = document.getElementById('upg1')
// const upgradeTwo = document.getElementById('upg2')
// const upgradeThree = document.getElementById('upg3')
// const upgradeFour = document.getElementById('upg4')
// const upgradeFive = document.getElementById('upg5')
// const startButton = document.getElementById('clickStart')
// const cookiePic2 = document.getElementById('cookiePic2')


// startButton.addEventListener('click', goToGame)
// cookiePic.addEventListener('click', addScore)
// shopButton.addEventListener('click', goToShop)
// backButton.addEventListener('click', goBack)
// upgradeOne.addEventListener('click', addTwoPoints)
// upgradeTwo.addEventListener('click', addFivePoints)
// upgradeThree.addEventListener('click', changeBackground)
// upgradeFour.addEventListener('click', rotateCookie)
// upgradeFive.addEventListener('click', changeCookie)
// cookiePic2.addEventListener('click', addScoreAgain)

// let score = 0

// let pointsToAdd = 1

// function goToGame(){
//     console.log('AcIU')
//     startDiv.style.display = 'none'
//     gameDiv.style.display = 'block'
// }

// function addScore(){
//     score += pointsToAdd
//     scoreDiv.innerText = `Score: ${score}`
// }

// function goToShop(){
//     gameDiv.style.display = 'none'
//     shopDiv.style.display = 'block'
// }

// function goBack(){
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }


// function addTwoPoints(){
//     pointsToAdd = 2
//     score -= 100
//     scoreDiv.innerText = `Score: ${score}`
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }

// function addFivePoints(){
//     pointsToAdd = 5
//     score -= 300
//     scoreDiv.innerText = `Score: ${score}`
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }

// function changeBackground(){
//     score -= 50
//     scoreDiv.innerText = `Score: ${score}`
//     gameDiv.style.backgroundColor = '#9932cc'
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }

// function rotateCookie(){
//     score -= 150
//     scoreDiv.innerText = `Score: ${score}`
//     cookiePic.classList.add('spinCookie')
//     cookiePic2.classList.add('spinCookie')
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }

// function changeCookie(){
//     score -= 200
//     scoreDiv.innerText = `Score: ${score}`
//     cookiePic.style.display = 'none'
//     cookiePic2.style.display = 'block'
//     gameDiv.style.display = 'block'
//     shopDiv.style.display = 'none'
// }

// function addScoreAgain(){
//     score += pointsToAdd
//     scoreDiv.innerText = `Score: ${score}`
// }

// localStorage.setItem('score',)

// //https://i.redd.it/5e7cf6b1nfy01.png

// // transition






///////////////////////////////   2020.10.04    ///////////////////////////////////


// const colorButton = document.getElementById('colorButton')
// const navBar = document.getElementById('navBar')
// const footer = document.getElementById('footerBar')
// const asideButton = document.getElementById('asideButton')
// const asideBar = document.getElementById('asideBar')
// const rwb = document.getElementById('rwb')
// const singer = document.getElementById('singer')
// const ruff = document.getElementById('ruff')
// const story1 = document.getElementById('story1')
// const story2 = document.getElementById('story2')
// const story3 = document.getElementById('story3')
// const footerBar = document.getElementById('footerBar')
// const footerButton = document.getElementById('footerButton')
// const chevronUp = document.getElementById('chevronUp')
// const chevronDown = document.getElementById('chevronDown')
// const backButton1 = document.getElementById('backButton1')
// const forwardButton1 = document.getElementById('forwardButton1')
// const backButton2 = document.getElementById('backButton2')
// const forwardButton2 = document.getElementById('forwardButton2')
// const backButton3 = document.getElementById('backButton3')
// const forwardButton3 = document.getElementById('forwardButton3')
// const rwbPhoto = document.getElementById('rwbPhoto')
// const singerPhoto = document.getElementById('singerPhoto')
// const ruffPhoto = document.getElementById('ruffPhoto')


// let colors = ['#fa8072', '#ddfa72','#72fabf','#7772fa','#adfaad','#d6f747','#f7479f']
// let asidePosition = false
// let footerPosition = false

// let photo1 = [ 
//     'https://cdn.motor1.com/images/mgl/LOrK3/s1/rauh-welt-begriff-porsche-911-on-forgestar-wheels.jpg' ,
//     'https://www.carscoops.com/wp-content/uploads/2019/05/8b0765b2-rwb-porsche-911-2.jpg' ,
//     'https://www.forgestar.com/wp-content/uploads/2019/05/blue-rwb-widebody-porsche-993-deep-dish-wheels-forgestar-custom-l.jpg'
// ]
// let photo2 = [
//     'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/singer_dls_exterior_location_004.jpg?itok=MvTqlWmi' ,
//     'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/singer_dls_exterior_location_012.jpg?itok=TvXs4e2J' ,
//     'https://i.pinimg.com/originals/cf/6e/8e/cf6e8e9cd89c087f170aaa64c5439099.jpg'
// ]
// let photo3 = [
//     'https://upload.wikimedia.org/wikipedia/commons/7/74/2020_RUF_SCR_%2849663196531%29.jpg' ,
//     'https://cdn.motor1.com/images/mgl/E7e4q/s3/2018-ruf-scr.jpg' ,
//     'https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2020/03/10133111/2020-RUF-SCR-10-1200x628.jpg'
// ]

// let colorCount = 0
// let photoCount = 0


// colorButton.addEventListener('click', changeColor)
// asideButton.addEventListener('click', openAside)
// rwb.addEventListener('click', showStory1)
// singer.addEventListener('click', showStory2)
// ruff.addEventListener('click', showStory3)
// footerButton.addEventListener('click', showFooter)
// forwardButton1.addEventListener('click', nextPhoto1)
// backButton1.addEventListener('click', previousPhoto1)
// forwardButton2.addEventListener('click', nextPhoto2)
// backButton2.addEventListener('click', previousPhoto2)
// forwardButton3.addEventListener('click', nextPhoto3)
// backButton3.addEventListener('click', previousPhoto3)



// function changeColor(){
//     let random = Math.floor(Math.random() * colors.length-1)
//     navBar.style.backgroundColor = colors[random]
//     footer.style.backgroundColor = colors[random]
// }

// function openAside(){
//     asidePosition = !asidePosition
//     if(asidePosition){
//         asideBar.style.width = '500px'
//     } else {
//         asideBar.style.width = '0px'
//     }
// }

// function showStory1(){
//     story1.style.display = 'block'
//     story2.style.display = 'none'
//     story3.style.display = 'none'
// }

// function showStory2(){
//     story1.style.display = 'none'
//     story2.style.display = 'block'
//     story3.style.display = 'none'
// }

// function showStory3(){
//     story1.style.display = 'none'
//     story2.style.display = 'none'
//     story3.style.display = 'block'
// }

// function showFooter(){
//     footerPosition = !footerPosition
//     if(footerPosition === true){
//         footerBar.style.height = '300px'
//         chevronDown.style.display = 'block'
//         chevronUp.style.display = 'none'
//     } else{
//         footerBar.style.height = '110px'
//         chevronDown.style.display = 'none'
//         chevronUp.style.display = 'block'
//     }
// }

// function nextPhoto1(){
//     photoCount++
//     photoCount > photo1.length-1 ? photoCount = 2 : null
//     rwbPhoto.src = photo1[photoCount]
// }

// function previousPhoto1(){
//     photoCount--
//     photoCount < 0 ? photoCount = 0 : null
//     rwbPhoto.src = photo1[photoCount]
// }

// function nextPhoto2(){
//     photoCount++
//     photoCount > photo1.length-1 ? photoCount = 2 : null
//     singerPhoto.src = photo2[photoCount]
// }

// function previousPhoto2(){
//     photoCount--
//     photoCount < 0 ? photoCount = 0 : null
//     singerPhoto.src = photo2[photoCount]
// }
// function nextPhoto3(){
//     photoCount++
//     photoCount > photo1.length-1 ? photoCount = 2 : null
//     ruffPhoto.src = photo3[photoCount]
// }

// function previousPhoto3(){
//     photoCount--
//     photoCount < 0 ? photoCount = 0 : null
//     ruffPhoto.src = photo3[photoCount]
// }








////////////////////////////////////  2020.10.05  ////////////////////////////////////////


// const startPage = document.getElementById('startPage')
// const gamePage = document.getElementById('gamePage')
// const startButton = document.getElementById('startButton')
// const inputName = document.getElementById('inputName')
// const yourName = document.getElementById('yourName')
// const pcPick = document.getElementById('pcPick')
// const iconsPC = document.getElementById('iconsPC')
// const paper = document.getElementById('paper')
// const scissor = document.getElementById('scissor')
// const rock = document.getElementById('rock')
// const myScore = document.getElementById('myScore')
// const pcScore = document.getElementById('pcScore')
// const playAgain = document.getElementById('playAgain')

// let signs = ["./assets/paper.jpg","./assets/scissors.jpg","./assets/rock.jpg"]
// let myScr = 0
// let pcScr = 0


// startButton.addEventListener('click', startGame)
// paper.addEventListener('click', pickedPapper)
// scissor.addEventListener('click', pickedScissor)
// rock.addEventListener('click', pickedRock)
// playAgain.addEventListener('click', playOneMore)

// function startGame(){
//     if(!!inputName.value){
//         startPage.style.display = 'none'
//         gamePage.style.display = 'block'
//         yourName.innerText = inputName.value
//     }
    
// }
// function randomSign(){
//     let random = Math.floor(Math.random() * signs.length)
//     pcPick.src = signs[random]
//     return random
// }

// function pickedPapper(){
//     iconsPC.style.display = 'block'
//     let random = randomSign()
//     if(signs[random] === signs[1]){
//         pcScr++
//         pcScore.innerText = `${pcScr}`
//     }
//     if(signs[random] === signs[2]){
//         myScr++
//         myScore.innerText = `${myScr}`
//     }
//     paper.removeEventListener('click', pickedPapper)
//     scissor.removeEventListener('click', pickedScissor)
//     rock.removeEventListener('click', pickedRock)
// }

// function pickedScissor(){
//     iconsPC.style.display = 'block'
//     let random = randomSign()
//     if(signs[random] === signs[2]){
//         pcScr++
//         pcScore.innerText = `${pcScr}`
//     }
//     if(signs[random] === signs[0]){
//         myScr++
//         myScore.innerText = `${myScr}`
//     }
//     paper.removeEventListener('click', pickedPapper)
//     scissor.removeEventListener('click', pickedScissor)
//     rock.removeEventListener('click', pickedRock)
// }

// function pickedRock(){
//     iconsPC.style.display = 'block'
//     let random = randomSign()
//     if(signs[random] === signs[0]){
//         pcScr++
//         pcScore.innerText = `${pcScr}`
//     }
//     if(signs[random] === signs[1]){
//         myScr++
//         myScore.innerText = `${myScr}`
//     }
//     paper.removeEventListener('click', pickedPapper)
//     scissor.removeEventListener('click', pickedScissor)
//     rock.removeEventListener('click', pickedRock)
// }

// function playOneMore(){
//     iconsPC.style.display = 'none'
//     paper.addEventListener('click', pickedPapper)
//     scissor.addEventListener('click', pickedScissor)
//     rock.addEventListener('click', pickedRock)
// }














////////////////////////////////////     2020.10.06    ///////////////////////////////////////////

// create a game where player fights against monster
// player and monster should both have health bars
// representing total health left (monsters have custom amount of health)
// game goes like this: player clicks button "hit" and hits enemy
// then enemy automatically hits player back
// when enemy is killed, second enemy appear with full health bar

// player should be able to change weapon he is equipped with
// each weapon will have it's own effect on player
// (player should have 3 weapons to choose, but can hold only one while fighting)
// on every hit player gets random amount of coins - from 0 to 10
// coins are needed to buy health potions, one potion costs 50 points
// health potions fully restores player health when bought

//     name: "FRIEZA",
//     health: 100,
//     maxDamage: 10

//     name: "MAJIN BU",
//     health: 120,
//     maxDamage: 8

//     name: "BROLI",
//     health: 150,
//     maxDamage: 15


//     SSJ2: damage: 8,
//     effect: 'gives player 25% chance to doge enemy attacks'

//     SSJ3:  damage: 10,
//     effect: 'heals player on every enemy hit from 0 to 5 hit points'

//     SSJ4: {​damage: 12,
//     effect: 'has a 50% chance to hit enemy two times in a row'

//     potion: 
//     img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
//     info: "can be bought from shop for 50 coins, recovers player health when bought",

// function damagePercent(dmg){​​​​
//     let enemyHealth = 100
//     let onePercentOfHealth = enemyHealth / 100
//     return Math.round(dmg / onePercentOfHealth)
// }​​​​

// const attack = document.getElementById('attackButton')
// const myCoins = document.getElementById('myCoins')
// const healthBar = document.getElementById('healthBar')
// const enemyHealthBar = document.getElementById('enemyHealthBar')
// const healthPotion = document.getElementById('healthPotion')
// const ssj2 = document.getElementById('ssj2')
// const ssj3 = document.getElementById('ssj3')
// const ssj4 = document.getElementById('ssj4')
// const enemy = document.getElementById('enemy')
// const sonGoku = document.getElementById('sonGoku')


// let coinAmount = 0
// let myHealth = 100
// let enemyHealth = 100
// let enemyDmg = 10
// let myDmg = 6
// let stupidTrigger = 0
// let superSayan = 0


// let goku = ['./assets/DBZ/goku 2.png', './assets/DBZ/goku 4.png', './assets/DBZ/gokuMAX.png' ]
// let enemies = ["./assets/DBZ/4885356-dbcu_kid_buu_v2_render_by_cdzdbzgoku-d61ryws.png", "./assets/DBZ/dbe6lyw-919ae2c0-d45c-4550-8e34-2cc9017a4fd8.png", "https://www.freeiconspng.com/uploads/victory-icon-7.png"]


// attack.addEventListener('click', attackEnemy)
// healthPotion.addEventListener('click', restoreHP)
// ssj2.addEventListener('click', turnSsj2)
// ssj3.addEventListener('click', turnSsj3)
// ssj4.addEventListener('click', turnSsj4)

// function random(num){
//     return Math.round(Math.random() * num)
// }

// function randomFloor(num){
//     return Math.floor(Math.random() * num)
// }

// function restoreHP(){
//     if(coinAmount >= 50){
//         coinAmount -= 50
//         myCoins.innerText = `Coins: ${coinAmount}`
//         healthBar.style.width = '100%'
//         myHealth = 100
//     } 
// }

// function attackEnemy(){
//     let enemyDamage = random(enemyDmg)
//     let myDamage = random(myDmg)
//     coinAmount += random(10)
//     myCoins.innerText = `Coins: ${coinAmount}`
//     myHealth -= enemyDamage
//     healthBar.style.width = `${myHealth}%`
//     enemyHealth -= myDamage
//     enemyHealthBar.style.width = `${enemyHealth}%`

//     if(superSayan === 1){
//         if(0 === randomFloor(4)){
//             myHealth += enemyDamage
//         }
//     }

//     if(superSayan === 2){
//         myHealth += random(5)
//     }

//     if(superSayan === 3){
//         if(0 === random(1)){
//             enemyHealth = enemyHealth - 2 * myDamage
//         }
//     }

//     if(enemyHealth <= 0 && stupidTrigger === 0 ){
//         enemy.src = enemies[0]
//         enemyHealth = 100
//         enemyHealthBar.style.width = `${enemyHealth}%`
//         enemyDmg = 8
//         myDmg = Math.round(myDmg / 1.2)
//         stupidTrigger++ 
//     }

//     if(enemyHealth <=0 && stupidTrigger === 1) {
//         enemy.src = enemies[1]
//         enemyHealth = 100
//         enemyHealthBar.style.width = `${enemyHealth}%`
//         enemyDmg = 15
//         myDmg = Math.round(myDmg / 1.5)
//         stupidTrigger++
//     }
//     if(enemyHealth <=0 && stupidTrigger === 2){
//         enemy.src = enemies[2]
//     }
    
// }

// function turnSsj2(){
//     sonGoku.src = goku[0]
//     myDmg = 8
//     superSayan = 1
// }

// function turnSsj3(){
//     sonGoku.src = goku[1]
//     myDmg = 10
//     superSayan = 2
// }

// function turnSsj4(){
//     sonGoku.src = goku[2]
//     myDmg = 12
//     superSayan = 3
// }





////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////























// let colors = [
//     '#f753c0',
//     '#537ff7',
//     '#4ee9b5',
//     '#87e94e',
//     '#e9cc4e'
// ]

// colors.map(item =>{

//     let element = document.createElement('div')
//     element.innerText = `${item}`
//     element.style.backgroundColor = item
//     element.style.padding = '20px'
//     element.style.margin = '5px'
//     element.style.width = '150px'
//     document.body.appendChild(element)
//     element.addEventListener('click', doShit)
// })

// function doShit(event){
//     document.body.style.backgroundColor = event.target.innerText
// }






        


        
// let randomUsers = [
//     {
//         photo: "https://randomuser.me/api/portraits/men/2.jpg",
//         name: "Perry Fowler",
//         email: "perry.fowler@example.com",
//         cardColor: '#ff8c7f'
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/9.jpg",
//         name: "Loretta Butler",
//         email: "loretta.butler@example.com",
//         cardColor: '#4ff18e'
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/39.jpg",
//         name: "Charlotte Ward",
//         email: "charlotte.ward@example.com",
//         cardColor: '#4f65f1'
//     }
// ]


// randomUsers.map((item, index) => {
//     let element = document.createElement('div')
//     let name = document.createElement('h3')
//     let picture = document.createElement('img')
//     let email = document.createElement('h4')
//     name.innerText = item.name
//     email.innerText = item.email
//     element.style.backgroundColor = item.cardColor
//     element.style.margin = '5px'
//     element.style.padding = '20px'
//     element.style.width = '250px'
//     picture.src = item.photo
//     picture.style.width = '80%'
//     element.appendChild(picture)
//     element.appendChild(name)
//     element.appendChild(email)
//     element.setAttribute('id', index)
//     element.addEventListener('click', doShit)
//     document.body.appendChild(element)
//     document.body.style.display = 'flex'

// })


// function doShit(event){
//     let user = randomUsers[event.target.id]
    
// }








////////////////////////////////////////////////////////////////////////////







// money: 150,
// notEnoughMoney: false

// items = [
//     {
//         id: "prod1",
//         image: "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
//         name: "Leather Tool Roll Up Pouch",
//         price: 30.90
//     },
//     {
//         id: "prod2",
//         image: "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
//         name: "Hand Forged Viking Axe",
//         price: 132.48
//     },
//     {
//         id: "prod3",
//         image: "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
//         name: "Leather Cabinet Pulls",
//         price: 5.68
//     },
//     {
//         id: "prod4",
//         image: "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
//         name: "Unicorn Papercraft, 3D Papercraft",
//         price: 14.52
//     },
//     {
//         id: "prod5",
//         image: "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
//         name: "Chicken Coop Plans",
//         price: 18.11
//     }
// ]

// shoppingBag = []

// const moneyLeft = document.getElementById('moneyLeft')
// const noMoreMoney = document.getElementById('noMoreMoney')
// const shop = document.getElementById('shop')
// const myBag = document.getElementById('myBag')

// let money = 150
// let notEnoughMoney = false

// updatePage()

// function updatePage() {
    
//     shop.innerHTML = ''

//     items.map(item => {
//         let card = document.createElement('div')
//         let img = document.createElement('img')
//         let name = document.createElement('div')
//         let price = document.createElement('div')
//         let buy = document.createElement('button')
    
//         card.setAttribute('class', 'cardStyle')
//         img.setAttribute('class', 'imgStyle')
//         buy.setAttribute('class', 'buyStyle')
//         buy.innerText = 'BUY'
        
    
//         img.src = item.image
//         name.innerText = item.name
//         price.innerText = item.price
//         card.setAttribute('id', item.id)
    
//         card.appendChild(img)
//         card.appendChild(name)
//         card.appendChild(price)
//         card.appendChild(buy)
    
//         buy.addEventListener('click', buyItem)
    
//         shop.appendChild(card)
        
    
//     })
    
//     myBag.innerHTML = ''

//     shoppingBag.map(item =>{

//         let card = document.createElement('div')
//         let img = document.createElement('img')
//         let name = document.createElement('div')
//         let price = document.createElement('div')
//         let buy = document.createElement('button')
    
//         card.setAttribute('class', 'cardStyle')
//         img.setAttribute('class', 'imgStyle')
//         buy.setAttribute('class', 'buyStyle')
//         buy.innerText = 'BUY'
        
    
//         img.src = item.image
//         name.innerText = item.name
//         price.innerText = item.price
//         card.setAttribute('id', item.id)
    
//         card.appendChild(img)
//         card.appendChild(name)
//         card.appendChild(price)
        

//         myBag.appendChild(card)
//     })

// }


// function buyItem(event){
//     if(event.path[1].childNodes[2].innerText > money){
//         noMoreMoney.innerText = 'Mf you broke'
//         moneyLeft.style.color = 'red'
//     } else{
//         money -= event.path[1].childNodes[2].innerText
//         moneyLeft.innerText = `My money: ${money}`
//         let id = event.path[1].id

//         let product = items.filter(el => el.id === id)
//         shoppingBag.push(product[0]) 

//         items = items.filter(el => el.id !== id)
        
//         noMoreMoney.innerText = ''
//         moneyLeft.style.color = 'black'
//         updatePage()        
//     }
    
// }




















//////////////////////////////////////////////////////











// create simple minesweeper game
// create 100 squares
// each square should have class attribute
// make class attribute value to be random item from array
// add event listeners on on each square
// clicking square should call method, which gets that square name
// get class name trough click event target attributes
// check if class name value is empty or bomb if bomb GAME OVER
// else add one more class to element and make makes square different color
// make game over text to appear if user click square with a bomb

// let itemsArray = ['empty', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty', 'bomb','empty', 'empty', 'empty', 'bomb']

// const gameWindow = document.getElementById('gameWindow')
// const points = document.getElementById('points')


// let myPoints = 0




// getSquares()

// function getSquares(){    

//     for (let i = 0; i < 100; i++) {
//         let random = Math.floor(Math.random()* itemsArray.length)
//         let square = document.createElement('div')
//         square.classList.add('squareStyle')
//         square.classList.add(itemsArray[random])
//         square.addEventListener('click', doShit)
//         gameWindow.appendChild(square)
//     }
// }



// function doShit(event){
//     if(event.target.classList[1] === 'empty'){
//         event.target.style.backgroundColor = 'green'
//         myPoints++
//         points.innerText = `Points: ${myPoints}`
//     } else {
//         event.target.style.backgroundColor = 'red'
//         document.body.innerHTML = ''
//         let gameOver = document.createElement('div')
//         gameOver.style.padding = '300px'
//         gameOver.style.marginTop = '50px'
//         gameOver.style.backgroundColor = 'red'
//         gameOver.style.fontSize = '50px'
//         gameOver.innerText = 'GAME OVER'
//         document.body.appendChild(gameOver)
            
//     }
// }























////////////////////////////////////////////////////////////






// add button on each card "random color" it should change cards background color to random
// add counter in top of the page, to show hom many items there is in array
// add "total letters" in top of page to show hom many letters in total all jokes values have summed up
// add input on the bottom of the card, when input value is changed it should change joke value
// add input and button in top of page "set date" when input value is added and button clicked, all cards time should change to input value




// const addButton = document.getElementById('add')
// const container = document.getElementsByClassName('container')
// const letterCounter = document.getElementById('letterCounter')

// addButton.addEventListener('click', fetchData)

// let arr = []
// let colorArray = ['#FF6633','#FFB399', '#FF33FF', '#FFFF99','#00B3E6',
//     '#E6B333', '#3366E6',
//     '#999966', '#99FF99', '#B34D4D',
//     '#80B300', '#809900',
//     '#E6B3B3', '#6680B3', '#66991A',
//     '#FF99E6', '#CCFF1A',
//     '#FF1A66', '#E6331A', '#33FFCC',
//     '#66994D', '#B366CC',
//     '#4D8000', '#B33300', '#CC80CC',
//     '#66664D', '#991AFF',
//     '#E666FF', '#4DB3FF', '#1AB399',
//     '#E666B3', '#33991A',
//     '#CC9999', '#B3B31A', '#00E680',
//     '#4D8066', '#809980',
//     '#E6FF80', '#1AFF33', '#999933',
//     '#FF3380', '#CCCC00',
//     '#66E64D', '#4D80CC', '#9900B3',
//     '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// let colorsChosen = []
// let totalLetters = 0;

// function fetchData() {
//     fetch("https://api.chucknorris.io/jokes/random")
//         .then(response => response.json())
//         .then(data => {
//             arr.push(data)
//             console.log(data)
//             updateHtml()
//         })
// }
// function updateHtml() {
//     letterCounter.innerText = "Counter: 0"
//     container[0].innerHTML = ""
//     totalLetters = 0

//     function checkColor(element, id) {
//         let isInArray = colorsChosen.filter(item => item.id === id)

//         if(isInArray.length > 0) {
//             element.style.backgroundColor = isInArray[0].color
//         }
//     }
//     function addLettersCount(value) {
//         value = value.replace(/ /g, '')
//         totalLetters += value.length
//     }

//     arr.map(item => {
//         let card = document.createElement('div')
//         card.setAttribute('class', 'card')
//         card.setAttribute('id', item.id)

//         checkColor(card, item.id)
//         addLettersCount(item.value)

//         let img = document.createElement('img')
//         img.src = item.icon_url

//         let time = document.createElement('h3')
//         time.innerHTML = item.created_at

//         let a = document.createElement('a')
//         a.href = item.url
//         a.innerText = "Link to joke"

//         let joke = document.createElement('div')
//         joke.innerText = item.value

//         let removeButton = document.createElement('button')
//         removeButton.setAttribute('class', 'mt-2')
//         removeButton.innerText = "Remove"
//         removeButton.addEventListener('click', removeCard)

//         let colorButton = document.createElement('button')
//         colorButton.setAttribute('class', 'mt-2')
//         colorButton.innerText = "Change Color"
//         colorButton.addEventListener('click', changeColor)

//         let inp = document.createElement('input')
//         inp.addEventListener('input', changeValue)


//         let els = [img,time,a,joke,removeButton, colorButton, inp]
//         els.map(el => {
//             card.appendChild(el)
//         })
//         container[0].appendChild(card)
//     })

//     letterCounter.innerText = `Counter: ${totalLetters}`
// }


// function removeCard(event) {
//     let id = event.path[1].id
//     arr = arr.filter(item => item.id !== id )
//     updateHtml()
// }

// function changeColor(event) {
//     let id = event.path[1].id
//     let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
//     let hasColor = colorsChosen.filter(color => color.id === id)

//     if(hasColor.length > 0) {
//         colorsChosen = colorsChosen.filter(color => color.id !== id)
//     }
//     colorsChosen.push({
//         color: randomColor,
//         id: id
//     })
//     event.path[1].style.backgroundColor = randomColor
// }

// function changeValue(event) {
//     let inputValue = event.target.value
//     event.path[1].children[3].innerText = inputValue
// }







//////////////////////////////////////////////////////////////////////////////////////////////////////



// URL - https://jsonplaceholder.typicode.com/users// once you get all users from server, add random age to each of them (from 20 to 50)
// also add random image to each of users from https://picsum.photos/ so you will be able to show it later//// picsum gets you random image based on size, if size differs, image will also ne different
//// for example https://picsum.photos/201 is different from https://picsum.photos/200// when data got and updated, make it appear on web page in gallery of user profiles cards
// card should have: user name, phone, email, website, company name and catch phrase
//// on the top of gallery make button for each filter, here is what you have to filter:
//// show users with age more than 30
//// show users whose username is less than 10 letters
//// show users whose website ends with .com
//// show users who has word Suite is address and suite key

// make it to be possible to remove user by pressing remove button in card
// make it to be possible edit user name in card (make input for it)
// add button "Show All" in card to show all information when clicked -- it should open modal window with all user information
// you should be able to close modal





// const filterDiv = document.getElementById('filterDiv')
// const cardContainer=  document.getElementById('cardContainer')



// let arr = []

// let filter1 = document.createElement('button')
// filter1.innerText = '> 30 ?'
// filter1.addEventListener('click', sortByAge)

// let filter2 = document.createElement('button')
// filter2.innerText = '10 < ?'
// filter2.addEventListener('click', nameLessThan10)

// let filter3 = document.createElement('button')
// filter3.innerText = '.com'
// filter3.addEventListener('click', dotCom)

// let filter4 = document.createElement('button')
// filter4.innerText = 'Suite?'
// filter4.addEventListener('click', liveInSuite)

// filterDiv.appendChild(filter1)
// filterDiv.appendChild(filter2)
// filterDiv.appendChild(filter3)
// filterDiv.appendChild(filter4)


// function randomAge(){
//    return  Math.round(Math.random() * (50 - 20) + 20)
// } 


// fetch("https://jsonplaceholder.typicode.com/users//")
//     .then(response => response.json())
//     .then(data => {
        
//         data.map(item => {
//             let randomPhotoNum = Math.round(Math.random()* (300 - 200) + 200)
//             item.age = randomAge()
//             item.photo = `https://picsum.photos/${randomPhotoNum}`
            
//            arr.push(item)

//         })

//         getCard()
//         console.log(arr)
//     })


// function getCard(){

//     cardContainer.innerHTML = ''

//     arr.map(item => {
//         let card = document.createElement('div')
//         card.classList.add('cardStyle')
//         card.setAttribute('id', item.id)
        

//         let photo = document.createElement('img')
//         photo.src = item.photo
//         photo.style.width = '80%'

//         let userName = document.createElement('h5')
//         userName.innerText = item.name

//         let phoneNum = document.createElement('h5')
//         phoneNum.innerText = item.phone

//         let email = document.createElement('h6')
//         email.innerText= item.email

//         let webSite = document.createElement('a')
//         webSite.href = item.website
//         webSite.innerText = item.website

//         let companyName = document.createElement('h5')
//         companyName.innerText = item.company.name

//         let phrase = document.createElement('h6')
//         phrase.innerText = item.company.catchPhrase

//         let removeButton = document.createElement('button')
//         removeButton.innerText = 'Remove'
//         removeButton.addEventListener('click', removeCard)

//         let inputName = document.createElement('input')
//         inputName.addEventListener('input', changeInputValue)

//         card.appendChild(photo)
//         card.appendChild(userName)
//         card.appendChild(phoneNum)
//         card.appendChild(email)
//         card.appendChild(webSite)
//         card.appendChild(companyName)
//         card.appendChild(phrase)
//         card.appendChild(removeButton)
//         card.appendChild(inputName)
//         cardContainer.appendChild(card)
//     })
    
// }


// function sortByAge(){
//     arr=arr.filter(item => item.age > 30)
//     getCard()
// }

// function nameLessThan10(){
//     arr = arr.filter(item => item.username.length < 10)
//     getCard()
// }

// function dotCom(){
//     arr = arr.filter(item => item.website.includes('.com'))
//     getCard()
// }

// function liveInSuite(){
//     arr = arr.filter(item => item.address.suite.includes('Suite'))
//     getCard()
// }

// function removeCard(event){
//     let id = event.path[1].id
//     arr = arr.filter(item => item.id != id)
//     getCard()
// }   

// function changeInputValue(event){
//     let inputValue = event.target.value
//     event.path[1].children[1].innerText = inputValue
// }

















/////////////////////////////////////////////////////////////////////////////////////////////////

// create a black jack kind of a game with graphical interface (be creative)
// try to include animations, custom fonts. Make game look as actual casino online black jack
// GAME LOGICK
// player plays against computer
// beefore the game player can choose sum of money to bid
// when game begins pc and player each gets two cards
// player can ask dealer for more cards if his total points is less than 21
// after player makes moves, computer also gets his own cards (if needed)
// after pc and player makes moves results are compared
// the one whose score is bigger wins the price pot (money)
// it also can be draw if pc and player has same amount of points
// there is also posibility to loose when drawing cards if total sum of points is bigger than 21
// when game is over deck of cards are shuffled and prepared for new game

// use https://deckofcardsapi.com/ fot getting cards and shuffling the deck
// also add event log, which will show every move and stats

/////////////////////////////////////////////////////////////////////////////////////////////////

// const startGame = document.getElementById('startGame')
// const blackJackTable = document.getElementById('blackJackTable')
// const gameOVer = document.getElementById('gameOVer')
// const startButton = document.getElementById('startButton')
// const playAgainButton = document.getElementById('playAgainButton')
// const pcHand = document.getElementById('pcHand')
// const hitDiv = document.getElementById('hitDiv')
// const myHand = document.getElementById('myHand')
// const moneyLeft = document.getElementById('moneyLeft')
// const bid100 = document.getElementById('bid100')
// const bid200 = document.getElementById('bid200')
// const bid500 = document.getElementById('bid500')
// const myScore = document.getElementById('myScore')
// const stayButton =document.getElementById('stayButton')
// const shuffleButton = document.getElementById('shuffleButton')
// const hitMe = document.getElementById('hitMe')
// const pcScore = document.getElementById('pcScore')
// // const = document.getElementById('')




// startButton.addEventListener('click', sitAtTheTable)
// playAgainButton.addEventListener('click', playAgain)
// bid100.addEventListener('click', getCards)
// bid200.addEventListener('click', getCards)
// bid500.addEventListener('click', getCards)
// shuffleButton.addEventListener('click', shuffleDeck)
// hitMe.addEventListener('click', oneMoreCard)
// stayButton.addEventListener('click', giveComputerCards)




// let arr = []

// let pcArr = []

// let gameStarted = false

// let cardCounter = 0

// let pcCounter = 0

// function shuffleDeck(){
//     fetch('https://deckofcardsapi.com/api/deck/q8fjt2f7ohjv/shuffle/')
//     .then(response => response.json())
//     .then(data => {
//        console.log(data)
//        myHand.innerHTML = ''
//        arr = []
//        cardCounter = 0
//        myScore.innerText = `MY SCORE: ${cardCounter}`
//        gameStarted = false
//        pcHand.innerHTML = ''
//        pcArr = []
//        pcCounter = 0
//        pcScore.innerText = `PC SCORE: ${pcCounter}`
//     })
// }

// function sitAtTheTable(){
//     startGame.style.display = 'none'
//     blackJackTable.style.display = 'block'
//     gameOVer.style.display = 'none'
// }
// function playAgain(){
//     startGame.style.display = 'none'
//     blackJackTable.style.display = 'block'
//     gameOVer.style.display = 'none'
// }   

// function getCards(){

//     if(!gameStarted){
//         gameStarted = true
//         fetch("https://deckofcardsapi.com/api/deck/q8fjt2f7ohjv/draw/?count=2")
//         .then(response => response.json())
//         .then(data => {
//             data.cards.map(item =>{
//                 arr.push(item)
//             })
//             showPlayerCards()
            
//         })
//     }
    
// }

// function showPlayerCards(){
//     arr.map(item =>{
//         let playerCard = document.createElement('img')
//         playerCard.src = item.image

//         myHand.appendChild(playerCard)

//         if(item.value === 'KING' || item.value === 'QUEEN' ||item.value === 'JACK'){
//             item.value = '10'
//         }
//         if(item.value === 'ACE'){
//             if(cardCounter > 10){
//                 item.value = '1'
//             } else {
//                 item.value = '11'
//             }
//         }
//         cardCounter += Number(item.value)
//         myScore.innerText = `MY SCORE: ${cardCounter}`
//     })

// }

// function oneMoreCard(){

//     if(gameStarted){
//         fetch("https://deckofcardsapi.com/api/deck/q8fjt2f7ohjv/draw/?count=1")
//         .then(response => response.json())
//         .then(data => {
            
//             data.cards.map(item =>{
//                 arr.push(item)
//             })
//             extraCard()
//         })
//     }
    
// }

// function extraCard(){
//     myHand.innerHTML = ''
//     cardCounter = 0
//     arr.map(item =>{
//         let aditionalCards = document.createElement('img')
//         aditionalCards.src = item.image

//         myHand.appendChild(aditionalCards)

//         if(item.value === 'KING' || item.value === 'QUEEN' ||item.value === 'JACK'){
//             item.value = '10'
//         }
//         if(item.value === 'ACE'){
//             if(cardCounter > 10){
//                 item.value = '1'
//             } else {
//                 item.value = '11'
//             }
//         }
//         cardCounter += Number(item.value)
//         myScore.innerText = `MY SCORE: ${cardCounter}`
//     })
    
    
// }

// function giveComputerCards(){
//     fetch("https://deckofcardsapi.com/api/deck/q8fjt2f7ohjv/draw/?count=2")
//         .then(response => response.json())
//         .then(data => {
//             data.cards.map(item =>{
//                 pcArr.push(item)
//             })
//             showComputerHand()
// })
// }


// function showComputerHand(){
//     pcArr.map(item => {
//         let computerCard = document.createElement('img')
//         computerCard.src = item.image

//         pcHand.appendChild(computerCard)

//         if(item.value === 'KING' || item.value === 'QUEEN' ||item.value === 'JACK'){
//             item.value = '10'
//         }
//         if(item.value === 'ACE'){
//             if(cardCounter > 10){
//                 item.value = '1'
//             } else {
//                 item.value = '11'
//             }
//         }
//         pcCounter += Number(item.value)
//         pcScore.innerText = `PC SCORE: ${pcCounter}`

//     })

//     if(pcCounter < 16){
//         extraPcCard()
//     }
// }


// function extraPcCard(){
//     fetch("https://deckofcardsapi.com/api/deck/q8fjt2f7ohjv/draw/?count=1")
//         .then(response => response.json())
//         .then(data => {
//             data.cards.map(item =>{
//                 pcArr.push(item)
//             })
//             showExtraPcCard()
//     })
// }

// function showExtraPcCard(){
//     pcHand.innerHTML = ''
//     pcCounter = 0
//     pcArr.map(item => {
//         let extraComputerCard = document.createElement('img')
//         extraComputerCard.src = item.image

//         pcHand.appendChild(extraComputerCard)

//         if(item.value === 'KING' || item.value === 'QUEEN' ||item.value === 'JACK'){
//             item.value = '10'
//         }
//         if(item.value === 'ACE'){
//             if(cardCounter > 10){
//                 item.value = '1'
//             } else {
//                 item.value = '11'
//             }
//         }
//         pcCounter += Number(item.value)
//         pcScore.innerText = `PC SCORE: ${pcCounter}`
//     })
// }












////////////////////////////////////////////////////////////////


// GET ALL USERS - GET REQUEST
"http://167.99.138.67:3300/getallusers"
// CREATE NEW USER - POST REQUEST
// should include: name, age, email, photo, number
"http://167.99.138.67:3300/createuser"
// UPDATE USER - POST REQUEST
// should include: name, age, email, photo, number, id
"http://167.99.138.67:3300/updateuser"
// DELETE USER - GET REQUEST
// should be user id instead if :id
"http://167.99.138.67:3300/delete/:id"

// const constainer = document.getElementById('constainer')
// const addCard = document.getElementById('addCard')
// const modal = document.getElementById('modal')
// const uPhoto = document.getElementById('uPhoto')
// const uName = document.getElementById('uName')
// const uAge = document.getElementById('uAge')
// const uEmail = document.getElementById('uEmail')
// const uNumber = document.getElementById('uNumber')
// const updateButt = document.getElementById('updateButt')
// const addButton = document.getElementById('addButton')
// let arr = []

// let userSelected 

// addCard.addEventListener('click', openModal)
// updateButt.addEventListener('click', addUser)
// addButton.addEventListener('click', updateUser)
// getUsers()

// function getUsers(){
// fetch('http://167.99.138.67:3300/getallusers')
//   .then((response) => response.json())
//   .then((data) => {
//    arr = data
//     console.log(arr) 
//     showUsers()
//   })
// }

// function showUsers(){
//     constainer.innerHTML = ''
//     arr.map(item => {

//         let card = document.createElement('div')
//         card.classList.add('cardStyle')

//         let photo = document.createElement('img')
//         photo.src = item.photo
//         photo.style.width = '90%'

//         let userName = document.createElement('div')
//         userName.innerText = item.name

//         let age = document.createElement('div')
//         age.innerText = item.age

//         let email = document.createElement('div')
//         email.innerText = item.email

//         let number = document.createElement('div')
//         number.innerText = item.number

//         let greenButton = document.createElement('button')
//         greenButton.style.backgroundColor = 'green'
//         greenButton.classList.add('greenRed')
//         greenButton.innerText = 'UPDATE'
//         greenButton.setAttribute('id', item._id)

//         let redButton = document.createElement('button')
//         redButton.style.backgroundColor = 'red'
//         redButton.classList.add('greenRed')
//         redButton.innerText = 'DELETE'
//         redButton.setAttribute('id', item._id)

//         greenButton.addEventListener('click', editUser)
//         redButton.addEventListener('click', deleteUser)

//         card.appendChild(photo)
//         card.appendChild(userName)
//         card.appendChild(age)
//         card.appendChild(email)
//         card.appendChild(number)
//         card.appendChild(greenButton)
//         card.appendChild(redButton)

//         constainer.appendChild(card)
//     })
// }

// function openModal(){
//     constainer.style.display = 'none'
//     modal.style.display = 'flex'
// }

// function addUser(){
//     modal.style.display = 'none'

//     fetch('http://167.99.138.67:3300/createuser', {
//         method: 'POST',
//         body: JSON.stringify({
//           name: uName.value,
//           age: uAge.value,
//           email: uEmail.value,
//           photo: uPhoto.value,
//           number: uNumber.value
//         }),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => getUsers())

//     constainer.style.display = 'flex'
// }

// function editUser(event){
//     userSelected = event.target.id
//     openModal()
//     uPhoto.value = event.path[1].children[0].currentSrc
//     uName.value = event.path[1].children[1].innerText
//     uAge.value = event.path[1].children[2].innerText
//     uEmail.value = event.path[1].children[3].innerText
//     uNumber.value = event.path[1].children[4].innerText
//    console.log(event)
// }

// function updateUser(){
//     modal.style.display = 'none'

//     fetch('http://167.99.138.67:3300/updateuser', {
//         method: 'POST',
//         body: JSON.stringify({
//           name: uName.value,
//           age: uAge.value,
//           email: uEmail.value,
//           photo: uPhoto.value,
//           number: uNumber.value,
//           id: userSelected
//         }),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) =>{
//             console.log(json)
//             return getUsers()
//         })

//     constainer.style.display = 'flex'
//     }




// function deleteUser(event){
//     idSelect = event.target.id
//     fetch(`http://167.99.138.67:3300/delete/${idSelect}`)
//     .then((response)=>response.json())
//     .then(()=>{
//         getUsers()
//     })

// }


















//////////////////////////////////////////////////////////////////////////////////







// MAKE A SIMPLE QUIZ APPLICATION

// get random question from server by fetching http://167.99.138.67:3300/quiz/question (GET METHOD)
// you get an server response with question, id, and answer, make the question to appear on screen
// so user is asked a question which he answers by typing answer to the input
// when answer is typed and submit button clicked, post request is sent to server http://167.99.138.67:3300/quiz/answer
// post request should be used with these params : {​​answer: "user Answer", id: "question id" }​​
// after successful request you should get back there params {​​correct: true, points: 3}​​
// if answer correct, add points to user score and get another question from api
// if user reach 30 points make a screen to congrats him, as he won the game 
// http://167.99.138.67:3300/quiz/:answer/:id

// const myPoints = document.getElementById('myPoints')
// const questionWindow = document.getElementById('questionWindow')
// const answerWindow = document.getElementById('answerWindow')
// const answerInput = document.getElementById('answerInput')
// const submitButton = document.getElementById('submitButton')
// const userName = document.getElementById('userName')
// const enterName = document.getElementById('enterName')
// const logIn = document.getElementById('logIn')
// const gameWindow = document.getElementById('gameWindow')

// logIn.addEventListener('click', openGame)
// answerInput.addEventListener('input', fillInAnswer)
// submitButton.addEventListener('click', submitAnswer)


// let points = 0
// let randomQuestion = {}
// let answer = {}

// getQuestion()

// function getQuestion(){
//     questionWindow.innerText = ''
//     answerWindow.innerText = ''
//     fetch('http://167.99.138.67:3300/quiz/question')
//     .then(resp => resp.json())
//     .then(data => {
//         randomQuestion = data
//         questionWindow.innerText = randomQuestion.question
//         console.log(data)
//     }) 
// }

// function fillInAnswer(event){
//     answerWindow.innerText = event.target.value
// }

// function showPoints(){
//     myPoints.innerText = `Points: ${points}`
//     if(points > 10){
//         myPoints.innerText = 'You win'
//     }
// }

// function submitAnswer(){
   
//     fetch(`http://167.99.138.67:3300/quiz/${answerWindow.innerText}/${randomQuestion.id}`)
//     .then(resp => resp.json())
//     .then(data => {
//         answer = data
//         console.log(answer)
//         if(answer.correct){
//             points += answer.points
//             document.body.style.backgroundColor = 'green'
//         } else {
//             document.body.style.backgroundColor = 'red'
//         }
//         showPoints()
//         getQuestion()
        
//     })
    
// }

// function openGame(){

//     enterName.style.display = 'none'
//     logIn.style.display = 'none'
//     gameWindow.style.display = 'flex'

//     userName.innerText = enterName.value
// }