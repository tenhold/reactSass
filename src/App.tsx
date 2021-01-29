import React, { useState } from 'react';
import './sass/style.scss';

export default function App() {
  const [theme, setTheme] = useState(true);

  const handleChange = (): void => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };
  return (
    <div className='container'>
      <h1>Light / Dark Mode</h1>
      <div className='toggle-container'>
        <input
          type='checkbox'
          id='switch'
          name='theme'
          onChange={handleChange}
        />
        <label htmlFor='switch'>Toggle</label>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia
        doloribus illo tenetur aliquam, optio, accusantium dolorem libero
        consequatur a natus voluptatem sapiente veritatis quibusdam ipsum porro
        id maiores? Minima!
      </p>
    </div>

    // <div className='btn'>
    //   <button onClick={handleClick}>Change background</button>
    // </div>
  );
}
