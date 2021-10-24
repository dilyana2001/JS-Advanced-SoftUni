class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(username, salary, position, department) {
        if (!username, !salary, !position, !department ||
            username == undefined, salary == undefined, position == undefined, department == undefined ||
            username == null, salary == null, position == null, department == null ||
            salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];

        }
        this.departments[department].push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let result = [];
        let bestDepartment = Object.entries(this.departments);
        let as = bestDepartment[1].reduce((a, b) => a + b.salary, 0)

        console.log(as)

        //     .sort((a, b) => a[1].salary - b[1].salary)
        //     .forEach(x => {
        //         result.push('Best Department is: ' + x[0]);
        //         let bestDepartment = (x[1]
        //         result.push('Average salary:' + (bestDepartment).toFixed(2));
        //         x[1].forEach(y => {
        //             result.push(`${y.username} ${y.salary} ${y.position}`);
        //         })
        //     });
        // return result.join('\n');
    }
}

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
let  c  =  new  Company();
c.addEmployee('Stanimir',  2000,  'engineer',  'Construction');
c.addEmployee('Pesho',  1500,  'electrical engineer',  'Construction');
c.addEmployee('Slavi',  500,  'dyer',  'Construction');
c.addEmployee('Stan',  2000,  'architect',  'Construction');
c.addEmployee('Stanimir',  1200,  'digital marketing manager',  'Marketing');
c.addEmployee('Pesho',  1000,  'graphical designer',  'Marketing');
c.addEmployee('Gosho',  1350,  'HR',  'Human resources');
console.log(c.bestDepartment());