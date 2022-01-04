import 'tailwindcss/tailwind.css';
import '../components/Mile';
import '../components/Accordion.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
