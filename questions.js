const allQuestions = [
    // --- ADVANCED ELECTRONICS & CIRCUIT THEORY ---
    { q: "A 5-band resistor: Yellow, Violet, Black, Orange, Brown. Value?", a: "470 kΩ 1%", options: ["47 kΩ 5%", "470 kΩ 1%", "4.7 MΩ 1%", "470 Ω 2%"] },
    { q: "BJT circuit: Ib = 25uA, Beta = 120. What is the exact Emitter Current (Ie)?", a: "3.025 mA", options: ["3.000 mA", "3.025 mA", "2.975 mA", "3.250 mA"] },
    { q: "PIV of a diode in a center-tapped rectifier with 24V RMS secondary?", a: "67.88V", options: ["33.94V", "67.88V", "24V", "48V"] },
    { q: "Quality Factor (Q) of a series RLC with R=10Ω, L=5mH, C=2uF?", a: "5.0", options: ["0.5", "5.0", "50.0", "2.5"] },
    { q: "Voltage across 3uF cap in series with 6uF cap connected to 10V DC?", a: "6.67V", options: ["3.33V", "6.67V", "5.00V", "10.0V"] },
    { q: "Resonant frequency of a circuit with L=2mH and C=200pF?", a: "251.6 kHz", options: ["25.1 kHz", "159.2 kHz", "251.6 kHz", "503.2 kHz"] },
    { q: "What is the Ripple Factor of an ideal Half-Wave Rectifier?", a: "1.21", options: ["0.48", "1.21", "0.81", "1.11"] },
    { q: "Binary subtraction 00001101 - 00010100 in 8-bit 2's Complement?", a: "11111001", options: ["11111001", "00000111", "11111010", "10000111"] },
    { q: "The 'Slew Rate' of an Op-Amp is measured in?", a: "V/μs", options: ["V/s", "A/μs", "V/μs", "dB"] },
    { q: "Number of NAND gates required to implement an XOR gate?", a: "4", options: ["2", "3", "4", "5"] },
    { q: "Internal resistance of an ideal Current Source?", a: "Infinite", options: ["Zero", "100 Ω", "Infinite", "1 MΩ"] },
    { q: "Common Mode Rejection Ratio (CMRR) of an ideal Op-Amp?", a: "Infinite", options: ["100 dB", "0", "Infinite", "120 dB"] },
    { q: "Time constant (τ) of an RC circuit with R=47kΩ and C=100nF?", a: "4.7 ms", options: ["4.7 ms", "47 ms", "0.47 ms", "470 us"] },
    { q: "If β = 99, what is the value of α (Alpha) for the transistor?", a: "0.99", options: ["0.90", "0.99", "1.00", "0.01"] },
    { q: "Which coupling provides maximum power gain in amplifiers?", a: "Transformer", options: ["RC", "Direct", "Transformer", "Impedance"] },

    // --- MATHEMATICAL REASONING (TRAPS & QUANT) ---
    { q: "Angle between clock hands at 3:25?", a: "47.5°", options: ["30°", "47.5°", "60°", "52.5°"] },
    { q: "Probability that a sum of 5 is rolled with three fair dice?", a: "6/216", options: ["1/36", "6/216", "4/216", "3/216"] },
    { q: "Lily pads double daily. At 48 days lake is full. When was it 1/8th full?", a: "45 days", options: ["6 days", "24 days", "45 days", "47 days"] },
    { q: "A bat and ball cost $1.10. Bat is $1.00 more than ball. Ball cost?", a: "$0.05", options: ["$0.10", "$0.05", "$0.01", "$0.15"] },
    { q: "If 3 cats kill 3 rats in 3 minutes, how many cats to kill 100 rats in 100 minutes?", a: "3", options: ["100", "33", "3", "10"] },
    { q: "Anita is twice as old as Ben. 10 years ago she was 3x his age. Anita's current age?", a: "40", options: ["20", "30", "40", "50"] },
    { q: "Clock strikes 6 times in 30s. How long to strike 12 times?", a: "66 seconds", options: ["60s", "66s", "72s", "55s"] },
    { q: "A man has 6 daughters. Each has one brother. Total children in family?", a: "7", options: ["12", "7", "6", "13"] },
    { q: "If 'CYBER' is 'EVDGT', how is 'VOLTS' coded?", a: "XQNUV", options: ["XQNUV", "WPMUT", "YRPWX", "XPMTV"] },
    { q: "Successive discounts of 25% and 20% equal a single discount of?", a: "40%", options: ["45%", "40%", "35%", "50%"] },
    { q: "Probability of drawing a King or a Heart from a standard 52-card deck?", a: "16/52", options: ["17/52", "16/52", "13/52", "4/52"] },
    { q: "If 1.1^x = 1.21, what is x?", a: "2", options: ["1", "2", "11", "1.1"] },
    { q: "A car travels 60km at 30km/h and 60km at 60km/h. Average speed?", a: "40 km/h", options: ["45 km/h", "40 km/h", "50 km/h", "35 km/h"] },
    { q: "How many 1cm cubes fit inside a 1m cube?", a: "1,000,000", options: ["100", "10,000", "1,000,000", "1,000"] },
    { q: "If '3' is coded as '12' and '5' as '20', what is '10'?", a: "40", options: ["30", "40", "50", "100"] },

    // --- LOGICAL & BLOOD RELATION PARADOXES ---
    { q: "That man's father is my father's son. I have no siblings. Who is in the photo?", a: "His son", options: ["Himself", "His son", "His father", "His nephew"] },
    { q: "Pointing to a lady, a man said: 'The son of her only brother is the brother of my wife.' Relationship?", a: "Sister of father-in-law", options: ["Maternal Aunt", "Sister of father-in-law", "Mother", "Sister"] },
    { q: "If 'A+B' means A is the son of B; 'A-B' means A is the wife of B, what is P+R-Q?", a: "P is son of Q", options: ["P is son of Q", "P is brother of Q", "P is father of Q", "None"] },
    { q: "A, B, C, D, E are in a row. A is next to B but not C. D is next to E. E is on left end. Position of B?", a: "2nd from left", options: ["2nd from left", "Center", "2nd from right", "Right end"] },
    { q: "How many 9s are there between 1 and 100?", a: "20", options: ["10", "11", "19", "20"] },

    // --- COMPUTER SCIENCE & DATA LOGIC ---
    { q: "Complexity of finding an element in a Min-Heap of size N?", a: "O(N)", options: ["O(log N)", "O(1)", "O(N)", "O(N log N)"] },
    { q: "Result of '5' + 3 in JavaScript?", a: "'53'", options: ["8", "'53'", "NaN", "Error"] },
    { q: "How many bits are required to represent decimal 100 in binary?", a: "7", options: ["6", "7", "8", "10"] },
    { q: "Which sorting algorithm has the best-case time complexity of O(N)?", a: "Insertion Sort", options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"] },
    { q: "What is the result of 10 >> 1 in binary shift?", a: "5", options: ["20", "5", "100", "1"] },

    // --- PHYSICS & ENERGY EDGE CASES ---
    { q: "If the radius of Earth is halved but mass is constant, what happens to 'g'?", a: "Increases 4x", options: ["Doubles", "Increases 4x", "Halves", "Constant"] },
    { q: "Refractive index of water is 1.33. Speed of light in water?", a: "2.25 x 10^8 m/s", options: ["3 x 10^8 m/s", "2.25 x 10^8 m/s", "1.5 x 10^8 m/s", "2 x 10^8 m/s"] },
    { q: "Energy stored in a 10uF capacitor charged to 100V?", a: "0.05 J", options: ["1 J", "0.5 J", "0.05 J", "0.005 J"] },
    { q: "Bernoulli's principle is based on the law of conservation of?", a: "Energy", options: ["Mass", "Energy", "Momentum", "Pressure"] },
    { q: "At what temperature are Celsius and Fahrenheit scales equal?", a: "-40°", options: ["0°", "32°", "-40°", "100°"] },
    { q: "Unit of Magnetic Flux?", a: "Weber", options: ["Tesla", "Weber", "Henry", "Gauss"] },
    { q: "The escape velocity from Earth's surface is approx?", a: "11.2 km/s", options: ["9.8 km/s", "11.2 km/s", "42 km/s", "7 km/s"] },
    { q: "If the power of a lens is +2.5D, what is its focal length?", a: "40 cm", options: ["25 cm", "40 cm", "50 cm", "10 cm"] },
    { q: "Resistance of an ideal Ammeter should be?", a: "Zero", options: ["Zero", "Infinite", "1 Ω", "100 Ω"] },
    { q: "What is the primary charge carrier in P-type semiconductors?", a: "Holes", options: ["Electrons", "Holes", "Protons", "Neutrons"] }
];