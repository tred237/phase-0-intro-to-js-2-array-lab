// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}


function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}


function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    const moreCatsBack = [...cats, name];
    return moreCatsBack;
}


function prependCat(name) {
    const moreCatsFront = [name, ...cats];
    return moreCatsFront;
}


function removeLastCat(name) {
    return cats.slice(0,-1);
}


function removeFirstCat(name) {
    return cats.slice(1);
}