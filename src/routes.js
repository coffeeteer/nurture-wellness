import Home from "./components/Home.vue";
import Massage from "./components/pages/Massage.vue";
import Yoga from "./components/pages/Yoga.vue";
import Acupuncture from "./components/pages/Acupuncture.vue";
import Contact from "./components/pages/Contact.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/massage", component: Massage },
  { path: "/yoga", component: Yoga },
  { path: "/acupunture", component: Acupuncture },
  { path: "/contact", component: Contact }
];
