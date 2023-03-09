import logo from "../../assets/images/logo.svg";


export const Profile = (props) => {
    return (
        <>

            {/* Create a profile header with the img at props.user.photo and its name in props.user.name using bootstrap*/}
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={props.user.img} className={"rounded-circle "}></img>
                        </div>
                        <div className="col-10">
                            <h1>{props.user.name}</h1>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}


// Foto - 