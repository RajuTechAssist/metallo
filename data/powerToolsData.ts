/* Extracted product data for this page. */

export interface ToolProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Model: string;
  Description: string;
  thumbnail: string;
  Features: string[];
  Specs: Record<string, string>;
  Variants?: { code: string; type: string; battery?: string; storage?: string }[];
  Accessories?: string[];
}

export const PRODUCTS: ToolProduct[] = [
  /* ── CORDLESS 12V ──────────────────────────────────────────── */
  {
    Category: "Cordless 12V", "Sub-Category": "Hammer Drill Driver", Model: "SCH10",
    "Product Name": "12V Max Hammer Drill Driver",
    Description: "Compact 12V hammer drill driver with 30Nm max torque, 2-speed selector, and improved 2.0Ah battery for 33% longer runtime. Rubber overmould handle and LED worklight.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["30Nm max torque — class leading performance", "20 torque positions & 2-speed selector", "Improved 2.0Ah battery (+33% runtime)", "LED light for low-light spaces", "Battery status indicator", "Lightweight tower-up battery pack"],
    Specs: { "Voltage": "12V Max", "Motor": "Brushed", "No-Load Speed": "0-400 / 0-1500 RPM", "Impact Rate": "0-6000 / 0-22500 BPM", "Max Torque": "30 Nm", "Chuck": "Single Sleeve / 10mm", "Battery": "2.0 Ah" },
    Variants: [{ code: "SCH10", type: "Hammer Drill Driver", battery: "1 × 2.0Ah", storage: "Kit Box" }],
  },
  {
    Category: "Cordless 12V", "Sub-Category": "Drill Driver", Model: "SCD10",
    "Product Name": "12V Max Drill Driver",
    Description: "Lightweight 12V drill driver with 30Nm torque, 20 torque positions, and compact tower-up battery design. Ideal for light-duty drilling and fastening.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["30Nm max torque", "20 torque positions & 2-speed selector", "LED worklight", "Lightweight design", "Reduced vibration"],
    Specs: { "Voltage": "12V Max", "Motor": "Brushed", "No-Load Speed": "0-400 / 0-1500 RPM", "Max Torque": "30 Nm", "Chuck": "Single Sleeve / 10mm", "Battery": "2.0 Ah" },
    Variants: [{ code: "SCD10", type: "Drill Driver", battery: "1 × 2.0Ah", storage: "Kit Box" }],
  },

  /* ── V20 CORDLESS — Drill Drivers ──────────────────────────── */
  {
    Category: "V20 Cordless", "Sub-Category": "Drill Drivers", Model: "SCD700",
    "Product Name": "V20 20V Drill Driver",
    Description: "20V MAX cordless drill driver with 1500 RPM, 50Nm torque, 24 clutch settings, and 2-speed gearbox. Battery state-of-charge indicator and LED worklight.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1,500 RPM and 50Nm torque", "24 clutch settings", "2-Speed gearbox (0-400/0-1,500 RPM)", "Battery state-of-charge indicator", "LED worklight", "Keyless chuck"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushed", "No-Load Speed": "0-400 / 0-1,500 RPM", "Max Torque": "50 Nm", "Battery": "2.0 Ah" },
    Variants: [{ code: "SCD700D2K", type: "Brushed Drill Driver", battery: "2 × 2.0Ah", storage: "Kit Box" }, { code: "SCD700D1KA", type: "Brushed Drill Driver", battery: "1 × 2.0Ah", storage: "Kitbox & 100pcs ACC" }],
  },
  {
    Category: "V20 Cordless", "Sub-Category": "Drill Drivers", Model: "SBD720",
    "Product Name": "V20 Brushless Drill Driver 80Nm",
    Description: "Premium brushless drill driver with 2,100 RPM and 80Nm torque. Brushless motor delivers improved efficiency, longer runtime, and extended tool life.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Brushless motor — improved efficiency", "2,100 RPM and 80Nm torque", "15 clutch settings", "2-Speed gearbox (0-600/0-2,100 RPM)", "LED worklight"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "0-600 / 0-2,100 RPM", "Max Torque": "80 Nm", "Battery": "4.0 Ah" },
    Variants: [{ code: "SBD720K", type: "Bare Tool", battery: "N/A" }, { code: "SBD720M2K", type: "Brushless Drill Driver", battery: "2 × 4.0Ah", storage: "Kit Box" }],
  },

  /* ── V20 CORDLESS — Hammer Drills ──────────────────────────── */
  {
    Category: "V20 Cordless", "Sub-Category": "Hammer Drills", Model: "SCD711",
    "Product Name": "V20 20V Hammer Drill",
    Description: "Versatile 20V hammer drill with 25,500 BPM action, 50Nm torque, and 24 clutch settings. Available in multiple kit configurations with accessories.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["25,500 BPM hammer action", "1,500 RPM and 50Nm torque", "24 clutch settings", "2-Speed gearbox", "LED worklight"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushed", "Impact Rate": "25,500 BPM", "Max Torque": "50 Nm", "Battery": "1.5 / 2.0 Ah" },
    Variants: [{ code: "SCD711C2K", type: "Brushed Hammer Drill", battery: "2 × 1.5Ah", storage: "Kit Box" }, { code: "SCD711D2K", type: "Brushed Hammer Drill", battery: "2 × 2.0Ah", storage: "Kit Box" }, { code: "SCD711D2KA", type: "Brushed Hammer Drill", battery: "2 × 2.0Ah", storage: "Crystal Kitbox + 100 ACC" }],
  },
  {
    Category: "V20 Cordless", "Sub-Category": "Hammer Drills", Model: "SBD721",
    "Product Name": "V20 Brushless Hammer Drill 80Nm",
    Description: "High-performance brushless hammer drill with 35,700 BPM, 2,100 RPM, and 80Nm torque. Brushless motor for maximum efficiency in demanding applications.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Brushless motor", "35,700 BPM", "2,100 RPM and 80Nm torque", "15 clutch settings"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "Impact Rate": "35,700 BPM", "Max Torque": "80 Nm", "Battery": "4.0 Ah" },
    Variants: [{ code: "SBD721", type: "Bare Tool" }, { code: "SBD721M2K", type: "Brushless Hammer Drill", battery: "2 × 4.0Ah", storage: "Kit Box" }],
  },

  /* ── V20 CORDLESS — Impact ─────────────────────────────────── */
  {
    Category: "V20 Cordless", "Sub-Category": "Impact Drivers", Model: "SBI820",
    "Product Name": "V20 Brushless 3-Speed Impact Driver",
    Description: "Advanced brushless impact driver with 3-speed gearbox, 2,900 RPM, 3,800 BPM, and 190Nm torque. Quick-release chuck for fast bit changes.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Brushless motor", "3-Speed gearbox", "2,900 RPM / 3,800 BPM / 190Nm", "Quick-release chuck"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "2,900 RPM", "Impact Rate": "3,800 BPM", "Max Torque": "190 Nm", "Battery": "4.0 Ah" },
    Variants: [{ code: "SBI820K", type: "Bare Tool" }, { code: "SBI820M2K", type: "Brushless Impact Driver", battery: "4.0Ah", storage: "Kit Box" }],
  },
  {
    Category: "V20 Cordless", "Sub-Category": "Impact Wrenches", Model: "SBW920",
    "Product Name": "V20 Brushless Impact Wrench 370Nm",
    Description: "Heavy-duty brushless impact wrench with 370Nm torque, 3,100 IPM, and 1/2\" hog ring anvil. 2-speed gearbox for versatile fastening applications.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Brushless motor", "3,100 IPM / 370Nm torque", "2-Speed gearbox", "1/2\" hog ring anvil"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "0-2,800 RPM", "Impact Rate": "3,100 IPM", "Max Torque": "370 Nm", "Battery": "4.0 Ah" },
    Variants: [{ code: "SBW920M2K", type: "Brushless Impact Wrench", battery: "4.0Ah", storage: "Kit Box" }],
  },

  /* ── V20 CORDLESS — SDS & Grinders ─────────────────────────── */
  {
    Category: "V20 Cordless", "Sub-Category": "SDS Hammer", Model: "SBH900",
    "Product Name": "V20 Brushless SDS Plus Hammer",
    Description: "Cordless brushless SDS Plus rotary hammer with 2.0J impact energy and 3 operating modes (hammer, chisel, rotary). 1,500 RPM with variable speed and depth guide.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Brushless motor", "5,500 BPM", "2.0J impact energy", "3 modes: Hammer / Chisel / Rotary", "Variable speed", "Depth guide"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "1,500 RPM", "Impact Energy": "2.0 Joules", "Battery": "4.0 Ah" },
    Variants: [{ code: "SBH900M2K", type: "SDS Plus 22mm Brushless Hammer", battery: "2 × 4.0Ah", storage: "Kit Box" }],
  },
  {
    Category: "V20 Cordless", "Sub-Category": "Angle Grinders", Model: "SBG700",
    "Product Name": "V20 Brushless Angle Grinder 125mm",
    Description: "Cordless brushless 125mm angle grinder with 8,000 RPM, electronic brake (3 sec), and keyless safety guard. 65% more power than brushed equivalent.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["8,000 RPM", "Electronic brake (3 sec)", "Side handle with service key", "Keyless safety guard", "65% more power than brushed"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "8,000 RPM", "Disc Diameter": "125 mm" },
    Variants: [{ code: "SBG700", type: "Bare Tool" }, { code: "SBT510D2K", type: "Brushless Grinder Kit", battery: "2 × 2.0Ah", storage: "Kit Box" }],
  },

  /* ── V20 CORDLESS — Saws & Multi ───────────────────────────── */
  {
    Category: "V20 Cordless", "Sub-Category": "Circular Saws", Model: "SBC550",
    "Product Name": "V20 Brushless 185mm Circular Saw",
    Description: "Brushless 185mm circular saw with 5,000 RPM, bevel up to 56°, electronic brake, LED worklight, and dust port. Built for demanding jobsite cutting.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["5,000 RPM", "Bevel up to 56°", "Electronic brake", "LED work light", "Dust port"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "5,000 RPM", "Blade Diameter": "185 mm" },
    Variants: [{ code: "SBC550M2K", type: "Brushless Circular Saw Kit", battery: "2 × 4.0Ah", storage: "Kit Box" }, { code: "SBC550", type: "Bare Tool" }],
  },
  {
    Category: "V20 Cordless", "Sub-Category": "Reciprocating Saws", Model: "SBR310",
    "Product Name": "V20 Brushless Reciprocating Saw",
    Description: "Brushless reciprocating saw with 2-speed selection, 29mm stroke length, pivoting shoe, and LED worklight. For wood, metal, and PVC cutting on the go.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["2-speed selection", "29mm stroke length", "Pivoting shoe", "LED work light"],
    Specs: { "Voltage": "20V MAX", "Motor": "Brushless", "No-Load Speed": "0-2,300 / 3,200 RPM", "Stroke Length": "29 mm" },
    Variants: [{ code: "SBR310", type: "Bare Tool" }],
  },

  /* ── DRILLING & FASTENING (CORDED) ─────────────────────────── */
  {
    Category: "Drilling & Fastening", "Sub-Category": "Rotary Drills", Model: "SDR3006-B1",
    "Product Name": "6mm 300W Rotary Drill",
    Description: "Compact 300W rotary drill with 4,500 RPM no-load speed. Variable speed with reverse & forward function. Lightweight at just 0.95 kg.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["High performance 4,500 RPM motor", "Best-in-class durability", "Compact & lightweight (0.95 kg)", "Variable speed with forward/reverse"],
    Specs: { "Power Input": "300 W", "Chuck Capacity": "6 mm", "No-Load Speed": "0-4,500 RPM", "Variable Speed": "Yes", "Drilling Capacity": "Wood 15mm / Steel 6.5mm", "Weight": "0.95 kg", "Cable Length": "2 m" },
  },
  {
    Category: "Drilling & Fastening", "Sub-Category": "Percussion Drills", Model: "SDH600-B1",
    "Product Name": "13mm 600W Percussion Drill",
    Description: "Versatile 600W percussion drill with 2,900 RPM and 49,300 BPM impact rate. Speed dial for consistent torque/speed control. Available in keyed and keyless chuck options.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Best-in-class rotary & impact rate", "Lightweight and compact design", "Speed dial for consistent torque/speed", "Lock-on switch for one-hand control"],
    Specs: { "Power Input": "600 W", "Chuck Capacity": "13 mm", "No-Load Speed": "0-2,900 RPM", "Impact Rate": "0-49,300 BPM", "Drilling Capacity": "Wood 25mm / Concrete 13mm / Steel 13mm", "Weight": "1.75 kg" },
  },
  {
    Category: "Drilling & Fastening", "Sub-Category": "Percussion Drills", Model: "STDH7213-B1",
    "Product Name": "13mm 720W Percussion Drill",
    Description: "Robust 720W percussion drill with 3,000 RPM, durable metal gear housing, and speed dial for all applications. Heavy-duty workhorse for professional use.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Robust 720W motor", "High working efficiency", "Durable metal gear housing for long life", "Speed dial for all applications"],
    Specs: { "Power Input": "720 W", "Chuck Capacity": "13 mm", "No-Load Speed": "0-3,000 RPM", "Chuck": "Keyed", "Drilling Capacity": "Wood 32mm / Concrete 13mm / Steel 13mm", "Weight": "2.5 kg" },
  },
  {
    Category: "Drilling & Fastening", "Sub-Category": "Mud Mixer", Model: "SDR1400-B1",
    "Product Name": "1400W Mud Mixer",
    Description: "Powerful 1400W mud mixer with 2-speed variable speed and soft start. D-shape twin-handle design for comfortable long-duration mixing of plaster, mortar, and compounds.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["2-speed variable speed with soft start", "Appropriate motor torque", "Multi-use for tradesman environment", "D-shape twin-handle design & lightweight"],
    Specs: { "Power Input": "1,400 W", "Speed Mode": "2-Speed", "No-Load Speed": "0-480 / 0-800 RPM", "Mixing Paddle": "140 mm", "Mixture Volume": "120 L", "Weight": "3.5 kg" },
  },

  /* ── CONCRETE WORKING ──────────────────────────────────────── */
  {
    Category: "Concrete Working", "Sub-Category": "Rotary Hammers", Model: "SHR264KA-B1",
    "Product Name": "26mm 800W Rotary Hammer (QCC)",
    Description: "800W rotary hammer with Quick Change Chuck (QCC), 3.4J impact energy, and 3 operating modes — hammer drill, rotary drill, and chipping. Includes 6 Stanley SDS-Plus bits.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["High performance 800W motor", "QCC SDS-Plus chuck", "3 modes: Hammer Drill / Rotary Drill / Chipping", "Variable speed", "Lock-on switch"],
    Specs: { "Power Input": "800 W", "Chuck": "26mm QCC SDS-Plus", "No-Load Speed": "0-1,250 RPM", "Impact Energy": "3.4 J", "Impact Rate": "0-4,670 BPM", "Weight": "2.7 kg" },
    Accessories: ["SDS Hammer bits 5/6/8/10mm", "SDS Plus Point Chisel 14mm × 250mm", "6 pcs Stanley SDS-Plus Bits"],
  },
  {
    Category: "Concrete Working", "Sub-Category": "Demolition Hammers", Model: "STHM5KHV-B1",
    "Product Name": "5Kg 17mm HEX Demolition Hammer",
    Description: "1010W demolition hammer with 8.5J impact energy and anti-vibration system. Rubber-coated back handle for improved comfort during heavy-duty chipping and chiseling.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1010W powerful motor", "Anti-vibration system", "Rubber coated back handle", "8.5J impact energy"],
    Specs: { "Power Input": "1,010 W", "Chuck": "17mm HEX", "Impact Energy": "8.5 J", "Impact Rate": "0-2,900 BPM", "Cable Length": "3.5 m", "Weight": "6.1 kg" },
  },
  {
    Category: "Concrete Working", "Sub-Category": "Demolition Hammers", Model: "STHM10K-B1",
    "Product Name": "10Kg SDS-Max Demolition Hammer",
    Description: "Heavy-duty 1600W demolition hammer with 25J impact energy, SDS-Max chuck, and 12 chisel positions. Built for medium-to-heavy demolition on concrete and masonry.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1600W motor for heavy-duty demolition", "SDS Max chuck", "12 chisel positions", "Rubber grip for comfort"],
    Specs: { "Power Input": "1,600 W", "Chuck": "SDS-Max", "Impact Energy": "25 J", "Impact Rate": "900-1,890 BPM", "Chisel Positions": "12", "Weight": "10.5 kg" },
  },
  {
    Category: "Concrete Working", "Sub-Category": "Tile Cutters", Model: "STSP125A-B1",
    "Product Name": "1320W 125mm Tile Cutter",
    Description: "Powerful 1320W tile cutter with 13,000 RPM for high cutting efficiency. 125mm capacity guard for all job-site tile cutting applications.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1320W motor", "13,000 RPM for high cutting efficiency", "125mm capacity guard", "Optimized gear set — less vibration, lower noise"],
    Specs: { "Power Input": "1,320 W", "Wheel Diameter": "125 mm", "No-Load Speed": "13,000 RPM", "Max Depth of Cut": "41 mm", "Weight": "3.1 kg" },
  },

  /* ── METAL WORKING ─────────────────────────────────────────── */
  {
    Category: "Metal Working", "Sub-Category": "Angle Grinders", Model: "SG7100-B1",
    "Product Name": "100mm 750W Slimline Angle Grinder",
    Description: "Super slim 750W angle grinder with just 179mm gripping girth. Steel cut gear set ensures premium noise and vibration level. Higher load bearing prevents tool damage.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Super slim body — 179mm girth", "Steel cut gear set — premium noise & vibration", "Powerful motor with higher output", "Higher load bearing"],
    Specs: { "Power Input": "750 W", "Disc Diameter": "100 mm", "Tool Girth": "179 mm", "No-Load Speed": "12,000 RPM", "Weight": "1.3 kg" },
  },
  {
    Category: "Metal Working", "Sub-Category": "Chop Saws", Model: "SSC22-B1",
    "Product Name": "2200W 355mm Chop Saw",
    Description: "Heavy-duty 2200W chop saw with 3,800 RPM and 355mm disc capacity. Heavy-duty guard, horizontal handle, and half/full guard options.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["2200W powerful motor", "Heavy-duty guard for user protection", "Horizontal handle for comfort", "Half/Full guard options"],
    Specs: { "Power Input": "2,200 W", "No-Load Speed": "3,800 RPM", "Max Disc Diameter": "355 mm", "Weight": "15.5 kg" },
  },
  {
    Category: "Metal Working", "Sub-Category": "Die Grinders", Model: "STEL861",
    "Product Name": "500W Die Grinder",
    Description: "500W die grinder with 27,000 RPM for precision grinding, deburring, and polishing. Easy brush access for quick replacement.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["500W motor", "27,000 RPM", "Easy brush access", "Rubber coated body"],
    Specs: { "Power Input": "500 W", "No-Load Speed": "27,000 RPM", "Collet Size": "6 mm", "Spindle": "M15", "Weight": "2 kg" },
  },
  {
    Category: "Metal Working", "Sub-Category": "Polishers", Model: "SP137-B1",
    "Product Name": "1300W 180mm Polishing Machine",
    Description: "Professional 1300W polisher with constant speed, soft-start, and variable speed (500–3600 RPM). 15% more compact and 10% lighter; over 200 hours working life.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Constant speed with soft-start", "Variable speed 500–3,600 RPM", "15% more compact, 10% lighter", "Over 200 hours working life"],
    Specs: { "Power Input": "1,300 W", "Diameter": "180 mm", "No-Load Speed": "500-3,600 RPM", "Speed Control": "Variable", "Weight": "3.2 kg" },
  },

  /* ── SAWS & WOODWORKING ────────────────────────────────────── */
  {
    Category: "Saws & Woodworking", "Sub-Category": "Mitre Saws", Model: "SM16-B1",
    "Product Name": "254mm 1650W Mitre Saw",
    Description: "1650W mitre saw for heavy-duty wood and aluminium cutting. LED shadow cut-line guidance, precise manufacture for excellent accuracy. Compact and lightweight for transport.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1650W motor", "LED Shadow cut-line guidance", "Compact & lightweight for transport", "Durable motor for long-term use"],
    Specs: { "Power Input": "1,650 W", "No-Load Speed": "4,800 RPM", "Blade Diameter": "254 mm", "Cross Cut": "H75 × W140mm", "Mitre Positions": "L-47° R-52°", "Weight": "10.5 kg" },
  },
  {
    Category: "Saws & Woodworking", "Sub-Category": "Mitre Saws", Model: "SM18-B1",
    "Product Name": "254mm 1800W Sliding Mitre Saw",
    Description: "Premium 1800W sliding mitre saw with double bevel design, LED shadow cut line, strong dustproof sliding rail, and lock-on button. Brake time under 5 seconds.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["LED shadow cut line", "Double bevel design", "Dustproof sliding rail", "Lock-on button", "Brake time < 5 sec"],
    Specs: { "Power Input": "1,800 W", "No-Load Speed": "4,800 RPM", "Blade Diameter": "254 mm", "Bevel": "Double Bevel", "Mitre Range": "L 0°–47° / R 0°–52°", "Weight": "18.6 kg" },
  },
  {
    Category: "Saws & Woodworking", "Sub-Category": "Table Saws", Model: "SST1801-B1",
    "Product Name": "254mm 1800W Table Saw with Stand",
    Description: "1800W table saw with self-aligning fence, dovetail fence slot, tool-free extensible table, and smart bi-scale reading. Over 150 hours consistent heavy-load life.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Self-aligning fence for accuracy", "Dovetail fence slot", "Tool-free extensible table", "Smart bi-scale reading", "Over 150 hours heavy-load life"],
    Specs: { "Power Input": "1,800 W", "No-Load Speed": "4,800 RPM", "Max Blade": "254 mm", "Bench Size": "560 × 680 mm", "Extended Bench": "560 × 1,040 mm", "Rip Capacity": "660 mm", "Cutting Depth 90°/45°": "80 / 50 mm", "Weight": "27.2 kg" },
  },
  {
    Category: "Saws & Woodworking", "Sub-Category": "Circular Saws", Model: "SC16-B1",
    "Product Name": "1600W 190mm Circular Saw",
    Description: "Best-in-class 1600W circular saw with optimized transmission, compact design, and 2× durability. Maximum cutting depth of 65mm.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["1600W motor with optimized transmission", "Compact & lightweight", "Robust design — 2× durability"],
    Specs: { "Power Input": "1,600 W", "No-Load Speed": "5,500 RPM", "Blade Diameter": "190 mm", "Max Cutting Depth": "65 mm", "Max Bevel": "45°", "Weight": "3.3 kg" },
  },
  {
    Category: "Saws & Woodworking", "Sub-Category": "Planers", Model: "STEL630-B1",
    "Product Name": "750W Electric Planer",
    Description: "750W planer with left/right chip ejection, 0.2mm depth-of-cut setting, 3 chamfer groove sizes, and 12mm maximum rebate depth. Suitable for right or left-handed use.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Left or right chip ejection", "0.2mm depth-of-cut precision", "3 chamfer groove sizes", "12mm max rebate depth"],
    Specs: { "Power Input": "750 W", "No-Load Speed": "16,500 RPM", "Planing Width": "82 mm", "Planing Depth": "1.6 mm", "Rebating Depth": "12 mm", "Weight": "2.7 kg" },
  },
  {
    Category: "Saws & Woodworking", "Sub-Category": "Sanders", Model: "SS30-B1",
    "Product Name": "300W Random Orbital Sander",
    Description: "300W variable-speed random orbital sander with 0–13,000 OPM, dust-sealed switch, dust extraction, and brake function. Compact with over 650 hours hanging life.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["0–13,000 OPM variable speed", "Extremely low vibration", "Dust-sealed switch", "Brake function", ">650 hours hanging life"],
    Specs: { "Power Input": "300 W", "No-Load Speed": "0-13,000 OPM", "Orbital Diameter": "2 mm", "Sanding Pad": "125mm / 5\"", "Weight": "1.4 kg" },
  },

  /* ── SPECIALITY ────────────────────────────────────────────── */
  {
    Category: "Speciality", "Sub-Category": "Heat Guns", Model: "STEL670-B1",
    "Product Name": "2000W Heat Gun",
    Description: "2000W variable-temperature heat gun with spherical nozzle, two airflow stages, and free-standing base design. Temperature range 50–600°C.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Spherical nozzle", "Two airflow stages", "Variable temperature 50–600°C", "Free-standing base design"],
    Specs: { "Power Input": "2,000 W", "Temperature": "50-450 / 90-600 °C", "Air Flow": "300 / 500 L/min", "Switch Control": "2 Stages", "Cable Length": "3 m" },
  },
  {
    Category: "Speciality", "Sub-Category": "Blowers", Model: "STPT600-B1",
    "Product Name": "600W Electric Blower",
    Description: "600W blower with variable speed (0–16,000 RPM), 3,500 L/min airflow, and lightweight 1.6 kg design. Enhanced airflow for high working efficiency.",
    thumbnail: "/powerTools/powerTool.jpg",
    Features: ["Enhanced airflow for efficiency", "Variable speed", "Lightweight — 1.6 kg", "Longer durability"],
    Specs: { "Power Input": "600 W", "No-Load Speed": "0-16,000 RPM", "Air Volume": "3,500 L/min", "Cable Length": "3 m", "Weight": "1.6 kg" },
  },
];

