import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import menuItems from './components/menu/items/menuItemContent';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          { menuItems.map(item => <Route key={item.path} path={item.path} element={item.element} />) }
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
