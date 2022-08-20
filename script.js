// var pizzaList = []

function pizzaOven(name, sauce, cheese, toppings){
    var pizza = {}
    pizza.name = name
    pizza.sauce = sauce
    pizza.cheese = cheese
    pizza.toppings = toppings
    console.log(pizza)
    return pizza
}
pizzaOven("bbq chicken pizza" , "bbq sauce" , "mozzarella" , ["chicken" , "onions" , "cilantro"])

pizzaOven("margarita pizza" , "marinara" , "mozzarella" , ["basil" , "tomatos"])

pizzaOven("the emergency room", "chocolate sauce", "feta" , ["uncooked macaroni" , "pickles" ,"pixie straw dust"])

// console.log(pizzaList)
// function randomPizza(list){
//     return list[Math.floor(Math.random()*list.length)]
// }
// console.log(randomPizza(pizzaList))