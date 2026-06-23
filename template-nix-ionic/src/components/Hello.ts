import { NixComponent, html } from "@deijose/nix-js";

export class Hello extends NixComponent {
  override render() {
    return html`<div><h1>Hello Nix-Ionic</h1></div>`;
  }
}
