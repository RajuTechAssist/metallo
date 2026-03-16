import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isVerticalNavPinned, setIsVerticalNavPinned] = useState(false);
  const [hoveredVertical, setHoveredVertical] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const verticalNavMarkerRef = useRef<HTMLDivElement | null>(null);
  const verticalNavRef = useRef<HTMLDivElement | null>(null);
  const verticalNavTop = useRef(0);
  const [verticalNavHeight, setVerticalNavHeight] = useState(0);

  useEffect(() => {
    const measureVerticalNav = () => {
      if (verticalNavMarkerRef.current) {
        verticalNavTop.current =
          verticalNavMarkerRef.current.getBoundingClientRect().top +
          window.scrollY;
      }

      if (verticalNavRef.current) {
        setVerticalNavHeight(verticalNavRef.current.offsetHeight);
      }

      setIsVerticalNavPinned(window.scrollY >= verticalNavTop.current);
    };

    const handleScroll = () => {
      setIsVerticalNavPinned(window.scrollY >= verticalNavTop.current);
    };

    measureVerticalNav();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureVerticalNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureVerticalNav);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Top bar links
  const topLinks = [
    { name: "About Us", path: "/about" },
    { name: "Why Metallo", path: "/why-metallo" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  // All seven verticals under Products
  const verticals = [
    {
      key: "steel",
      name: "Steel",
      path: "/products/steel",
      icon: "foundation",
    },
    {
      key: "cables",
      name: "Wire & Cables",
      path: "/products/wire-cables",
      icon: "electrical_services",
    },
    {
      key: "cabletray",
      name: "Cable Tray",
      path: "/products/cable-tray",
      icon: "grid_view",
    },
    {
      key: "welding",
      name: "Welding Consumables",
      path: "/products/welding",
      icon: "whatshot",
    },
    {
      key: "tools",
      name: "Power Tools",
      path: "/products/tools",
      icon: "construction",
    },
    {
      key: "casting",
      name: "Die Casting",
      path: "/products/die-casting",
      icon: "precision_manufacturing",
    },
    {
      key: "tech",
      name: "Industrial Tech",
      path: "/products/tech-products",
      icon: "memory",
    },
  ];

  // Helper: build steel page path with category filter & optional product scroll
  const steelPath = (categories: string[], productId?: string) => {
    const p = new URLSearchParams();
    categories.forEach((c) => p.append("cat", c));
    if (productId) p.append("product", productId);
    return `/products/steel?${p.toString()}`;
  };

  // Steel Mega Menu Data
  const steelMegaMenu = [
    {
      title: "Pipes & Tubes",
      icon: "valve",
      viewAll: "View All Pipes",
      viewAllPath: steelPath(["Pipes & Tubes"]),
      links: [
        {
          name: "SS Seamless Pipes",
          spec: "ASTM A312",
          path: steelPath(["Pipes & Tubes"], "p1"),
        },
        {
          name: "SS Welded / ERW Pipes",
          spec: "ASTM A312",
          path: steelPath(["Pipes & Tubes"], "p2"),
        },
        {
          name: "Instrumentation Tubes",
          spec: "ASTM A269",
          path: steelPath(["Pipes & Tubes"], "p3"),
        },
        {
          name: "Heat Exchanger U-Tubes",
          spec: "ASTM A213",
          path: steelPath(["Pipes & Tubes"], "p4"),
        },
      ],
    },
    {
      title: "Buttweld Fittings",
      icon: "hub",
      viewAll: "View All Fittings",
      viewAllPath: steelPath(["Fittings"]),
      links: [
        {
          name: "Elbows (45° / 90°)",
          spec: "ASME B16.9",
          path: steelPath(["Fittings"], "ft1"),
        },
        {
          name: "Tees (Equal / Reducing)",
          spec: "ASME B16.9",
          path: steelPath(["Fittings"], "ft2"),
        },
        {
          name: "Reducers (Conc / Ecc)",
          spec: "ASME B16.9",
          path: steelPath(["Fittings"], "ft3"),
        },
      ],
    },
    {
      title: "Industrial Flanges",
      icon: "radio_button_checked",
      viewAll: "View All Flanges",
      viewAllPath: steelPath(["Flanges"]),
      links: [
        {
          name: "Weld Neck Flanges",
          spec: "ASME B16.5",
          path: steelPath(["Flanges"], "f1"),
        },
        {
          name: "Slip-On Flanges",
          spec: "ASME B16.5",
          path: steelPath(["Flanges"], "f2"),
        },
        {
          name: "Blind Flanges",
          spec: "ASME B16.5",
          path: steelPath(["Flanges"], "f3"),
        },
      ],
    },
    {
      title: "Plates & Gaskets",
      icon: "layers",
      viewAll: "View All Plates & Gaskets",
      viewAllPath: steelPath(["Plates & Sheets", "Gaskets & Seals"]),
      featured: {
        badge: "NEW ARRIVAL",
        name: "Spiral Wound Gaskets",
        desc: "SS 304/316 + Graphite Filler, with Inner & Outer Ring. Ready Stock.",
        cta: "Check Availability",
        path: steelPath(["Gaskets & Seals"], "g1"),
      },
      links: [
        {
          name: "SS HR Plates",
          spec: "ASTM A240",
          path: steelPath(["Plates & Sheets"], "sp1"),
        },
        {
          name: "SS CR Sheets",
          spec: "ASTM A240",
          path: steelPath(["Plates & Sheets"], "sp2"),
        },
        {
          name: "SS Coil / Strip",
          spec: "ASTM A240",
          path: steelPath(["Plates & Sheets"], "sp3"),
        },
      ],
    },
  ];

  const cablePath = (categories: string[], productId?: string) => {
    const p = new URLSearchParams();
    categories.forEach((c) => p.append("cat", c));
    if (productId) p.append("product", productId);
    return `/products/wire-cables?${p.toString()}`;
  };

  const cableColumns = [
    {
      title: "Power Distribution",
      icon: "bolt",
      viewAll: "View All Power",
      viewAllPath: cablePath([
        "Power Cables (Low Voltage)",
        "Power Cables (High Voltage)",
      ]),
      links: [
        {
          name: "LT Single Core Unarmoured",
          spec: "IS 694",
          path: cablePath(["Power Cables (Low Voltage)"], "c1"),
        },
        {
          name: "LT Multi-Core Armoured",
          spec: "IS 1554",
          path: cablePath(["Power Cables (Low Voltage)"], "c2"),
        },
        {
          name: "HT XLPE Power Cable",
          spec: "IS 7098",
          path: cablePath(["Power Cables (High Voltage)"], "c4"),
        },
        {
          name: "EHV Cables (66–220 kV)",
          spec: "IEC 60840",
          path: cablePath(["Power Cables (Extra High Voltage)"], "c10"),
        },
        {
          name: "Aerial Bunched Cable",
          spec: "IS 14255",
          path: cablePath(["Overhead Distribution"], "c9"),
        },
      ],
    },
    {
      title: "Control & Automation",
      icon: "memory",
      viewAll: "View All Control",
      viewAllPath: cablePath(["Control & Automation"]),
      links: [
        {
          name: "LT Control Cables",
          spec: "IS 1554",
          path: cablePath(["Control & Automation"], "c3"),
        },
        {
          name: "Instrumentation (Screened)",
          spec: "IS 1554",
          path: cablePath(["Control & Automation"], "c8"),
        },
        {
          name: "Railway Signaling Cable",
          spec: "RDSO",
          path: cablePath(["Railway & Infrastructure"], "c12"),
        },
      ],
    },
    {
      title: "Extreme Environments",
      icon: "local_fire_department",
      viewAll: "View All Specialty",
      viewAllPath: cablePath(["Life Safety & Emergency"]),
      links: [
        {
          name: "Fire Survival (950 °C)",
          spec: "BS 6387",
          path: cablePath(["Life Safety & Emergency"], "c6"),
        },
        {
          name: "Elastomeric / Rubber",
          spec: "IS 9968",
          path: cablePath(["Heavy Duty & Mining"], "c7"),
        },
        {
          name: "Submersible Flat Cable",
          spec: "IS 694",
          path: cablePath(["Specialty & Renewables"], "c11"),
        },
      ],
    },
    {
      title: "Renewables & Comm",
      icon: "solar_power",
      viewAll: "View All Renewables",
      viewAllPath: cablePath(["Specialty & Renewables"]),
      links: [
        {
          name: "Solar DC Cable",
          spec: "EN 50618",
          path: cablePath(["Specialty & Renewables"], "c5"),
        },
        {
          name: "EV Charging Cable",
          spec: "EN 50620",
          path: cablePath(["Specialty & Renewables"], "c13"),
        },
        {
          name: "LAN / Ethernet CAT6",
          spec: "TIA-568",
          path: cablePath(["Communication & Data"], "c14"),
        },
        {
          name: "Coaxial Cable (RG-6/11)",
          spec: "MIL-C-17",
          path: cablePath(["Communication & Data"], "c15"),
        },
      ],
    },
  ];

  const placeholderTabs: Record<string, { title: string; links: string[] }[]> =
  {
    welding: [
      {
        title: "Arc Welding",
        links: ["SMAW Electrodes", "E6013 / E7018", "Low Hydrogen Rods"],
      },
      {
        title: "MIG / MAG",
        links: ["ER70S-6 Wire", "Flux Cored Wire", "CO₂ Welding Wire"],
      },
      {
        title: "TIG & Specialty",
        links: ["TIG Filler Rods", "Submerged Arc Wire", "Brazing Alloys"],
      },
    ],
    tools: [
      {
        title: "Power Tools",
        links: ["Angle Grinders", "Impact Drills", "Rotary Hammers"],
      },
      {
        title: "Cutting Tools",
        links: ["Cut-Off Machines", "Circular Saws", "Jigsaw Machines"],
      },
      {
        title: "Hand Tools",
        links: ["Spanners & Wrenches", "Pliers & Cutters", "Measuring Tools"],
      },
    ],
    cabletray: [
      {
        title: "Ladder Type",
        links: ["GI Ladder Tray", "SS Ladder Tray", "Aluminium Ladder Tray"],
      },
      {
        title: "Perforated Type",
        links: [
          "GI Perforated Tray",
          "SS Perforated Tray",
          "Powder Coated Tray",
        ],
      },
      {
        title: "Accessories",
        links: ["Tray Covers", "Bends & Tees", "Reducers & Couplers"],
      },
    ],
    casting: [
      {
        title: "Aluminium Die Cast",
        links: [
          "Gravity Casting",
          "Pressure Die Casting",
          "Low Pressure Casting",
        ],
      },
      {
        title: "Zinc Die Cast",
        links: ["Hot Chamber Parts", "Zamak Alloys", "Miniature Components"],
      },
      {
        title: "Finishing",
        links: ["CNC Machining", "Surface Treatment", "Quality Testing"],
      },
    ],
    tech: [
      {
        title: "Automation",
        links: ["PLC Systems", "SCADA Panels", "HMI Displays"],
      },
      {
        title: "Drives & Motors",
        links: ["VFD Drives", "Servo Motors", "Soft Starters"],
      },
      {
        title: "Sensors & IoT",
        links: ["Proximity Sensors", "IoT Gateways", "Smart Meters"],
      },
    ],
  };

  /* ────── Cascading dropdown data per vertical ────── */
  const verticalMenuData: Record<
    string,
    {
      title: string;
      icon: string;
      viewAllPath: string;
      links: { name: string; spec?: string; path: string }[];
    }[]
  > = {
    steel: steelMegaMenu,
    cables: cableColumns,
    welding:
      placeholderTabs.welding?.map((g) => ({
        title: g.title,
        icon: "whatshot",
        viewAllPath: "/products/welding",
        links: g.links.map((l) => ({ name: l, path: "/products/welding" })),
      })) || [],
    tools:
      placeholderTabs.tools?.map((g) => ({
        title: g.title,
        icon: "construction",
        viewAllPath: "/products/tools",
        links: g.links.map((l) => ({ name: l, path: "/products/tools" })),
      })) || [],
    cabletray:
      placeholderTabs.cabletray?.map((g) => ({
        title: g.title,
        icon: "grid_view",
        viewAllPath: "/products/cable-tray",
        links: g.links.map((l) => ({ name: l, path: "/products/cable-tray" })),
      })) || [],
    casting:
      placeholderTabs.casting?.map((g) => ({
        title: g.title,
        icon: "precision_manufacturing",
        viewAllPath: "/products/die-casting",
        links: g.links.map((l) => ({ name: l, path: "/products/die-casting" })),
      })) || [],
    tech:
      placeholderTabs.tech?.map((g) => ({
        title: g.title,
        icon: "memory",
        viewAllPath: "/products/tech-products",
        links: g.links.map((l) => ({
          name: l,
          path: "/products/tech-products",
        })),
      })) || [],
  };

  const openNav = (key: string) => {
    if (navTimeout.current) clearTimeout(navTimeout.current);
    setHoveredVertical(key);
    // Auto-select first category
    const cats = verticalMenuData[key];
    if (cats && cats.length > 0) setHoveredCategory(cats[0].title);
  };
  const closeNav = () => {
    navTimeout.current = setTimeout(() => {
      setHoveredVertical(null);
      setHoveredCategory(null);
    }, 200);
  };
  const closeAllMenus = () => {
    setHoveredVertical(null);
    setHoveredCategory(null);
  };

  return (
    <>
      <header className="w-full bg-white font-sans text-metallo-navy shadow-sm">
        {/* Row 1: Top Bar - Hidden on mobile */}
        <div className="w-full border-b border-gray-300 py-[clamp(0.5rem,0.82vw,0.80rem)] hidden md:block">
          <div className="container">
            <div className="flex justify-between items-center text-[clamp(0.625rem,0.78vw,0.8rem)] font-medium font-serif text-gray-600 tracking-wide">
              <div className="flex space-x-[clamp(1rem,2.57vw,2.6rem)]">
                {topLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`uppercase transition-colors ${isActive ? "text-metallo-navy font-bold" : "hover:text-metallo-navy"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-metallo-navy">
                <span className="material-symbols-outlined text-[clamp(0.875rem,1.1vw,1.125rem)]">
                  language
                </span>
                <span>Global</span>
                <span className="material-symbols-outlined text-[clamp(0.75rem,0.9vw,0.875rem)]">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="py-[clamp(0.5rem,1vw,1rem)] bg-white">
            {/* Row 2: Logo & CTA */}
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <img
                  src="/logo.svg"
                  alt="Metallo"
                  className="w-auto"
                  style={{ width: "clamp(10rem, 16vw, 15rem)" }}
                />
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.5rem,0.8vw,0.75rem)] bg-metallo-gold hover:bg-metallo-gold-hover text-metallo-navy font-bold text-[clamp(0.7rem,0.85vw,0.875rem)] uppercase tracking-wide transition-colors rounded-sm"
              >
                Contact Us
                <span className="material-symbols-outlined ml-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(0.875rem,1.1vw,1.125rem)]">
                  arrow_forward
                </span>
              </Link>

              {/* Mobile Menu Button - Hamburger Icon */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-metallo-navy p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
        {/* Row 3: Verticals Navigation — Simple Links (mega menu deactivated) */}
        <div ref={verticalNavMarkerRef} className="hidden md:block" />
        {isVerticalNavPinned ? (
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{ height: verticalNavHeight }}
          />
        ) : null}
        <div
          ref={verticalNavRef}
          className={`hidden md:block w-full bg-white transition-all ${isVerticalNavPinned
              ? "fixed inset-x-0 top-0 z-50 border-b border-gray-200 shadow-md"
              : "relative"
            }`}
        >
          <div className="container">
            <div className="flex justify-between items-center h-[clamp(2.5rem,4vw,3.5rem)]">
              <nav className="flex space-x-[clamp(0.75rem,2vw,3rem)]">
                {verticals.map((v) => {
                  const isActive = location.pathname.startsWith(v.path);
                  return (
                    <Link
                      key={v.name}
                      to={v.path}
                      className={`text-[clamp(0.6rem,0.78vw,0.75rem)] font-extrabold font-serif uppercase tracking-wider transition-all decoration-2 underline-offset-4 ${isActive
                          ? "text-metallo-gold underline"
                          : "text-metallo-navy hover:text-metallo-gold hover:underline"
                        }`}
                    >
                      {v.name}
                    </Link>
                  );
                })}
              </nav>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-metallo-navy opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                  Menu
                </span>
                <span className="material-symbols-outlined text-metallo-navy">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* SIDE DRAWER MENU */}
      <div
        className={`
        fixed inset-y-0 z-[100] bg-metallo-navy text-white 
        w-[85vw] md:w-1/2 lg:w-1/2
        shadow-2xl overflow-hidden
        transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        left-0 md:left-auto md:right-0
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Close Button Header */}
          <div className="flex justify-end items-center p-[clamp(1rem,3vw,1.5rem)] md:p-[clamp(1.5rem,3vw,2rem)]">
            <button onClick={() => setIsMenuOpen(false)} className="group p-2">
              <span className="material-symbols-outlined text-[clamp(1.5rem,3vw,2rem)] md:text-[clamp(1.75rem,3vw,2.25rem)] text-white group-hover:text-metallo-gold transition-all duration-300">
                close
              </span>
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 px-[clamp(1.5rem,5vw,2rem)] md:px-[clamp(2rem,5vw,4rem)] overflow-y-auto">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Column: Primary Navigation */}
              <div className="flex-1 flex flex-col space-y-[clamp(1rem,3vw,2rem)] pt-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1rem,3vw,2rem)] md:pb-0 pl-[clamp(0.5rem,2vw,1rem)] md:pl-[clamp(1rem,3vw,2rem)]">
                {topLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-[clamp(1rem,2.5vw,1.25rem)] md:text-[clamp(1.25rem,2vw,1.5rem)] font-bold font-heading uppercase tracking-wide w-fit pb-1 transition-colors ${isActive
                          ? "text-metallo-gold border-b-2 border-metallo-gold"
                          : "text-white hover:text-metallo-gold border-b-2 border-transparent hover:border-metallo-gold"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right Column: Industries */}
              <div className="flex-1 md:border-l md:border-white/10 md:pl-[clamp(2rem,5vw,4rem)] pl-[clamp(0.5rem,2vw,1rem)] pt-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1rem,3vw,2rem)]">
                <h3 className="text-[clamp(0.625rem,0.9vw,0.75rem)] font-bold text-white uppercase tracking-wider mb-[clamp(1rem,3vw,2rem)] font-heading">
                  Product
                </h3>
                <div className="flex flex-col space-y-[clamp(0.5rem,1.5vw,1rem)]">
                  {verticals.map((v) => {
                    const isActive = location.pathname.startsWith(v.path);
                    return (
                      <Link
                        key={v.name}
                        to={v.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-base font-sans pb-1 block w-fit transition-all duration-300 border-b ${isActive
                            ? "text-metallo-gold border-metallo-gold"
                            : "text-gray-300 hover:text-white hover:translate-x-2 border-transparent hover:border-metallo-gold"
                          }`}
                      >
                        {v.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Area inside Drawer */}
          <div className="p-[clamp(1rem,3vw,2rem)] md:px-[clamp(2rem,5vw,4rem)] border-t border-white/10 mt-auto bg-metallo-navy z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-[clamp(1rem,2vw,1.5rem)]">
              <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                <Link
                  to="/csr"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-white hover:text-metallo-gold uppercase tracking-wider transition-colors"
                >
                  CSR Policy
                </Link>
                <Link
                  to="/disclosure"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-white hover:text-metallo-gold uppercase tracking-wider transition-colors"
                >
                  Disclosure
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-[clamp(0.5rem,1.5vw,1rem)] items-center">
                {/* X (Twitter) */}
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
