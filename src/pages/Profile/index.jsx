import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { PaymentSection } from "./Payments";

const getButtonClass = (page, currentPage) => {
  return page === currentPage ? "btn-primary" : "btn-secondary";
};

export const Profile = ({
  user,
  //     : {
  //     name,
  //     img,
  //     email,
  //     card: {
  //         number,
  //         exp,
  //         cvv
  //     }
  // }
}) => {
  const [page, setPage] = useState("payments");

  return (
    <>
      <div id="profile__header" className="m-4 p-3 bg-light">
        <div className="row justify-center">
          <div className="col-2">
            <img
              src={user.img}
              className={"rounded img-fluid  img-thumbnail float-start"}
            ></img>
          </div>
          <div className="col-10 align-self-center">
            <h2>{user.name}</h2>
          </div>
        </div>
      </div>

      <div className="row justify-center m-2">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column m-2 me-3 bg-light gap-2 p-3 col-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class={"btn " + getButtonClass("personal", page)}
              type="button"
              onClick={() => setPage("personal")}
            >
              Datos Personales
            </button>
            <button
              class={"btn " + getButtonClass("payments", page)}
              type="button"
              onClick={() => setPage("payments")}
            >
              <i class="bi bi-credit-card"></i>{" "}
              {" Métodos de pago "}
            </button>
          </div>
          <div class="p-3 bg-light w-100 m-2" id="v-pills-tabContent">
            {page === "personal" ? null : null}
            {page === "payments" ? <PaymentSection user={user} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
