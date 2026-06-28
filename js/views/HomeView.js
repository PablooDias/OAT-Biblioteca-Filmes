export class HomeView {
    static render() {
        return `
      <section class="hero">
        <div class="hero-content">
          <h1>Biblioteca de Filmes de <span>Ficção Científica</span></h1>
          <p>
            Explore uma coleção especial de filmes sci-fi, com histórias sobre
            tecnologia, inteligência artificial, espaço, futuros distópicos e
            grandes aventuras intergalácticas.
          </p>

          <a href="#/filmes" class="btn">Ver Filmes</a>
        </div>

        <div class="hero-card">
          <img
            src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_99.jpg" alt="Interestelar" class="hero-image">

          <h2>Interestelar</h2>
          <br>
          <p>
            Explore uma biblioteca completa dos maiores clássicos da ficção científica.
          </p>
          <br>
          <a href="#/filmes" class="btn">
              Explorar Biblioteca
          </a>
        </div>
      </section>
    `;
    }
}