function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++){
        line += '#'
    }
    return line;
}
/*`-------------------------------*/

function makeSquare(size) {

    return makeRectangle(size, size)
    }

    console.log(makeSquare(3,3))

/*-----------------------*/

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n')
    }
    return rectangle.slice(0,-1);
}

/*-------------------------------*/

function makeDownStains(height){
    let stairs ="";
    for(i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n')
    }
    return stairs.slice(0,-1);
}
console.log(makeDownStains(5));

/*--------------------------*/

function makeSpaceLine(numSpaces, numChars, char = "#") {
    let line = ' '.repeat(numSpaces) + char.repeat(numChars) + ' '.repeat(numSpaces);
    return line;
}
console.log(makeSpaceLine(2, 3));



function makeIsoscelesTriangle(height, char = "#") {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i -1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

/*---------------------------------*/

function makeDiamond(height, char = "#") {
    let diamond = '';
    diamond + makeIsoscelesTriangle(height);
    for (let i = height - 1; i > 0; i--) {
        let numChars = 2 * i -1;
        let line = makeSpaceLine(height - i, numChars);
        diamond += line + '\n';
        
    }
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));













