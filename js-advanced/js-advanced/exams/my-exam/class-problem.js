class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.istOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`)
        }
        if (this.istOfParticipants.some(n => n.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.istOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        if (!this.istOfParticipants.some(n => n.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        let nameForUnregister = this.istOfParticipants.find(n => n.name == name);
        let index = this.istOfParticipants.indexOf(nameForUnregister);
        this.istOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let participant1Obj = this.istOfParticipants.find(c => c.name == participant1);
        let participant2Obj = this.istOfParticipants.find(c => c.name == participant2);

        if (participant1Obj.name == undefined && participant2Obj.name == undefined) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {
            participant1Obj.power = Number(participant1Obj.power) + 20;
            participant1Obj.wins = Number(participant1Obj.wins) + 1;

            return `The ${participant1Obj.name} successfully completed the game ${typeOfGame}.`
        }
        if (typeOfGame == 'WaterBalloonFights') {
            if (participant1Obj.condition != 'child' || participant2Obj.condition != 'child') {
                throw new Error(`Choose players with equal condition.`);
            }
            if (participant1Obj.power > participant2Obj.power) {
                participant1Obj.wins = Number(participant1Obj.wins) + 1;
            } else if (participant1Obj.power < participant2Obj.power) {
                participant2Obj.wins = Number(participant2Obj.wins) + 1;
            } else {
                return `There is no winner.`
            }
            let winner = '';
            if (participant1Obj.power > participant2Obj.power) {
                winner = participant1Obj.name
            } else {
                winner = participant2Obj.name
            }
            if (winner) {
                return `The ${winner} is winner in the game ${typeOfGame}.`;
            }
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.istOfParticipants.length} participants on camping to ${this.location}`);
        let sorted = this.istOfParticipants.sort((a, b) => b.wins - a.wins);
        for (const part of sorted) {
            result.push(`${part.name} ${part.condition} - ${part.power} - ${part.wins}`)
        }
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights",  "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());