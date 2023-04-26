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
        <div id={props.name} tabIndex={0} className='col-11 p-2' onKeyDown={() => enterKeyEvent(props.name)} onClick={() => toggleForm(!form)}>
          <h7 className='mx-2'>{form ? <i className='m-2 bi bi-arrow-up-square' /> : <i className='m-2 bi bi-arrow-down-square' />}<strong>{props.name}</strong></h7>

          {form ? <Response reponse={props.reponse} /> : null}
        </div>
      </div>
    </>
  );
};
export default Question;
