// ============================================
//   WEDDING CONFIG — change everything here
// ============================================

const config = {
  // --- Couple ---
  groomName: "Arjun",
  brideName: "Priya",
  groomFull: "Arjun Sharma",
  brideFull: "Priya Patel",
  groomFamily: "Mr. & Mrs. Ramesh Sharma",
  brideFamily: "Mr. & Mrs. Suresh Patel",

  // --- Wedding date & time ---
  weddingDate: "2026-12-14T18:00:00",

  // --- Venue ---
  venueName: "Majestic Grand Hall",
  venueAddress: "Near Vastrapur Lake, SG Highway",
  venueCity: "Ahmedabad, Gujarat",
  venuePincode: "380054",
  // Full address used for map search query
  venueMapQuery: "Majestic Grand Hall Vastrapur Ahmedabad",
  // Direct link opens in Google Maps app / browser
  venueMapUrl: "https://maps.google.com/?q=Vastrapur+Lake+Ahmedabad",

  // --- Events ---
  events: [
    {
      tag: "MEHENDI",
      title: "Mehendi Ceremony",
      venue: "Raj Garden Banquet",
      loc: "Ahmedabad",
      date: "12 Dec 2026",
      time: "4:00 PM onwards",
    },
    {
      tag: "SANGEET",
      title: "Sangeet Night",
      venue: "Crystal Ballroom",
      loc: "Ahmedabad",
      date: "13 Dec 2026",
      time: "7:00 PM onwards",
    },
    {
      tag: "HALDI",
      title: "Haldi Function",
      venue: "Sharma Residence",
      loc: "Ahmedabad",
      date: "14 Dec 2026",
      time: "9:00 AM",
    },
    {
      tag: "WEDDING",
      title: "Wedding Ceremony",
      venue: "Majestic Grand Hall",
      loc: "Ahmedabad",
      date: "14 Dec 2026",
      time: "6:00 PM Muhurat",
    },
  ],

  // --- Contact ---
  groomContact: "+91 98765 43210",
  brideContact: "+91 87654 32109",
};

export default config;
