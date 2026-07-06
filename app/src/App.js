import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;