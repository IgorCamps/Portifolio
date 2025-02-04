document.addEventListener("DOMContentLoaded", () => {
    const username = "IgorCamps"; // Substitua pelo seu usuário do GitHub
    const projectsContainer = document.getElementById("projetos");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories => {
            repositories.forEach(repo => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("projeto");
                projectElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "Sem descrição"}</p>
                    <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Erro ao buscar repositórios: ", error));
});
