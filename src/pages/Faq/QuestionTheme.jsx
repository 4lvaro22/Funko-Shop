import 'bootstrap-icons/font/bootstrap-icons.css';

export const QuestionTheme = (props) => {
  return (
    <>
      <div className='row my-1'>
        <div className='col-11'>
          <h2 className='my-3 mx-3' tabIndex={0}><strong>{props.name}</strong></h2>
        </div>
        <div className='col-1'>
          <h2 className='my-3 mx-3 d-flex justify-content-end'>{props.form ? <i className='bi bi-chevron-down' /> : <i className='bi bi-chevron-up' />}</h2>
        </div>
      </div>
    </>
  );
};
export default QuestionTheme;
