export type Objective={code:string;title:string;hl:boolean;points:string[]};
// Concise teacher-written prompts, mapped to the 2027 guide. Consult the guide for authoritative wording.
export const objectives:Record<string,Objective[]>={
  "A1.1": [
    {
      "code": "A1.1.1",
      "title": "Describe the functions and interactions of the main CPU components.",
      "hl": false,
      "points": [
        "ALU and CU: explain their jobs and how they cooperate.",
        "Trace IR, PC, MAR, MDR and accumulator during an instruction.",
        "Distinguish address, data and control buses.",
        "Compare single-core, multi-core and co-processor arrangements.",
        "Draw and label the connections between CPU components."
      ]
    },
    {
      "code": "A1.1.2",
      "title": "GPU workloads",
      "hl": false,
      "points": [
        "Connect GPU architecture to parallel computation.",
        "Choose GPU applications such as rendering, simulations and machine learning."
      ]
    },
    {
      "code": "A1.1.3",
      "title": "CPU–GPU comparison",
      "hl": true,
      "points": [
        "Compare cores, memory access, energy use and workloads.",
        "Explain how work and data are shared between CPU and GPU."
      ]
    },
    {
      "code": "A1.1.4",
      "title": "Memory hierarchy",
      "hl": false,
      "points": [
        "Compare RAM, ROM, registers and L1/L2/L3 cache.",
        "Use cache hits and misses to explain performance."
      ]
    },
    {
      "code": "A1.1.5",
      "title": "Instruction cycle",
      "hl": false,
      "points": [
        "Trace fetch, decode and execute.",
        "Follow register changes and transfers on all three buses."
      ]
    },
    {
      "code": "A1.1.6",
      "title": "Pipelines and cores",
      "hl": true,
      "points": [
        "Trace overlapping fetch, decode, execute and write-back stages.",
        "Explain independent and parallel work across cores."
      ]
    },
    {
      "code": "A1.1.7",
      "title": "Secondary storage choices",
      "hl": false,
      "points": [
        "Compare internal SSD, HDD and eMMC storage.",
        "Choose between external disks, optical media, flash, memory cards and NAS."
      ]
    },
    {
      "code": "A1.1.8",
      "title": "Compression choices",
      "hl": false,
      "points": [
        "Compare lossy and lossless results.",
        "Work through run-length encoding and explain transform coding."
      ]
    },
    {
      "code": "A1.1.9",
      "title": "Cloud service choices",
      "hl": false,
      "points": [
        "Distinguish SaaS, PaaS and IaaS responsibilities.",
        "Justify a service using control, flexibility and resource availability."
      ]
    }
  ],
  "A1.2": [
    {
      "code": "A1.2.1",
      "title": "Number representations",
      "hl": false,
      "points": [
        "Convert integers between decimal, binary and hexadecimal."
      ]
    },
    {
      "code": "A1.2.2",
      "title": "Binary encoding",
      "hl": false,
      "points": [
        "Explain encodings for numbers, text, images, sound and video."
      ]
    },
    {
      "code": "A1.2.3",
      "title": "Gate behaviour",
      "hl": false,
      "points": [
        "Use AND, OR, NOT, NAND, NOR, XOR and XNOR."
      ]
    },
    {
      "code": "A1.2.4",
      "title": "Truth tables",
      "hl": false,
      "points": [
        "Derive outputs from expressions and circuits.",
        "Simplify using Boolean algebra and Karnaugh maps."
      ]
    },
    {
      "code": "A1.2.5",
      "title": "Logic circuits",
      "hl": false,
      "points": [
        "Draw standard gate symbols and trace connected gates.",
        "Simplify a circuit without changing its outputs."
      ]
    }
  ],
  "A1.3": [
    {
      "code": "A1.3.1",
      "title": "OS abstraction",
      "hl": false,
      "points": [
        "Explain how software accesses managed hardware resources."
      ]
    },
    {
      "code": "A1.3.2",
      "title": "OS services",
      "hl": false,
      "points": [
        "Cover memory, files, devices, scheduling, security and accounting.",
        "Connect GUI, virtualization and networking to OS services."
      ]
    },
    {
      "code": "A1.3.3",
      "title": "Scheduling choices",
      "hl": false,
      "points": [
        "Compare FCFS, round robin, multilevel queues and priority scheduling."
      ]
    },
    {
      "code": "A1.3.4",
      "title": "Polling or interrupts",
      "hl": false,
      "points": [
        "Choose an approach using latency, overhead, power and event frequency."
      ]
    },
    {
      "code": "A1.3.5",
      "title": "Resource contention",
      "hl": true,
      "points": [
        "Explain multitasking, scheduling conflicts and deadlock."
      ]
    },
    {
      "code": "A1.3.6",
      "title": "Control-loop components",
      "hl": true,
      "points": [
        "Trace input, processing, output and feedback.",
        "Identify sensors, actuators, transducers, controller and algorithm."
      ]
    },
    {
      "code": "A1.3.7",
      "title": "Control applications",
      "hl": true,
      "points": [
        "Compare open-loop and closed-loop solutions in a real system."
      ]
    }
  ],
  "A1.4": [
    {
      "code": "A1.4.1",
      "title": "Translation choices",
      "hl": true,
      "points": [
        "Compare interpreters, compilers, bytecode and JIT.",
        "Evaluate errors, speed, portability and development needs."
      ]
    }
  ],
  "A2.1": [
    {
      "code": "A2.1.1",
      "title": "Network scope",
      "hl": false,
      "points": [
        "Compare LAN, WAN, PAN and VPN use cases."
      ]
    },
    {
      "code": "A2.1.2",
      "title": "Digital infrastructure",
      "hl": false,
      "points": [
        "Weigh internet, cloud, distributed, edge and mobile systems."
      ]
    },
    {
      "code": "A2.1.3",
      "title": "Network devices",
      "hl": false,
      "points": [
        "Explain gateways, firewalls, modems, NICs, routers, switches and access points.",
        "Relate each device to TCP/IP layers."
      ]
    },
    {
      "code": "A2.1.4",
      "title": "Network protocols",
      "hl": false,
      "points": [
        "Distinguish TCP, UDP, HTTP, HTTPS and DHCP purposes."
      ]
    },
    {
      "code": "A2.1.5",
      "title": "TCP/IP layers",
      "hl": true,
      "points": [
        "Trace application, transport, internet and network-interface responsibilities."
      ]
    }
  ],
  "A2.2": [
    {
      "code": "A2.2.1",
      "title": "Topology decisions",
      "hl": false,
      "points": [
        "Compare star, mesh and hybrid layouts.",
        "Weigh cost, reliability, speed, growth and collisions."
      ]
    },
    {
      "code": "A2.2.2",
      "title": "Server roles",
      "hl": true,
      "points": [
        "Compare DNS, DHCP, file, mail, proxy and web servers."
      ]
    },
    {
      "code": "A2.2.3",
      "title": "Networking models",
      "hl": false,
      "points": [
        "Evaluate client–server and peer-to-peer for a given service."
      ]
    },
    {
      "code": "A2.2.4",
      "title": "Network segmentation",
      "hl": false,
      "points": [
        "Use subnetting and VLANs to explain congestion and security boundaries."
      ]
    }
  ],
  "A2.3": [
    {
      "code": "A2.3.1",
      "title": "IP addresses",
      "hl": false,
      "points": [
        "Compare IPv4/IPv6, public/private and static/dynamic addresses.",
        "Explain NAT between internal and public networks."
      ]
    },
    {
      "code": "A2.3.2",
      "title": "Transmission media",
      "hl": false,
      "points": [
        "Compare fibre, twisted pair and wireless.",
        "Consider bandwidth, range, interference, installation and security."
      ]
    },
    {
      "code": "A2.3.3",
      "title": "Packet journeys",
      "hl": false,
      "points": [
        "Trace packet headers, independent routes and reassembly."
      ]
    },
    {
      "code": "A2.3.4",
      "title": "Routing choices",
      "hl": true,
      "points": [
        "Compare static and dynamic routes using scale, maintenance and convergence."
      ]
    }
  ],
  "A2.4": [
    {
      "code": "A2.4.1",
      "title": "Firewall decisions",
      "hl": false,
      "points": [
        "Evaluate traffic rules, allow/deny lists and NAT limitations."
      ]
    },
    {
      "code": "A2.4.2",
      "title": "Network threats",
      "hl": true,
      "points": [
        "Recognize DDoS, malware, interception, phishing, injection and XSS.",
        "Explain weak authentication, missing patches and zero-day exposure."
      ]
    },
    {
      "code": "A2.4.3",
      "title": "Defence selection",
      "hl": true,
      "points": [
        "Match encryption, validation, filtering, IDS/IPS and MFA to threats.",
        "Include patching, security tests, training, VPNs and wireless access controls."
      ]
    },
    {
      "code": "A2.4.4",
      "title": "Cryptography and trust",
      "hl": false,
      "points": [
        "Compare symmetric and asymmetric keys.",
        "Explain certificates and key management."
      ]
    }
  ],
  "A3.1": [
    {
      "code": "A3.1.1",
      "title": "Relational trade-offs",
      "hl": false,
      "points": [
        "Connect tables, keys and relationships to integrity and consistency.",
        "Weigh concurrency, retrieval, redundancy, scale and schema limitations."
      ]
    }
  ],
  "A3.2": [
    {
      "code": "A3.2.1",
      "title": "Schema levels",
      "hl": false,
      "points": [
        "Distinguish conceptual, logical and physical designs."
      ]
    },
    {
      "code": "A3.2.2",
      "title": "Entity relationships",
      "hl": false,
      "points": [
        "Draw ERDs with cardinality and optionality."
      ]
    },
    {
      "code": "A3.2.3",
      "title": "Database types",
      "hl": false,
      "points": [
        "Choose consistent field types and explain consequences of errors."
      ]
    },
    {
      "code": "A3.2.4",
      "title": "Table construction",
      "hl": false,
      "points": [
        "Apply primary, foreign, composite and concatenated keys."
      ]
    },
    {
      "code": "A3.2.5",
      "title": "Normal forms",
      "hl": false,
      "points": [
        "Compare 1NF, 2NF and 3NF using atomic values and dependencies."
      ]
    },
    {
      "code": "A3.2.6",
      "title": "Normalize a design",
      "hl": false,
      "points": [
        "Transform a realistic set of records into 3NF tables."
      ]
    },
    {
      "code": "A3.2.7",
      "title": "Denormalization choices",
      "hl": false,
      "points": [
        "Balance read performance against redundancy and update risk."
      ]
    }
  ],
  "A3.3": [
    {
      "code": "A3.3.1",
      "title": "SQL language roles",
      "hl": false,
      "points": [
        "Distinguish defining structures from manipulating records."
      ]
    },
    {
      "code": "A3.3.2",
      "title": "Two-table queries",
      "hl": false,
      "points": [
        "Use joins, filtering, grouping, ordering and wildcard matching."
      ]
    },
    {
      "code": "A3.3.3",
      "title": "Record changes",
      "hl": false,
      "points": [
        "Use INSERT, UPDATE and DELETE.",
        "Explain effects on indexes."
      ]
    },
    {
      "code": "A3.3.4",
      "title": "SQL aggregation",
      "hl": true,
      "points": [
        "Calculate grouped counts, totals, averages, minima and maxima."
      ]
    },
    {
      "code": "A3.3.5",
      "title": "Database views",
      "hl": true,
      "points": [
        "Compare virtual and materialized views for speed and access control."
      ]
    },
    {
      "code": "A3.3.6",
      "title": "Transactions",
      "hl": true,
      "points": [
        "Apply ACID and trace BEGIN, COMMIT and ROLLBACK."
      ]
    }
  ],
  "A3.4": [
    {
      "code": "A3.4.1",
      "title": "Alternative stores",
      "hl": true,
      "points": [
        "Choose NoSQL, cloud, spatial or in-memory storage for a context."
      ]
    },
    {
      "code": "A3.4.2",
      "title": "Warehouse purpose",
      "hl": true,
      "points": [
        "Explain integrated historical, append-only data for analysis."
      ]
    },
    {
      "code": "A3.4.3",
      "title": "Analytical processing",
      "hl": true,
      "points": [
        "Connect OLAP and mining to business questions.",
        "Recognize classification, clustering, regression, association, sequences and anomalies."
      ]
    },
    {
      "code": "A3.4.4",
      "title": "Distributed storage",
      "hl": true,
      "points": [
        "Balance replication, partitioning, consistency, concurrency and fault tolerance."
      ]
    }
  ],
  "A4.1": [
    {
      "code": "A4.1.1",
      "title": "Learning paradigms",
      "hl": false,
      "points": [
        "Compare supervised, unsupervised, reinforcement, deep and transfer learning."
      ]
    },
    {
      "code": "A4.1.2",
      "title": "ML infrastructure",
      "hl": false,
      "points": [
        "Choose hardware using compute, storage and scale.",
        "Compare laptops, GPUs, ASICs, FPGAs, TPUs, edge, cloud and HPC."
      ]
    }
  ],
  "A4.2": [
    {
      "code": "A4.2.1",
      "title": "Data cleaning",
      "hl": true,
      "points": [
        "Handle missing values, duplicates, outliers and formatting.",
        "Distinguish normalization from standardization."
      ]
    },
    {
      "code": "A4.2.2",
      "title": "Feature selection",
      "hl": true,
      "points": [
        "Compare filter, wrapper and embedded selection methods."
      ]
    },
    {
      "code": "A4.2.3",
      "title": "Dimensionality",
      "hl": true,
      "points": [
        "Explain sparsity, overfitting and computational costs of many features."
      ]
    }
  ],
  "A4.3": [
    {
      "code": "A4.3.1",
      "title": "Regression predictions",
      "hl": true,
      "points": [
        "Interpret slope, intercept and model fit for continuous outcomes."
      ]
    },
    {
      "code": "A4.3.2",
      "title": "Classification predictions",
      "hl": true,
      "points": [
        "Trace K-NN and decision-tree decisions for labelled categories."
      ]
    },
    {
      "code": "A4.3.3",
      "title": "Tuning and evaluation",
      "hl": true,
      "points": [
        "Use accuracy, precision, recall and F1.",
        "Connect hyperparameters to underfitting and overfitting."
      ]
    },
    {
      "code": "A4.3.4",
      "title": "Clustering",
      "hl": true,
      "points": [
        "Explain how unlabelled observations form similarity-based groups."
      ]
    },
    {
      "code": "A4.3.5",
      "title": "Association patterns",
      "hl": true,
      "points": [
        "Interpret relationships between attributes without assuming causation."
      ]
    },
    {
      "code": "A4.3.6",
      "title": "Reinforcement decisions",
      "hl": true,
      "points": [
        "Trace states, actions, rewards and policies.",
        "Weigh exploration against exploitation."
      ]
    },
    {
      "code": "A4.3.7",
      "title": "Genetic search",
      "hl": true,
      "points": [
        "Trace fitness, selection, crossover, mutation and termination."
      ]
    },
    {
      "code": "A4.3.8",
      "title": "Neural networks",
      "hl": true,
      "points": [
        "Sketch a perceptron with weights, bias and activation.",
        "Connect input, hidden and output layers."
      ]
    },
    {
      "code": "A4.3.9",
      "title": "Image networks",
      "hl": true,
      "points": [
        "Trace convolution, activation, pooling and fully connected layers.",
        "Explain effects of kernels, stride, depth and loss."
      ]
    },
    {
      "code": "A4.3.10",
      "title": "Model comparison",
      "hl": true,
      "points": [
        "Choose algorithms using the problem, data and desired outcomes."
      ]
    }
  ],
  "A4.4": [
    {
      "code": "A4.4.1",
      "title": "ML ethics",
      "hl": false,
      "points": [
        "Evaluate fairness, consent, privacy, accountability and environmental cost.",
        "Identify bias and harms in online communication."
      ]
    },
    {
      "code": "A4.4.2",
      "title": "Emerging technology ethics",
      "hl": false,
      "points": [
        "Reassess rights and equity as AI, AR/VR and quantum technologies develop."
      ]
    }
  ],
  "B1.1": [
    {
      "code": "B1.1.1",
      "title": "Problem specification",
      "hl": false,
      "points": [
        "Set inputs, outputs, goals, constraints and evaluation criteria."
      ]
    },
    {
      "code": "B1.1.2",
      "title": "Thinking tools",
      "hl": false,
      "points": [
        "Distinguish abstraction, decomposition, pattern recognition and algorithm design."
      ]
    },
    {
      "code": "B1.1.3",
      "title": "Problem-solving strategy",
      "hl": false,
      "points": [
        "Apply computational thinking to a realistic task before coding."
      ]
    },
    {
      "code": "B1.1.4",
      "title": "Flowchart tracing",
      "hl": false,
      "points": [
        "Follow standard symbols, decisions and variable changes to determine output."
      ]
    }
  ],
  "B2.1": [
    {
      "code": "B2.1.1",
      "title": "Variables and scope",
      "hl": false,
      "points": [
        "Trace local/global Boolean, character, decimal, integer and string values."
      ]
    },
    {
      "code": "B2.1.2",
      "title": "String manipulation",
      "hl": false,
      "points": [
        "Extract, replace, alter and concatenate substrings."
      ]
    },
    {
      "code": "B2.1.3",
      "title": "Exception handling",
      "hl": false,
      "points": [
        "Handle invalid inputs and unavailable resources.",
        "Use try/catch or try/except and finally."
      ]
    },
    {
      "code": "B2.1.4",
      "title": "Debugging",
      "hl": false,
      "points": [
        "Use traces, breakpoints, print diagnostics and stepping."
      ]
    }
  ],
  "B2.2": [
    {
      "code": "B2.2.1",
      "title": "Static or dynamic",
      "hl": false,
      "points": [
        "Compare resizing, memory, speed and flexibility."
      ]
    },
    {
      "code": "B2.2.2",
      "title": "Arrays and lists",
      "hl": false,
      "points": [
        "Create 1D/2D structures and add, remove and traverse elements."
      ]
    },
    {
      "code": "B2.2.3",
      "title": "Stack operations",
      "hl": false,
      "points": [
        "Trace push, pop, peek and isEmpty using LIFO."
      ]
    },
    {
      "code": "B2.2.4",
      "title": "Queue operations",
      "hl": false,
      "points": [
        "Trace enqueue, dequeue, front and isEmpty using FIFO."
      ]
    }
  ],
  "B2.3": [
    {
      "code": "B2.3.1",
      "title": "Instruction order",
      "hl": false,
      "points": [
        "Sequence operations to meet a goal and avoid incorrect results."
      ]
    },
    {
      "code": "B2.3.2",
      "title": "Selection",
      "hl": false,
      "points": [
        "Combine branches, comparisons and Boolean conditions."
      ]
    },
    {
      "code": "B2.3.3",
      "title": "Iteration",
      "hl": false,
      "points": [
        "Choose counted or conditional loops and trace termination."
      ]
    },
    {
      "code": "B2.3.4",
      "title": "Functions and modules",
      "hl": false,
      "points": [
        "Use parameters, scope and reusable units of code."
      ]
    }
  ],
  "B2.4": [
    {
      "code": "B2.4.1",
      "title": "Algorithm scaling",
      "hl": false,
      "points": [
        "Calculate time/space Big O and justify algorithm choices."
      ]
    },
    {
      "code": "B2.4.2",
      "title": "Searching",
      "hl": false,
      "points": [
        "Implement and trace linear and binary search."
      ]
    },
    {
      "code": "B2.4.3",
      "title": "Sorting",
      "hl": false,
      "points": [
        "Implement bubble and selection sorts and compare complexity."
      ]
    },
    {
      "code": "B2.4.4",
      "title": "Recursive thinking",
      "hl": true,
      "points": [
        "Explain base cases, smaller problems and memory costs.",
        "Connect recursion to quicksort, trees and fractals."
      ]
    },
    {
      "code": "B2.4.5",
      "title": "Recursive tracing",
      "hl": true,
      "points": [
        "Write and trace simple non-branching recursive functions."
      ]
    }
  ],
  "B2.5": [
    {
      "code": "B2.5.1",
      "title": "Text-file operations",
      "hl": false,
      "points": [
        "Open, read, write, append and close sequential files."
      ]
    }
  ],
  "B3.1": [
    {
      "code": "B3.1.1",
      "title": "OOP decisions",
      "hl": false,
      "points": [
        "Evaluate objects, classes, inheritance, encapsulation and polymorphism."
      ]
    },
    {
      "code": "B3.1.2",
      "title": "Class design",
      "hl": false,
      "points": [
        "Model attributes and methods with UML."
      ]
    },
    {
      "code": "B3.1.3",
      "title": "Class or instance",
      "hl": false,
      "points": [
        "Distinguish static from instance variables and methods."
      ]
    },
    {
      "code": "B3.1.4",
      "title": "Object creation",
      "hl": false,
      "points": [
        "Define classes, constructors and initialized instances."
      ]
    },
    {
      "code": "B3.1.5",
      "title": "Information hiding",
      "hl": false,
      "points": [
        "Apply public/private access and protect object state."
      ]
    }
  ],
  "B3.2": [
    {
      "code": "B3.2.1",
      "title": "Inheritance",
      "hl": true,
      "points": [
        "Extend parent classes and reason about access modifiers."
      ]
    },
    {
      "code": "B3.2.2",
      "title": "Polymorphism",
      "hl": true,
      "points": [
        "Implement overriding and distinguish static/dynamic behaviour."
      ]
    },
    {
      "code": "B3.2.3",
      "title": "Abstraction",
      "hl": true,
      "points": [
        "Use abstract classes and shared interfaces for subclasses."
      ]
    },
    {
      "code": "B3.2.4",
      "title": "Object relationships",
      "hl": true,
      "points": [
        "Compare component lifetimes in composition and aggregation."
      ]
    },
    {
      "code": "B3.2.5",
      "title": "Design patterns",
      "hl": true,
      "points": [
        "Apply singleton, factory and observer to recurring design problems."
      ]
    }
  ],
  "B4.1": [
    {
      "code": "B4.1.1",
      "title": "ADT interfaces",
      "hl": true,
      "points": [
        "Separate an abstract collection's operations from its implementation."
      ]
    },
    {
      "code": "B4.1.2",
      "title": "Linked-list trade-offs",
      "hl": true,
      "points": [
        "Compare singly, doubly and circular lists with arrays.",
        "Sketch insertion, deletion, traversal and searching."
      ]
    },
    {
      "code": "B4.1.3",
      "title": "Linked-list implementation",
      "hl": true,
      "points": [
        "Write the fundamental operations for each list type."
      ]
    },
    {
      "code": "B4.1.4",
      "title": "Search trees",
      "hl": true,
      "points": [
        "Draw a BST and trace insertion, deletion, search and traversal."
      ]
    },
    {
      "code": "B4.1.5",
      "title": "Set operations",
      "hl": true,
      "points": [
        "Implement membership, union, intersection, difference and subset checks."
      ]
    },
    {
      "code": "B4.1.6",
      "title": "Hash-based collections",
      "hl": true,
      "points": [
        "Explain hashing, collisions and load factors.",
        "Connect Java maps/sets or Python dictionaries/sets to ADTs."
      ]
    }
  ]
};
