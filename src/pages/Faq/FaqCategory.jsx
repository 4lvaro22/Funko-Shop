import { Question } from './Question';
import QuestionTheme from './QuestionTheme';
import { useState } from 'react';

export const FaqCategory = ({ theme, questions }) => {
  const [form, toggleForm] = useState(true);
  const items = [];

  questions
    .forEach(item => items.push(
      <Question name={item.question} id={item.question} reponse={item.reponse} />
    ));

  console.log(items);
  return (
    <>
      <div className='border mb-4 h-50 p-3 mb-5'>
        <div onClick={() => toggleForm(!form)}>
          <QuestionTheme name={theme} form={form} />
        </div>

        {form ? <hr className='bg-danger border-2 border-top' /> : null}

        {form ? <div>{items} </div> : null}

      </div>
    </>
  );
};

export default FaqCategory;
