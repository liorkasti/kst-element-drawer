import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Select from './components/Select';

const App = () => {
  const [uiElements, setUiElements] = useState([]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const newUiElements = inputText.split('\n').map((line) => {
      const [lineNum, colNum, label, type, value] = line.split(';');
      return {
        line: lineNum,
        column: colNum,
        label,
        type,
        value,
      };
    });
    setUiElements(newUiElements);
  };

  const drawElement = (element) => {
    const { line, column, label, type, value } = element;
    const id = `${line}-${column}`;
    switch (type) {
      case 'TEXT_INPUT':
        return (
          <TextInput
            key={id}
            id={id}
            label={label}
            placeholder={value}
          />
        );
      case 'SELECT':
        const options = value.split(',');
        return (
          <Select key={id} id={id} label={label} options={options} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="textarea-container">
        <textarea
          className="textarea"
          placeholder="Enter UI elements in the format LINE;COLUMN;LABEL;TYPE;VALUE, separated by line breaks"
          onChange={handleInputChange}
        />
      </div>
      <div className="grid-container">
        <div className="grid-column">
          {uiElements
            .filter((element) => element.column === '1')
            .map((element) => (
              <div className="input-container" key={`${element.line}-${element.column}`}>
                {drawElement(element)}
              </div>
            ))}
        </div>
        <div className="grid-column">
          {uiElements
            .filter((element) => element.column === '2')
            .map((element) => (
              <div className="input-container" key={`${element.line}-${element.column}`}>
                {drawElement(element)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
