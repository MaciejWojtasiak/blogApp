import './Confirm.css';

function Confirm({handleDelete, close}) {
  return (
    <div className='confirm'>
        <i className="fa-solid fa-x cancel" onClick={close}></i>
        <h3>Are you sure?</h3>
        <button className='confirm-btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Confirm