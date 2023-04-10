class Location{
    constructor(x, y, z) {
        this.coordinates = [x, y, z] 
    }

    static sectors = {
        '+++': "Alfa",
        '++-': "Beta",
        '+-+': "Gama",
        '+--': "Delta",
        '-++': "Épsilon",
        '-+-': "Zeta",
        '--+': "Sigma",
        '---': "Ômega",
    }
    

    getSector(){
        const signs = this.coordinates.map(coord => coord >= 0 ? "+" : "-").join('')
        return Location.sectors[signs]
    }

    getDistance(){
        return Math.sqrt(this.coordinates.reduce((accum, coord) => accum + (coord ** 2), 0))
    }
}




const point1 = new Location(37, 42, 15);
const point2 = new Location(114, 49, 0);
const point3 = new Location(-37, 0, 0);
const point4 = new Location(-19, -80, -32);

console.log(point1.getSector(), `\n Distance: ${point1.getDistance()} units`)
console.log(point2.getSector(), `\n Distance: ${point2.getDistance()} units`)
console.log(point3.getSector(), `\n Distance: ${point3.getDistance()} units`)
console.log(point4.getSector(), `\n Distance: ${point4.getDistance()} units`)