import { signal, html, mount } from "@deijose/nix-js";
import type { NixTemplate } from "@deijose/nix-js";

function App(): NixTemplate {
    const count = signal<number>(0);

    return html`
        <main style="font-family: sans-serif; padding: 2rem;">
            <h1>❄️ Nix.js + TypeScript Vanilla</h1>
            <button @click=${() => count.update((c) => c + 1)}>
                Clicks: ${() => count.value}
            </button>
        </main>
    `;
}

mount(App(), "#app");