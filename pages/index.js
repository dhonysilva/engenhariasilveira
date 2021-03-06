import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Whelyson Silveira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Olá! Eu sou
        </p>
        <a href="/images/whelyson.jpeg" target="_blank">
            <img className="avatar" src="/images/whelyson.jpeg" title="Whelyson Silveira" />
        </a>
        <h1 className="title">
          Whelyson Silveira
        </h1>
        <div className="grid">
          <p>
          Engenheiro civil graduado pela Faculdade Metropolitana de Marabá. Pós graduando em Master BIM: Ferramentas de Gestão e Projetos, pelo IPOG. 
          </p>
          <p>
          Durante a graduação, estagiei na Construtora Zucatelli, prestadora de serviços de pavimentação, drenagem e terraplenagem na região de Marabá, Pará. Tive a oportunidade de elaborar projetos, orçamentos, participar de processos licitatórios, entender a logística e atividades diárias da construtora, realizar demandas de escritório e auxiliar na gestão da equipe no canteiro no obras.
          </p>
          <p>
          Sou sócio-fundador da <strong>Silveira Engenharia</strong>, empresa de projeto e execução de obras residenciais. Trabalhamos com financiamento habitacional ajudando pessoas a realizarem sonhos: projetando, planejando e construindo seus lares. 
          </p>
        </div>
        <div className="grid">
          <p className="card">
            Minha equipe e eu estamos preparando uma série de novidades para os nossos clientes e iremos reunir todo o conteúdo aqui nesse site.
          </p>
        </div>
        

        <div className="grid">
          <a href="https://whats.link/whelysonsilveira" className="card">
            <h3>WhatsApp &rarr;</h3>
            <p>Vamos conversar? Entre em contato comigo.</p>
          </a>

          <a href="https://www.instagram.com/engwhelysonsilveira/" className="card">
            <h3>Instagram &rarr;</h3>
            <p>Estou sempre publicando novidades</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 2rem 0;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
