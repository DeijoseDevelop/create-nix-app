import { html } from "@deijose/nix-js";
import { IonPage, nixRouter, nixRouterState } from "@deijose/nix-ionic";
import type { PageContext } from "@deijose/nix-ionic";
import { authStore } from "../stores/auth";

export class ProfilePage extends IonPage {
    constructor(ctx: PageContext) {
        super(ctx.lc);
    }

    override render() {
        const router = nixRouter();
        const routerState = nixRouterState();

        return html`
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Router State Demo</ion-card-title>
            <ion-card-subtitle>Reactive path and params from nixRouterState()</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Current path:</strong> ${() => routerState.path.value}</p>
            <p><strong>Can go back:</strong> ${() => String(routerState.canGoBack.value)}</p>
            <ion-button
              expand="block"
              color="danger"
              @click=${() => {
                authStore.logout();
                router.replace("/login");
            }}
            >
              Sign out
            </ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
    }
}
