/*
objects
const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@gmail.com"
} 
*/

// classes
class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    print(){
        console.log(`Painting with color ${this.color}`);
        
    }
}

const rect = new Rectangle(10, 20, "red"); //
const area = rect. area();
rect.print();
console.log(area);
