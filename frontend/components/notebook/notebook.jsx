import React from 'react';

const Notebook = ({notebooks}) => {
  console.log(notebooks);
  const notebookTitles = notebooks.map((notebook, idx) => (
    <li key={notebook.title + idx}>
      <div className="notebook-list-item" onClick={console.log('click')}>
        {notebook.title}
      </div>
    </li>
  ));
  
  return (
    <div>
      <ul>
        {notebookTitles}
      </ul>
    </div>
  );
}

export default Notebook;
