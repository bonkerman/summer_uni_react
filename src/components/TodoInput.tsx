import React, { useState } from "react";
import { Todo } from "../api/model/todo";
import { Colors } from "../config/style";
type Props={
    onAdd:(todo:Todo)=>void
};
const TodoInput:React.FC<Props> = (props) => {
    const [input, setInput] = useState("")
    const onAdd = () => {
        const todo:Todo={completed:false,userId:1,title:input}
        props.onAdd(todo)
        setInput('')
    }
    
  return (
    <div style={ContainerStyle}>
        <input style={{flex:3}} value={input} onChange={(event)=>setInput(event.target.value)} className="todoInput"></input>
        <div style={ButtonStyle} onClick={onAdd}>Add</div>
    </div>
  );
};
export default TodoInput ;

const ContainerStyle:React.CSSProperties={
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'2.5rem',
    margin:'8px'
}

const ButtonStyle:React.CSSProperties={
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.primary,
    flexGrow: 1,
    textTransform: 'uppercase',
    color:"white",
    height:'100%',
    border:'2px solid gray',
    borderLeft: '0px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
}