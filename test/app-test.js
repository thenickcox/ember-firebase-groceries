module('integration tests', {
  setup: function() {
    Ember.run(function() {
      App.reset();
    });
  },
});

test('adding an item', function(){
  visit('/');
  andThen(function(){
    equal(find('h3').text(), 'Items', 'h3 text did not equal items');
  });
});
