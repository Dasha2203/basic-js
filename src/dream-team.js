const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  
  let nameDreamTeam = '';
    for (let i = 0; i< members.length; i++) {
      if (typeof members[i] === 'string'){
        nameDreamTeam += members[i].trim()[0]
      }
        
    }
    return nameDreamTeam.toUpperCase().split("").sort().join('')
};
