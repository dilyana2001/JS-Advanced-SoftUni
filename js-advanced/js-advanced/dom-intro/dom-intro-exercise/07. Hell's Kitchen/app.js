function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);
        let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
        let workersOutput = document.querySelector('#workers p');

        let obj = {};

        input.forEach(line => {
            let [restaurantName, workersData] = line.split(' - ');
            let workerInput = workersData.split(', ').map(el => {
                let [name, salary] = el.split(' ');
                return { name, salary: Number(salary) };
            })

            if (!obj[restaurantName]) {
                obj[restaurantName] = {
                    workers: [],
                    getAverageSalary: function() {
                        return this.workers.reduce((a, b) => a + b.salary, 0) / this.workers.length;
                    }
                };
            }

            obj[restaurantName].workers = obj[restaurantName].workers.concat(workerInput);
        })

        let bestAverageSalary = Object.entries(obj).sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
        let bestSalary = Object.values(bestAverageSalary[0][1].workers).sort((a, b) => b.salary - a.salary);

        bestRestaurantOutput.textContent = `Name: ${bestAverageSalary[0][0]} Average Salary: ${(bestAverageSalary[0][1].getAverageSalary().toFixed(2))} Best Salary: ${bestSalary[0].salary.toFixed(2)}`;
        workersOutput.textContent = Object.values(bestSalary).map(el => `Name: ${el.name} With Salary: ${el.salary}`).join(' ');
    }
}

["PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Joe 780, Jane 660, Bob 1300"
]

["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]