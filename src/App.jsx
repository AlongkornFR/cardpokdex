import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main className="p-4 min-h-screen bg-white">
        <h1 className="text-4xl">Corps de page</h1>
        <p>BLABLA</p>
      </main>
      <Footer />
    </div>
  );
}
