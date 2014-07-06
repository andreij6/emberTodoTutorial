Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function () {
            //get the todo title set by the New Todo text field
            var title = this.get('newTitle');
            if (!title) { return false; }
            if (!title.trim()) { return; }

            //Create the new todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            //clear the new todo text field
            this.set('newTitle', '');

            //save
            todo.save();
        }
    }
});