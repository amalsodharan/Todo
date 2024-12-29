import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#333',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState('');
    const handleOpen = (id) => {
      setOpen(true);
      setId(id);
    }
    const handleClose = () => setOpen(false);
    return (
      <>
      <ul className="list">
        {todos.length === 0 && 'No Todos'}
        {todos.map(todo => (
          <li style={{display:'flex', justifyContent:'space-between'}}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            <span>{todo.title}</span>
          </label>
          <DeleteIcon onClick={()=> handleOpen(todo.id)}/>
        </li>
        ))}
      </ul>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Are you sure you wanna delete?
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 3, display:'flex', gap:'20px' }}>
        <Button variant="contained" color="success" onClick={ async () => {
          await deleteTodo(id);
          await setOpen(false);
        
        }}>
          Yes
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          No
        </Button>
      </Typography>
      </Box>
      </Modal>
      </>
    )
}


            /* <DeleteIcon onClick={() => deleteTodo(id)} style={{ cursor:'pointer' }}/> */