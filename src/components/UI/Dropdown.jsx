import React from "react";

const Dropdown = props => {
  const [getChange, changeSelection] = props;
  return (
    <div class="box">
      <select>
        {changeSelection.map(item => <option onClick={() => getChange(item)}>item</option>)}
      </select>
    </div>
  );
};

export default Dropdown;
