import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Best gaming servers I've ever used. The performance is incredible!",
    name: "Dashawn Saskari",
    title: "Pro Gamer",
    game: "CS2",
    rating: 5,
  },
  {
    quote: "Setup was super easy and the support team is amazing.",
    name: "Sarah Johnson",
    title: "Community Leader",
    game: "Minecraft",
    rating: 5,
  },
  {
    quote: "Zero downtime and amazing ping times. Couldn't ask for better.",
    name: "Mike Chen",
    title: "ESports Manager",
    game: "CS2",
    rating: 5,
  },
  {
    quote: "Perfect for our tournament needs. Rock-solid performance.",
    name: "Emma Wilson",
    title: "Tournament Organizer",
    game: "ARK",
    rating: 5,
  },
  {
    quote: "Customer support is top-notch. They're always there when needed.",
    name: "David Park",
    title: "Server Admin",
    game: "Minecraft",
    rating: 5,
  },
];

const CardContent = ({ item }) => (
  <div className="relative flex-shrink-0 w-[280px] sm:w-[350px] rounded-2xl border border-zinc-700/50 bg-zinc-800/50 backdrop-blur-sm px-6 sm:px-8 py-6 hover:border-primarytext transition-all duration-300 group">
    <div className="absolute top-4 right-4">
      <Quote className="w-8 h-8 text-primarytext/10 group-hover:text-primarytext/20 transition-colors duration-300" />
    </div>

    <div className="relative z-20">
      <div className="flex mb-2">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primarytext text-primarytext" />
        ))}
      </div>

      <div className="font-medium text-zinc-200 mb-6 leading-relaxed text-sm sm:text-base">
        "{item.quote}"
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primarytext/20 to-primarytext/10 flex items-center justify-center">
          <span className="text-primarytext font-semibold text-lg">
            {item.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
            {item.name}
          </p>
          <p className="text-xs sm:text-sm text-blue-100">
            {item.title} · {item.game}
          </p>
        </div>
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-primarytext/5 to-transparent rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const InfiniteMovingCards = ({
  items = testimonials,
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const leftScrollerRef = useRef(null);
  const rightScrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState("normal");

  useEffect(() => {
    if (
      !items?.length ||
      !containerRef.current ||
      !leftScrollerRef.current ||
      !rightScrollerRef.current
    ) {
      return;
    }

    const adjustSpeed = () => {
      if (window.innerWidth < 768) {
        setSpeed("fast");
      } else {
        setSpeed("normal");
      }
    };

    adjustSpeed();
    window.addEventListener("resize", adjustSpeed);

    const setupScroller = (scrollerRef) => {
      const content = Array.from(scrollerRef.current.children);
      content.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    };

    setupScroller(leftScrollerRef);
    setupScroller(rightScrollerRef);

    const duration =
      {
        fast: "20s",
        normal: "45s",
        slow: "60s",
      }[speed] || "45s";

    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scroller = entry.target;
          if (entry.isIntersecting) {
            scroller.style.animationPlayState = "running";
          } else {
            scroller.style.animationPlayState = "paused";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(leftScrollerRef.current);
    observer.observe(rightScrollerRef.current);

    return () => {
      window.removeEventListener("resize", adjustSpeed);
      observer.disconnect();
    };
  }, [speed, items]);

  return (
    <div className="relative bg-black py-12 sm:py-24 overflow-hidden">
      {/* Title */}
      <div
        ref={containerRef}
        className={`relative max-w-full overflow-hidden ${className}`}
      >
        {/* Top row - scrolling left */}
        <div className="relative mb-4">
          <div
            ref={leftScrollerRef}
            className={`flex gap-4 py-4 ${start ? "animate-scroll-left" : ""} ${
              pauseOnHover ? "hover:[animation-play-state:paused]" : ""
            }`}
          >
            {items.map((item, idx) => (
              <CardContent key={`left-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom row - scrolling right */}
        <div className="relative">
          <div
            ref={rightScrollerRef}
            className={`flex gap-4 py-4 ${
              start ? "animate-scroll-right" : ""
            } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
          >
            {items.map((item, idx) => (
              <CardContent key={`right-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black to-transparent z-10" />

        <style>{`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 1rem)); }
          }

          @keyframes scroll-right {
            from { transform: translateX(calc(-50% - 1rem)); }
            to { transform: translateX(0); }
          }

          .animate-scroll-left {
            animation: scroll-left var(--animation-duration, 45s) ease-in-out infinite;
            will-change: transform;
          }

          .animate-scroll-right {
            animation: scroll-right var(--animation-duration, 45s) ease-in-out infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </div>
  );
};

export { InfiniteMovingCards };
export default InfiniteMovingCards;
