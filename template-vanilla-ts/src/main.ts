import { signal, html, mount } from "@deijose/nix-js";
import type { NixTemplate } from "@deijose/nix-js";

function App(): NixTemplate {
    const count = signal<number>(0);

    return html`
        <main>
            <h1>❄️ Nix.js + TypeScript</h1>
            <button @click=${() => count.update((c: number) => c + 1)}>
                Clicks: ${() => count.value}
            </button>
        </main>
    `;
}

mount(App(), "#app");