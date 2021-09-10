interface Reportable {
    summary(): string;
}


const oldCivic = {
    name: 'sivic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `name ${this.name}`
    }
}

const cola = {
    color: 'brown',
    carbinated: true,
    sugar: 40,
    summary(): string {
        return `Cola has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(cola);