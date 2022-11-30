//shape
class Shape{
    constructor() {
        if(this.constructor==Shape){
            throw new Error("cant use shape")
        }
    }
    area(){
        throw new Error("cant use shape")
    }
    perimeter(){
        throw new Error("cant use shape")
    }
}
//polygon
class Polygon extends Shape{
    #width
    #height
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.width*this.height
    }
    perimeter() {
        return 2*(this.width+this.height)
    }
}
//Rectangle
class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
    }
}

//Square
class Square extends Polygon {
    constructor(width) {
        super(width, width);
    }
}

class NonPolygon extends Shape
{
    #radius
    constructor(radius) {
        super();
        this.radius=radius
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter()
    {
        return 2*Math.PI*this.radius;
    };
}
class Circle extends NonPolygon{
    constructor(radius) {
        super(radius);

    }
}

class Cylindrical extends Circle{
#height
    constructor(radius,height) {
        super(radius);
        this.height = height;
    }

    perimeter(radius, height)
    {
        return 2 * (radius + height);
    }
    area (radius, height) {
        return (2*3.14*radius*(radius + height));
    }
}



// let rec=new Rectangle(2,3)
// console.log(rec.area())
// console.log(rec.perimeter())
//
// let sqr=new Square(2)
// console.log(sqr.area())
// console.log(sqr.perimeter())
//
let sqr=new Square(2)
console.log(sqr.area())
console.log(sqr.perimeter())


let area,perimeter
const shape=document.getElementById('shape').value
const width=document.getElementById('width').value
const height=document.getElementById('height').value
const radius=document.getElementById('radius').value
const p=document.getElementById('perimeter')
const s=document.getElementById('area')
function sub() {
if (shape=="rec"){
    let rec=new Rectangle(height,width)
    area=rec.area()
    perimeter=rec.perimeter()
}
    if (shape=="sqr"){
        let sqr=new Square(width)
        area=sqr.area()
        perimeter=sqr.perimeter()
    }
    if (shape=="cir"){
        let cir=new Circle(radius)
        area=cir.area()
        perimeter=cir.perimeter()
    }
    if (shape=="lin"){
        let lin=new Cylindrical(radius,height)
        area=lin.area()
        perimeter=lin.perimeter()
    }
    p.innerHTML=perimeter
    s.innerHTML=area
}

sub();