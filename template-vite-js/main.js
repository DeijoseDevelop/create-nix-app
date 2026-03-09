import { signal, html, mount } from "@deijose/nix-js";

function App() {
    const count = signal(0);

    return html`
        <main style="font-family: sans-serif; padding: 2rem;">
            <h1>❄️ Nix.js + Vite</h1>
            <p>Sin compilador. Sin bundler. Solo la web nativa.</p>
            <button @click=${() => count.update((c) => c + 1)}>
                Clicks: ${() => count.value}
            </button>
        </main>
    `;
}

mount(App(), "#app");