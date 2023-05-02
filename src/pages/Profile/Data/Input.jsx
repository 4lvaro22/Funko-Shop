
const Input = ({ label, name, type, value, onChange, toFocus }) => {
  return (
    <div className='row mx-auto align-items-center p-2'>
      <div className='col-md-1' />
      <h4 for={name} className='col-sm-5 col-md-4 col-lg-3 form-label'>{label}:</h4>
      <div className='col-sm-6 col-md-5 col-lg-auto me-auto float-start'>
        <input ref={toFocus} id={name} className='form-control' type={type} value={value} onChange={onChange} aria-label={label} />
      </div>
      <div className='col-md-auto' />
    </div>
  );
};

export default Input;
