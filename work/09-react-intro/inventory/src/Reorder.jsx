import './App.css';

const Reorder = ({ onReorder }) => {
    return (
      <button className="reorder" onClick={onReorder}>
        Reorder
      </button>
    );
  };
  
  export default Reorder;