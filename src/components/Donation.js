import React, { useState } from 'react';
import Navbar from "./Navbar";

function Donation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      name: '',
      email: '',
      amount: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <h1 className="display-2 text-center" id="donation"><b>Invia donazione</b></h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Inserisci nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="inserisci email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Importo</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="5$"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio (opzionale)</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Inserisci messaggio"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-warning">
                  Invia <i className="fas fa-arrow-circle-right mb-5"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {submittedData.length > 0 && (
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              {submittedData.map((data, index) => (
                <div key={index} className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Dati inviati:</h4>
                  <p><b>Nome:</b> {data.name}</p>
                  <p><b>Email:</b> {data.email}</p>
                  <p><b>Importo:</b> {data.amount}</p>
                  <p><b>Messaggio:</b> {data.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Donation;
