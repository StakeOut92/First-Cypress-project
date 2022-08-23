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
    //     cy.log("Output 'planets' array data in logs")
    //     let arrayLength = this.planets.length
    //     for (let i = 0; i < arrayLength; i++) {
    //         cy.log(`planet: ${this.planets[i].planet},
    // radius: ${this.planets[i].radius},
    // density: ${this.planets[i].density},
    // distance: ${this.planets[i].distance},
    // solarSystem: ${this.planets[i].solarSystem}`)
    //     }
    }

    taskNumberTwo() {
        // cy.log("Starting method using 'JSON.stringify'")
        // this.planets.forEach(planet => {
        //     cy.log(JSON.stringify(planet))
        // })
        // cy.log("Starting method with 'map'")
        // this.planets.forEach(planet => {
        //     cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
        // })
    }

    taskNumberThree(){
        // cy.log("Add new object in 'planets' array")
        // this.planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})
        // this.planets.forEach(planet => {
        //     cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
        // })
    }

    taskNumberFour(){
        cy.log("Print the sum of all fields 'radius' in planets array")
        let initialValue = 0;
        let sumWithInitial = this.planets.reduce(
            (accumulator, currentValue) => accumulator + currentValue.radius,
            initialValue
        );
        cy.log(sumWithInitial)
    }


}

export default new ArrayMethodsPage()