/* ── Categories ──────────────────────────────────────────────── */

export const CATEGORIES = [
  { key: "12v",        label: "Cordless 12V",          icon: "battery_4_bar",         match: "Cordless 12V" },
  { key: "v20",        label: "V20 Cordless",          icon: "battery_charging_full",  match: "V20 Cordless" },
  { key: "drilling",   label: "Drilling & Fastening",  icon: "hardware",              match: "Drilling & Fastening" },
  { key: "concrete",   label: "Concrete Working",      icon: "construction",          match: "Concrete Working" },
  { key: "metal",      label: "Metal Working",         icon: "content_cut",           match: "Metal Working" },
  { key: "saws",       label: "Saws & Woodworking",    icon: "carpenter",             match: "Saws & Woodworking" },
  { key: "speciality", label: "Speciality",            icon: "whatshot",              match: "Speciality" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── QA Items ────────────────────────────────────────────────── */

export const QA_ITEMS = [
  { icon: "verified",        title: "Certified & Tested",      desc: "All tools independently tested to IEC & IS standards." },
  { icon: "battery_full",    title: "V20 Interchangeable",     desc: "One battery platform across 30+ cordless tools." },
  { icon: "shield",          title: "2-Year Warranty",         desc: "Manufacturer warranty on all power tools." },
  { icon: "local_shipping",  title: "Pan-India Service",       desc: "Nationwide service network & spare parts support." },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */


