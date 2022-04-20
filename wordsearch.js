const verticalArray = function (letters) {
  
    let newArray = [];
    let count = 0;
  
    for(let i = 0; i < letters[i].length; i++) {
      let newString = "";
      for (let j = 0; j < letters.length; j++) {
        newString += letters[j][count];
        
      }
      newArray.push(newString);
      count++;  
    }
    
    return newArray;
  };

const wordSearch = (letters, word) => { 
    // should return false if given empty array, or a one letter word or word is not a string
    if (letters.length === 0 || word.length < 2 || !typeof word === 'string') {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = verticalArray(letters)

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
    return false;
}

module.exports = wordSearch