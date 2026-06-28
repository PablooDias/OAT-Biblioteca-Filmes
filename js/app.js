import { HomeView } from "./views/HomeView.js";
import { AboutView } from "./views/AboutView.js";
import { ContactView } from "./views/ContactView.js";
import { AdminView } from "./views/AdminView.js";

import { AuthController } from "./controllers/AuthController.js";
import { MovieController } from "./controllers/MovieController.js";

const app = document.querySelector("#app");

async function router() {
    const route = window.location.hash || "#/";

    if (route === "#/") {
        app.innerHTML = HomeView.render();
    }

    else if (route === "#/filmes") {
        MovieController.showMovies();
    }

    else if (route === "#/sobre") {
        app.innerHTML = AboutView.render();
    }

    else if (route === "#/contato") {
        app.innerHTML = ContactView.render();
        ContactView.bindEvents();
    }

    else if (route === "#/admin") {
        const user = await AuthController.getUser();

        if (user) {
            MovieController.showAdmin();
        } else {
            app.innerHTML = AdminView.renderLogin();
            bindLogin();
        }
    }

    else {
        app.innerHTML = `
      <section>
        <h1 class="page-title">Página não encontrada</h1>
        <p class="page-subtitle">A rota acessada não existe.</p>
        <a href="#/" class="btn">Voltar ao início</a>
      </section>
    `;
    }
}

function bindLogin() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            await AuthController.login(email, password);
            window.location.hash = "#/admin";
            router();
        } catch (error) {
            alert("E-mail ou senha inválidos.");
        }
    });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);