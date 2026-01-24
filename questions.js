const allQuestions = [
    // --- LATEST 2025-2026 & TECH AFFAIRS ---
    { q: "Which nation chaired the 2025 BRICS summit and oversaw the integration of 5 new members?", a: "Brazil", options: ["Russia", "India", "Brazil", "South Africa"] },
    { q: "The 2026 Winter Olympics in Milano Cortina introduced which specific new medal sport?", a: "Ski Mountaineering", options: ["Padel", "Ski Mountaineering", "Cricket", "Squash"] },
    { q: "Which currency officially overtook the Euro in global SWIFT payments in late 2025?", a: "Yuan (CNY)", options: ["Yen (JPY)", "Pound (GBP)", "Yuan (CNY)", "None"] },
    { q: "Who was appointed as the UN's first 'Global Envoy for AI Safety' in late 2025?", a: "Demis Hassabis", options: ["Sam Altman", "Geoffrey Hinton", "Demis Hassabis", "Fei-Fei Li"] },
    { q: "The 'CHIPS Act 2.0' (2025) focus shifted primarily to which manufacturing technology?", a: "2nm Lithography", options: ["2nm Lithography", "Quantum Computing", "6G Networks", "Solid State Batteries"] },
    { q: "Which element's isotope was successfully mined by the Chang'e-8 mission in 2025?", a: "Helium-3", options: ["Thorium", "Lithium", "Uranium", "Helium-3"] },
    { q: "Which country became the first to implement a 'Global AI Sovereign Wealth Fund' in 2026?", a: "UAE", options: ["USA", "China", "UAE", "Saudi Arabia"] },

    // --- MATHEMATICAL & LOGIC TRAPS ---
    { q: "A clock strikes 4 in 6 seconds (using 3 intervals). How many seconds to strike 8?", a: "14", options: ["12", "14", "16", "18"] },
    { q: "A bat and ball cost $1.10. The bat costs $1.00 more than the ball. What is the ball's cost?", a: "$0.05", options: ["$0.10", "$0.05", "$0.01", "$0.15"] },
    { q: "How many cubic feet of dirt are in a hole 3ft deep, 3ft wide, and 3ft long?", a: "0", options: ["27", "9", "0", "3"] },
    { q: "If 3 cats kill 3 rats in 3 minutes, how many cats are needed to kill 100 rats in 100 minutes?", a: "3", options: ["100", "33", "3", "10"] },
    { q: "Successive discounts of 20% and 10% are equal to what single discount percentage?", a: "28%", options: ["30%", "28%", "25%", "22%"] },
    { q: "A doctor gives you 3 pills; take one every 30 minutes. How long do they last?", a: "60 minutes", options: ["90 mins", "60 mins", "30 mins", "120 mins"] },
    { q: "How many 9s are there between 1 and 100?", a: "20", options: ["10", "11", "19", "20"] },
    { q: "If you have 3 apples and take away 2, how many apples do you have?", a: "2", options: ["1", "2", "3", "0"] },
    { q: "A man has 6 daughters. Each has one brother. Total children in the family?", a: "7", options: ["12", "7", "6", "13"] },
    { q: "Some months have 30 days, others 31. How many have 28?", a: "12", options: ["1", "6", "12", "0"] },

    // --- CSE & WEB DEVELOPMENT ---
    { q: "What is the result of '5' + 3 in JavaScript?", a: "'53'", options: ["8", "'53'", "NaN", "Error"] },
    { q: "Which sorting algorithm maintains O(n) best-case time complexity?", a: "Insertion Sort", options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"] },
    { q: "In binary shift, what is the result of 10 >> 1?", a: "5", options: ["20", "5", "100", "1"] },
    { q: "What is the purpose of the 'volatile' keyword in Embedded C?", a: "Prevent optimization", options: ["Store in RAM", "Prevent optimization", "Make it constant", "Speed up access"] },
    { q: "Which IoT protocol is designed for constrained RESTful environments?", a: "CoAP", options: ["MQTT", "AMQP", "CoAP", "XMPP"] },
    { q: "What is the bit depth of the built-in ADC on a standard Arduino Uno?", a: "10-bit", options: ["8-bit", "10-bit", "12-bit", "16-bit"] },
    { q: "Binary 101101 to Decimal?", a: "45", options: ["45", "43", "37", "41"] },

    // --- ELECTRONICS & PHYSICS ---
    { q: "A 4-bit R-2R ladder DAC uses Vref=10V. What is the smallest output change (LSB)?", a: "0.625V", options: ["0.625V", "1.25V", "2.5V", "0.312V"] },
    { q: "The wavelength of a 1GHz signal in air is approximately?", a: "30 cm", options: ["3 m", "30 cm", "3 cm", "300 m"] },
    { q: "If the radius of Earth is halved but mass is constant, what happens to gravity 'g'?", a: "Increases 4x", options: ["Doubles", "Increases 4x", "Halves", "Constant"] },
    { q: "Which protocol uses only 2 wires (SDA and SCL)?", a: "I2C", options: ["SPI", "I2C", "UART", "USB"] },
    { q: "A Silicon Diode has a saturation current of 10nA. Approx forward voltage for 10mA?", a: "0.36 V", options: ["0.70 V", "0.36 V", "0.52 V", "0.85 V"] },
    { q: "The bandwidth of an amplifier with gain 100 and Gain-Bandwidth Product 1MHz?", a: "10 kHz", options: ["100 kHz", "10 kHz", "1 MHz", "1 kHz"] },

    // --- WORDPLAY & RIDDLES ---
    { q: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?", a: "Chicago", options: ["Animal", "Chicago", "Chimera", "Chaos"] },
    { q: "How many letters are in 'The Alphabet'?", a: "11", options: ["26", "24", "11", "8"] },
    { q: "Introduce a boy: 'He is son of my father's only son.' Meena is his?", a: "Aunt", options: ["Mother", "Sister", "Aunt", "Grandmother"] },
    { q: "What is seen in the middle of March and April that isn't at the start?", a: "The letter R", options: ["Spring", "Rain", "The letter R", "Sun"] },
    { q: "Two mothers and two daughters order only 3 meals but all eat. Why?", a: "Grandmother, mother, daughter", options: ["Not hungry", "Baby", "Grandmother, mother, daughter", "Error"] },
   
    // --- ELECTRONICS & CIRCUIT DESIGN (Tough) ---
    { q: "A 10V DC source is connected across a 1uF capacitor and a 1uF inductor in series. At steady state, the voltage across the capacitor is?", a: "10V", options: ["0V", "5V", "10V", "Infinite"] },
    { q: "In a BJT amplifier, if the emitter bypass capacitor is removed, what happens to the Voltage Gain?", a: "Decreases", options: ["Increases", "Decreases", "Stays same", "Becomes zero"] },
    { q: "What is the Ripple Factor of a Half-Wave Rectifier?", a: "1.21", options: ["0.48", "1.11", "1.21", "0.81"] },
    { q: "Which multivibrator is known as a 'Free Running' oscillator?", a: "Astable", options: ["Monostable", "Bistable", "Astable", "Schmitt Trigger"] },
    { q: "A Silicon power diode has a junction temperature of 150°C. Its barrier potential ($V_\gamma$) will be?", a: "Lower than 0.7V", options: ["0.7V", "Higher than 0.7V", "Lower than 0.7V", "Exactly 1V"] },
    { q: "The CMRR of an ideal Operational Amplifier is?", a: "Infinite", options: ["0", "1", "100 dB", "Infinite"] },
    { q: "What is the characteristic impedance of a standard RG-59 Coaxial cable?", a: "75 Ω", options: ["50 Ω", "75 Ω", "100 Ω", "300 Ω"] },
    { q: "Which semiconductor device has a Negative Resistance region in its V-I curve?", a: "Tunnel Diode", options: ["Zener Diode", "Tunnel Diode", "Schottky Diode", "Varactor"] },
    { q: "In a 4-variable K-Map, how many cells are present?", a: "16", options: ["4", "8", "16", "32"] },
    { q: "A Buck Converter is used for which purpose?", a: "Step-down voltage", options: ["Step-up voltage", "Step-down voltage", "AC to DC", "DC to AC"] },

    // --- EMBEDDED SYSTEMS & PROTOCOLS ---
    { q: "In UART communication, what is the role of the 'Parity Bit'?", a: "Error detection", options: ["Start frame", "Error detection", "Stop frame", "Baud rate sync"] },
    { q: "Which register is typically used to track the address of the next instruction to be executed?", a: "Program Counter", options: ["Stack Pointer", "Accumulator", "Program Counter", "Instruction Reg"] },
    { q: "What is the 'Hold Time' requirement in a Flip-Flop?", a: "Time data must be stable after clock", options: ["Time data must be stable before clock", "Time data must be stable after clock", "Clock pulse width", "Propagation delay"] },
    { q: "In an 8051 microcontroller, which port requires external pull-up resistors to function as an I/O?", a: "Port 0", options: ["Port 0", "Port 1", "Port 2", "Port 3"] },
    { q: "Which SPI mode has CPOL=0 and CPHA=1?", a: "Mode 1", options: ["Mode 0", "Mode 1", "Mode 2", "Mode 3"] },
    { q: "A 'Deadman Timer' is another name for?", a: "Watchdog Timer", options: ["Real Time Clock", "Watchdog Timer", "Sleep Timer", "PWM Generator"] },
    { q: "What is the maximum distance for standard RS-232 communication at low baud rates?", a: "15 meters", options: ["1 meter", "15 meters", "100 meters", "1.2 km"] },
    { q: "Which interrupt has the highest priority in a standard Arduino (ATmega328P)?", a: "RESET", options: ["INT0", "INT1", "TIMER0", "RESET"] },
    { q: "The process of 'Debouncing' a switch is used to?", a: "Remove electrical noise", options: ["Increase voltage", "Remove electrical noise", "Save power", "Speed up CPU"] },
    { q: "Which memory allocation is used for local variables in C?", a: "Stack", options: ["Heap", "Data Segment", "Stack", "Code Segment"] },

    // --- TOUGH LOGICAL REASONING TRAPS ---
    { q: "A man is looking at a portrait. He says, 'That man's father is my father's son.' No brothers/sisters. Who is in the portrait?", a: "His Son", options: ["Himself", "His Father", "His Son", "His Nephew"] },
    { q: "If it takes 5 machines 5 minutes to make 5 widgets, how long for 100 machines to make 100 widgets?", a: "5 minutes", options: ["100 minutes", "50 minutes", "5 minutes", "1 minute"] },
    { q: "A lily pad doubles in size every day. If it fills the pond in 48 days, when was the pond half full?", a: "Day 47", options: ["Day 24", "Day 47", "Day 12", "Day 46"] },
    { q: "You are in a race and you overtake the person in 2nd place. What place are you in?", a: "2nd", options: ["1st", "2nd", "3rd", "Last"] },
    { q: "How many months have 28 days?", a: "12", options: ["1", "6", "12", "Depends on Year"] },
    { q: "What is the next number in the sequence: 1, 11, 21, 1211, 111221, ...?", a: "312211", options: ["111221", "312211", "211221", "122111"] },
    { q: "If 5+3=28, 9+1=810, 2+1=13, then 5+4=?", a: "19", options: ["9", "19", "20", "54"] },
    { q: "A hunter walks 1km South, 1km East, 1km North and ends at the start. He sees a bear. Color?", a: "White", options: ["Brown", "Black", "White", "Grey"] },
    { q: "What can travel around the world while staying in a corner?", a: "A stamp", options: ["The Moon", "A stamp", "A plane", "The wind"] },
    { q: "If a plane crashes on the border of India and Pakistan, where do they bury the survivors?", a: "Don't bury survivors", options: ["India", "Pakistan", "International waters", "Don't bury survivors"] },

    // --- ADVANCED MATH & QUANT ---
    { q: "A bottle and a cork cost $1.10. The bottle costs $1 more than the cork. How much is the cork?", a: "$0.05", options: ["$0.10", "$0.05", "$0.01", "$0.02"] },
    { q: "A snail is at the bottom of a 30ft well. Each day it climbs 3ft, but slips 2ft at night. How many days to get out?", a: "28", options: ["30", "29", "28", "27"] },
    { q: "If 3 people can paint 3 walls in 3 hours, how many walls can 6 people paint in 6 hours?", a: "12", options: ["6", "12", "9", "18"] },
    { q: "What is the probability that a leap year has 53 Sundays?", a: "2/7", options: ["1/7", "2/7", "52/366", "3/7"] },
    { q: "A clock shows 4:40. What is the angle between the hands?", a: "100°", options: ["80°", "100°", "110°", "120°"] },
    { q: "If 1.1^x = 1.21, then x = ?", a: "2", options: ["1.1", "2", "11", "1.21"] },
    { q: "The ratio of boys to girls is 3:2. If there are 30 boys, total students?", a: "50", options: ["45", "50", "60", "20"] },
    { q: "Successive increases of 10% and 10% result in a total increase of?", a: "21%", options: ["20%", "21%", "100%", "11%"] },
    { q: "A cube of 3x3x3 is painted red on all faces. How many small 1x1x1 cubes have NO paint?", a: "1", options: ["0", "1", "8", "6"] },
    { q: "What is the remainder when 7^100 is divided by 8?", a: "1", options: ["1", "7", "0", "4"] },

    // --- MIXED TECH RIDDLES ---
    { q: "Which protocol is known as 'Lightweight' and runs over UDP/IP?", a: "CoAP", options: ["MQTT", "CoAP", "HTTP", "FTP"] },
    { q: "Which memory is used to store the 'Interrupt Vector Table'?", a: "Flash/ROM", options: ["RAM", "Flash/ROM", "EEPROM", "Cache"] },
    { q: "In binary, what is the result of 1101 + 1011?", a: "11000", options: ["10110", "11000", "11111", "10001"] },
    { q: "A MOSFET is a ____ controlled device.", a: "Voltage", options: ["Current", "Voltage", "Power", "Frequency"] },
  
    
    { q: "If 'A' is 65 in ASCII, what is 'D'?", a: "68", options: ["66", "67", "68", "69"] },
    
    { q: "What is the result of 2^10?", a: "1024", options: ["512", "1024", "2048", "1000"] },
    { q: "Which language is used to program the Arduino?", a: "C/C++", options: ["Java", "Python", "C/C++", "HTML"] },

    // --- LATERAL THINKING & TRAPS ---
    { q: "A man dies of old age on his 25th birthday. How is this possible?", a: "He was born on Feb 29", options: ["He lives on Mars", "He was born on Feb 29", "It is a leap year", "He is a time traveler"] },
    { q: "If a brother, his sister, and their dog aren't under an umbrella, why didn't they get wet?", a: "It wasn't raining", options: ["They were inside", "The dog had a coat", "It wasn't raining", "They are ghosts"] },
    { q: "What has a head and a tail but no body?", a: "A coin", options: ["A snake", "A coin", "A shadow", "A kite"] },
    { q: "A clerk at a butcher shop is 5ft 10in tall and wears size 10 shoes. What does he weigh?", a: "Meat", options: ["180 lbs", "Meat", "Heavy", "Size 10"] },
    { q: "What can you catch but not throw?", a: "A cold", options: ["A ball", "A cold", "A secret", "Your breath"] },
    { q: "If you are running a race and you pass the person in last place, what place are you in?", a: "Impossible", options: ["Last", "Second to last", "First", "Impossible"] },
    { q: "What belongs to you, but everyone else uses it more than you do?", a: "Your name", options: ["Your phone", "Your money", "Your name", "Your car"] },
    { q: "I follow you all day and copy your every move, but you can't touch me. What am I?", a: "Shadow", options: ["Reflection", "Shadow", "Ghost", "Memory"] },
    { q: "What has many teeth but cannot bite?", a: "A comb", options: ["A saw", "A comb", "A zipper", "A gear"] },
    { q: "Which word in the dictionary is spelled incorrectly?", a: "Incorrectly", options: ["Wrong", "Mistake", "Incorrectly", "None"] },

    // --- VERBAL REASONING & BLOOD RELATIONS ---
    { q: "If your uncle's sister is not your aunt, who is she?", a: "Your mother", options: ["Cousin", "Grandmother", "Your mother", "Sister-in-law"] },
    { q: "A is the father of B, but B is not the son of A. How?", a: "B is the daughter", options: ["B is adopted", "A is the mother", "B is the daughter", "It is a lie"] },
    { q: "Pointing to a photograph, a man says: 'I have no brother or sister, but that man’s father is my father’s son.' Who is in the photo?", a: "His son", options: ["His father", "Himself", "His son", "His nephew"] },
    { q: "What is the relation of my father's only child's wife to me?", a: "My wife", options: ["Sister", "Mother", "My wife", "Cousin"] },
    { q: "A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many sisters?", a: "3", options: ["4", "3", "2", "5"] },

    // --- MATHEMATICAL LOGIC & PATTERNS ---
    { q: "If 1=5, 2=25, 3=125, 4=625, then 5=?", a: "1", options: ["3125", "1", "2525", "5"] },
    { q: "How many times does the digit 5 appear in numbers from 1 to 100?", a: "20", options: ["10", "19", "20", "21"] },
    { q: "A clock loses 1 minute every hour. If it is set right at 8 AM, what time will it show at 8 PM?", a: "7:48 PM", options: ["7:50 PM", "7:48 PM", "8:12 PM", "7:59 PM"] },
    { q: "Find the odd one out: 27, 64, 125, 144, 216", a: "144", options: ["27", "64", "144", "216"] },
    { q: "What number comes next? 2, 4, 12, 48, ...", a: "240", options: ["96", "120", "240", "144"] },
    { q: "If 'LEMON' is 'OLMON', how is 'APPLE' coded?", a: "EPPLE", options: ["ELPPA", "EPPLE", "BQQMF", "APPEL"] },
    { q: "A group of 1200 persons (captains and soldiers) is traveling. For every 15 soldiers, there is 1 captain. Total captains?", a: "75", options: ["80", "75", "15", "100"] },

    // --- SITUATIONAL & CRITICAL THINKING ---
    { q: "A man is driving a black car. His lights are off. The moon is not out. A black cat crosses the road. How does he see it?", a: "It is daytime", options: ["Night vision", "Cat's eyes glowed", "It is daytime", "Street lights"] },
    { q: "What has to be broken before you can use it?", a: "An egg", options: ["A glowstick", "A promise", "An egg", "A seal"] },
    { q: "What is full of holes but still holds water?", a: "A sponge", options: ["A net", "A sponge", "A sieve", "A cloud"] },
    { q: "What can you keep after giving it to someone else?", a: "Your word", options: ["Your heart", "Your word", "A secret", "A smile"] },
    { q: "What goes up but never comes down?", a: "Your age", options: ["Smoke", "A balloon", "Your age", "The sun"] },
    { q: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", a: "A map", options: ["A globe", "A map", "A dream", "A painting"] },
    { q: "What is black when you buy it, red when you use it, and gray when you throw it away?", a: "Charcoal", options: ["Paper", "Coal", "Charcoal", "Matches"] },
    { q: "What gets wetter the more it dries?", a: "A towel", options: ["The sun", "A towel", "A sponge", "Rain"] },

    // --- ENGINEERING LOGIC (CSE/EE MIX) ---
    { q: "Which logic gate outputs '1' only when both inputs are different?", a: "XOR", options: ["AND", "OR", "XOR", "NAND"] },
    { q: "In C++, which operator has the highest precedence?", a: "Scope Resolution (::)", options: ["Addition (+)", "Multiplication (*)", "Assignment (=)", "Scope Resolution (::)"] },
    { q: "What is the decimal equivalent of the largest 4-bit binary number?", a: "15", options: ["16", "15", "8", "7"] },
    { q: "Which data structure works on the LIFO principle?", a: "Stack", options: ["Queue", "Stack", "Tree", "Array"] },
    { q: "A circuit has 3 resistors of 3Ω in parallel. Equivalent resistance?", a: "1Ω", options: ["9Ω", "1Ω", "3Ω", "0.33Ω"] },
    { q: "If a processor has a 32-bit address bus, how much memory can it address?", a: "4 GB", options: ["2 GB", "4 GB", "1 GB", "8 GB"] },
    { q: "Which sorting algorithm is known as the 'divide and conquer' algorithm?", a: "Merge Sort", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"] },
    { q: "What is the hexadecimal value for decimal 15?", a: "F", options: ["E", "F", "10", "A"] },
    { q: "Which component is used to store charge in an electric circuit?", a: "Capacitor", options: ["Resistor", "Inductor", "Capacitor", "Transistor"] },
    { q: "In HTML, which attribute is used to provide a unique identifier for an element?", a: "id", options: ["class", "id", "name", "type"] },

    // --- RIDDLES & ANALOGIES ---
    { q: "Light is to Darkness as Knowledge is to ___?", a: "Ignorance", options: ["Books", "Ignorance", "Intelligence", "School"] },
    { q: "What is the next prime number after 31?", a: "37", options: ["33", "35", "37", "39"] },
    { q: "I start with 'P', end with 'E', and have thousands of letters. What am I?", a: "Post Office", options: ["Page", "Post Office", "Picture", "Preface"] },
    { q: "How many sides does a circle have?", a: "Two", options: ["Zero", "One", "Two", "Infinite"] }, // Inside and Outside
    { q: "What comes once in a minute, twice in a moment, but never in a thousand years?", a: "Letter M", options: ["Second", "Letter M", "Breath", "Clock"] },
    { q: "Which month of the year has 28 days?", a: "All of them", options: ["February", "All of them", "Leap month", "None"] },
    { q: "If you have a bowl with six apples and you take away four, how many do you have?", a: "4", options: ["2", "4", "6", "0"] },
    { q: "A man is pushing his car and stops at a hotel. He realizes he is bankrupt. Why?", a: "He is playing Monopoly", options: ["Car broke down", "He is playing Monopoly", "Hotel is expensive", "He lost his wallet"] },
    { q: "What can't talk but will reply when spoken to?", a: "An echo", options: ["A mirror", "A phone", "An echo", "A parrot"] },
    { q: "If an electric train is moving north at 100mph and the wind is blowing south at 10mph, which way is the smoke blowing?", a: "No smoke", options: ["South", "North", "Down", "No smoke"] }

];
