module('Item');

test('computed property', function(){
  var store = App.__container__.lookup('store:main'),
      item;

  Ember.run(function(){
    item = store.createRecord('item', {
      title: 'onions',
      isBought: false,
      quantity: 2
    });
    equal(item.get('displayTitle'), 'onions: 2', 'did not match');
  });
});
