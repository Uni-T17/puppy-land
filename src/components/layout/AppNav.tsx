function AppNav() {
  return (
    <header className="relative border-b">
      <div className="gradient-cool inset-0 opacity-10"></div>
      <div className="container mx-auto my-2 flex flex-row">
        <div className="">
          <div className="flex gap-2">
            <div className="animate-pulse text-3xl">🐾</div>
            <span className="text-2xl">PuppyLand</span>
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-center gap-4">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Favorites</a>
        </nav>
      </div>
    </header>
  );
}

export default AppNav;
