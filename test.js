describe('translatePigLatin test', function (){
test('open becomes openway', function(){
//arrange
const engWord = "open"

//act


//assert
expect(result).toBeEqual("openway")
})
})

// function translate (string){
//     string = string.toLowerCase();
//     let vowels = ["a", "e", "i", "o", "u"];
//     let newString = "";

//     if (vowels.indexOf(string[0]) > -1) {
//         newString = string + "way";
//         return newString;
//     } else {
//         let firstMatch = string.match(/[aeiou]/g) || 0;
//         let vowels = string.indexOf(firstMatch[0]);
//         newString = string.substring(vowels) + string.substring(0, vowels) + "ay";
//         return newString;
//     }
// }

// module.exports.translate = translate;