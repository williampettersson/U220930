const structure = new XMLHttpRequest();
structure.open('GET', 'structure.json');
structure.send();

const carsArray = new XMLHttpRequest();
carsArray.open('GET', 'cars.json');
carsArray.send();


structure.onload = () => {
    const keys = JSON.parse(structure.responseText);

    for (const key in keys) {
        var header = document.createElement(key);
        header.innerHTML = (keys[key]);
        main.appendChild(header);
    }
}


carsArray.onload = () => {
    const cars = JSON.parse(carsArray.responseText);

    var list = document.createElement('ul');
    carList.appendChild(list);

    cars.Cars.forEach(anka => {
        console.log(anka);
        var listRow = document.createElement('li');
        listRow.innerHTML = (`${anka.Brand}, ${anka.Model}, ${anka.Year}`);

        list.appendChild(listRow);

    });
}



loadCars = () => {
    carList.hidden = false;
}