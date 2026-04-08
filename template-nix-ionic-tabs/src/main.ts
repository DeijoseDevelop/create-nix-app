import "@ionic/core/css/core.css";
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";
import "@ionic/core/css/padding.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";
import "./style.css";

import { NixComponent, html, mount } from "@deijose/nix-js";
import { setupNixIonic, IonRouterOutlet, createBottomTabBar } from "@deijose/nix-ionic";
import { layoutComponents } from "@deijose/nix-ionic/bundles/layout";
import { navigationComponents } from "@deijose/nix-ionic/bundles/navigation";
import { listComponents } from "@deijose/nix-ionic/bundles/lists";
import { buttonComponents } from "@deijose/nix-ionic/bundles/buttons";
import {
  home,
  homeOutline,
  map,
  mapOutline,
  person,
  personOutline,
  logInOutline,
} from "ionicons/icons";

import { HomePage } from "./pages/HomePage";
import { MapPage } from "./pages/MapPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { RouteDetailPage } from "./pages/RouteDetailPage";
import { authStore } from "./stores/auth";

setupNixIonic({
  components: [
    ...layoutComponents,
    ...navigationComponents,
    ...listComponents,
    ...buttonComponents,
  ],
  icons: {
    home,
    "home-outline": homeOutline,
    map,
    "map-outline": mapOutline,
    person,
    "person-outline": personOutline,
    "log-in-outline": logInOutline,
  },
});

const requireAuth = () => (authStore.isAuthenticated.value ? true : "/login");

const outlet = new IonRouterOutlet([
  { path: "/login", component: (ctx) => new LoginPage(ctx) },
  { path: "/", component: (ctx) => new HomePage(ctx), beforeEnter: requireAuth },
  { path: "/map", component: (ctx) => new MapPage(ctx), beforeEnter: requireAuth },
  { path: "/map/route/:id", component: (ctx) => new RouteDetailPage(ctx), beforeEnter: requireAuth },
  { path: "/profile", component: (ctx) => new ProfilePage(ctx), beforeEnter: requireAuth },
]);

const tabs = createBottomTabBar(
  [
    { path: "/", label: "Home", icon: "home-outline", activeIcon: "home", exact: true },
    { path: "/map", label: "Map", icon: "map-outline", activeIcon: "map" },
    { path: "/profile", label: "Profile", icon: "person-outline", activeIcon: "person" },
  ],
  {
    className: "app-tab-bar",
    activeClassName: "tab-active",
    navigationDirection: "root",
    hideWhen: (path) => path === "/login" || path.startsWith("/map/route/"),
  },
);

class App extends NixComponent {
  override render() {
    return html`<ion-app>${outlet}${tabs}</ion-app>`;
  }
}

mount(new App(), "#app");