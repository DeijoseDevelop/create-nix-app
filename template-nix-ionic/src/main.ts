// 1. Core Ionic Styles
import "@ionic/core/css/core.css";
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";
import "@ionic/core/css/padding.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";
import "./style.css";

// 2. Framework
import { NixComponent, html, mount } from "@deijose/nix-js";
import { setupNixIonic, IonRouterOutlet } from "@deijose/nix-ionic";
import { home, homeOutline } from "ionicons/icons";

// 3. Modular component bundles — import only what your app needs
import { layoutComponents } from "@deijose/nix-ionic/bundles/layout";
import { formComponents } from "@deijose/nix-ionic/bundles/forms";
import { listComponents } from "@deijose/nix-ionic/bundles/lists";
import { navigationComponents } from "@deijose/nix-ionic/bundles/navigation";

// 4. Pages
import { HomePage } from "./pages/HomePage";

// Register Ionic components
setupNixIonic({
  components: [...layoutComponents, ...formComponents, ...listComponents, ...navigationComponents],
  icons: {
    home,
    "home-outline": homeOutline,
  },
});

// 5. Router
const outlet = new IonRouterOutlet([
  { path: "/", component: (ctx) => new HomePage(ctx) },
]);

// 6. Root App Component
class App extends NixComponent {
  override render() {
    return html`<ion-app>${outlet}</ion-app>`;
  }
}

// 7. Bootstrap
mount(new App(), "#app");