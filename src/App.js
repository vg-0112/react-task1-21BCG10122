import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    const words = inputText.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  return (
    <div className="App">
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;

