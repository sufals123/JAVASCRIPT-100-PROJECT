const palindrome = (str) => {
    str = str.toLowerCase();
    const strReverse = str.split("").reverse().join("");

    return str === strReverse;
}

console.log(palindrome("racecar")); // Output: true
console.log(palindrome("hello"));   // Output: false
