import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id:number;
    title:string;
    completed:boolean;
}

axios.get(url).then(response=>{
    const resp = response.data as Todo;
    const id = resp.id;
    const title = resp.title;
    const completed = resp.completed;

    logTodo(id,title,completed)
});


const logTodo = (id:number, title:string, completed:boolean) => {
    console.log(`
        the response id${id}, 
        title ${title}, 
        completed ${completed}
    `)
}