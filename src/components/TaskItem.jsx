export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>Видалити</button>
    </li>
  );
}