import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    // {id: 1, title: 'example 1', completed: false}
    const todos = ref([]);
    let id = 1;
    
    function create(title) {
        todos.value.push({
            id: id++,
            title,
            completed: false,
        });
    }

    function completeTodoById(completeId) {
        todos.value = todos.value.map((todo) => {
            if (todo.id == completeId) todo.completed = true;
            return todo;
        });
    }

    return { todos, create, completeTodoById };
});