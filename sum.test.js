import sum from './sum';

test('adds 1+2 to equal 2',()=>{
    expect(sum(1,2)).toBe(3);
});

test('adds -2+3 to equal 1',()=>{
    expect(sum(-2,3)).toBe(1);
});