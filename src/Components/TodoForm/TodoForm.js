import React,{useState,useRef,useEffect} from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : ''); 

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *1000),
            text: input
        });

        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input 
                        type="text" 
                        placeholder="Update Today's Target"  
                        name="text"
                        value={input}
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}>
                    </input>
                    <button
                        className="todo-button edit">
                        Update Target
                    </button>
                </>
            ):
            (
                <>
                    <input 
                        type="text" 
                        placeholder="Enter Today's Target"  
                        name="text"
                        value={input}
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}>
                    </input>
                    <button
                        className="todo-button">
                        Add Target
                    </button>
                </>
            )
        }
        </form>
    )
}

export default TodoForm;
