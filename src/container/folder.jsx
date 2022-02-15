import React, { useState } from 'react';
import closedFolder from '../images/directory_closed.png';
import selectedFolder from '../images/directory_selected.png';

const Folder = () => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <div className="folder">
      <button onClick={(e) => handleClick(e)} type="button" className="folder-container">
        <img alt="Folder" src={selected ? selectedFolder : closedFolder} />
      </button>
      <p className={selected ? 'clickedText' : 'notClicked'}>Words</p>
    </div>
  );
};

export default Folder;
