"use client";

export default function Samples() {
  return (
    <section id="samples" className="py-1 px-6 text-center">

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-card shadow-glow">
        <div className="aspect-video bg-black">
          <iframe
            src="https://player.vimeo.com/video/1211112648?autoplay=0&loop=0&muted=0&controls=1&title=0&byline=0&portrait=0&dnt=1"
            className="w-full h-full"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>

    </section>
  );
}
