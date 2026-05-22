import { useState } from 'react';

export default function ImageGallery() {
  const images = [
    "https://i1-e.pinimg.com/1200x/3f/18/99/3f189916c374ec0768e8db122d203ce5.jpg",
    "https://i1-e.pinimg.com/736x/9b/e4/ed/9be4ed6b420b83c105b1ee3a39586ed4.jpg",
    "https://i1-e.pinimg.com/736x/78/d7/67/78d767059701c1b9fe341d23f17eb8c2.jpg"
  ];
  const [index, setIndex] = useState(0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>Завдання 5: Галерея</h3>
      <img src={images[index]} alt="галерея" /><br />
      <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Попереднє</button>
      <button disabled={index === 2} onClick={() => setIndex(index + 1)}>Наступне</button>
    </div>
  );
}