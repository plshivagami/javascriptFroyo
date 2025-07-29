const input = prompt("Enter your flavors in order");
console.log(input);
const flavors = input.split(",");
console.log(flavors);

function countFlavors() {
  let flavorCount = {};
  for (let flavor = 0; flavor < flavors.length; flavor++) {
    if (flavorCount[flavors[flavor]]) {
      flavorCount[flavors[flavor]]++;
    } else {
      flavorCount[flavors[flavor]] = 1;
    }
  }
  return flavorCount;
}

let result = countFlavors();
for (const flavor in result) {
  console.log(`${flavor}: ${result[flavor]}`);
}
