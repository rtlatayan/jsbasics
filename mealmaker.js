let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this.appetizers;
    },
    set appetizers(food) {
        return this._appetizers = food;
    },
    get mains() {
        return this.mains;
    },
    set mains(food) {
        return this._mains = food;
    },
    get desserts() {
        return this.desserts;
    },
    set desserts(food) {
        return this._desserts = food;
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = menu._courses[courseName];
        let randomDish = Math.floor(Math.random() * dishes.length);
        return dishes[randomDish];
    },
    generateRandomMeal() {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let total =  appetizer.price + main.price + dessert.price;


        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${total}.`;
    }
}


menu.addDishToCourse('appetizers', 'Caesar Salad', 100);
menu.addDishToCourse('appetizers', 'Tofu', 80);
menu.addDishToCourse('appetizers', 'Fries', 75);

menu.addDishToCourse('mains', 'Steak', 210);
menu.addDishToCourse('mains', 'Chicken', 130);
menu.addDishToCourse('mains', 'Shrimp', 170);

menu.addDishToCourse('desserts', 'Leche Flan', 120);
menu.addDishToCourse('desserts', 'Chocolate', 130);
menu.addDishToCourse('desserts', 'Halohalo', 110);

let meal = menu.generateRandomMeal();
  

console.log(meal)
