import "tailwindcss/tailwind.css";

import "../components/Milestones.css";
import "../components/Accordion.css";
// import { Provider } from "react-redux";
// import store from "../src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

export default MyApp;
