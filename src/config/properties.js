import suite1 from "@/assets/suite-1.jpg";
import suite2 from "@/assets/suite-2.jpg";
import suite3 from "@/assets/suite-3.jpg";

// Freetobook portal booking URL builder.
// Optionally appends checkIn (YYYY-MM-DD) and stayLength (nights) when provided.
export const buildBookingUrl = (wId, wTkn, { checkIn, stayLength } = {}) => {
  const params = new URLSearchParams({ w_id: String(wId), w_tkn: String(wTkn) });
  if (checkIn) params.append("checkIn", checkIn);
  if (stayLength) params.append("stayLength", String(stayLength));
  return `https://portal.freetobook.com/reservations?${params.toString()}`;
};

export const properties = [
  {
    id: "place",
    name: "Trafford Garden Place",
    apt: "Apt 307",
    tagline: "Elegant space near the stadium",
    image: suite1,
    guests: 4,
    beds: 2,
    baths: 1,
    size: "45m²",
    wId: "51136",
    features: ["Fast WiFi", "Free Parking", "Smart TV", "Full Kitchen", "Roof Lounge", "Communal Lobby Area"],
    wTkn: "YjqTdY7DQXvKiQLFXO5iwMh9SsI57AjAhc0w8SRPmg9y5EV4H2cqvcpTsMUZS",
  },
  {
    id: "stays",
    name: "Trafford Garden Stays",
    apt: "Apt B201",
    tagline: "Modern comfort with city outlook",
    image: suite2,
    guests: 4,
    beds: 2,
    baths: 1,
    size: "45m²",
    features: ["Fast WiFi", "Free Parking", "Smart TV", "Full Kitchen", "Roof Lounge", "Communal Lobby Area"],
    wId: "51137",
    wTkn: "g55Rw37uc69AvZfAdvOQUIHlhNJdrI6zeNKnegjbQwDFy6ZoxlA1TbPZXgsYq",
  },
  {
    id: "retreat",
    name: "Trafford Garden Retreat",
    apt: "Apt 311",
    tagline: "Stylish sanctuary with garden views",
    image: suite3,
    guests: 4,
    beds: 2,
    baths: 1,
    size: "45m²",
    features: ["Fast WiFi", "Free Parking", "Smart TV", "Full Kitchen", "Roof Lounge", "Communal Lobby Area"],
    wId: "51064",
    wTkn: "pgeudzTyAB8Sv85wLebZAsZW50ieoUr6LW8AHOGs08wRaSukIPkQPsINV8eI2",
  },
];

export const shuffleProperties = () => {
  const arr = [...properties];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};