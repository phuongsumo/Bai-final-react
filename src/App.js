import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import FormAdd from './components/FormAdd/FormAdd';
import FormEdit from './components/FormEdit/FormEdit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormAdd />} />
        <Route path="/form-edit" element={<FormEdit />} />
      </Routes>
    </div>
  );
}

export default App;
