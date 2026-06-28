export class AboutView {
    static render() {
        return `
      <section class="about-section">
        <div class="about-header">
          <span class="section-tag">Sobre o sistema</span>

          <h1 class="page-title">Sobre o Projeto</h1>

          <p class="page-subtitle">
            A Biblioteca de Filmes é uma biblioteca digital criada para gerenciar
            filmes de ficção científica de forma simples, moderna e organizada.
          </p>
        </div>

        <div class="about-container">
          <div class="about-card">
            <h2>Objetivo</h2>
            <p>
              O objetivo do projeto é aplicar conceitos de desenvolvimento web,
              organização MVC, rotas em SPA, manipulação de dados e integração
              com banco de dados usando Supabase.
            </p>
          </div>

          <div class="about-card">
            <h2>Funcionalidades</h2>
            <p>
              O sistema possui uma área pública para visualização dos filmes e
              uma área administrativa para cadastro, edição, exclusão e pesquisa.
            </p>
          </div>

          <div class="about-card">
            <h2>Tecnologias</h2>
            <p>
              Desenvolvido com HTML, CSS, JavaScript e Supabase, seguindo uma
              estrutura simples baseada no padrão MVC.
            </p>
          </div>
        </div>
      </section>
    `;
    }
}