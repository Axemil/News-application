import React from "react";

const Dropdown = props => {
  const {getChange, changeSelection} = props;
  return (
    <div class="box">
      <select>
        {changeSelection.map(item => <option onClick={() => {
          console.log(item)
          getChange(item)
        }}>{item}</option>)}
      </select>
    </div>
  );
};

export default Dropdown;
