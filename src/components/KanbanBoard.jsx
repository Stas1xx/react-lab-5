import { useState } from 'react';

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Додавання нової задачі на дошку
  const addTask = () => {
    if (text.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text, status: 'todo' }]);
      setText('');
    }
  };

  // Переміщення між колонками
  const move = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  // Видалення задачі з дошки
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>Завдання 11: Канбан-дошка</h3>
      
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Нове завдання для дошки..." 
      />
      <button onClick={addTask}>Додати</button>
      
      <h4>До виконання:</h4>
      {tasks.filter(t => t.status === "todo").map(t => (
        <div key={t.id} style={{ marginTop: '5px' }}>
          {t.text} 
          <button onClick={() => move(t.id, "done")} style={{ marginLeft: '10px' }}>В процесі </button>
          <button onClick={() => deleteTask(t.id)} style={{ marginLeft: '5px' }}>Видалити</button>
        </div>
      ))}

      <h4>В процесі:</h4>
      {tasks.filter(t => t.status === "done").map(t => (
        <div key={t.id} style={{ marginTop: '5px' }}>
          {t.text} 
          <button onClick={() => move(t.id, "todo")} style={{ marginRight: '10px' }}> Назад</button>
          <button onClick={() => deleteTask(t.id)}>Видалити</button>
        </div>
      ))}
    </div>
  );
}