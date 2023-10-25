
const Checkbox = ({ label }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" style={{ marginRight: '10px' }} />
        <label>{label}</label>
      </div>
    );
  };
  

export default Checkbox;


