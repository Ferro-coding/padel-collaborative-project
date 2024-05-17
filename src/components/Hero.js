import aboutImage1 from "./img/padel.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold text-white">
          Padel Collaborative Project
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Un progetto per annullare quasi del tutto le spese per il gioco del
            padel. Diciamo <b>BASTA</b> allo spendere un patrimonio per giocare
            a Padel, adesso c'è <br /> <b>PCP - Padel Collaborative Project.</b>
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link
              className="btn btn-warning btn-lg px-4 me-sm-3"
              to="/donation"
            >
              Partecipa al progetto
            </Link>
            <Link
              className="btn btn-outline-warning btn-lg px-4"
              to="/blog"
            >
              Scopri di più
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container px-5">
            <img
              src={aboutImage1}
              alt="About Image 1"
              className="img-fluid border rounded-3 shadow-lg mb-4 img"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
