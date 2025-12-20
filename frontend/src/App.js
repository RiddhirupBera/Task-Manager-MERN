import './App.css';
import { Dashboard } from './components/dashboard';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/taskList';
import { AppLayout } from './layout/appLayout';
import { ActiveTasksList } from './components/activeTasks';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AllTaskList } from './components/allTasks';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<NewTask />} />
        <Route path="/list" element={<AllTaskList />} />
        <Route path="/activeTasks" element={<ActiveTasksList />}/>
      </Route>
    </Routes>
  );
}

export default App;
