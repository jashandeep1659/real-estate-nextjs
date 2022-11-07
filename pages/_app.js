import "../styles/globals.scss";
import AppContextState from "../context/AppContext";
function MyApp({ Component, pageProps }) {
    return (
        <AppContextState>
            <Component {...pageProps} />
        </AppContextState>
    );
}

export default MyApp;
