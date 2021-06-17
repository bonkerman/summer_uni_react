import React from "react";
type Props={

};
const List:React.FC<Props> = (props) => {
  return (
    <div className="listContainer">{props.children}</div>
  );
};
export default List ;