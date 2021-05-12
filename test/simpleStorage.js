const SimpleStorage = artifacts.require('SimpleStorage');

contract('Simple Storage', () => {
  it('should set the value', async () => {
    const simpleStorage =  SimpleStorage.deployed();
    await simpleStorage.set('Whats up Satoshi?? Having fun HODLing all those BTC :D :D');
    const result = await simpleStorage.get();
    assert(result === 'Whats up Satoshi?? Having fun HODLing all those BTC :D :D');
  });
});