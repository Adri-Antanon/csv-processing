import './App.css';
import { ChangeEvent } from 'react';
import Papa from 'papaparse';
import { CSVInput } from './components/CSVInput';

function App() {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const importedCSV = event.target.files;

    if (importedCSV === null) return; //TODO: add a message if the file is not allowed

    Papa.parse(importedCSV[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results) => console.log(results.data),
    });
  };

  return (
    <div className="App">
      <div className="App-main">
        <CSVInput changeHandler={changeHandler} />
      </div>
    </div>
  );
}

export default App;
