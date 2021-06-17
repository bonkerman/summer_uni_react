import React from "react";
import { IoCheckboxOutline, IoRemoveCircleOutline, IoSquareOutline } from "react-icons/io5";
import { Todo } from "../api/model/todo";
import { Colors } from "../config/style";
type Props = {
  todo: Todo;
  onChange: (todo: Todo) => void;
  onRemove: (todo: Todo) => void;
};

const BOX_SIZE = 18;
const ListItem: React.FC<Props> = (props) => {
  const { title, completed } = props.todo;
  const toggleCheck = () => {
    const toggledTodo = { ...props.todo, completed: !completed };
    props.onChange(toggledTodo);
  };

  const remove = () => {
      props.onRemove(props.todo)
  }
  
  const boxProps = {
    style: CheckboxStyle,
    size: BOX_SIZE,
    onClick: toggleCheck,
    color:Colors.primary
  };
  const removeBoxProps = {
      ...boxProps, style:{marginInline:"0.5rem"}, onClick:remove, color:Colors.error
  }
  return (
    <div style={ListItemStyle}>
      <span style={{ textDecoration: completed ? "line-through" : "unset" }}>
        {title}
      </span>
      {!completed ? (
        <IoSquareOutline {...boxProps} />
      ) : (
        <IoCheckboxOutline {...boxProps} />
      )}
      <IoRemoveCircleOutline {...removeBoxProps}/>
    </div>
  );
};
export default ListItem;

const CheckboxStyle: React.CSSProperties = {
  marginLeft: "auto",
};

const ListItemStyle: React.CSSProperties = {
  padding: "10px",
  border: "1px solid gray",
  borderCollapse: "collapse",
  borderRadius: "4px",
  display: "flex",
};
