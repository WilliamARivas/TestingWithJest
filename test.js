const {sum} = require('./app.js');

test('add 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const{ fromEuroToDollar } = require('./app.js')
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2)
})

test("One dollar should be 106.583333 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const expected = (10/1.2) * 127.9
    expect(fromDollarToYen(10)).toBe(1065.8333333333335)
})

test("One Yen should be 3.127443315089914", function(){
    const { fromYenToPound } = require('./app.js')
    const expected = (4000/127.9) * 0.8
    expect(fromYenToPound(4000)).toBe(expected)
})