import './App.css';
import { Dashboard } from './components/dashboard';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/taskList';

function App() {
  return (
    <>
    <Dashboard/>
    <NewTask />
    <TaskList/>
    </>
  );
}

export default App;
