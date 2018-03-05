var condition1 = true,
  condition2 = false,
  access = condition1
    ? condition2 ? "true true" : "true false"
    : condition2 ? "false true" : "false false";

var category = newFunction();
var eatsPlants = false;
var eatsAnimals = true;

function newFunction() {
  var category =
    eatsPlants && eatsAnimals
      ? "omnivour"
      : eatsAnimals ? "carnivore" : eatsPlants ? "herbivour" : undefined;
  console.log(category);
  return category;
}
