export function printEvenNos () { //only functions marked as export can be accessed from another js
    for (let index = 1; index <= 100; index++) {
      if (index % 2 === 0) {
        console.log(index)
      }
    }
  }