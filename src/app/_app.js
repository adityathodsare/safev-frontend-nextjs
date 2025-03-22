import { AuthProvider } from "../context/AuthContext"; // Ensure correct import

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
