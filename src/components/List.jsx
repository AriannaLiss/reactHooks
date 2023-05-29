import React, { useRef, useState } from 'react';
import useFetching from '../hooks/useFetching';
import useScroll from '../hooks/useScroll';
import { get } from '../utils/functions';

const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;
    const url='https://jsonplaceholder.typicode.com/todos';

    const [getTodos, isLoading, error] = useFetching(async()=>{
        const json = await get(url, page, limit);
        setTodos(prev => [...prev, ...json]);
        setPage(prev => prev + 1);
    })

    const parentRef = useRef();
    const childRef = useRef();
    useScroll(isLoading, parentRef, childRef, getTodos);

    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map(todo => 
                <div key={todo.id} style={{padding:30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height:20}}/>
        </div>
    );
};

export default List;