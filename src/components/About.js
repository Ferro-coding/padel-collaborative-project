import aboutImage1 from "./img/padel.jpg";

function About() {
  return (
    <>
    <br/>
    <br/>
      <div className="container mt-5">
        <div className="row">
          <h1 id="chi_siamo" className="mb-5 text-center display-3">
            <b>Chi Siamo</b>
          </h1>
        </div>

        <div className="row text-center">
          <div className="col-lg-4">
            <img
              src={aboutImage1}
              alt="Immagine Padel"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Abbattimento dei costi</h2>
            <p>
              Costruisci insieme ad altri 99 un campo da padel ed utilizzalo per
              sempre abbattendo i costi di una partita. Inoltre avrai a
              disposizione software per prenotazioni delle partite e tornei
              infra-community.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={aboutImage1}
              alt="Immagine Padel"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Campo privato</h2>
            <p>
              Il campo sarà di proprietà dei 100 creatori + l'ente gestionale.
              Questo gioverà alla qualità del campo e alla gestione delle
              partite.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={aboutImage1}
              alt="Immagine Padel"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Senza pensieri</h2>
            <p>
              Tutta la gestione verrà trattata da PlayFund (l'ente gestionale).
              la tua unica preoccupazione sarà quella di giocare e partecipare
              alla quota annuale di manteniento!
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row featurette d-flex align-items-center">

          <div className="col-md-8 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Promosso da PlayFund.{" "}
              <span className="text-warning">Powered By People.</span>
            </h2>
            <p className="lead">
              Questo progetto è promosso da PlayFund. Si tratta di una start up
              che vuole cambiare il modo di vedere il mercato, la formazione, lo
              sviluppo e il divertimento. Ha l'obiettivo di aprire la formazione
              a tutti rendendola gratuita grazie a collaborazioni con enti
              finanziatori e aziende.
            </p>
          </div>
          <div className="col-md-4 order-md-1">
            <img
              src={aboutImage1}
              alt="Immagine Padel"
              className="bd-placeholder-img rounded-circle"
              width="340"
              height="340"
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row featurette d-flex align-items-center">
          <div className="col-md-8">
            <h2 className="featurette-heading fw-normal lh-1">
              <span className="text-warning">La libertà </span>
              di un campo tutto tuo.{" "}
            </h2>
            <p className="lead">
              Software di prenotazoine privato, gestione della burocrazia e
              gestione della manutenzione ed un campo ad uso privato di un club
              di 100 persone. Abbattiamo le spese per il divertimento del 70%.
              Leggi{" "}
              <a
                href="https://telegra.ph/Trasformare-Progetti-in-Realt%C3%A0-Grazie-ad-una-Collaborazione-Vincente---Mini-Report-04-22"
                target="blank"
              >
                qui
              </a>{" "}
              per saperne di più!
            </p>
          </div>
          <div className="col-md-4 ">
            <img
              src={aboutImage1}
              alt="Immagine Padel"
              className="bd-placeholder-img rounded-circle"
              width="340"
              height="340"
            />
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}

export default About;
