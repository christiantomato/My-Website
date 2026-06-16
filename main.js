const projects = [
  {
    title: "Custom Programming Language",
    description: "I wrote a compiler in C for my coding language, Tomat0. It is a procedural language currently supporting subroutines and conditional execution. It uses minimal syntax for easy readability and fast typing. It generates ARM64 assembly and compiles quickly, only needing 2 passes for syntactic analysis and code generation. You can also find a syntax highlighting extension on the VSCode marketplace, created by me.",
    image: "assets/images/projects/tomat0Example.png",
    links: [
      { alt: "GitHub", icon: "assets/images/icons/github.svg", url: "https://github.com/christiantomato/Tomat0-Compiler" },
      { alt: "Extension", icon: "assets/images/icons/vscode.svg", url: "https://marketplace.visualstudio.com/items?itemName=christiantomato.tomat0" }
    ]
  },
  {
    title: "TypeRunner",
    description: "A group project I lead where I designed multiple GUI screens on the front-end and wrote core game logic in the back-end. TypeRunner is a java based typing game designed to making typing practice feel enjoyable. It tracks statistics like wpm and accuracy to track progress, and includes a competitive in game leaderboard.",
    image: "assets/images/projects/typerunner.png",
    links: [
      { alt: "GitHub", icon: "assets/images/icons/github.svg", url: "https://github.com/christiantomato/TypeRunner" }
    ]
  }
];

let current = 0;

//populates project section with info
function renderProject(index) {
  const p = projects[index];
  document.querySelector(".project-description h2").textContent = p.title;
  document.querySelector(".project-description p").textContent = p.description;
  document.querySelector(".project-img").src = p.image;

  const linksEl = document.querySelector(".project-links");
  linksEl.innerHTML = p.links.map(l => `
    <a href="${l.url}" target="_blank">
      <img src="${l.icon}" alt="${l.alt}" class="social-icon">
    </a>
  `).join("");
}

//goes right
document.querySelector(".next").addEventListener("click", () => {
  current = (current + 1) % projects.length;
  renderProject(current);
});

//goes left
document.querySelector(".prev").addEventListener("click", () => {
  current = (current - 1 + projects.length) % projects.length;
  renderProject(current);
});

renderProject(0);