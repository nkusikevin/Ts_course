import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(Response => {
    const todo = Response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
   logTodo(id,title, completed);
})


const logTodo = (id:number,title:string,completed:boolean)=>{
     console.log(`The Todo with ID:${id} 
   Has a title: ${title} 
   Is Completed ${completed}`);
}