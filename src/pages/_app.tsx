import RootLayout from "@/Components/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="font-bodyFont">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </Provider>
  );
}
