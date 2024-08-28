// import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css'
import Header from './components/Header'

function App() {

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Header></Header>
    </header>
  )

}

export default App
