const Input = ({ label, name, type, value, onChange, toFocus }) => {
  return (

    <input ref={toFocus} id={name} className={'form-control ' + (label === 'Titular' ? 'fst-italic' : '')} type={type} value={value} onChange={onChange} aria-label={label} />

  );
};

export default Input;
