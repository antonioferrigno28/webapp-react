import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <section className="text-center bg-light p-5 rounded shadow">
        <h1 className="display-4 fw-bold mb-3">Chi Siamo</h1>
        <p className="lead text-muted">
          CineBool01 è la tua destinazione per tutto ciò che riguarda il cinema.
          Dalle ultime uscite ai grandi classici, ti offriamo un catalogo ricco
          e variegato per ogni tipo di appassionato.
        </p>
        <p className="text-muted">
          Crediamo che ogni film racconti una storia unica e che il cinema sia
          un linguaggio universale capace di emozionare, ispirare e
          intrattenere. Con CineBool01, vogliamo portare queste storie a portata
          di clic, rendendo il tuo viaggio nel mondo del cinema indimenticabile.
        </p>
        <div className="mt-4">
          <Link to="/movies" className="btn btn-primary btn-lg mx-2">
            <button className="btn btn-primary btn-lg mx-2">
              Esplora il Catalogo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
