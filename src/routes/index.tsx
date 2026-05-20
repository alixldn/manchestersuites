import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Wifi,
  Car,
  ChefHat,
  Tv,
  ShieldCheck,
  Sparkles,
  Users,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Train,
  Trophy,
  Building2,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-suite.jpg";
import suite1 from "@/assets/suite-1.jpg";
import suite2 from "@/assets/suite-2.jpg";
import suite3 from "@/assets/suite-3.jpg";
import { shuffleProperties, buildBookingUrl, type Property } from "@/config/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trafford Garden Suites — Premium Manchester Stays" },
      {
        name: "description",
        content:
          "Premium furnished apartments in Trafford, Manchester. Minutes from Old Trafford Football & Cricket stadiums.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <Suites />
      <AmenitiesBar />
      <Gallery />
      <Location />
      <HotelQuality />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#suites", label: "SUITES" },
    { href: "#location", label: "LOCATION" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-white">
          <div className="font-display text-lg leading-tight font-semibold tracking-wide">
            Trafford Garden Suites
          </div>
          <div className="text-[10px] tracking-[0.25em] opacity-80">APARTMENTS BY HVL</div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] text-white/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-secondary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#suites"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md text-xs tracking-[0.2em] font-medium transition"
          >
            BOOK NOW
          </a>
        </nav>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-sage-dark/95 backdrop-blur px-6 py-4 flex flex-col gap-4 text-white text-sm tracking-[0.2em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#suites"
            onClick={() => setOpen(false)}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-center"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium Manchester hotel suite"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/90 text-xs tracking-[0.35em] mb-5">TRAFFORD GARDENS</p>
        <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
          Steps from the Action,
          <br />
          <span className="italic text-secondary">Miles from the Ordinary.</span>
        </h1>
        <p className="mt-6 text-white/85 max-w-xl text-sm md:text-base">
          Premium stays in Manchester for sports, business, and leisure. Minutes from Old Trafford
          Football & Cricket stadiums.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#suites"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-7 py-3 rounded-md text-xs tracking-[0.25em] font-semibold transition"
          >
            VIEW OUR SUITES
          </a>
          <a
            href="#location"
            className="border border-white/80 text-white hover:bg-white/10 px-7 py-3 rounded-md text-xs tracking-[0.25em] font-semibold transition"
          >
            EXPLORE LOCATION
          </a>
        </div>
      </div>
    </section>
  );
}

