function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest += spl[i].length
      }
    }
    return longest
}
console.log(findLongest("Take me to tinseltown with you"))