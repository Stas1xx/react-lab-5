import { useState } from 'react';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  const add = () => {
    if (name !== '') {
      setItems([...items, { id: Date.now(), name, count: 1, checked: false }]);
      setName('');
    }
  };

  const deleteItem = (id) => setItems(items.filter(item => item.id !== id));
  
  const toggleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>Завдання 2: Список покупок</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={add}>Додати товар</button>
      
      {items.map((item, i) => (
        <div key={item.id} style={{ marginTop: '10px' }}>
          <input 
            type="checkbox" 
            checked={item.checked} 
            onChange={() => toggleCheck(item.id)} 
          /> 
          <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
            {item.name} (Кількість: {item.count})
          </span>
          <button onClick={() => { const n = [...items]; n[i].count++; setItems(n); }} style={{ marginLeft: '5px' }}>+</button>
          <button onClick={() => { const n = [...items]; if(n[i].count > 1) n[i].count--; setItems(n); }}>-</button>
          <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>Видалити</button>
        </div>
      ))}
      <p><b>Всього товарів у кошику: {total}</b></p>
    </div>
  );
}