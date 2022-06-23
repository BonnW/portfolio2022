import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Wallpaper from './components/Wallpaper/Wallpaper';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!!</h1> */}
      <div className='wrap'>
        <div className='side'>
          <Sidebar /> 
        </div>
        <div className='wall'>
          <Wallpaper />
        </div>
      </div>
      {/* <h1 className='t3'>Test 3!</h1> */}
    </div>
  );
}

export default App;
