export class MovieView {
    static render(movies) {
        return `
      <section>
        <h1 class="page-title">Filmes</h1>
        <p class="page-subtitle">
          Confira os principais filmes cadastrados na biblioteca.
        </p>

        <div class="search-box">
          <input 
            type="text" 
            id="searchMovie" 
            placeholder="Pesquisar filme pelo título..."
          >
        </div>

        <div id="movieList" class="grid">
          ${this.renderCards(movies)}
        </div>
      </section>
    `;
    }

    static renderCards(movies) {
        if (!movies.length) {
            return `<p>Nenhum filme encontrado.</p>`;
        }

        return movies.map(movie => `
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
          <p>${movie.synopsis}</p>
        </div>
      </article>
    `).join("");
    }

    static renderError() {
        return `
      <section>
        <h1 class="page-title">Erro ao carregar filmes</h1>
        <p class="page-subtitle">
          Verifique se o Supabase foi configurado corretamente.
        </p>
      </section>
    `;
    }
}