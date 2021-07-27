function test(input) {
    let inputsValue = input

    let obj = {}
    inputsValue.forEach(line => {
        let [restaurantName, workersData] = line.split(' - ')
        let workerInput = workersData.split(', ').map(el => {
            let [name, salary] = el.split(' ')
            salary = Number(salary)
            return { name, salary }
        })
        if (!obj[restaurantName]) {
            obj[restaurantName] = {
                workers: [],
                getAverageSalary: function() {
                    return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length
                }
            };
        }
        obj[restaurantName].workers = obj[restaurantName].workers.concat(workerInput)
    })
    let bestAverageSalary = Object.values(obj).sort((a, b) => b.getAverageSalary() - a.getAverageSalary())
    console.log(bestAverageSalary)
        // let bestSalary = bestAverageSalary[0].sort((a, b) => )
        // let bestWorkers = bestSalary.sort((a, b) => )


    // bestRestaurantOutput.textContent = `Name: ${bestAverageSalary[0]} Average Salary: ${bestAverageSalary[1].salary} Best Salary: ${bestSalary[1].salary}`
    // workersOutput.textContent = forEach(el => `Name: ${el[1].name} With Salary: ${el[1].salary}`)
}
test(["PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Bob 1300, Joe 780, Jane 660"
])