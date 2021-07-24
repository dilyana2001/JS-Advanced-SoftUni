function tickets(arr, criteria) {
    function splitLines(line) { return line.split('|') }

    function nameTheTickets([destination, price, status]) { return new Tickets(destination, Number(price), status) }

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    const sortParser = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return arr
        .map(splitLines)
        .map(nameTheTickets)
        .sort(sortParser[criteria])

}
console.log(tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'))