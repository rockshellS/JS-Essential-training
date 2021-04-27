class Car {
  constructor(
    color, 
    tires, 
    doors, 
    automatic, 
    hasFlat
    ) {
    this.color = color;
    this.tires = tires;
    this.doors = doors;
    this.automatic = automatic;
    this.hasFlat = hasFlat;
  }
  toggleFlat(tireStatus) {
    this.hasFlat = tireStatus;
  }
  changeColor(colorChange){
    this.color = colorChange
  }
}
export default Car;

console.log("car object:", Car)
