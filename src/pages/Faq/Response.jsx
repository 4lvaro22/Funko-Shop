export const Response = (props) => {
  return (
    <>
      <div className='m-3'>
        <p>
          <i className='m-2 bi bi-chat-square-text' />
          {props.reponse}
        </p>
      </div>
    </>
  );
};
export default Response;
