const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

export const PaymentForm = () => {
  return (
    <div className="padding m-4">
      <div className="row">
        <div className="col-sm-9">
          <div className="card">
            <form className="needs-validation">
              <div className="card-header ">
                <strong>Nueva tarjeta de crédito</strong>
                {/* <small>enter your card details</small> */}
              </div>
              <div className="card-body g-3 row">
                <div className="col-2"> </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-5">
                      <div className="form-group">
                        <label for="name" className="form-label">
                          Nombre del Dueño
                        </label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <div className="form-group">
                        <label for="cardNumber">Número de Tarjeta</label>

                        <div className="input-group">
                          <input
                            id="cardNumber"
                            className="form-control"
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            maxLength={16}
                            minLength={16}
                            autocomplete="email"
                            required
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="bi bi-credit-card"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                <div className="col-2"> </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-2 ">
                      <label for="ccmonth">Mes</label>
                      <select className="form-control" id="ccmonth">
                        {months.map((month) => (
                          <option value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-3">
                      <label for="ccyear">Año</label>
                      <select className="form-control" id="ccyear">
                        {years.map((year) => (
                          <option value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-3">
                      <div className="form-group">
                        <label for="cvv">CVV/CVC</label>
                        <input
                          className="form-control"
                          id="cvv"
                          type="text"
                          placeholder="123"
                          maxLength={3}
                          minLength={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-sm btn-success float-right"
                  type="submit"
                >
                  <i className="mdi mdi-gamepad-circle"></i> Añadir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
