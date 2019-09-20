// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2{
    constructor(stats) {
        this.length = stats.length;
        this.width = stats.width;
        this.height = stats.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker2 {
    constructor(stats2){
        super(stats2);
    }
    cubeVolume() {
        return this.length * this.length * this.length;
    }
    cubeSurfaceArea() {
        return (this.length * this.length) * 6;
    }   
}

const cube = new CubeMaker ({
    length: 5
});

console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150