import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import ImageGallery from './components/ImageGallery';
import KanbanBoard from './components/KanbanBoard';
import ShoppingList from './components/ShoppingList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Головне завдання: To-Do List</h2>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </ul>
      
      <ImageGallery />
      <KanbanBoard />
      <ShoppingList />
    </div>
  );
}