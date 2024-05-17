import Navbar from "./Navbar";


function Donation() {
  return (
    <>

      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <h1 className="display-2 text-center" id="donation"> <b>Invia donazione</b></h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Inserisci nome"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="inserisci email"
                  />
                </div>
                <div className="form-group">
                  <label>Importo</label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    placeholder="5$"
                  />
                </div>
                <div className="form-group">
                  <label for="message">Messaggio (opzionale)</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Inserisci messaggio"
                  ></textarea>
                </div>
                <br/>
                <button type="submit" className="btn btn-warning">
                  Invia <i className="fas fa-arrow-circle-right mb-5"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
