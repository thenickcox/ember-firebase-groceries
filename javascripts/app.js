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
  isBought: DS.attr()
});

App.Item.FIXTURES = [
  {
    id: 1,
    title: 'carrots'
  },
  {
    id: 2,
    title: 'celery'
  }
];

App.ItemsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('item');
  }
});


App.ItemsController = Ember.ArrayController.extend({
  actions: {
      createItem: function(){
        var title = this.get('itemTitle');
        if (!title || !title.trim()) { return };
        var item = this.store.createRecord('item', {
          title: title,
          isBought: false
        });
        this.set('itemTitle', '');
        item.save();
      },
    }
});

App.ItemController = Ember.ObjectController.extend({
  actions: {
    deleteItem: function(){
      var item = this.get('model');
      item.deleteRecord();
      item.save();
    }
  }
});
