
export const Stars = () => {
  return (

    <div class='container d-flex justify-content-center'>

      <div class='row'>

        <div class='col-md-12'>

          <div class='stars'>

            <form action=''>

              <input class='star star-5' id='star-5' type='radio' name='star' />

              <label class='star star-5' for='star-5' />

              <input class='star star-4' id='star-4' type='radio' name='star' />

              <label class='star star-4' for='star-4' />

              <input class='star star-3' id='star-3' type='radio' name='star' />

              <label class='star star-3' for='star-3' />

              <input class='star star-2' id='star-2' type='radio' name='star' />

              <label class='star star-2' for='star-2' />

              <input class='star star-1' id='star-1' type='radio' name='star' />

              <label class='star star-1' for='star-1' />

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Stars;
