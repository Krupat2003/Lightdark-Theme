// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import { Cotext, themes } from './context/Context'


function App() {
  const [theme, setTheme] = useState(themes.light)

  function handleOnClick() {
    // console.log('click')
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  const body = document.body
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove('bg-dark')
        body.classList.remove('text-light')
        body.classList.add('bg-light');
        body.classList.add('text-dark');
        break;
      case themes.dark:
        body.classList.remove('bg-light')
        body.classList.remove('text-dark')
        body.classList.add('bg-dark');
        body.classList.add('text-light');
        break;
      default:
        body.classList.remove('bg-dark')
        body.classList.remove('text-light')
        body.classList.add('bg-light');
        body.classList.add('text-dark');
    }
  }, [theme])

  return (
    <>
      <Cotext.Provider value={{ theme, handleOnClick }}>

        <div className="main-container">
          <h1 className='text-center'> Light Dark Theme App</h1>
          <Posts theme={theme} />
        </div>
      </Cotext.Provider>

    </>
  );
}

export default App;
