function applyConfig() {
    const nameParts = config.hero_name.split(" ");
    document.getElementById("hero-name").innerHTML = `
    <span>${nameParts[0]}</span>
    <span class="gradient-text">${nameParts.slice(1).join(" ")}</span>
  `;

    document.getElementById("hero-subtitle").textContent = config.hero_title;
    document.getElementById("hero-tagline").textContent = config.hero_tagline;
    document.getElementById("about-text").textContent = config.about_text;

    document.getElementById("contact-email-link").href = `mailto:${config.contact_email}`;
    document.getElementById("contact-email-text").textContent = config.contact_email;

    document.documentElement.style.setProperty("--bg-color", config.background_color);
    document.documentElement.style.setProperty("--surface-color", config.surface_color);
    document.documentElement.style.setProperty("--text-color", config.text_color);
    document.documentElement.style.setProperty("--primary-color", config.primary_color);
    document.documentElement.style.setProperty("--secondary-color", config.secondary_color);

    document.body.style.fontFamily = `'${config.font_family}', sans-serif`;
    document.documentElement.style.fontSize = `${config.font_size}px`;
}

document.addEventListener("DOMContentLoaded", applyConfig);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
