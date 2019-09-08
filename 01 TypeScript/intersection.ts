interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

let x: IStudent & IWorker = {
    id: "",
    age: 0,
    companyId: ""
};

// let num: number;
// console.log(num);

x.id = "123";
x.age = 12;
x.companyId = "999";