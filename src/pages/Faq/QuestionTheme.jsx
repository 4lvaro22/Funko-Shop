import 'bootstrap-icons/font/bootstrap-icons.css';

export const QuestionTheme = (props) => {
  return (
    <>
      <div className='row my-1'>
        <div className='col-11'>
          <h2 className='my-3 mx-3 fs-3' tabIndex={0}><strong>{props.name}</strong></h2>
        </div>
        <div className='col-1'>
          <p className='mx-3 d-flex justify-content-end fs-2'>{props.form ? <i className='bi bi-chevron-down' /> : <i className='bi bi-chevron-up' />}</p>
        </div>
      </div>
    </>
  );
};
export default QuestionTheme;
