class City {
    constructor(name) {
        this.name = name;
        this.routes = {};
    }

    addRoute(city, price) {
        this.routes[city] = price;
    }
}

let atlanta = new City("Atlanta"),
    boston = new City("Boston"),
    chicago = new City("Chicago"),
    denver = new City("Denver"),
    el_paso = new City("El Paso");

atlanta.add_route("boston", 100);
atlanta.add_route("denver", 160);
boston.add_route("denver", 180);
boston.add_route("chicago", 120);
chicago.add_route("el_paso", 80);
denver.add_route("chicago", 40);
denver.add_route("el_paso", 140);

function dijkstra(startCity, otherCities) {
    let routesTo_cities = {};

    routesTo_cities[startCity.name] = [0, startCity.name];


    for(let i = 0; i < otherCities.length; i++) {

        routesTo_cities[otherCities[i].name] = [Infinity, null];
    }

    visitedCities = [];

    currentCity = startCity;

    while(currentCity) {
        visitedCities.push(currentCity);

       for (let [name, price] of Object.items(currentCity)) {
           if(routesTo_cities[name][0] < (price + routesTo_cities[currentCity])) {
               routesTo_cities[name] = [price + routesTo_cities[currentCity], currentCity];
           }
       }

    }

    currentCity = null;

    cheapestRoutefromCurrentCity = null;


    for (let [name, price] of Object.items(routesTo_cities)) {
        if(price < cheapestRoutefromCurrentCity && !visitedCities.includes(name)) {
            currentCity = name;
            cheapestRoutefromCurrentCity = price;
        }
    }

    return routesTo_cities;


}