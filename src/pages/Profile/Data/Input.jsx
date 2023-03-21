
const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div className='row mx-auto align-items-center p-2'>
      <div className='col-md-1' />
      <h5 for={name} className='col-sm-5 col-md-4 col-lg-3 form-label'>{label}:</h5>
      <div class='col-sm-6 col-md-5 col-lg-auto me-auto float-start'>
        <input id={name} className='form-control' type={type} value={value} onChange={onChange} />
      </div>
      <div className='col-md-auto' />
    </div>
  );
};

export default Input;
