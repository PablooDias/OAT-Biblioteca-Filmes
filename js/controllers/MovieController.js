import { MovieModel } from "../models/MovieModel.js";
import { MovieView } from "../views/MovieView.js";
import { AdminView } from "../views/AdminView.js";

export class MovieController {
    static async showMovies() {
        const app = document.querySelector("#app");

        try {
            const movies = await MovieModel.getAll();
            app.innerHTML = MovieView.render(movies);
            this.bindSearch();
        } catch (error) {
            app.innerHTML = MovieView.renderError();
        }
    }

    static async showAdmin() {
        const app = document.querySelector("#app");

        try {
            const movies = await MovieModel.getAll();
            app.innerHTML = AdminView.renderDashboard(movies);
            this.bindAdminEvents();
        } catch (error) {
            app.innerHTML = AdminView.renderError();
        }
    }

    static bindSearch() {
        const input = document.querySelector("#searchMovie");

        if (!input) return;

        input.addEventListener("input", async () => {
            const term = input.value.trim();

            const movies = term
                ? await MovieModel.search(term)
                : await MovieModel.getAll();

            document.querySelector("#movieList").innerHTML =
                MovieView.renderCards(movies);
        });
    }

    static bindAdminEvents() {
        const form = document.querySelector("#movieForm");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const id = document.querySelector("#movieId").value;

            const movie = {
                title: document.querySelector("#title").value,
                director: document.querySelector("#director").value,
                year: Number(document.querySelector("#year").value),
                genre: document.querySelector("#genre").value,
                image_url: document.querySelector("#image_url").value,
                synopsis: document.querySelector("#synopsis").value
            };

            if (id) {
                await MovieModel.update(id, movie);
            } else {
                await MovieModel.create(movie);
            }

            this.showAdmin();
        });

        document.querySelectorAll(".edit-btn").forEach((button) => {
            button.addEventListener("click", () => {
                const movie = JSON.parse(button.dataset.movie);

                document.querySelector("#movieId").value = movie.id;
                document.querySelector("#title").value = movie.title;
                document.querySelector("#director").value = movie.director;
                document.querySelector("#year").value = movie.year;
                document.querySelector("#genre").value = movie.genre;
                document.querySelector("#image_url").value = movie.image_url;
                document.querySelector("#synopsis").value = movie.synopsis;

                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });

        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", async () => {
                const confirmDelete = confirm("Deseja excluir este filme?");

                if (confirmDelete) {
                    await MovieModel.delete(button.dataset.id);
                    this.showAdmin();
                }
            });
        });
    }
}