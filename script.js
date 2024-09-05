const { createApp } = Vue;

createApp({

    data() {
        return {
            title: 'ToDo VUE',
            todoList: [
                {
                    todo: 'Iscriversi a Boolean',
                    done: ''
                },
                {
                    todo: 'Fare conoscenza con la classe 131',
                    done: ''
                },
                {
                    todo: 'Studiare HTML',
                    done: ''
                },
                {
                    todo: 'Studiare JavaScript',
                    done: ''
                },
                {
                    todo: 'Studiare VueJS',
                    done: ''
                },
                {
                    todo: 'Iniziare PHP',
                    done: ''
                },
            ]
        }
    }

}).mount('#app')