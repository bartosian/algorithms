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

    let routesFromCity = {};

    routesFromCity[startCity.name] = [0, nil];

    for(let i = 0; i < otherCities.length; i++) {
        let { name } = otherCities[i];

        routesFromCity[name] = [Infinity, null];
    }

    let visitedCities = [];
    let currentCity = startCity;


    while(currentCity) {
        visitedCities.push(currentCity);
        let { routes } = currentCity;
        
        for([name, price] of Object.items(routes)) {
            if(routesFromCity[name][0] < price + routesFromCity[currentCity][0]) {
                routesFromCity[name] = [price + routesFromCity[currentCity][0], currentCity];
            }
        }

        currentCity = null;
        cheapestPrice = null;

        for([name, price_info] of Object.items(routesFromCity)) {
            if(price_info[0] < cheapestPrice && !visitedCities.includes(name)) {
                cheapestPrice = price_info[0];
                currentCity = name;
            }
        }
    }

    return routesFromCity;

}