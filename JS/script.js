// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    dst.splice(dstPos, 0, ...src.slice(srcPos,srcPos+length));
}
function count(array, str){
    return array.reduce( function (accumulator, item) {
        //console.log('accumulator', accumulator);
        if(str === item) accumulator = accumulator+1;
        return accumulator;
    },0)
}
function displayOccurrences(array){
    let result = [];
    array.forEach(function (value) {
        if(!result.includes(value)){
            result.push(value)
        }
    });
    const result2 = result.map(function (element) {
        const amount = array.reduce(function (accumulator, item) {
            if (item === element){
                return accumulator += 1;
            } else {
                return accumulator;
            }
        },0);
        return [element, amount];
    });
    result2.forEach(function (element) {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
function ulSurround(strings){
    const resultString = strings.map(function (element) {
         const result = [];
         return result.concat('<li>',element,'</li>').join('');
    });
    resultString.splice(0,0,'<ul>');
    resultString.splice(resultString.length,0,'</ul>');
    return resultString;
}
function lengthSort(array){
    array.sort(function (a,b) {
        if (a.length > b.length){
            return 1
        } else if(a.length < b.length){
            return -1;
        } else return 0;
    });
    return array;
}