function Suites() {
  // Randomize on every refresh — useMemo with no deps runs once per mount
  const items = useMemo(() => shuffleProperties(), []);
  return (
    <section id="suites" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-secondary text-xs tracking-[0.3em] mb-3">OUR COLLECTION</p>
          <h2 className="font-display text-4xl md:text-5xl text-sage-dark mb-4">
            Three Exceptional Suites
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each apartment is individually designed, hotel-standard clean, and fully equipped for
            the perfect Manchester stay.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {items.map((p) => (
            <SuiteCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SuiteCard({ p }: { p: Property }) {
  const href = buildBookingUrl(p.wId, p.wTkn);
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border flex flex-col">
      <div className="relative h-56">
        <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="font-display text-xl">{p.name}</h3>
          <p className="text-xs opacity-90 mt-1">
            {p.apt} · {p.tagline}
          </p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Users size={14} /> {p.guests}</span>
          <span className="flex items-center gap-1"><BedDouble size={14} /> {p.beds}</span>
          <span className="flex items-center gap-1"><Bath size={14} /> {p.baths}</span>
          <span className="flex items-center gap-1"><Maximize2 size={14} /> {p.size}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.features.map((f) => (
            <span
              key={f}
              className="text-[10px] bg-sky-soft text-sage-dark px-2 py-1 rounded"
            >
              {f}
            </span>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 rounded-md text-xs tracking-[0.25em] font-semibold transition"
        >
          CHECK AVAILABILITY
        </a>
      </div>
    </div>
  );
}

function AmenitiesBar() {
  const items = [
    { Icon: Wifi, label: "HIGH-SPEED WI-FI" },
    { Icon: Car, label: "FREE PARKING" },
    { Icon: ChefHat, label: "FULL KITCHEN" },
    { Icon: Tv, label: "SMART TV" },
    { Icon: ShieldCheck, label: "SECURE ENTRY" },
    { Icon: Sparkles, label: "HOTEL-STANDARD CLEAN" },
  ];
  return (
    <section className="bg-sage py-8">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-6 gap-6 text-white">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon size={22} className="text-secondary" />
            <span className="text-[10px] tracking-[0.2em]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [suite1, suite2, suite3, heroImg];
  return (
    <section className="py-24 bg-sage-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-secondary text-xs tracking-[0.3em] mb-3">INSIDE THE SUITES</p>
          <h2 className="font-display text-4xl md:text-5xl text-sage-dark">Designed for Comfort</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={src}
                alt={`Suite ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const spots = [
    { Icon: Trophy, name: "Old Trafford Stadium", detail: "5 min walk" },
    { Icon: Trophy, name: "Emirates Cricket Ground", detail: "10 min walk" },
    { Icon: Train, name: "Metrolink Tram Stop", detail: "3 min walk" },
    { Icon: Building2, name: "Manchester City Centre", detail: "15 min by tram" },
  ];
  return (
    <section id="location" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-secondary text-xs tracking-[0.3em] mb-3">PRIME POSITION</p>
          <h2 className="font-display text-4xl md:text-5xl text-sage-dark mb-4">The Location</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nestled in the heart of Trafford, our suites place you minutes from Manchester's iconic
            sporting venues and just a short tram ride from the vibrant city centre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-border min-h-[360px]">
            <iframe
              title="Trafford Garden Suites location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-2.305%2C53.456%2C-2.275%2C53.475&layer=mapnik&marker=53.4655%2C-2.291"
              className="w-full h-full min-h-[360px]"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3">
            {spots.map(({ Icon, name, detail }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-sage-soft rounded-md p-4 border border-border"
              >
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-secondary">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-medium text-sage-dark">{name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin size={11} /> {detail}
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-sage text-white rounded-md p-5 mt-2">
              <p className="font-semibold">"The perfect base for match day"</p>
              <p className="text-sm opacity-90 mt-1">
                Walk to Old Trafford in under 5 minutes. No taxis, no stress — just step out and
                you're there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HotelQuality() {
  const features = [
    { Icon: Sparkles, title: "Hotel-Standard Cleaning", text: "Every suite is deep cleaned and inspected to five-star hotel standards before each guest arrival." },
    { Icon: ShieldCheck, title: "Professional Management", text: "Backed by a team managing 16+ hotels across the UK with 7 years of hospitality excellence." },
    { Icon: Phone, title: "Dedicated Support", text: "24/7 guest support for check-in assistance, local recommendations, and anything you need." },
    { Icon: Tv, title: "Premium Amenities", text: "Complimentary toiletries, high-speed internet, smart TVs, and fully equipped kitchens in every suite." },
  ];
  return (
    <section id="about" className="py-24 bg-sage-soft">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-secondary text-xs tracking-[0.3em] mb-3">MANAGED WITH EXCELLENCE</p>
          <h2 className="font-display text-4xl md:text-5xl text-sage-dark mb-6">
            Hotel Quality,
            <br />
            <span className="italic">Apartment Freedom</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Trafford Garden Suites are professionally managed by Hotel Ventures Ltd, a dynamic
            hospitality management company with a portfolio of 16+ hotels across the UK. We bring
            the rigour of hotel operations — cleaning protocols, guest support, and quality
            standards — to the comfort and space of a private apartment.
          </p>
          <p className="text-muted-foreground">
            Every detail is managed so you can focus on enjoying Manchester. Whether you're here
            for the match, a conference, or a city break, you'll feel the difference that
            professional hospitality makes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="bg-white p-5 rounded-md border border-border">
              <div className="w-9 h-9 rounded-md bg-sky-soft text-secondary flex items-center justify-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-sage-dark mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-sage text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-xl">Trafford Garden</div>
          <div className="text-[10px] tracking-[0.25em] opacity-80 mb-4">SUITES</div>
          <p className="text-sm opacity-85">
            Premium furnished apartments at Trafford Gardens, Manchester. Steps from Old Trafford,
            miles from ordinary.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] mb-4 opacity-80">QUICK LINKS</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#suites" className="hover:text-secondary">Our Suites</a></li>
            <li><a href="#location" className="hover:text-secondary">Location</a></li>
            <li><a href="#about" className="hover:text-secondary">About Us</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] mb-4 opacity-80">CONTACT</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" />Trafford Gardens, Old Trafford, Manchester</li>
            <li className="flex items-center gap-2"><Mail size={14} />apartments@hotelventureshtl.com</li>
            <li className="flex items-center gap-2"><Phone size={14} />0203 350 1857</li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] mb-4 opacity-80">MANAGEMENT</div>
          <p className="text-sm opacity-85 mb-3">
            Part of the Hotel Ventures Ltd portfolio. Professional hospitality management across
            16+ UK properties.
          </p>
          <a href="#" className="text-secondary text-sm hover:underline">Visit Hotel Ventures Ltd →</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
        © 2026 Trafford Garden Suites. All rights reserved.
      </div>
    </footer>
  );
}
