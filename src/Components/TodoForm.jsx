import { useState } from 'react';
import AutohideSnackbar from './AutohideSnackbar'

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');
  const [snackbar, setSnackbar] = useState({ open:false, message: '', color: 'red' });

  function addTodos(e) {
    e.preventDefault();
    if (newItem === '') {
      setSnackbar({ open: true, message: 'Item cannot be empty!', color: 'red' });
      return;
    }
    onSubmit(newItem); 
    setNewItem(''); 
  }
  
  const handleSnackBar = () => {
    setSnackbar({ open: false, message: '' });
  }

  return (
    <>
    <form className="new-item-form" onSubmit={addTodos}>
      <div className="form-row">
        <label htmlFor="item" className='add-new-label'>Add New Item</label>
        <input
          type="text"
          placeholder='Enter the todo Item'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <AutohideSnackbar 
      open={snackbar.open}
      message={snackbar.message}
      color={snackbar.color}
      onClose={handleSnackBar}
    />
    </>
  );
}
