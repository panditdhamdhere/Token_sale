import "../styles/globals.css";
import { StateContextProvider } from "../context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      <script src="assets/js/jquery-1.12.4.min.js"></script>
      <script src="assets/bootstarp/bootstrap.min.js"></script>
      <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
      <script src="assets/js/magnific-popup.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/parallax.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/particles.min.js"></script>
      <script src="assets/js/jquery.dd.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/spop.min.js"></script>
      <script src="assets/js/notification.js"></script>
      <script src="assets/js/scripts.js"></script>
      <script src="index.js"></script>
    </>
  );
}
