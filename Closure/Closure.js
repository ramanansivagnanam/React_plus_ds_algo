function Closure(a) {
    return function addOneMore(b) {
        return function addMOre(c) {
            return a + b + c;
        }
    }
}

const total = Closure(10)(10)(10);