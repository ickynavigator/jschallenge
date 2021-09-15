import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@zurimain/content",
//   app: () => System.import("@zurimain/main"),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@zurimain/component",
  app: () => System.import("@zurimain/component"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
