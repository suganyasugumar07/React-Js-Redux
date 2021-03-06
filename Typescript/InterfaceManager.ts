import { InterFaceEg } from './InterfaceEg';

function printInterfaceData(intArg: InterFaceEg,...restArg): void {
    const [name1, location1, mobile1] = restArg;
    console.log("--------------");
    console.log(intArg.name);
    console.log(intArg.location); // optional
    console.log(intArg.mobile);
    console.log(name1);
    console.log(location1);
    console.log(mobile1);
}

printInterfaceData({ name: 'Suganya', mobile: '12345678' }, 'Suganya', 'Chennai', '12345678');

const newData: InterFaceEg = { name: 'Test', mobile: '34534234' }
printInterfaceData(newData, 'Suganya');