import { signal, html, mount } from "@deijose/nix-js";

function App() {
    const count = signal(0);

    return html`
        <main>
            <h1><img src="/nix-js-logo.png" alt="Nix.js Logo" /> Nix.js en estado puro</h1>
            <p>Sin compilador. Sin bundler. Solo la web nativa.</p>
            <button @click=${() => count.update((c) => c + 1)}>
                Clicks: ${() => count.value}
            </button>
        </main>
    `;
}

mount(App(), "#app");