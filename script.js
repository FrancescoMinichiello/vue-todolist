const { createApp } = Vue;

createApp({

    data() {
        return {
            title: 'ToDo VUE',
            newtodoContent: '',
            todoList: [
                {
                    todoText: 'Iscriversi a Boolean',
                    done: false
                },
                {
                    todoText: 'Fare conoscenza con la classe 131',
                    done: false
                },
                {
                    todoText: 'Studiare HTML',
                    done: false
                },
                {
                    todoText: 'Studiare JavaScript',
                    done: false
                },
                {
                    todoText: 'Studiare VueJS',
                    done: false
                },
                {
                    todoText: 'Iniziare PHP',
                    done: false
                },
            ]
        }
    },
    methods: {
        addNewTask(content) {
            if (content.length >= 3) {
                const newTask = {
                    todoText: content,
                    done: false
                }
                this.todoList.push(newTask);
                this.cleartodoInput();
            }
            console.log('questo è il content: ', content)
        },

        cleartodoInput() {
            this.newtodoContent = '';
        },

        deleteTask(index) {
            this.todoList[index].done = !this.todoList[index].done
        }
    }
}).mount('#app')