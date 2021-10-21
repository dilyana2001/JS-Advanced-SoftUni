class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        } else {
            const person = this.allCustomers.find(x => x.personalId == personalId);
            if (!person.totalMoney) {
                person.totalMoney = 0;
                person.transactions = [];

            }
            let deposit = true;
            person.transactions.push({ number: person.transactions.length + 1, names: { firstName: person.firstName, lastName: person.lastName }, deposit, amount });
            person.totalMoney += amount;
            return `${person.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        } else {
            const person = this.allCustomers.find(x => x.personalId == personalId);
            if (person.totalMoney >= amount) {
                person.totalMoney -= amount;
                let withdraw = true;
                person.transactions.push({ number: person.transactions.length + 1, names: { firstName: person.firstName, lastName: person.lastName }, withdraw, amount });
                return `${person.totalMoney}$`;
            } else {
                throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
            }
        }
    }

    customerInfo(personalId) {
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        } else {
            const person = this.allCustomers.find(x => x.personalId == personalId);
            let result = [];
            result.push(`Bank name: ${this._bankName}`);
            result.push(`Customer name: ${person.firstName} ${person.lastName}`);
            result.push(`Customer ID: ${person.personalId}`);
            result.push(`Total Money: ${person.totalMoney}$`);
            result.push(`Transactions:`);

            const sortedTransactions = person.transactions.sort((a, b) => b.number - a.number);

            for (const x of sortedTransactions) {
                if (x.deposit) {
                    result.push(`${x.number}. ${x.names.firstName} ${x.names.lastName} made deposit of ${x.amount}$!`);
                } else if (x.withdraw) {
                    result.push(`${x.number}. ${x.names.firstName} ${x.names.lastName} withdrew ${x.amount}$!`);
                }
            }
            return result.join('\n');
        }
    }
}


let  bank  =  new  Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName:   'Svetlin',  lastName:   'Nakov',  personalId:  6233267 }));
console.log(bank.newCustomer({ firstName:   'Mihaela',  lastName:   'Mileva',  personalId:  4151596 }));

bank.depositMoney(6233267,  250);
console.log(bank.depositMoney(6233267,  250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267,  125));

console.log(bank.customerInfo(6233267));