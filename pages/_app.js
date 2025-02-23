import '../styles/globals.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="pt-1">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;