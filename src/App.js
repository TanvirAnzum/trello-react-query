import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/:boardId"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
