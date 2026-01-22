const allQuestions = [
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
    { q: "Which space agency launched the 'LUPEX' mission to the lunar south pole in 2025?", a: "ISRO & JAXA", options: ["NASA", "ISRO & JAXA", "ESA", "Roscosmos"] },
    { q: "What is the name of the world's first commercial space station module launched in late 2025?", a: "Axiom Hub", options: ["Axiom Hub", "Starlab", "Orbital Reef", "Gateway"] },
    { q: "Which element's isotope was successfully mined by the Chang'e-8 mission in 2025?", a: "Helium-3", options: ["Thorium", "Helium-3", "Lithium", "Uranium"] },
    { q: "In 2026, which country became the first to implement a 'Global AI Sovereign Wealth Fund'?", a: "UAE", options: ["USA", "China", "UAE", "Saudi Arabia"] },

    // --- GEOPOLITICS & ECONOMICS ---
    { q: "Which nation chaired the 2025 BRICS summit where 5 new members were officially integrated?", a: "Brazil", options: ["Russia", "Brazil", "South Africa", "India"] },
    { q: "The 'CHIPS Act 2.0' (2025) primarily focuses on which technology?", a: "2nm Lithography", options: ["Quantum Computing", "2nm Lithography", "6G Networks", "Solid State Batteries"] },
    { q: "Which currency officially overtook the Euro in global SWIFT payments in Q3 2025?", a: "Yuan (CNY)", options: ["Yuan (CNY)", "Yen (JPY)", "Pound (GBP)", "None"] },

    // --- ENVIRONMENTAL TECH ---
    { q: "Where was the world's largest 'Carbon Capture' plant, 'Mammoth 2', commissioned in 2025?", a: "Iceland", options: ["Norway", "Iceland", "Canada", "USA"] },
    { q: "Which country hosted COP30 in 2025, focusing on the 'Amazon Protection Fund'?", a: "Brazil", options: ["Brazil", "Egypt", "UAE", "Australia"] },

    // --- MISC TOUGH GK ---
    { q: "Who was appointed as the first-ever 'Global Envoy for AI Safety' by the UN in late 2025?", a: "Demis Hassabis", options: ["Sam Altman", "Demis Hassabis", "Geoffrey Hinton", "Fei-Fei Li"] },
    { q: "The 2026 Winter Olympics (Milano Cortina) introduced which new sport?", a: "Ski Mountaineering", options: ["Padel", "Ski Mountaineering", "Cricket", "Squash"] },
    { q: "What is the pinch-off voltage of a JFET if Vgs(off) is -4V and Vgs is -2V?", a: "2V", options: ["2V", "4V", "-6V", "8V"] },
    { q: "Duty cycle of a square wave where 'on' time is 2ms and 'off' time is 8ms?", a: "20%", options: ["25%", "20%", "40%", "80%"] },
    { q: "Number of selection lines for a 1-to-32 Demultiplexer?", a: "5", options: ["4", "5", "16", "32"] },
    { q: "The bandwidth of an amplifier with gain 100 and Gain-Bandwidth Product 1MHz?", a: "10 kHz", options: ["100 kHz", "10 kHz", "1 MHz", "1 kHz"] },
    { q: "Equivalent resistance of an infinite ladder of 1Ω resistors?", a: "1.618 Ω", options: ["1 Ω", "2 Ω", "1.618 Ω", "0.5 Ω"] },
    { q: "Phase difference between V and I in a purely capacitive circuit?", a: "90° lagging V", options: ["90° leading V", "90° lagging V", "0°", "180°"] },
    { q: "Voltage gain of an Op-Amp in non-inverting mode with Rf=10k and R1=2k?", a: "6", options: ["5", "6", "-5", "11"] },
    { q: "Conversion time of an 8-bit Successive Approximation ADC at 1MHz clock?", a: "8 μs", options: ["256 μs", "8 μs", "1 μs", "0.5 μs"] },
    { q: "A 4-bit R-2R ladder DAC uses Vref=10V. Smallest output change (LSB)?", a: "0.625V", options: ["0.625V", "1.25V", "2.5V", "0.312V"] },
    { q: "What is the thermal voltage (Vt) at room temperature (300K) approx?", a: "26 mV", options: ["26 mV", "0.7 V", "1 V", "12 mV"] },

    // --- MATHEMATICAL REASONING & APTITUDE ---
    { q: "A gardener plants 10 trees in 5 rows with 4 trees in each row. How?", a: "Star shape", options: ["Circle", "Star shape", "Square", "Impossible"] },
    { q: "If 1=5, 2=25, 3=125, 4=625, then 5=?", a: "1", options: ["3125", "1", "25", "5"] },
    { q: "A clock loses 10 mins every hour. It was set right at 12 PM. Time at real 6 PM?", a: "5 PM", options: ["5 PM", "5:10 PM", "6:50 PM", "7 PM"] },
    { q: "Sum of interior angles of a regular Hexagon?", a: "720°", options: ["540°", "720°", "360°", "1080°"] },
    { q: "A boat goes 10km/h in still water. River speed 2km/h. Speed upstream?", a: "8 km/h", options: ["12 km/h", "8 km/h", "10 km/h", "6 km/h"] },
    { q: "If 'POWER' is 77, what is 'WORK'?", a: "67", options: ["46", "67", "57", "68"] },
    { q: "Difference between the largest and smallest 3-digit numbers using 0, 2, 4?", a: "216", options: ["420", "216", "220", "440"] },
    { q: "Probability of picking a non-vowel from the word 'ELECTRONICS'?", a: "7/11", options: ["4/11", "7/11", "1/2", "6/11"] },
    { q: "A is 300% of B. What percentage of A is B?", a: "33.33%", options: ["30%", "33.33%", "300%", "66.66%"] },
    { q: "Total number of squares on a standard Chessboard?", a: "204", options: ["64", "204", "128", "256"] },

    // --- COMPUTER SCIENCE & DATA STRUCTURES ---
    { q: "Time complexity of building a Heap from an unsorted array of size N?", a: "O(N)", options: ["O(N log N)", "O(log N)", "O(N)", "O(N^2)"] },
    { q: "Which data structure is used to implement Recursion?", a: "Stack", options: ["Queue", "Stack", "Linked List", "Tree"] },
    { q: "Number of edges in a complete graph with 10 vertices?", a: "45", options: ["90", "100", "45", "10"] },
    { q: "Default port for HTTP?", a: "80", options: ["443", "80", "21", "8080"] },
    { q: "Which scheduling algorithm can lead to Starvation?", a: "Priority", options: ["Round Robin", "Priority", "FIFO", "Shortest Job First"] },

    // --- BLOOD RELATIONS & SOCIAL LOGIC ---
    { q: "Looking at a portrait, X says: 'She is the mother of my wife's mother-in-law.' Who?", a: "X's Grandmother", options: ["X's Mother", "X's Grandmother", "X's Mother-in-law", "None"] },
    { q: "A family has a man, wife, 3 sons and their wives, and 2 children each. Total?", a: "14", options: ["17", "14", "11", "20"] },
    { q: "A is the uncle of B, who is the daughter of C, and C is the sister-in-law of A. A is C's?", a: "Brother-in-law", options: ["Brother", "Brother-in-law", "Husband", "Father"] },
    { q: "M is the son of P. Q is the granddaughter of O, who is the husband of P. M is Q's?", a: "Father", options: ["Uncle", "Father", "Cousin", "Brother"] },
    { q: "Introducing a girl, a boy said: 'She is the daughter of the mother of my mother.' Who?", a: "Maternal Aunt", options: ["Sister", "Mother", "Maternal Aunt", "Cousin"] },

    // --- PHYSICS & ENERGY ---
    { q: "A 100W bulb is on for 10 hours. Electrical energy consumed in kWh?", a: "1 kWh", options: ["10 kWh", "1 kWh", "0.1 kWh", "100 kWh"] },
    { q: "The work done in moving a charge of 2C across a 12V potential is?", a: "24 J", options: ["6 J", "24 J", "10 J", "0.16 J"] },
    { q: "Which color of light deviates the least through a prism?", a: "Red", options: ["Violet", "Blue", "Red", "Yellow"] },
    { q: "The wavelength of a 1GHz signal in air is approximately?", a: "30 cm", options: ["3 m", "30 cm", "3 cm", "300 m"] },

    // --- TRAPS & RIDDLES ---
    { q: "How many letters are in 'The Alphabet'?", a: "11", options: ["26", "24", "11", "8"] },
    { q: "What is seen in the middle of March and April that can’t be seen at the start?", a: "The letter R", options: ["Spring", "Rain", "The letter R", "Sun"] },
    { q: "A plane crashes exactly on the border. Where do you bury the survivors?", a: "Don't bury survivors", options: ["Both sides", "Nowhere", "Don't bury survivors", "In the air"] },
    { q: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?", a: "Chicago", options: ["Animal", "Chicago", "Chimera", "Chaos"] },

    // --- FAST MATH & BINARY ---
    { q: "Value of 1011 (Binary) + 1101 (Binary)?", a: "11000", options: ["11000", "10110", "11111", "10001"] },
    { q: "Number of zeros in one Billion (standard)?", a: "9", options: ["6", "9", "12", "8"] },
    { q: "Binary 11111111 (8 bits) in Decimal?", a: "255", options: ["256", "255", "127", "254"] },

    // --- MIXED FINAL PROTOCOL ---
    { q: "Who is the 'Father of Electronics'?", a: "Michael Faraday", options: ["Tesla", "Edison", "Faraday", "Maxwell"] },
    { q: "Which logic gate is known as a 'Coincidence Detector'?", a: "AND", options: ["OR", "AND", "NOT", "XOR"] },
    { q: "What is the efficiency of a Transformer at full load approx?", a: "95-98%", options: ["50%", "75%", "95-98%", "100%"] },
    { q: "What does BIOS stand for?", a: "Basic Input Output System", options: ["Binary Input Output System", "Basic Input Output System", "Basic Integrated OS", "None"] }
];
