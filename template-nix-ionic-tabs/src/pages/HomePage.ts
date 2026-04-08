import { html } from "@deijose/nix-js";
import { IonPage, useRouter } from "@deijose/nix-ionic";
import type { PageContext } from "@deijose/nix-ionic";

export class HomePage extends IonPage {
  constructor(ctx: PageContext) {
    super(ctx.lc);
  }

  override render() {
    const router = useRouter();

    return html`
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Nix-Ionic Tabs Template</ion-card-title>
            <ion-card-subtitle>IonRouterOutlet + createBottomTabBar</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>This page is protected by <code>beforeEnter</code> and rendered inside Ionic's router outlet.</p>
            <ion-button expand="block" @click=${() => router.navigate("/map")}>Open Map Tab</ion-button>
            <ion-button expand="block" fill="outline" @click=${() => router.navigate("/profile")}>Go to Profile Tab</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
  }
}
