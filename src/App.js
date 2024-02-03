import { Route, Routes } from 'react-router-dom';

import Greeting from './components/Greeting';

function App() {
  return (
    <main>
      <div>Hello Microverse</div>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </main>
  );
}

export default App;
