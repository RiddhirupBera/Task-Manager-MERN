import './App.css';
import { Dashboard } from './components/dashboard';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/taskList';
import { AppLayout } from './layout/appLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<NewTask />} />
        <Route path="/list" element={<TaskList />} />
      </Route>
    </Routes>
  );
}

export default App;
