Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 3,
        title: 'Hand Coding This Tutorial',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Always Helps Me learn more!',
        isCompleted: false
    }
]