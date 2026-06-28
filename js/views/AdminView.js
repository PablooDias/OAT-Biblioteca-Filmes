export class AdminView {
    static renderLogin() {
        return `
      <section>
        <h1 class="page-title">Login Administrativo</h1>
        <p class="page-subtitle">
          Acesse para gerenciar os filmes cadastrados.
        </p>

        <form id="loginForm" class="form">
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" id="email" required>
          </div>

          <div class="form-group">
            <label>Senha</label>
            <input type="password" id="password" required>
          </div>

          <button class="btn" type="submit">Entrar</button>
        </form>
      </section>
    `;
    }

    static renderDashboard(movies) {
        return `
      <section>
        <h1 class="page-title">Painel Administrativo</h1>
        <p class="page-subtitle">
          Cadastre, edite e exclua filmes da biblioteca.
        </p>

        <form id="movieForm" class="form">
          <input type="hidden" id="movieId">

          <div class="form-group">
            <label>Título</label>
            <input type="text" id="title" required>
          </div>

          <div class="form-group">
            <label>Diretor</label>
            <input type="text" id="director" required>
          </div>

          <div class="form-group">
            <label>Ano</label>
            <input type="number" id="year" required>
          </div>

          <div class="form-group">
            <label>Gênero</label>
            <input type="text" id="genre" placeholder="Ex: Ficção Científica" required>
          </div>

          <div class="form-group">
            <label>URL da Imagem</label>
            <input type="url" id="image_url">
          </div>

          <div class="form-group">
            <label>Sinopse</label>
            <textarea id="synopsis" required></textarea>
          </div>

          <button class="btn" type="submit">Salvar Filme</button>
        </form>

        <div class="grid">
          ${movies.map(movie => `
            <article class="movie-card">
              <img 
                src="${movie.image_url || 'https://placehold.co/400x600?text=SciFilm'}" 
                alt="${movie.title}"
              >

              <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="badge">${movie.genre}</span>
                <p><strong>Diretor:</strong> ${movie.director}</p>
                <p><strong>Ano:</strong> ${movie.year}</p>

                <div class="admin-actions">
                  <button 
                    class="btn btn-secondary edit-btn" 
                    data-movie='${JSON.stringify(movie)}'
                  >
                    Editar
                  </button>

                  <button 
                    class="btn btn-danger delete-btn" 
                    data-id="${movie.id}"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
    }

    static renderError() {
        return `
      <section>
        <h1 class="page-title">Erro no painel</h1>
        <p class="page-subtitle">
          Não foi possível carregar os dados administrativos.
        </p>
      </section>
    `;
    }
}