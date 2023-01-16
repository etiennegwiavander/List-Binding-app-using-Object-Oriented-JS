const myList = document.getElementById("my-list");
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const removeBtn = document.getElementById("remove-btn")



class ListBinding {
    constructor(element){
        this.listElement = element;
        this.textList = []
    }
    //creating an li tag
    static createListItem(text){
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    render() {

        // remove all existing list elements from the li
        while (this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // fill the li tag

        for(const text of this.textList){
           this.listElement.appendChild(ListBinding.createListItem(text));
        }

    }

    add(text){
        this.textList.push(text)
        this.render()
    }

    remove(index){
        this.textList.splice(index, 1)
        this.render()
    }
}

const listBinding = new ListBinding(myList)


inputBtn.addEventListener("click", ren = () =>{

    listBinding.add(inputEl.value)
    inputEl.value = " "
})

removeBtn.addEventListener("click", rmv = () =>{
    listBinding.remove(0)
})




























// class Men{
//     constructor (name, age, job){
//         this.name = name
//         this.age = age
//         this.job = job
//     }
//     life(){
//         let date = new Date();
//         console.log(date)
//         return date.getFullYear() - this.age;
  
//     }
    
// }
// let oldMan = new Men('John', 1960, 'Web Developer');
// console.log(oldMan.age, oldMan.name, oldMan.job, oldMan.life())


// demo.innerHTML = `
//     <p id="demo">
//         My name is ${oldMan.name} and 
//         I was born in ${oldMan.age}. I work as a ${oldMan.job}
//     </p>`;
// countDown = num.Math.floor()
// setInterval(countDown, 100)

// class Triangle {
//     constructor( _base, _hight){

//         this.base = _base
//         this.hight = _hight
 
//     }
//     area (){
//         return 1/2 * this.base * this.hight
//     }  
// }
// let myTriangle = new Triangle(10, 8)
// let myTriangle2 = new Triangle(14, 10)
// console.log(myTriangle)
// console.log(myTriangle2.area())


// class Rectangle {
//     constructor(_length, _width, _color){
//         this.length = _length
//         this.width = _width
//         this.color =_color
//     }

//     getArea(){
//         let area = this.length * this.width
//         return `This is a rectangle with area: ${area} and color  ${this.color}`
//     }
// }
// let rectangl1 = new Rectangle(89, 23, "red")

// console.log(rectangl1.getArea())


// class Square {
//     constructor(_side){
//         this.length = _side;
//         this.width = _side;
//         this.count = 0

//     }

//     get area (){
//         this.count++
//         return this.length * this.width
//     }
//     static validSides(side1, side2){
//         return side1 === side2
//     }
// }

// let square1 = new Square(12);
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)

// console.log(square1.count)

// console.log(Square.validSides(2, "2"))

// // Try working with arrays



// class Display{
//     constructor(){
//         this.emptyArr = []

//     }
//     add(){ 
//         this.emptyArr.push(inputEl.value)
//     }

//     popArr(){
        
//         for(let i = 0; i < this.emptyArr.length; i++){
//           return this.emptyArr += this.emptyArr[i] + " " 
            
//         }      
//     }
// }
// let display1 = new Display

// inputBtn.addEventListener("click", render =>{
//     console.log(display1.add())
// })