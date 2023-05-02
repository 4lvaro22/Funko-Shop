const Input = ({ label, name, type, value, onChange, toFocus }) => {
  return (
    <div className='row mx-auto align-items-center p-2'>
      <div className='col-md-1' />
      <h6 for={name} className='col-sm-12 col-md-4 col-lg-4 form-label'>{label}:</h6>
      <div className='col-sm-12 col-md-5 col-lg-auto me-auto float-start'>
        <input ref={toFocus} id={name} className='form-control' type={type} value={value} onChange={onChange} aria-label={label} />
      </div>
      <div className='col-md-auto' />
    </div>
  );
};

export default Input;
