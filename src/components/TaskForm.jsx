import { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      addTask(text);
      setText(''); // очищаємо поле
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Нова задача..." 
      />
      <button type="submit">Додати</button>
    </form>
  );
}