newFunction();

function newFunction() {
    var flavor = "vanilla";
    var vessel = "cone";
    var toppings = "sprinkles";
    if (flavor === "vanila" || flavor === "chocolate") {
        if (vessel === "cone" || vessel === "bowl") {
            if (toppings === "sprinkles" || toppings === "peanuts") {
                console.log("I'd like two scoops of" +
                    flavor +
                    "ice cream in a" +
                    vessel +
                    "with" +
                    toppings +
                    ".");
            }
        }
    }
}

