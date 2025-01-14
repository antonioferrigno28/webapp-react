import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="content">
        {/* Intestazione */}
        <header className="bg-primary text-white text-center py-5">
          <div className="container py-5">
            <h1 className="display-4">Benvenuti su CineBool01!</h1>
            <p className="lead">
              La tua piattaforma per scoprire e vivere il cinema.
            </p>
          </div>
        </header>

        {/* Sezione principale */}
        <section className=" text-center py-5 bg-light" id="home-section">
          <h2 className="mb-4">Scopri il meglio del cinema</h2>
          <p className="text-muted mb-4">
            Dalle ultime novità alle pellicole indimenticabili, CineBool ti
            offre un'esperienza cinematografica unica.
          </p>
        </section>
        <section className="text-center py-5">
          <div className="container">
            <h2 className="mb-4">Unisciti a Noi</h2>
            <p className="text-muted mb-4">
              Esplora il nostro catalogo, leggi recensioni e trova il film
              perfetto per la tua prossima serata. Non perdere altro tempo!
            </p>
            <Link to="/movies" className="btn btn-primary btn-lg">
              Esplora il catalogo
            </Link>
          </div>
        </section>
        {/* Sezione recensione */}
        <section className="py-5 text-center bg-light">
          <div className="container">
            <h2 className="mb-4">Recensione di Antonio Ferrigno</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      "Un'esperienza unica nel mondo del cinema online"
                    </h5>
                    <p className="card-text fst-italic">
                      Antonio Ferrigno, critico cinematografico e appassionato
                      cinefilo, ha recensito il nostro sito, ecco cosa ne pensa:
                    </p>
                    <p className="lead">
                      "CineBool01 è una piattaforma che cambia il modo di vivere
                      il cinema. Con un catalogo vasto e sempre aggiornato, è il
                      punto di riferimento per chi vuole scoprire nuovi film e
                      riscoprire i classici. La navigazione è intuitiva e la
                      qualità dei contenuti è eccellente. Un sito che ogni
                      cinefilo dovrebbe avere tra i preferiti!"
                    </p>
                    <hr />
                    <p className="text-muted">Recensito da: Antonio Ferrigno</p>
                    <p className="text-muted">Valutazione: ★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
