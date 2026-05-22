import { useState } from 'react';

export default function ImageGallery() {
  const images = [
    "https://dummyimage.com/200x200/000/fff&text=Фото+1",
    "https://dummyimage.com/200x200/f00/fff&text=Фото+2",
    "https://dummyimage.com/200x200/00f/fff&text=Фото+3"
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