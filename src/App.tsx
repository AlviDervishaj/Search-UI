import { Outlet } from 'react-router-dom';
import './App.css';
import { SearchInput } from './components';

function App() {
  return (
    <div className="parent scroll-smooth ">
      <SearchInput />
      <Outlet />
    </div>
  )
}

export default App
