import Chance from 'chance'
import {isSuperSet, intersection, difference, union} from "../utils/helper";


describe('Set methods', () => {

    it('Add definitions in set', () => {
        let currencySet = new Set();
        currencySet.add("BYN");
        currencySet.add("USD");
        currencySet.add("UAH");
        currencySet.add(5);
        currencySet.add(1234);
        currencySet.add({a: 2, b: 2})
        console.log(currencySet);
        console.log("Set has a USD value" + currencySet.has('USD'));
    });

    it('Output of random numbers from Set', () => {
        let MyArray = ["value1", "value2", "value3"]
        let currencySet = new Set(MyArray);
        let arraySize = MyArray.length;
        let randomArraySize = chance.integer({min: 1, max: arraySize});
        console.log(chance.pickset([...currencySet], randomArraySize));
    })

    it('Custom functions', () => {
        let setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6])

        console.log(isSuperSet(setA, setB))
        console.log(intersection(setA, setC))
        console.log(difference(setA, setC))
        console.log(union(setA, setC))
    });
})