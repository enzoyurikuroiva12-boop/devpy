import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [linguagem, setLinguagem] = useState('python');
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/conteudo/${linguagem}`)
      .then(res => res.json())
      .then(setDados);
  }, [linguagem]);

  if (!dados) return <div className="loading">Carregando guia...</div>;

  return (
    <div className="container">
      <nav className="menu">
        {['python', 'javascript', 'csharp', 'java'].map(l => (
          <button 
            key={l} 
            className={linguagem === l ? 'active' : ''} 
            onClick={() => setLinguagem(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </nav>

      <header className="hero" style={{ borderBottom: `4px solid ${dados.cor}` }}>
        <h1>Aprenda <span style={{ color: dados.cor }}>{dados.nome}</span> do Zero</h1>
        <p>{dados.descricao}</p>
      </header>

      <section className="section">
        <h2>Como declarar variáveis</h2>
        <div className="code-block">
          <pre><code>{dados.variavel}</code></pre>
        </div>
      </section>

      <section className="section">
        <h2>Como exibir dados (Saída)</h2>
        <div className="code-block output">
          <pre><code>{dados.saida}</code></pre>
        </div>
      </section>

      <section className="section">
        <h2>Tipos de Dados Comuns</h2>
        <div className="tags">
          {dados.tipos.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;