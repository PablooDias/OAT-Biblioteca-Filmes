export class ContactView {
    static render() {
        return `
      <section>
        <h1 class="page-title">Contato</h1>

        <p class="page-subtitle">
          Entre em contato com a administração da biblioteca.
          <br>
          (Esse formulário é apenas uma demonstração)
        </p>

        <form class="form" id="contactForm">

          <div class="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" required>
          </div>

          <div class="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" required>
          </div>

          <div class="form-group">
            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem" required></textarea>
          </div>

          <button class="btn" type="submit">
            Enviar Mensagem
          </button>

        </form>
      </section>
    `;
    }

    static bindEvents() {
        const form = document.querySelector("#contactForm");

        if (!form) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            alert("Mensagem enviada com sucesso!");

            form.reset();
        });
    }
}