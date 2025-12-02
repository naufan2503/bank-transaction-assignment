const { deposit, withdraw } = require('./main');


//test('deposit 100 into 0 gives balance 100', () => {
  //expect(deposit(0, 100)).toBe(100);
//});

//test('withdraw 40 from 100 gives balance 60', () => {
  //expect(withdraw(100, 40)).toBe(60);
//});


test('withdraw more than balance should throw "Insufficient funds"', () => {
  expect(() => withdraw(50, 60)).toThrow('Insufficient funds');
});

//test('deposit with non-numeric amount should throw error', () => {
  //expect(() => deposit(0, "100")).toThrow('Balance and amount must be numbers');
//});


//test('INTENTIONAL FAIL: withdraw 30 from 100 should be 80 (WRONG)', () => {
  //expect(withdraw(100, 30)).toBe(80); // Wrong expected value (should be 70)
//});
