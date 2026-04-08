# Nix-Ionic Tabs App

Complete starter template with:

- `IonRouterOutlet` route definitions and guards
- `createBottomTabBar()` bottom navigation
- `useRouter()` navigation actions
- `useRouterState()` reactive route state
- `setupNixIonic({ icons })` custom icon registration

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Included Routes

- `/login` (public)
- `/` (Home tab, protected)
- `/map` (Map tab, protected)
- `/map/route/:id` (detail page, protected, outside tab flow)
- `/profile` (Profile tab, protected)

## Files to Explore

```
src/
├── main.ts
├── style.css
├── stores/
│   └── auth.ts
└── pages/
    ├── LoginPage.ts
    ├── HomePage.ts
    ├── MapPage.ts
    ├── RouteDetailPage.ts
    └── ProfilePage.ts
```

## Core Pattern

`main.ts` wires everything:

1. Registers Ionic bundles and icons.
2. Creates `IonRouterOutlet` with `beforeEnter` auth guard.
3. Creates tabs with `createBottomTabBar()`.
4. Mounts both outlet and tabs inside `<ion-app>`.

## Android (Capacitor)

```bash
npm run build
npx cap sync android
npx cap open android
```

## Learn More

- [Nix-Ionic on npm](https://www.npmjs.com/package/@deijose/nix-ionic)
- [Ionic Components](https://ionicframework.com/docs/components)
- [Capacitor Docs](https://capacitorjs.com/docs)
