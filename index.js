  // Write your algorithm here
  function hasTargetSum(array, target) {
    const seen = new Set();
  
    for (let num of array) {
      const complement = target - num;
      if (seen.has(complement)) {
        return true;
      }
      seen.add(num);
    }
  
    return false;
  }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Initialize an empty set to keep track of numbers we have encountered so far.
  2. Iterate through the array.
  3. For each element, calculate the difference between the target sum and the current element.
  4. Check if the difference exists in the set of encountered numbers.
  5. If it does, return true.
  6. If not, add the current element to the set.
  7. If the loop finishes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  - We use a set to keep track of the numbers we have seen so far.
  - As we iterate through the array, for each number, we calculate the difference between the target sum and the current number.
  - We check if the difference (complement) exists in the set. If it does, we have found a pair that adds up to the target sum, so we return true.
  - If the complement does not exist in the set, we add the current number to the set.
  - If we finish iterating through the array without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
