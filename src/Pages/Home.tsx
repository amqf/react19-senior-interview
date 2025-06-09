import "../App.css";
import { Navigation } from "../Navigation";

function Home() {
  return (
    <>
      <h1>React 19 para Entrevista Técnica</h1>
      <Navigation />

      <h2>Como este projeto foi criado?</h2>
      <p>Vite 6.3.5 + ReactJS 19.1.0 + TypeScript 5.8.3</p>
      <code>npm create vite@latest</code>
    </>
  );
}

export default Home;
