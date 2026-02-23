// --- Données fictives ---

const AGENTS = [
  { code: "ÉBÈNE", etab: "Collège Victor Hugo", cover: "Élève", statut: "Actif" },
  { code: "SAPHIR", etab: "Lycée Saint-Louis", cover: "Assistant d'éducation", statut: "En mission" },
  { code: "MARQUIS", etab: "Lycée Privé Montaigne", cover: "Professeur stagiaire", statut: "Dormant" }
];

const MISSIONS = [
  { titre: "Observation discrète", cible: "Personnel administratif", etab: "Collège Victor Hugo", priorite: "Moyenne" },
  { titre: "Protection silencieuse", cible: "Élève cible Alpha", etab: "Lycée Saint-Louis", priorite: "Haute" }
];

const GADGETS = [
  { nom: "Stylo‑micro", desc: "Enregistreur audio discret, activable par pression triple." },
  { nom: "Montre‑analyseur", desc: "Analyse rapide de substances et accès aux messages cryptés." },
  { nom: "Sac à dos compartimenté", desc: "Compartiments cachés pour documents et matériel." }
];

const ARCHIVES = [
  "Opération BRUME – Incident évité au conseil de classe.",
  "Opération SILENCE – Neutralisation d'une fuite d'informations.",
  "Opération VEILLE – Mise sous surveillance d'un nouveau professeur."
];

// --- Login simple (démonstration) ---

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const loginBtn = document.getElementById("login-btn");
const loginError = document.getElementById("login-error");
const agentCodeSpan = document.getElementById("agent-code");

loginBtn.addEventListener("click", () => {
  const id = document.getElementById("agent-id").value.trim();
  const key = document.getElementById("agent-key").value.trim();

  // Exemple : identifiant et clé fixes (à remplacer par un vrai système)
  if (id === "ENNERY" && key === "CERCLE") {
    loginScreen.classList.add("hidden");
    app.classList.remove("hidden");
    agentCodeSpan.textContent = "Agent : " + id;
    loginError.textContent = "";
  } else {
    loginError.textContent = "Accès refusé.";
  }
});

// Déconnexion
document.getElementById("logout-btn").addEventListener("click", () => {
  app.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

// --- Navigation sections ---

const navButtons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });
  });
});

// --- Remplissage dynamique ---

// Agents
const agentsTable = document.getElementById("agents-table");
AGENTS.forEach(a => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${a.code}</td>
    <td>${a.etab}</td>
    <td>${a.cover}</td>
    <td>${a.statut}</td>
  `;
  agentsTable.appendChild(tr);
});

// Missions
const missionsList = document.getElementById("missions-list");
MISSIONS.forEach(m => {
  const div = document.createElement("div");
  div.style.marginBottom = "10px";
  div.innerHTML = `
    <strong>${m.titre}</strong><br>
    Cible : ${m.cible}<br>
    Établissement : ${m.etab}<br>
    Priorité : ${m.priorite}
  `;
  missionsList.appendChild(div);
});

// Gadgets
const gadgetsList = document.getElementById("gadgets-list");
GADGETS.forEach(g => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${g.nom}</strong> – ${g.desc}`;
  gadgetsList.appendChild(li);
});

// Archives
const archivesList = document.getElementById("archives-list");
ARCHIVES.forEach(a => {
  const li = document.createElement("li");
  li.textContent = a;
  archivesList.appendChild(li);
});

// --- Protocole d'urgence ---

const emergencyLog = document.getElementById("emergency-log");

document.getElementById("btn-extract").addEventListener("click", () => {
  emergencyLog.textContent = "PROTOCOLE : Extraction immédiate déclenchée (simulation).";
});

document.getElementById("btn-dormant").addEventListener("click", () => {
  emergencyLog.textContent = "PROTOCOLE : Agent dormant activé (simulation).";
});

document.getElementById("btn-purge").addEventListener("click", () => {
  emergencyLog.textContent = "PROTOCOLE : Purge locale des données (simulation).";
});

document.getElementById("btn-silent").addEventListener("click", () => {
  emergencyLog.textContent = "PROTOCOLE : Signal silencieux envoyé au Cercle (simulation).";
});
