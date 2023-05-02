import 'bootstrap-icons/font/bootstrap-icons.css';
import Response from './Response';
import { useState } from 'react';

function enterKeyEvent (questionName) {
  if (window.event.keyCode === 13) {
    document.getElementById(questionName).click();
  }
}

export const Question = (props) => {
  const [form, toggleForm] = useState(false);

  return (
    <>
      <div className='row my-1'>
        <div id={props.name} tabIndex={0} className='col-11' onKeyDown={() => enterKeyEvent(props.name)} onClick={() => toggleForm(!form)}>
          <p className='mx-2 fs-5'>{form ? <i className='m-2 bi bi-arrow-up-square' /> : <i className='m-2 bi bi-arrow-down-square' />}<strong>{props.name}</strong></p>

          {form ? <Response reponse={props.reponse} /> : null}
        </div>
      </div>
    </>
  );
};
export default Question;
