const  menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
return this._courses.appetizers;
  },
  
  get mains() {
    return this._courses.mains;
  },

  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizers) {
    return this._courses = appetizers;
  },

  set mains(mains) {
    return this._courses = mains;
  },

  set desserts(desserts) {
    return this._courses = desserts;
  },
  get courses() {
    return  {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,

    };
  },

  addDishToCourse(courseName,dishName,dishPrice){

 const dish = {
   name: dishName,
   price: dishPrice,
 };
  this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    const dishes = this._course[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return  dishes[randomIndex];
  },

genertateRandomMeal() {
 const appetizers = this.getRandomDishFromCourse('appetizers');
 const mains = this.getRandomDishFromCourse('mains');
 const desserts = this.getRandomDishFromCourse('desserts');
 const totalPrice = appetizers.price + main.price + 
 dessert.price;
 return `Your meal is ${appetizer.name},${main.name},
 and ${dessert.name} and the total price is ${totalPrice} `;

}
};


menu.addDishToCourse('appetizers','salad',4.00)
menu.addDishToCourse('appetizers','wings',4.50)
menu.addDishToCourse('appetizers','fries',5.00)

menu.addDishToCourse('mains','steak',4.00)
menu.addDishToCourse('mains','salmon',4.00)
menu.addDishToCourse('mains','tofu',4.00)

menu.addDishToCourse('dessert','ice',4.00)
menu.addDishToCourse('dessert','steak',4.00)
menu.addDishToCourse('dessert','steak',4.00)

const meal = menu.generateRandom();
console.log(meal);



