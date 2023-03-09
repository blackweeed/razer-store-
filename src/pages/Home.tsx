import ProductView from "../components/ProductView";

function Home() {
  return (
    <section className="px-4">
      <div className="mb-6">
        <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold">
          GAMING MICE
        </h1>
        <p className="text-[1.3125rem] leading-none font-semibold">
          HIGH-PERFORMANCE WIRED AND WIRELESS MICE MADE FOR EVERY GAMER'S HAND
        </p>
      </div>
      <ProductView />
    </section>
  );
}

export default Home;
