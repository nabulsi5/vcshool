function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function pow(a, b) {
    return Math.pow(a, b);
}


module.exports = {
    add: add,
    mult: mult,
    minus: minus,
    div: div,
    pow: pow
}