// 1. Copy and paste your prototype in here and refactor into class syntax.
class NewCuboidMaker {
  constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume (){
    let volume =this.width*this.length*this.height;
    return volume;
  }  
  surfaceArea (){
    let area = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
return area;
  }
  
};

const cuboid = new NewCuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
