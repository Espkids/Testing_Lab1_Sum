const minus = require('./minus')

test('99 - 97 เท่ากับ 1',() => {
    expect(minus(99,97)).toBe(1);
});

test('23 - 19 เท่ากับ 4',() => {
    expect(minus(23,19)).toBe(4);
});

test('7 - 5 เท่ากับ 2',() => {
    expect(minus(7,5)).toBe(2);
});

test('85 - 78 เท่ากับ 7',() => {
    expect(minus(85,78)).toBe(7);
});

test('82 - 66 เท่ากับ 16',() => {
    expect(minus(82,66)).toBe(16);
});