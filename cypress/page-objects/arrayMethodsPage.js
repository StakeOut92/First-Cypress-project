class ArrayMethodsPage {
    planets = [
        {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395, solarSystem: true},
        {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723, solarSystem: true},
        {planet: "Earth", radius: 6378, density: 5.52, distance: 1, solarSystem: true},
        {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53, solarSystem: true},
        {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21, solarSystem: true},
        {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551, solarSystem: true},
        {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213, solarSystem: true},
        {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07, solarSystem: true}
    ]

    taskNumberOne() {
            cy.log("Output 'planets' array data in logs")
            let arrayLength = this.planets.length
            for (let i = 0; i < arrayLength; i++) {
                cy.log(`planet: ${this.planets[i].planet},
        radius: ${this.planets[i].radius},
        density: ${this.planets[i].density},
        distance: ${this.planets[i].distance},
        solarSystem: ${this.planets[i].solarSystem}`)
            }
    }

    taskNumberTwo() {
        cy.log("Starting method using 'JSON.stringify'")
        this.planets.forEach(planet => {
            cy.log(JSON.stringify(planet))
        })
        cy.log("Starting method with 'map'")
        this.planets.forEach(planet => {
            cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
        })
    }

    taskNumberThree() {
        cy.log("Add new object in 'planets' array")
        this.planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})
        this.planets.forEach(planet => {
            cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
        })
    }

    taskNumberFour() {
        cy.log("Print the sum of all fields 'radius' in planets array")
        let initialValue = 0;
        let sumWithInitial = this.planets.reduce(
            (accumulator, currentValue) => accumulator + currentValue.radius,
            initialValue
        );
        cy.log(sumWithInitial)
    }

    taskNumberFive() {
        cy.log("Print planets whose distance is greater than a certain value, such as five.")
        const planetDistanceMoreThanFive = this.planets.filter(function (e) {
            return e.distance > 5
        })
        planetDistanceMoreThanFive.forEach(planetDistanceMoreThanFive => {
            cy.log(Object.keys(planetDistanceMoreThanFive).map(key => key + ':' + planetDistanceMoreThanFive[key]).join(', '))
        })
    }

    taskNumberSix() {
        cy.log("Starting searching method of index in 'for' case")
        let searchTerm = "SomeNewPlanet"
        let index = -1
        for (let i = 0, len = this.planets.length; i < len; i++) {
            if (this.planets[i].planet === searchTerm) {
                index = i
                break
            }
        }

        cy.log(" Starting searching method in 'indexOf'")
        let splicedPlanetIndex = this.planets.map(x => x.planet).indexOf('SomeNewPlanet')
        cy.log("Splice planet by founded index")
        this.planets.splice(splicedPlanetIndex)
        this.planets.forEach(planet => {
            cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
        })
    }

    taskNumberSeven() {
        cy.log("Starting method for sorting an array by radius (ascending)")
        let sortedPlanetsByRadius = this.planets.sort(function (a, b) {
            return a.radius - b.radius
        })
        sortedPlanetsByRadius.forEach(sortedPlanetsByRadius => {
            cy.log(Object.keys(sortedPlanetsByRadius).map(key => key + ':' + sortedPlanetsByRadius[key]).join(', '))
        })
    }

    taskNumberEight() {
        cy.log("Starting method sorting planet by Name")
        let sortedPlanetsByName = this.planets.sort(function (a, b) {
            let x = a.planet.toLowerCase()
            let y = b.planet.toLowerCase()
            if (x < y) {
                return -1
            }
            if (x > y) {
                return 1
            }
            return 0
        })
        sortedPlanetsByName.forEach(sortedPlanetsByName => {
            cy.log(Object.keys(sortedPlanetsByName).map(key => key + ':' + sortedPlanetsByName[key]).join(', '))
        })
    }

    taskNumberNine(){
        cy.log("Starting method to print array lenght in console")
        let planetArrayLength = this.planets.length
       console.log(planetArrayLength)
    }
}

export default new ArrayMethodsPage()