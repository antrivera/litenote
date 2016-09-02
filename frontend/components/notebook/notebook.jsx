import React from 'react';

const Notebook = ({fetchAllNotebooks, notebooks}) => {
  console.log(notebooks);
  const notebookTitles = notebooks.map((notebook, idx) => (
    <li key={notebook.title + idx}>
      {notebook.title}
    </li>
  ));

  return (
    <div>
      <button onClick={fetchAllNotebooks}>Get Notebooks</button>
      <br />
      <ul>
        {notebookTitles}
      </ul>
    </div>
  );
}

export default Notebook;
