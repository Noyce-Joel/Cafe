import { useRouter } from "next/router";
import Layout from "/components/Layout";
import styles from "/styles/globals.css";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
