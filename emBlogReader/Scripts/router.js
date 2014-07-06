Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        //additional child routes will go here later 
        //outlet wouldnt work until I added at least an empty function here
    });
});

Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('todos');
    }
});