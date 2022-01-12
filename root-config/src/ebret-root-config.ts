import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

registerApplication(
    "@ebret/poc-react",
    () => System.import("@ebret/poc-react"),
    (location) => location.pathname === "/poc-react"
);

registerApplication(
    "@ebret/poc-angular",
    () => System.import("@ebret/poc-angular"),
    (location) => {
      return location.pathname.startsWith("/poc-angular");
    }
);

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
