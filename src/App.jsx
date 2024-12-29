import { useEffect, useState } from 'react';
import './style.css';
import { NewTodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import ResponsiveAppBar from './Components/header';
import AutohideSnackbar from './Components/AutohideSnackbar';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem('Items');
    if(localvalue == null) return []

    return JSON.parse(localvalue);
  });
  
  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(todos));
  }, [todos])

  const [snackbar, setSnackbar] = useState({ open:false, message: '', color: '' });

  function addTodo(title) {
    const allData = JSON.parse(localStorage.getItem('Items'));
    const checkTitle = allData.find((e) => e.title.toLowerCase() === title.toLowerCase())
    if(checkTitle) {
      setSnackbar({ open: true, message: 'This Todo already exists!', color: 'red' });
      return;
    }
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    setSnackbar({ open: true, message: 'Item Added Successfully!', color: 'green' });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
    setSnackbar({ open: true, message: 'Item Deleted Successfully!', color: 'yellow' });
  }

  const handleSnackBar = () => {
    setSnackbar({ open: false, message: '', color: '' });
  }

  return (
    <>
      <ResponsiveAppBar />
      <div className="app-container">
        <NewTodoForm onSubmit={addTodo} />
        <Accordion style={{ marginTop:'20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><h1 className="header">ToDo List....</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <AutohideSnackbar 
        open={snackbar.open}
        message={snackbar.message}
        color={snackbar.color}
        onClose={handleSnackBar}
      />
    </>
  );
}
