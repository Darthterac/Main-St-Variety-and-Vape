function App() {
    return (
      <div className="bg-brand-black text-white min-h-screen">
        <header className="bg-gradient-to-br from-brand-purple to-brand-blue py-16 px-6 text-center shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Main & Smoke</h1>
          <p className="text-lg max-w-xl mx-auto">
            Your neighborhood corner store and vape shop. Local. Friendly. Always stocked.
          </p>
        </header>
  
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-brand-purple">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Tucked into the heart of Georgetown, Main & Smoke is your one-stop shop for convenience and good vibes.
          </p>
        </section>
      </div>
    );
  }
  
  export default App;
  