import Home from './components/Home/Home';
import Container from './components/Container/Container';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;