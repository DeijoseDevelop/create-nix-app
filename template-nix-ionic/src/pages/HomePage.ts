import { html } from "@deijose/nix-js";
import { IonPage } from "@deijose/nix-ionic";
import type { PageContext } from "@deijose/nix-ionic";

export class HomePage extends IonPage {
  constructor(ctx: PageContext) {
    super(ctx.lc);
  }

  override render() {
    return html`
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>My Nix-Ionic App</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Welcome to Nix-Ionic 🚀</ion-card-title>
            <ion-card-subtitle>Powered by Nix.js + Ionic + Capacitor</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>Edit <code>src/pages/HomePage.ts</code> to get started.</p>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
  }
}
