import { html } from "@deijose/nix-js";
import { IonPage, IonBackButton } from "@deijose/nix-ionic";
import type { PageContext } from "@deijose/nix-ionic";

export class RouteDetailPage extends IonPage {
  private routeId: string;

  constructor(ctx: PageContext) {
    super(ctx.lc);
    this.routeId = ctx.params.id ?? "unknown";
  }

  override render() {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">${IonBackButton("/map")}</ion-buttons>
          <ion-title>Route #${this.routeId}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Route Detail</ion-card-title>
            <ion-card-subtitle>Dynamic params + IonBackButton in one place</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Current route id: <strong>${this.routeId}</strong>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
  }
}
