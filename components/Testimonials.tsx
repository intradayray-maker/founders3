/* --- STAR ICONS --- */

const FullStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-yellow-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
  </svg>
);

const HalfStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-yellow-400"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient id="halfStarGradient">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfStarGradient)"
      d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
    />
  </svg>
);

const EmptyStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-yellow-400 opacity-30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
  </svg>
);



/* --- STAR RENDERER --- */

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <FullStar key={`f-${i}`} />
      ))}
      {half && <HalfStar />}
      {Array.from({ length: empty }).map((_, i) => (
        <EmptyStar key={`e-${i}`} />
      ))}
    </div>
  );
}

/* --- TESTIMONIALS --- */

export default function Testimonials() {
  const reviews = [
    {
      text: "My new website makes my interior work look premium. Got 2 new clients the first week.",
      name: "Margret",
      role: "Home Interior Decorator",
      rating: 5.0
    },
    {
      text: "The layout shows my landscaping projects perfectly. Customers say it’s easier to book now.",
      name: "Yuhen",
      role: "Landscaping Specialist",
      rating: 5.0
    },
    {
      text: "I finally look professional online. Got 3 painting estimates booked the same day it went live.",
      name: "Leo",
      role: "Painter",
      rating: 5.0
    },
    {
      text: "My plumbing business never had a real online presence. Now people actually find me on Google.",
      name: "Sothia",
      role: "Plumber",
      rating: 5.0
    },
    {
      text: "Pool cleaning bookings doubled. The Google profile setup helped a LOT.",
      name: "David",
      role: "Pool Technician",
      rating: 5.0
    },
    {
      text: "Insurance clients trust me more now. The site looks clean and professional.",
      name: "Hannah",
      role: "Roof Insurance Inspector",
      rating: 5.0
    },
    {
      text: "My cleaning business looks legit now. I’m getting more commercial inquiries.",
      name: "Christine",
      role: "Business Cleaner",
      rating: 5.0
    },
    {
      text: "Window jobs are coming in faster. The booking form is perfect.",
      name: "Joe",
      role: "Window Technician",
      rating: 4.8
    },
    {
      text: "Electrician calls increased immediately. The 30‑day content helped a ton.",
      name: "Amara",
      role: "Electrician",
      rating: 5.0
    }
  ];

  return (
    <section className="py-2 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="
              bg-card
              border border-border
              rounded-xl
              p-6
              space-y-4
            "
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden">
                <img
                  src={`/reviews/${i + 1}.jpg`}
                  alt={r.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-white/90 font-semibold">{r.name}</p>
                <p className="text-white/40 text-xs">{r.role}</p>
              </div>
            </div>

            <StarRating rating={r.rating} />

            <p className="text-white/70 text-sm leading-relaxed">
              “{r.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
