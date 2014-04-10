moduleFor('controller:item', 'ItemController');

test('ItemController - incrementQuantity', function(){
  expect(2);
  var itemController = this.subject();
  equal(itemController.get('quantity', 1));
  itemController.send('incrementQuantity');
  equal(itemController.get('quantity', 2));
});
