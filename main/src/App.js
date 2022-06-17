import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Wallpaper from './components/Wallpaper/Wallpaper';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <div className='side'>
        {/* test 1 */}
        <Sidebar /> 
        </div>
        <div className='wall'>
          {/* test 2 */}
          <Wallpaper />
        </div>
    </div>
  );
}

export default App;
