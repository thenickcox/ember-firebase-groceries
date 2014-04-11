window.App = Ember.Application.create({});

//App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  //firebase: new Firebase("https://luminous-fire-4173.firebaseio.com/")
//});
//App.ApplicationSerializer = DS.FirebaseSerializer.extend();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function(){
  this.resource('items', { path: '/' });
});

App.Item = DS.Model.extend({
  title: DS.attr(),
  isBought: DS.attr(),
  quantity: DS.attr(),
});

App.Item.FIXTURES = [
  {
    id: 1,
    title: 'carrots',
    quantity: 1,
    isBought: false,
  },
  {
    id: 2,
    title: 'celery',
    quantity: 1,
    isBought: false,
  }
];

App.ItemsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('item');
  }
});


App.ItemsController = Ember.ArrayController.extend({

  totalItems: function(){
    return this.get('length');
  }.property('@each'),

  boughtItems: function(){
    return this.filterBy('isBought').get('length');
  }.property('@each.isBought'),

  itemStatement: function(){
    var total = this.get('totalItems');
    switch(total){
      case 0:
        return 'O items'
        break;
      case 1:
        return '1 item'
        break;
      default:
        return total + ' items'
        break;
    }
  }.property('totalItems'),

  remainingItems: function(){
    return this.get('totalItems') - this.get('boughtItems');
  }.property('totalItems', 'boughtItems'),

  progress: function(){
    if (this.get('boughtItems') === 0 ) {
      return 0;
    }
    return (this.get('boughtItems') / this.get('totalItems')) * 100;
  }.property('totalItems', 'boughtItems'),

  actions: {
      createItem: function(){
        var title = this.get('itemTitle');
        if (!title || !title.trim()) { return };
        var item = this.store.createRecord('item', {
          title: title,
          isBought: false,
          quantity: 1
        });
        this.set('itemTitle', '');
        item.save();
      },
    }
});

App.ItemController = Ember.ObjectController.extend({

  displayTitle: function(){
    return this.get('title') + ': ' + this.get('quantity');
  }.property('quantity', 'title'),

  quantityIsZero: Ember.computed.equal('quantity', 1),

  actions: {
    toggleProperty: function(){
      var item = this.get('model');
      item.toggleProperty('isBought');
    },
    deleteItem: function(){
      var item = this.get('model');
      item.deleteRecord();
      item.save();
    },
    incrementQuantity: function(){
      var item = this.get('model'),
          newQty = item.get('quantity') + 1;
      return item.set('quantity', newQty);
    },
    decrementQuantity: function(){
      var item = this.get('model'),
          newQty = item.get('quantity') - 1;
      return item.set('quantity', newQty);
    }
  }
});

App.ItemView = Ember.View.extend({
  click: function(e){
    this.get('controller').send('toggleProperty');
  }
});
