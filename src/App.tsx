function App() {
  return (
    <div className="container mx-auto max-w-lg">
      <header className="mt-4">
        <h1 className="text-3xl font-bold">Spenser Guo</h1>
        <p className="text-muted-foreground text-lg">Aspiring Web Designer</p>
      </header>
      <h2 className="font-bold">Projects</h2>{" "}
      <a
        href="https://github.com/5penny/cabbages"
        className="text-blue-600 visited:text-purple-600 text-lg font-medium text-primary hover:underline"
      >
        Cabbage Website
      </a>
      <div className="space-y-3 mt-2">
        <div>
          <h3 className="font-medium mb-1">
            Interactive & Themed Webpage Design
          </h3>
          <p className="text-muted-foreground">
            Created a playful, cabbage-themed webpage using HTML and Tailwind
            CSS, showcasing an engaging visual layout with relevant images,
            descriptions, and links.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-1">Media Integration</h3>
          <p className="text-muted-foreground">
            Embedded animated GIFs, custom images, and a YouTube video to
            enhance user engagement and provide an interactive experience.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-1">
            Accessibility & Usability Enhancements
          </h3>
          <p className="text-muted-foreground">
            Implemented accessibility practices with descriptive alt texts and
            clear, structured content for improved readability and navigation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
