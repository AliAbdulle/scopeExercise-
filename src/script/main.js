/*
Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

C is for Cookie -- practice 1

*/

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//__________________________________________________________________________________

//Conjunction Function -- pr 2

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

//________________________________________________________________________________________

//Mod Squad
document.querySelector(".show-info").innerHTML = HTMLRepresentation

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": 1968,
            "end": 1973
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
        console.log(HTMLRepresentation)
    })
}
//_____________________________________________________________________________________________

//Simon Says
//There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidNum = "";
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = true

    if (currentLocation[0] > 2) {
         invalidLocation = true
    }

    if (invalidLocation) {
        invalidNum++
        
    }
    console.log("This location is invalid")
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${nvalidNum} invalid locations`)

//________________________________________________________________________________________

