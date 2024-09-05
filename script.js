const { createApp } = Vue;

createApp({

    data() {
        return {
            title: 'ToDo VUE',
            todoList: [
                {
                    todoText: 'Iscriversi a Boolean',
                    done: 'false'
                },
                {
                    todoText: 'Fare conoscenza con la classe 131',
                    done: 'false'
                },
                {
                    todoText: 'Studiare HTML',
                    done: 'false'
                },
                {
                    todoText: 'Studiare JavaScript',
                    done: 'false'
                },
                {
                    todoText: 'Studiare VueJS',
                    done: 'false'
                },
                {
                    todoText: 'Iniziare PHP',
                    done: 'false'
                },
            ]
        }
    }

}).mount('#app')