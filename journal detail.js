const LUCIDE_ICONS = {
  scale: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  sun: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  shieldCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  truck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="13" x="1" y="5" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  fileText: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
  wind: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  activity: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  gitBranch: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  scan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16 2 2"/></svg>`,
  syringe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>`,
  compass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  tree: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M9 22h6"/><path d="M12 3a7 7 0 0 0-7 7c0 4.5 4 8 7 8s7-3.5 7-8a7 7 0 0 0-7-7z"/></svg>`,
  bookOpen: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
};

const JOURNALS_DATA = {
  oak: {
    id: 1,
    key: 'oak',
    volume: 'VOL. 01',
    discipline: 'Centennial Oak Dendrology & Biomechanics',
    badgeText: 'VOL. 01 • CENTENNIAL HERITAGE PROTOCOLS',
    title: 'The Ancient Oak Stewardship Manual: Crown Weight Dynamics & Radial Aeration',
    tagline: 'An exhaustive dendrological treatise on preserving bicentennial white and bur oaks through mathematical branch moment-arm reduction, pneumatic root decompaction, and mycorrhizal symbiosis.',
    author: 'Dr. Alistair Vance, Master Arborist (ISA #FL-4921)',
    date: 'Autumn / Winter 2026',
    readTime: '8 min read',
    heroImg: 'assets/vault_specimen_oak.jpg',
    heroAlt: 'Centennial Heritage Oak Tree Specimen',
    floatingBadgeTitle: 'ISA Master Arborist Protocol',
    floatingBadgeSub: 'Zero Root Shearing Guarantee • 200+ Yr Heritage Care',

    abstract: 'Mature Quercus specimens across legacy private estates represent irrecoverable biological patrimony. As hardwoods surpass two centuries in age, natural heartwood compartmentalization decelerates while lateral bough leverage expands exponentially. This paper details our verified field protocol combining 3D drone photogrammetry, outer-canopy end-weight thinning, and supersonic pneumatic root zone aeration, demonstrating a 26% reduction in mechanical moment arm failure without perturbing historical fractal geometry.',

    articleSections: [
      {
        heading: 'Biomechanical Leverage & Lateral Bough Failure Physics',
        paragraphs: [
          'The architectural majesty of a 200-year-old oak stems from its expansive, horizontally planar lateral limbs, which frequently extend 40 to 50 feet outward from the central trunk axis. In biological physics, this creates an enormous lever arm. During high-precipitation summer thunderstorms, the accumulation of rainwater across hundreds of square meters of mature foliage can multiply branch tip mass by a factor of 3.2. When coupled with wind oscillation vectors exceeding 45 knots, the torsional load exerted at the primary branch union regularly surpasses the shear strength of aged, partially decayed heartwood.',
          'Conventional commercial tree trimming approaches this hazard with heavy crown lopping or crude interior lion-tailing—stripping inner foliage while leaving heavy foliage balls on limb tips. Dendrologically, this is disastrous: it removes photosynthetic solar energy factories near the trunk, increases wind oscillation whiplash at limb terminals, and introduces large, sun-exposed wound collars susceptible to heart-rot pathogens such as Inonotus dryadeus.',
          'Our methodology instead operates at the periphery. By selectively thinning small, tertiary branch clusters within the outer 15% of the crown envelope, we reduce mechanical leverage at the trunk junction by up to 26%. The tree retains its sweeping architectural character, internal transpiration stays balanced, and storm wind drag drops by approximately 32%.'
        ]
      },
      {
        heading: 'Subterranean Stress: Root Flare Compaction & Soil Aeration',
        paragraphs: [
          'Above-ground canopy decline is almost universally an echo of subterranean root trauma. Across luxury residential grounds, repetitive turf mowing equipment, underground irrigation trenching, and decorative stone paving compress the top 8 to 12 inches of soil where over 85% of fine absorbing roots reside. In compacted clay-loam soils, bulk density routinely exceeds 1.65 g/cm³, choking gas exchange and asphyxiating vital beneficial mycorrhizal fungal colonies.',
          'To reverse this chronic root strangulation without severing woody subterranean anchors, ARVORA deploys supersonic air excavation technology. Utilizing clean, dry compressed air pulsed at Mach 2 velocity, we pulverize and loosen dense soil particles around the critical root flare out to the canopy dripline. Fine feeder roots, mycorrhizal hyphae, and delicate bark cambium remain 100% undamaged because the air stream cannot shear fibrous biological structures.',
          'Following decompaction, the excavated radial trenches are backfilled with an engineered blend of leaf-mold compost, porous biochar, and targeted endomycorrhizal fungi spores. Soil bulk density drops permanently below 1.20 g/cm³, restoring natural hydraulic conductance and accelerating cambial defense compartmentalization against root pathogens.'
        ]
      }
    ],

    pullQuote: {
      text: '“An ancient oak is not a static landscape fixture; it is a dynamic hydraulic engine managing hundreds of tons of gravitational leverage. Our task is to gently recalibrate that equilibrium without robbing the tree of its soul.”',
      author: 'Dr. Alistair Vance, Master Arborist'
    },

    metrics: [
      { val: '-26%', label: 'Canopy Leverage', sub: 'Calculated moment-arm reduction on extended boughs' },
      { val: '-32%', label: 'Wind Drag Coefficient', sub: 'Fluid dynamics pass-through in severe storms' },
      { val: '+55%', label: 'Soil Oxygen Porosity', sub: 'Pneumatic air-spade radial decompaction' },
      { val: '+80%', label: 'Mycorrhizae Density', sub: 'Documented fungal root colonization at 12 mos' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: 'High-Resolution LiDAR & Moment Arm Vectoring',
        desc: 'Aerial sensor mapping using specialized drones to compute branch center-of-gravity vectors and pinpoint high-stress crotch angles.'
      },
      {
        num: '02',
        title: 'Selective Outer-Canopy End-Weight Reduction',
        desc: 'Surgical reduction of tertiary foliage clusters within the outer 15% margin, adhering strictly to ANSI A300 branch collar protocols.'
      },
      {
        num: '03',
        title: 'Supersonic Air-Spade Radial Trench Aeration',
        desc: 'Mach 2 pneumatic decompaction radiating outward from the root flare to the dripline, loosening soil without a single root severance.'
      },
      {
        num: '04',
        title: 'Bio-Activated Mycorrhizal Soil Inoculation',
        desc: 'Incorporating activated biochar, humic acid biostimulants, and species-specific mycorrhizae to permanently revitalize feeder root uptake.'
      }
    ],

    caseStudy: {
      badge: 'DOCUMENTED FIELD CASE STUDY • 24-MONTH FOLLOW-UP',
      title: 'Structural Restoration of the 240-Year-Old Bur Oak at Blackwood Manor',
      desc: 'Commissioned to stabilize a bicentennial Bur Oak (Quercus macrocarpa) exhibiting 40% tip dieback and a severe eastern lean over a newly restored limestone carriage house. Through precision outer-canopy weight mitigation, pneumatic radial root aeration, and mycorrhizal soil feeding, the specimen withstood Category 2 gale gusts with zero limb loss and achieved a 45% increase in leaf surface area within 18 months.',
      factsheet: [
        { label: 'Specimen Species', val: 'Quercus macrocarpa (Bur Oak)' },
        { label: 'Estimated Age', val: '240+ Years (Circa 1786)' },
        { label: 'Crown Spread', val: '88 ft (Radial Diameter)' },
        { label: 'Trunk Caliper', val: '64" DBH (16.8 ft Circumference)' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.scale,
        title: 'Bio-Mechanical Load Balancing',
        desc: 'Reduces limb-failure risk during heavy gales by 40% through mathematical weight-relieving reduction rather than harsh lopping.'
      },
      {
        icon: LUCIDE_ICONS.tree,
        title: 'Historical Silhouette Preservation',
        desc: 'Maintains the iconic fractal branching architecture that gives mature estate trees their majestic architectural grandeur.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: 'Zero Root Severance Guarantee',
        desc: 'Pneumatic air excavation protects 100% of subterranean root bark, unlike damaging mechanical backhoes and trenchers.'
      },
      {
        icon: LUCIDE_ICONS.award,
        title: 'ISA Board-Certified Oversight',
        desc: 'Every commission is personally supervised by an ISA Board-Certified Master Arborist adhering strictly to ANSI A300 standards.'
      }
    ],

    faqs: [
      {
        q: 'Why should ancient oaks never undergo heavy crown topping or shearing?',
        a: 'Topping creates massive rot-vulnerable wounds that ancient oaks cannot compartmentalize. It also triggers dense clusters of weakly attached watersprouts that fail during storms. ARVORA strictly practices selective ANSI A300 reduction.'
      },
      {
        q: 'How does pneumatic air-spade root decompaction benefit old oaks?',
        a: 'Estate turf maintenance and lawn equipment compacts the top 12 inches of soil, suffocating feeder roots. The air spade uses supersonic air to break soil apart without harming delicate roots, restoring vital oxygen, moisture, and microbial life.'
      },
      {
        q: 'What is the ideal season to commission oak crown thinning?',
        a: 'Dormant winter to early spring windows are optimal to avoid attracting vector beetles that transmit oak wilt. Light deadwood removal and hazard mitigation can be performed year-round under certified arborist supervision.'
      },
      {
        q: 'Will pruning alter the tree’s natural shade canopy across our estate lawn?',
        a: 'Our crown thinning removes less than 15% of foliage mass from outer tips. It allows dappled, healthy sun to reach fine turf while preserving 85%+ of your estate’s natural canopy cooling effect.'
      }
    ],

    ctaHeadline: 'Entrust Your Ancient Specimen Oaks to Master Dendrologists.',
    ctaDesc: 'Commission our ISA Board-Certified arborists for an exhaustive on-site canopy evaluation, sonic tomography scan, and bio-mechanical restoration protocol.'
  },

  tomography: {
    id: 2,
    key: 'tomography',
    volume: 'VOL. 02',
    discipline: 'Diagnostic Acoustic Tomography',
    badgeText: 'VOL. 02 • ACOUSTIC TOMOGRAPHY & SENSING',
    title: 'Acoustic Tomography: Mapping Hidden Fungal Cavities Without Puncture',
    tagline: 'Empirical research demonstrating multi-sensor stress-wave velocity algorithms to construct non-destructive cross-sectional density tomograms in heritage hardwoods.',
    author: 'Elena Rostova, Senior Plant Pathologist & Diagnostic Lead',
    date: 'Autumn / Winter 2026',
    readTime: '7 min read',
    heroImg: 'assets/op_health_diagnostics.jpg',
    heroAlt: 'Acoustic Tomography Diagnostics on Historic Tree Trunk',
    floatingBadgeTitle: '12-Sensor Sonic Radial Array',
    floatingBadgeSub: 'Zero Cambium Drilling • Exact 2D Cross-Section Maps',

    abstract: 'Subterranean and internal fungal decay caused by wood-decay basidiomycetes poses the single greatest unseen risk to estate specimen trees. Historically, arborists diagnosed hollows using destructive increment borers or drill resistance devices, which rupture reaction zones and inadvertently inoculate healthy wood. This paper presents our non-destructive 12-to-24-sensor acoustic tomography matrix, measuring micro-second sonic velocity transmission to accurately map internal degradation geometry with 98.4% correlation to physical holding wood.',

    articleSections: [
      {
        heading: 'The Sonic Velocity Inversion Principle',
        paragraphs: [
          'Sound waves travel through dense, lignified angiosperm and gymnosperm cell walls at highly predictable velocities—typically between 1,200 and 1,850 meters per second through healthy, sound hardwood. When sonic waves encounter internal fungal hyphae breakdown, enzymatic cell wall degradation, or physical air hollows, wave propagation speed drops precipitously to between 300 and 600 meters per second, or is forced into tortuous curved detours around the void.',
          'By positioning 12 to 24 piezoelectric acoustic transducers circumferentially around the tree trunk at precise calibrated geometric coordinates, our instrumentation initiates a sequence of micro-sonic impulses across hundreds of intersecting diametric chords. High-speed microprocessors record arrival times with microsecond resolution, applying inverse Radon mathematical transforms to compute a complete two-dimensional density matrix across the cross-section.',
          'The resulting tomogram color-codes the trunk interior: deep green depicts pristine sound timber; amber indicates incipient micro-fungal delignification; magenta and blue delineate advanced decay and open hollow voids. Estate owners and consulting engineers gain an unprecedented window into the living interior of their specimen without making a single surgical incision.'
        ]
      },
      {
        heading: 'Translating Tomograms into Structural Safety Ratios (The t/R Ratio)',
        paragraphs: [
          'A common misconception among property stewards is that any internal hollow automatically necessitates tree felling. In reality, mature trees are natural mechanical cylinders engineered to flex under aerodynamic wind loads. According to biomechanical engineer Claus Mattheck’s pioneering studies, a hollow cylindrical stem retains up to 70% of its solid breaking strength provided the residual sound wood shell thickness (t) relative to the stem radius (R) remains above a critical safety threshold—the t/R ratio of 0.30 to 0.33.',
          'Our acoustic tomographic data interfaces directly with Finite Element wind-load simulation models. By incorporating local wind gust velocity tables, crown drag profiles, and soil anchorage assessments, we establish whether a hollowed heritage tree can safely remain standing with targeted crown weight reduction, or whether non-invasive cabling is warranted.',
          'This empirical diagnostic proof has saved dozens of bicentennial estate trees from unnecessary municipal condemnation orders, simultaneously safeguarding adjacent architectural residences with certified engineering certainty.'
        ]
      }
    ],

    pullQuote: {
      text: '“Sound waves travel effortlessly through healthy, lignified timber and decelerate dramatically through fungal decay. We convert acoustics into color-coded mathematics that unveil a tree’s deepest anatomical secrets.”',
      author: 'Elena Rostova, Senior Diagnostic Pathologist'
    },

    metrics: [
      { val: '1,850 m/s', label: 'Sound Wood Velocity', sub: 'Baseline acoustic speed in healthy hardwood' },
      { val: '98.4%', label: 'Decay Mapping Accuracy', sub: 'Empirical correlation to residual holding wood' },
      { val: '0.0 mm', label: 'Cambium Puncture Depth', sub: 'Non-invasive sensors mounted to outer dead bark' },
      { val: '24 Nodes', label: 'Sensor Radial Grid', sub: 'Simultaneous cross-sectional chord calculation' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: 'Calibrated Circumferential Geometry Mapping',
        desc: 'Electronic digital calipers record the precise organic perimeter coordinates of the trunk at the inspection height.'
      },
      {
        num: '02',
        title: 'Acoustic Transducer Matrix Coupling',
        desc: 'Up to 24 acoustic sensors are mounted into the dead outer bark, establishing multiple diametric and chordal wave pathways.'
      },
      {
        num: '03',
        title: 'Micro-Impulse Sound Wave Velocity Transmission',
        desc: 'Tapping each sensor transmits microsecond sonic pulses across the trunk, recording transit times across 276 unique angles.'
      },
      {
        num: '04',
        title: '2D Tomogram Density Rendering & Load Modeling',
        desc: 'Algorithmic inversion renders a full-color cross-section map calculating the t/R residual wall strength safety ratio.'
      }
    ],

    caseStudy: {
      badge: 'DIAGNOSTIC CASE ARCHIVE • MONOGRAPH #812',
      title: 'Acoustic Decay Survey of the Bicentennial European Beech at Rosecliff Court',
      desc: 'Commissioned to evaluate an ancient 195-year-old European Beech (Fagus sylvatica) following the emergence of Ganoderma applanatum conks at the trunk base. Previous inspectors had condemned the tree. ARVORA’s 16-sensor acoustic tomography revealed that while the central heartwood had hollowed, a robust 38% residual sound wood shell remained intact around the perimeter. Paired with a 15% crown weight reduction, the specimen was fully preserved and remains standing safely over the main driveway today.',
      factsheet: [
        { label: 'Specimen Species', val: 'Fagus sylvatica (European Beech)' },
        { label: 'Estimated Age', val: '195 Years (Circa 1831)' },
        { label: 'Trunk Caliper', val: '52" DBH (13.6 ft Circumference)' },
        { label: 'Residual Shell (t/R)', val: '0.38 (Compliant Safety Index)' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.scan,
        title: '100% Non-Invasive Integrity',
        desc: 'Sensors contact only outer bark surface, preventing pathogenic fungal spores from penetrating inner vascular channels.'
      },
      {
        icon: LUCIDE_ICONS.activity,
        title: 'Predictive Structural Tipping Index',
        desc: 'Quantifies whether remaining holding wood complies with ISA safety thresholds or requires stabilization.'
      },
      {
        icon: LUCIDE_ICONS.fileText,
        title: 'Insurance & Municipal TRAQ Reports',
        desc: 'Provides certified empirical documentation acceptable to architectural reviewers, HOAs, and underwriters.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: 'Prevents Unnecessary Tree Felling',
        desc: 'Scientifically proves when hollow trees are naturally safe, sparing valuable century-old estate assets from removal.'
      }
    ],

    faqs: [
      {
        q: 'Does acoustic tomography harm the tree in any way?',
        a: 'No. The micro-transducers rest against the dead outer bark cells without puncturing the vascular cambium or sapwood xylem. There is zero risk of pathogen transmission.'
      },
      {
        q: 'Can tomography distinguish between a dry hollow and soft fungal rot?',
        a: 'Yes. Acoustic velocity decreases moderately through soft, active fungal rot, but drops dramatically to near zero through air-filled hollow voids. The color-coded software highlights both distinct states.'
      },
      {
        q: 'If internal rot is discovered, does that mean the tree must be cut down?',
        a: 'Not necessarily! Trees are hollow cylinders naturally engineered for wind flexibility. If the residual outer sound wood collar exceeds 30% of total radius, the tree often retains exceptional storm resistance with proper crown weight reduction.'
      },
      {
        q: 'How long does an acoustic tomography diagnostic session take?',
        a: 'A single tree scan typically requires 2 to 3 hours, including sensor geometry setup, acoustic tapping tests, algorithmic rendering, and on-site arborist review.'
      }
    ],

    ctaHeadline: 'Uncover What Lies Inside Your Estate’s Historic Giants.',
    ctaDesc: 'Schedule a certified acoustic tomography diagnostic commission to visualize heartwood integrity and secure your property against unforeseen storm failure.'
  },

  rigging: {
    id: 3,
    key: 'rigging',
    volume: 'VOL. 03',
    discipline: 'Rigging Engineering & Aerial Mechanics',
    badgeText: 'VOL. 03 • HIGH-ANGLE CRANE DYNAMICS',
    title: 'High-Angle Crane Rigging in Constrained Luxury Quarters',
    tagline: 'Applied engineering mechanics governing zero-ground-impact vertical extractions of multi-ton timber hovering directly above slate roofs, glass conservatories, and pristine golf greens.',
    author: 'Marcus Sterling, Chief Rigging Engineer & Aerial Operations Lead',
    date: 'Autumn / Winter 2026',
    readTime: '9 min read',
    heroImg: 'assets/op_crane_removal.jpg',
    heroAlt: 'Aerial Crane Sectional Rigging Operation',
    floatingBadgeTitle: 'Zero Ground Drop Guarantee',
    floatingBadgeSub: 'Certified Crane Riggers • Insured & Bonded to $10M',

    abstract: 'In high-value residential estates, hazardous trees frequently overhang slate mansard roofs, glass conservatories, and million-dollar botanical landscapes where traditional drop-and-lower rigging introduces unacceptable friction risk. This engineering monograph presents our mathematical protocols for knuckle-boom hydraulic crane dismantling: center-of-gravity vectoring, pre-tensioned sling configurations, and vertical lift dynamics that elevate 5,000 lb timber sections directly skyward with zero architectural contact.',

    articleSections: [
      {
        heading: 'The Physics of Vertical Aerial Timber Extraction',
        paragraphs: [
          'Conventional arborist rigging relies on the tree’s own stem as a friction anchor point. When a multi-ton branch is severed, the dynamic shock load imparted to the remaining trunk can trigger catastrophic basal failure if internal decay is present. Furthermore, the pendulum swing of descending timber poses extreme collision risks to nearby window walls, solar arrays, and delicate stone balustrades.',
          'By integrating high-capacity knuckle-boom hydraulic cranes into our tree extractions, the primary load vector is transferred completely away from the tree and the ground. Prior to making the chainsaw cut, our certified aerial rigger positions the crane block directly over the calculated center-of-gravity of the timber section, tensioning synthetic round slings to approximately 90% of the calculated green timber weight.',
          'When the climber executes the release cut, the timber section does not fall or bounce; it floats instantaneously upward into open air. The crane operator lifts the segment straight vertically, rotating it airborne over rooftops and lowering it directly into our wood-processing transport beds parked curbside.'
        ]
      },
      {
        heading: 'Ground Surface Armor & Outrigger Load Distribution',
        paragraphs: [
          'The greatest secondary risk during heavy crane tree work is ground compaction and paver cracking. A 60-ton hydraulic crane deploying outriggers on damp estate turf can generate point pressures exceeding 85 psi—easily fracturing underground irrigation manifolds, crushing drain tile, and rutting manicured bentgrass.',
          'ARVORA mitigates this via an engineered interlocking composite matting matrix. High-density polyethylene (HDPE) road mats are laid along the entire machine access path. Beneath each heavy steel outrigger pad, we stack 4-foot by 4-foot timber-composite distribution mats that dissipate concentrated loads across a surface area five times larger than standard setups.',
          'Following the extraction of multi-ton tree segments, our crews remove the composite armor, rake the lawn thatch, and verify with penetrometers that zero compaction has occurred. The grounds remain in pristine tournament condition.'
        ]
      }
    ],

    pullQuote: {
      text: '“When you work with 5,000-pound timber segments hanging directly above slate roofs and crystal conservatories, there is zero tolerance for guesswork. Rigging is pure applied physics, calculated tension, and silent crew communication.”',
      author: 'Marcus Sterling, Chief Rigging Engineer'
    },

    metrics: [
      { val: '99.8%', label: 'Vertical Lift Precision', sub: 'Pre-tensioned crane line balance before release cut' },
      { val: '0.0 lbs', label: 'Ground Impact Force', sub: 'Timber tethered airborne throughout flight path' },
      { val: '18 in', label: 'Clearance Margin', sub: 'Safe maneuvering gap against fragile slate/glass' },
      { val: '$10M', label: 'Comprehensive Umbrella', sub: 'Full commercial liability coverage for luxury estates' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: 'Green Timber Mass & Center-of-Gravity Vectoring',
        desc: 'Calculating timber section weight using species volumetric tables and placing crane slings at exact balance axes.'
      },
      {
        num: '02',
        title: 'Composite Turf Armor & Outrigger Distribution',
        desc: 'Interlocking multi-layer composite track mats prevent point-load paver cracking or turf compaction.'
      },
      {
        num: '03',
        title: 'Pre-Tensioned Sling Engagement & Blind Cut',
        desc: 'Crane line tension takes 95% of timber weight before the final cut, guaranteeing vertical lift-off with zero bounce.'
      },
      {
        num: '04',
        title: 'Direct Aerial Transit & Curbside Evacuation',
        desc: 'Timber is flown over estate structures directly to processing haulers, leaving manicured grounds 100% undisturbed.'
      }
    ],

    caseStudy: {
      badge: 'ENGINEERING CASE STUDY • DISPATCH #320',
      title: 'Zero-Impact Crane Extraction of 95-Foot Douglas Fir Over Slate Mansion',
      desc: 'Commissioned to dismantle a 95-foot dead Douglas Fir leaning heavily over a historic 1920s copper-guttered slate mansion and glass orchid solarium. Due to severe root rot, the tree could not bear climber rigging friction. ARVORA utilized a 60-ton hydraulic crane operating over 80 feet of composite track mats. The tree was extracted in seven vertical sections weighing up to 4,800 lbs each with zero contact against the copper gutters or glass roof panels.',
      factsheet: [
        { label: 'Specimen Species', val: 'Pseudotsuga menziesii (Douglas Fir)' },
        { label: 'Tree Height', val: '95 ft (Total Vertical Stature)' },
        { label: 'Total Timber Mass', val: '28,500 lbs Extracted' },
        { label: 'Architectural Clearance', val: 'Less than 24 inches to glass' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.layers,
        title: 'Zero Ground Contact Rigging',
        desc: 'Timber never drops onto lawns or structures; all sections are airborne-tethered from cut to truck bed.'
      },
      {
        icon: LUCIDE_ICONS.truck,
        title: 'Composite Lawn Armor Protection',
        desc: 'High-density interlocking mats distribute machine loads, preventing turf damage, root compaction, and asphalt cracks.'
      },
      {
        icon: LUCIDE_ICONS.zap,
        title: 'High-Voltage Proximity Certified',
        desc: 'Our rigging crews hold utility proximity endorsements for extractions tangled in complex electric infrastructure.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: '$10M Comprehensive Umbrella Coverage',
        desc: 'Backed by top-tier commercial insurance covering high-value architectural fixtures, pools, and conservatories.'
      }
    ],

    faqs: [
      {
        q: 'How do you guarantee our slate roof or solarium will not be damaged?',
        a: 'The crane takes the full calculated load tension before our climber finishes the final release cut. Once severed, the timber moves straight up into the air, completely eliminating any swing or bounce toward adjacent structures.'
      },
      {
        q: 'Will heavy crane outriggers crack our stone pavers or ruin the lawn?',
        a: 'Never. We deploy engineered interlocking composite mats that distribute multi-ton point loads across wide surface areas, preventing paving cracks, underground pipe damage, or lawn rutting.'
      },
      {
        q: 'Do you handle municipal tree removal permits and HOA approvals?',
        a: 'Yes. ARVORA provides certified ISA TRAQ risk assessment reports, structural photographs, and municipal paperwork to expedite local permits with zero friction.'
      },
      {
        q: 'What happens to the massive timber logs after they are lifted?',
        a: 'We can haul all timber away for sustainable milling and bio-mulching, or leave custom-milled furniture-grade slabs on-site for custom estate woodworking upon request.'
      }
    ],

    ctaHeadline: 'Complex Timber Overhanging Fine Architecture?',
    ctaDesc: 'Commission our certified high-angle crane rigging engineers for a surgical, zero-impact extraction that guarantees property safety.'
  },

  nutrition: {
    id: 4,
    key: 'nutrition',
    volume: 'VOL. 04',
    discipline: 'Vascular Biology & Targeted Pharmacotherapy',
    badgeText: 'VOL. 04 • TARGETED SYSTEMIC BIO-THERAPY',
    title: 'Systemic Micro-Injection: Targeted Cambium Bio-Therapy & Nutrition',
    tagline: 'A pharmacological study evaluating closed-circuit trunk xylem micro-injection against canopy foliar spraying in luxury specimen hardwoods.',
    author: 'Julian Thorne, ISA Board-Certified Arborist & Biochemical Specialist',
    date: 'Autumn / Winter 2026',
    readTime: '8 min read',
    heroImg: 'assets/service_health.jpg',
    heroAlt: 'Vascular Micro-Injection on Specimen Tree Trunk',
    floatingBadgeTitle: '98% Bio-Availability in 48 Hrs',
    floatingBadgeSub: 'Low-Pressure Direct Infusion • Zero Chemical Drift',

    abstract: 'Foliar canopy spray applications in estate environments suffer from severe limitations: active agents drift onto architectural structures, pollute ornamental water gardens, and face photochemical degradation before absorption. This research evaluates closed-system, low-pressure vascular micro-injection directly into the active sapwood xylem ring. Measuring isotopic nutrient uptake across 48 hours demonstrates a 98.5% bio-availability rate, accelerated chlorosis reversal, and rapid compartmentalization of injection ports.',

    articleSections: [
      {
        heading: 'Pharmacokinetics of Direct Xylem Sap Stream Infusion',
        paragraphs: [
          'A mature tree’s vascular system is an astonishingly rapid biological pump. Powered by negative hydrostatic pressure generated through foliar stomatal transpiration, the active outer sapwood xylem vessels can transport water and dissolved minerals upward at rates exceeding 2 to 3 meters per hour during peak midday sun.',
          'Traditional soil drenching forces active therapeutic molecules to navigate soil chemistry locks—such as high calcium carbonate levels that tie up iron ions in insoluble compounds. In contrast, vascular micro-injection bypasses the soil barrier entirely. By drilling micro-ports (less than 4mm in diameter) into the active sapwood of the root flare, therapeutic formulations are introduced directly into the ascending transpiration stream under gentle, low pressure (15 to 30 psi).',
          'Within 24 to 48 hours, systemic micronutrients (chelated iron, zinc, manganese) and targeted bio-fungicides circulate throughout the entire crown envelope. Foliar chlorosis begins reversing within 7 to 10 days, while zero chemical residue ever contacts the surrounding atmosphere, ground turf, or estate swimming pools.'
        ]
      },
      {
        heading: 'Surgical Port Geometry & Compartmentalization Response',
        paragraphs: [
          'Historical trunk injection protocols fell out of favor decades ago because crude, high-pressure injectors tore cambial tissue and caused vertical bark splitting. ARVORA’s modern protocol utilizes high-speed surgical micro-bits that produce razor-clean margins without frictional heat scorch.',
          'Immediately following infusion, biodegradable, self-sealing high-density polyethylene Arborplugs are recessed flush with the xylem boundary. This creates a hermetic seal against pest entry while leaving the outer living cambium unobstructed. Within 90 to 120 days of active seasonal growth, the tree’s marginal woundwood rolls seamlessly over the plug, compartmentalizing the site completely according to CODIT (Compartmentalization Of Decay In Trees) Model protocols.',
          'Destructive core assays conducted two years post-treatment confirm that healthy specimen trees show zero radial or vertical decay progression beyond the microscopic boundary of the port.'
        ]
      }
    ],

    pullQuote: {
      text: '“By harmonizing our treatments with the tree’s natural vascular transpiration pump rather than saturating the soil, we achieve surgical therapeutic accuracy with zero environmental collateral damage.”',
      author: 'Julian Thorne, Biochemical Arborist'
    },

    metrics: [
      { val: '98.5%', label: '48-Hr Bio-Availability', sub: 'Uptake efficiency measured in leaf tissue assays' },
      { val: '0.0%', label: 'Chemical Drift / Overspray', sub: '100% closed-system internal trunk delivery' },
      { val: '90 Days', label: 'Callus Port Closure', sub: 'Rapid cambium woundwood encapsulation' },
      { val: '24 Mos', label: 'Sustained Protection', sub: 'Extended therapeutic efficacy per commission' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: 'Sap Flow Velocity & Transpiration Assay',
        desc: 'Testing stomatal conductance to schedule infusion during the tree’s optimal diurnal hydraulic window.'
      },
      {
        num: '02',
        title: 'Root Flare Surgical Micro-Port Preparation',
        desc: 'Clean 4mm micro-ports drilled into the root flare where sapwood thickness and wound compartmentalization are highest.'
      },
      {
        num: '03',
        title: 'Low-Pressure Closed-Circuit Infusion',
        desc: 'Sealed injectors introduce calibrated bio-nutrients and systemic fungicides directly into ascending xylem sap.'
      },
      {
        num: '04',
        title: 'Hermetic Arborplug Seal & Callus Verification',
        desc: 'Self-sealing bio-degradable plugs ensure rapid woundwood roll and complete pathogen exclusion within 90 days.'
      }
    ],

    caseStudy: {
      badge: 'BIOCHEMICAL FIELD STUDY • REPORT #519',
      title: 'Arresting Borer Infestation & Severe Chlorosis Across Historic Ash Allée',
      desc: 'Commissioned to treat a formal allée of 16 mature White Ash trees (Fraxinus americana) exhibiting stage-2 Emerald Ash Borer infestation and severe alkaline-induced chlorosis. Using systemic emamectin benzoate and chelated iron micro-injections, larval feeding ceased completely within 5 days. Full canopy greening and active terminal shoot expansion returned within 30 days, achieving 100% specimen preservation with zero pesticide drift near the adjacent trout stream.',
      factsheet: [
        { label: 'Specimen Species', val: 'Fraxinus americana (White Ash)' },
        { label: 'Total Specimens', val: '16 Trees in Historic Allée' },
        { label: 'Average DBH', val: '36" (Radial Trunk Diameter)' },
        { label: 'Survival Rate', val: '100% Maintained at 24 Months' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.syringe,
        title: 'Zero Chemical Overspray or Drift',
        desc: 'Treatments occur entirely inside the tree trunk. Children, pets, and estate swimming pools remain 100% unaffected.'
      },
      {
        icon: LUCIDE_ICONS.activity,
        title: 'Rapid 48-Hour Biological Uptake',
        desc: 'Direct vascular delivery circumvents compacted or pH-locked soil, providing immediate leaf and canopy revitalization.'
      },
      {
        icon: LUCIDE_ICONS.award,
        title: 'Precision Micro-Dosage Calibration',
        desc: 'Custom chemical and mineral formulations blended specifically to address species-specific deficits and local pathogens.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: 'Full Vascular Compartmentalization',
        desc: 'Our surgical micro-ports heal completely within one growing season with zero risk of structural decay pockets.'
      }
    ],

    faqs: [
      {
        q: 'Is trunk injection safe for ancient or delicate trees?',
        a: 'Yes, when done with precision. We use high-speed surgical micro-drills that make tiny 4mm holes exclusively in the root flare, where healing response is fast. The tree forms protective callus tissue around the plug in just a few months.'
      },
      {
        q: 'How long do the benefits of a single micro-injection last?',
        a: 'Depending on the active formulation, nutritional micro-injections provide sustained vitality for 1 to 2 full growing seasons. Systemic pest treatments (such as borer control) typically protect the tree for up to 2 years.'
      },
      {
        q: 'Why not simply spray the canopy from the ground?',
        a: 'Tall specimen trees (60 to 90 ft) require massive spray pressure that results in extensive drift into adjacent properties, gardens, and windows. Trunk injection delivers 100% of the active compound into the foliage with zero drift.'
      },
      {
        q: 'Can micro-injection cure trees already infected with Dutch Elm Disease or Oak Wilt?',
        a: 'If diagnosed early (under 20% crown wilt), systemic macro-infusions of propiconazole can halt fungal progression and save the specimen. Preventative injections in vulnerable groves are virtually 99% effective.'
      }
    ],

    ctaHeadline: 'Restore Canopy Vitality from the Inside Out.',
    ctaDesc: 'Commission our biochemical specialists for targeted vascular micro-injection therapy and protect your estate trees from disease.'
  },

  vista: {
    id: 5,
    key: 'vista',
    volume: 'VOL. 05',
    discipline: 'Landscape Architecture & Solar Canopy Dynamics',
    badgeText: 'VOL. 05 • ARCHITECTURAL SIGHTLINES & LIGHT',
    title: 'Architectural Vista Pruning: Sculpting Radiant Light & Preserving Silhouettes',
    tagline: 'Fusing arboricultural biology with high-end landscape architectural geometry, channeling radiant ground sunlight down to luxury turf while retaining majestic crown silhouettes.',
    author: 'Arthur Pendelton, Landscape Architectural Arborist',
    date: 'Autumn / Winter 2026',
    readTime: '6 min read',
    heroImg: 'assets/op_canopy_light_tune.jpg',
    heroAlt: 'Architectural Vista Pruning on Estate grounds',
    floatingBadgeTitle: 'Laser Sightline Vectoring',
    floatingBadgeSub: '+45% Natural Ground Sunlight • Species-Authentic Crown',

    abstract: 'In master-planned luxury estates, mature canopy trees frequently create heavy shade cones that degrade fine putting greens, swimming pool terraces, and panoramic mountain or water horizons. Typical landscape contractors respond by disfiguring crowns with topping or rounded shearing. This monograph establishes our 3D solar azimuth protocol: calculating radial light apertures through selective fractal crown thinning to increase ground solar penetration by 45% while protecting the tree’s authentic architectural silhouette.',

    articleSections: [
      {
        heading: 'The Geometry of Solar Azimuths & Canopy Apertures',
        paragraphs: [
          'A tree’s canopy is not a solid umbrella; it is a semi-permeable fractal screen. To optimize ground illumination without disfiguring mature hardwoods, our team maps seasonal sun elevation angles from the summer solstice (high zenith) to the winter solstice (low oblique angle). Using digital inclinometers and 3D terrain modeling, we identify the exact sector of the canopy that intercepts sunlight intended for putting greens, floral gardens, or outdoor living terraces.',
          'Instead of removing main structural boughs, vista pruning sculpts "solar windows" by thinning competing interior water shoots and crossing secondary limbs. This creates vertical light channels through which radiant midday sun passes directly to the ground.',
          'Because cuts are distributed uniformly across the crown volume rather than concentrated at the top or bottom, the exterior silhouette remains completely natural, authentic, and dignified. Viewers looking up from the ground or across from the residence see a majestic, balanced canopy alive with dappled light.'
        ]
      },
      {
        heading: 'Aerodynamic Permeability & Storm Dampening Benefits',
        paragraphs: [
          'An ancillary but crucial benefit of architectural vista pruning is wind drag reduction. A dense, unpruned hardwood acts as a solid sail during summer squalls, absorbing full wind energy and transmitting immense bending moments down to root anchors.',
          'By removing clumping interior shoots, crown aerodynamic porosity increases by 35% to 40%. High winds flow through the canopy rather than battering against it. Research published in the Journal of Arboriculture confirms that selective crown thinning reduces maximum trunk base bending moments by more than 30% during 60 mph wind events.',
          'Estate owners achieve the dual benefit of luminous, sunlight-bathed outdoor grounds and significantly enhanced storm resilience.'
        ]
      }
    ],

    pullQuote: {
      text: '“We do not cut to conquer the tree; we sculpt the space around it. Light, shadow, and sightlines become living architectural elements curated by scientific arboriculture.”',
      author: 'Arthur Pendelton, Landscape Arborist'
    },

    metrics: [
      { val: '+45%', label: 'Ground Sunlight Gain', sub: 'Direct solar penetration to estate turf & terraces' },
      { val: '92%', label: 'Silhouette Integrity', sub: 'Preservation of natural species fractal geometry' },
      { val: '+38%', label: 'Airflow Permeability', sub: 'Reduces gale wind drag and trunk base moment' },
      { val: '4-5 Yrs', label: 'Regrowth Stability', sub: 'Extended maintenance interval due to collar cuts' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: '3D Solar Azimuth & Sightline Modeling',
        desc: 'Analyzing sun path angles across all seasons to locate exact canopy sectors obstructing light to lawns or terraces.'
      },
      {
        num: '02',
        title: 'View Corridor Vectoring from Residence',
        desc: 'Establishing precise focal horizons from master bedrooms, infinity pools, and patio living areas.'
      },
      {
        num: '03',
        title: 'Selective Fractal Crown Thinning (Max 20%)',
        desc: 'Removing crossing, inward-growing, and deadwood branches to open radiant sunlight apertures through the crown.'
      },
      {
        num: '04',
        title: 'Branch Bark Collar Disinfection & Seal',
        desc: 'All cuts executed outside branch collars to stimulate rapid vascular cambium healing and prevent pathogen entry.'
      }
    ],

    caseStudy: {
      badge: 'VISTA ARCHITECTURE CASE STUDY • MONOGRAPH #208',
      title: 'Mountain Sightline Sculpting & Putting Green Light Restoration',
      desc: 'Commissioned at a private mountain retreat where four mature Sugar Maples (Acer saccharum) cast dense shade over an championship-grade putting green and blocked panoramic lake views from the main terrace. Previous landscapers proposed removing two 100-year-old trees. ARVORA executed 3D vista pruning, opening radiant solar windows that increased turf sunlight by 48% and perfectly framed the mountain horizon while conserving all four historic maples in pristine health.',
      factsheet: [
        { label: 'Specimen Species', val: 'Acer saccharum (Sugar Maple)' },
        { label: 'Number of Trees', val: '4 Mature Canopy Specimens' },
        { label: 'Sunlight Increase', val: '+48% Direct Solar Radiation' },
        { label: 'View Angle Opened', val: '65° Panoramic Lake Sightline' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.sun,
        title: 'Up to 45% More Ground Sunlight',
        desc: 'Permits natural sunlight to reach putting greens, flower borders, and turf, ending shade dampness and moss issues.'
      },
      {
        icon: LUCIDE_ICONS.compass,
        title: 'Framed Panoramic Views',
        desc: 'Opens cinematic horizons toward lakes, hills, or cityscapes without needing to remove valuable specimen trees.'
      },
      {
        icon: LUCIDE_ICONS.scale,
        title: 'Species-Authentic Branching',
        desc: 'Respects the natural fractal geometry of heritage hardwoods rather than unsightly rounded hedging.'
      },
      {
        icon: LUCIDE_ICONS.wind,
        title: 'Improved Storm Wind Permeability',
        desc: 'Canopy aeration allows gale-force winds to pass through with 35% less resistance against the trunk.'
      }
    ],

    faqs: [
      {
        q: 'How does vista pruning differ from ordinary tree trimming?',
        a: 'Vista pruning is an artistic and architectural discipline. Instead of generic clearances, we calculate specific angular view corridors from your indoor and outdoor living spaces, carefully selecting cuts that frame rather than demolish natural silhouettes.'
      },
      {
        q: 'Will my lawn quality improve after canopy light tuning?',
        a: 'Significantly. Fine turf grasses require at least 4 to 6 hours of filtered sunlight daily. By strategically removing interior foliage clumping, we allow up to 45% more solar energy to reach the ground, ending patchy moss growth.'
      },
      {
        q: 'How frequently will vista pruned trees need maintenance?',
        a: 'Because we prune with biological precision outside branch collars, regrowth occurs slowly and naturally. Most mature hardwoods only require light tune-ups every 3 to 4 years.'
      },
      {
        q: 'Can vista pruning be done without compromising tree health?',
        a: 'Yes! We strictly abide by ANSI A300 standards, never removing more than 20% of live foliage in a single season. This keeps photosynthetic capacity healthy while achieving the visual sightlines you desire.'
      }
    ],

    ctaHeadline: 'Open Radiant Sunlight & Frame Panoramic Estate Vistas.',
    ctaDesc: 'Commission our master arborists for a laser vista evaluation and bring natural warmth, light, and open vistas back to your estate grounds.'
  },

  storm: {
    id: 6,
    key: 'storm',
    volume: 'VOL. 06',
    discipline: 'Canopy Biomechanics & Storm Defense',
    badgeText: 'VOL. 06 • DYNAMIC CANOPY BRACING',
    title: 'Dynamic Canopy Bracing: High-Wind Shock Absorption & Failure Mitigation',
    tagline: 'Engineering analysis of non-invasive synthetic hollow-braid polymer cabling systems mitigating catastrophic co-dominant stem fractures in mature estate trees.',
    author: 'David Chen, Biomechanical Engineer & ISA Lead Evaluator',
    date: 'Autumn / Winter 2026',
    readTime: '7 min read',
    heroImg: 'assets/service_emergency.jpg',
    heroAlt: 'Dynamic Canopy Cabling Against High Wind Storms',
    floatingBadgeTitle: 'Dynamic Cobra Shock Cabling',
    floatingBadgeSub: 'Zero Cambium Drilling • Category 4 Gale Oscillation Dampening',

    abstract: 'Traditional tree cabling systems utilizing rigid steel cables anchored via through-bolts drilled into heartwood cause profound biological harm: they inflict large puncture wounds that introduce fungal decay, and their absolute rigidity prevents stems from flexing and building essential reaction wood. This research examines flexible, dynamic synthetic cabling (Cobra system), demonstrating how integrated shock-absorbers dissipate gale kinetic energy by 52% while leaving bark collars and internal cambium 100% intact.',

    articleSections: [
      {
        heading: 'The Danger of Co-Dominant Stems with Included Bark',
        paragraphs: [
          'Many prized estate trees—including ancient maples, oaks, elms, and lindens—develop co-dominant stems where two or more main trunks originate from a single point. When these stems grow closely together, bark becomes trapped or "included" between them, preventing the woody fibers from knitting into a strong unified union.',
          'Under severe storm conditions, asymmetric wind gusts push one stem away from the other, acting as an immense wedge. Without supplemental structural support, the stem junction will eventually fracture catastrophically, tearing the tree in half and causing devastating damage to adjacent structures.',
          'Historically, tree services drilled steel rods directly through the trunk crotch. However, trees are living hydraulic columns; drilling large holes severs vascular conduits and introduces wood-decay fungi that quietly rot the center of the tree. Furthermore, rigid steel cables prevent the tree from swaying during gentle breezes, halting the production of structural "reaction wood" that the tree naturally builds to support itself.'
        ]
      },
      {
        heading: 'Dynamic Synthetic Cabling: The Seatbelt Mechanism',
        paragraphs: [
          'Our published protocol utilizes engineered polypropylene hollow-braid dynamic cables (such as the German-engineered Cobra system). Installed at two-thirds canopy height, these cables wrap gently around branches inside wide, friction-free expansion bands. No drill holes or screws ever touch the wood.',
          'In gentle breezes, the synthetic line has slight slack, allowing the branches to move naturally and stimulate radial diameter growth. In high-wind gales, when branch oscillation begins exceeding safe biomechanical thresholds, the cable engages. An integrated vulcanized rubber shock absorber compresses, absorbing up to 52% of the sudden kinetic impact force and preventing explosive shock-load fractures.',
          'Sliding expansion loops allow the branch to expand in caliper for up to 10 years without girdling or constricting sap flow, making it the premier preservation standard for luxury estates worldwide.'
        ]
      }
    ],

    pullQuote: {
      text: '“Trees require wind motion to exercise and synthesize strong holding wood. Rigid steel cables rob them of that exercise; dynamic synthetic cabling acts like a luxury seatbelt, only arresting motion when disaster threatens.”',
      author: 'David Chen, Biomechanical Engineer'
    },

    metrics: [
      { val: '-52%', label: 'Peak Shock Dampening', sub: 'Kinetic energy absorption by vulcanized shock inserts' },
      { val: '78%', label: 'Crotch Split Reduction', sub: 'Verified failure mitigation in gale-force winds' },
      { val: '0.0', label: 'Hardware Punctures', sub: 'Zero bolts drilled into living heartwood' },
      { val: '12 Yrs', label: 'UV Polymer Lifespan', sub: 'Engineered weather-resistant synthetic fiber' }
    ],

    procedureSteps: [
      {
        num: '01',
        title: 'Acoustic Crotch Stress & Included Bark Audit',
        desc: 'Testing stem union density with acoustic sensors to calculate split probability and determine optimal bracing height.'
      },
      {
        num: '02',
        title: 'Non-Invasive Friction Collar Installation',
        desc: 'Expanding nylon shock collars wrapped around upper limbs at 2/3 height without any invasive drilling.'
      },
      {
        num: '03',
        title: 'Hollow-Braid Dynamic Line Tensioning',
        desc: 'Threading high-strength UV-stabilized synthetic rope with integrated kinetic rubber shock absorbers.'
      },
      {
        num: '04',
        title: 'Growth Expansion Loop Calibration',
        desc: 'Setting sliding loop inserts that expand freely with trunk diameter growth for up to a decade without girdling.'
      }
    ],

    caseStudy: {
      badge: 'STORM RESILIENCE FIELD REPORT • CASE #734',
      title: 'Triangular Dynamic Cabling of Multi-Stem Heritage Willow Oak',
      desc: 'Commissioned to protect a magnificent 140-year-old Willow Oak (Quercus phellos) featuring three massive co-dominant stems towering over a luxury guest pavilion. The central junction exhibited severe included bark. ARVORA installed a triangular dynamic Cobra bracing network with 4-ton shock absorbers and performed light end-weight crown relief. Six months later, the estate was struck by a severe derecho storm with 70 mph microburst gusts; the tree survived with zero stem tearing or structural damage.',
      factsheet: [
        { label: 'Specimen Species', val: 'Quercus phellos (Willow Oak)' },
        { label: 'Specimen Age', val: '140 Years (Circa 1886)' },
        { label: 'Co-Dominant Trunks', val: '3 Stems Braced in Triangle' },
        { label: 'Peak Storm Survival', val: '70 mph Microburst Sustained' }
      ]
    },

    whyChoose: [
      {
        icon: LUCIDE_ICONS.wind,
        title: 'Shock-Absorbing Gale Dampening',
        desc: 'Synthetic shock dampeners reduce peak impact loads by up to 50%, preventing explosive fractures at critical crotches.'
      },
      {
        icon: LUCIDE_ICONS.gitBranch,
        title: 'Zero Cambium Perforation',
        desc: 'No heavy steel threaded rods or through-bolts drilled into wood; zero risk of introducing fungal rot into the core.'
      },
      {
        icon: LUCIDE_ICONS.activity,
        title: 'Promotes Natural Caliper Growth',
        desc: 'Allows subtle wind sway in normal conditions, stimulating the tree to lay down dense reaction wood naturally.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: '12-Year Longevity Rating',
        desc: 'UV-stabilized engineered polymers withstand harsh solar radiation and freeze-thaw cycles for over a decade.'
      }
    ],

    faqs: [
      {
        q: 'Why is dynamic synthetic cabling better than traditional steel cables?',
        a: 'Steel cables require drilling large holes through living wood, which creates entry points for fungal rot. They are also completely rigid, preventing the tree from flexing and building stronger holding wood. Synthetic cables wrap gently around branches and flex naturally.'
      },
      {
        q: 'Will the branch collar eventually choke or girdle the tree as it grows?',
        a: 'No. The Cobra system utilizes expandable hollow-braid collars and specialized insert bands that accommodate trunk diameter growth for 8 to 12 years without restricting the cambium or sap flow.'
      },
      {
        q: 'Can cabling prevent a tree from failing in a Category 3 or 4 hurricane?',
        a: 'While no human intervention can guarantee 100% survival against tornado-force winds, dynamic cabling combined with selective end-weight crown thinning reduces the risk of co-dominant trunk splits by over 75% in severe storms.'
      },
      {
        q: 'How often should dynamic cabling systems be inspected?',
        a: 'ARVORA conducts a visual inspection every 2 years and a full aerial re-tensioning audit every 5 years to adjust growth collars and verify polymer integrity.'
      }
    ],

    ctaHeadline: 'Reinforce Your Majestic Multi-Stem Trees Before the Next Storm.',
    ctaDesc: 'Commission our master arborists for a comprehensive canopy stability audit and install non-invasive dynamic storm bracing.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initRtlToggle();
  initThemeToggle();
  initMobileDrawer();
  initDetailFaqAccordion();
  initDetailCommissionButtons();
  initStickySidebar();

  const initialKey = getJournalFromUrl();
  renderJournalDetail(initialKey);

  const urlParams = new URLSearchParams(window.location.search);
  const scrollPos = urlParams.get('scroll');
  if (scrollPos) {
    window.scrollTo({ top: parseInt(scrollPos, 10), behavior: 'instant' });
  }
});

function getJournalFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const journalParam = params.get('journal')?.toLowerCase();
  const idParam = params.get('id');

  if (journalParam && JOURNALS_DATA[journalParam]) {
    return journalParam;
  }

  if (idParam) {
    const numericId = parseInt(idParam, 10);
    const matchedKey = Object.keys(JOURNALS_DATA).find(
      (k) => JOURNALS_DATA[k].id === numericId
    );
    if (matchedKey) return matchedKey;
  }

return 'oak';
}

function renderJournalDetail(journalKey) {
  const data = JOURNALS_DATA[journalKey];
  if (!data) return;

document.title = `${data.title} — ARVORA Journal`;

const heroBadge = document.getElementById('heroBadgeText');
  const heroTitle = document.getElementById('heroTitle');
  const heroAuthor = document.getElementById('heroAuthor');
  const heroDate = document.getElementById('heroDate');
  const heroReadTime = document.getElementById('heroReadTime');
  const heroTagline = document.getElementById('heroTagline');
  const heroImg = document.getElementById('heroImg');
  const floatingTitle = document.getElementById('floatingBadgeTitle');
  const floatingSub = document.getElementById('floatingBadgeSub');

  if (heroBadge) heroBadge.textContent = data.badgeText;
  if (heroTitle) heroTitle.textContent = data.title;
  if (heroAuthor) heroAuthor.textContent = data.author;
  if (heroDate) heroDate.textContent = data.date;
  if (heroReadTime) heroReadTime.textContent = data.readTime;
  if (heroTagline) heroTagline.textContent = data.tagline;
  if (heroImg) {
    heroImg.src = data.heroImg;
    heroImg.alt = data.heroAlt;
  }
  if (floatingTitle) floatingTitle.textContent = data.floatingBadgeTitle;
  if (floatingSub) floatingSub.textContent = data.floatingBadgeSub;
  const stickyBadge = document.getElementById('stickyBadge');
  const stickyTitle = document.getElementById('stickyTitle');
  const stickyAuthor = document.getElementById('stickyAuthor');
  const stickyReadTime = document.getElementById('stickyReadTime');
  const stickyCommissionBtn = document.getElementById('stickyCommissionBtn');

  if (stickyBadge) stickyBadge.textContent = `${data.volume} • MONOGRAPH`;
  if (stickyTitle) stickyTitle.textContent = data.title;
  if (stickyAuthor) stickyAuthor.textContent = data.author ? data.author.split('(')[0].trim() : 'Master Arborist';
  if (stickyReadTime) stickyReadTime.textContent = data.readTime;
  if (stickyCommissionBtn) stickyCommissionBtn.setAttribute('data-service', `Field Study - ${data.title}`);

const abstractText = document.getElementById('abstractText');
  if (abstractText) abstractText.textContent = data.abstract;

const articleBodyContainer = document.getElementById('articleBodyContainer');
  if (articleBodyContainer && data.articleSections) {
    articleBodyContainer.innerHTML = data.articleSections
      .map((sec, idx) => {
        const paragraphsHtml = sec.paragraphs
          .map((p, pIdx) => `<p class="jdetail-article-p ${idx === 0 && pIdx === 0 ? 'jdetail-lead-p' : ''}">${p}</p>`)
          .join('');
        return `
          <div class="jdetail-article-block">
            <h2 class="jdetail-section-headline">${sec.heading}</h2>
            ${paragraphsHtml}
          </div>
        `;
      })
      .join('');
  }

const quoteText = document.getElementById('pullQuoteText');
  const quoteAuthor = document.getElementById('pullQuoteAuthor');
  if (quoteText && data.pullQuote) quoteText.textContent = data.pullQuote.text;
  if (quoteAuthor && data.pullQuote) quoteAuthor.textContent = data.pullQuote.author;

const metricsGrid = document.getElementById('metricsGrid');
  if (metricsGrid && data.metrics) {
    metricsGrid.innerHTML = data.metrics
      .map(
        (m) => `
        <div class="jdetail-metric-card">
          <span class="jdetail-metric-val">${m.val}</span>
          <span class="jdetail-metric-label">${m.label}</span>
          <span class="jdetail-metric-sub">${m.sub}</span>
        </div>
      `
      )
      .join('');
  }

const stepsContainer = document.getElementById('procedureStepsContainer');
  if (stepsContainer && data.procedureSteps) {
    stepsContainer.innerHTML = data.procedureSteps
      .map(
        (step) => `
        <div class="jdetail-step-card">
          <span class="jdetail-step-num">${step.num}</span>
          <h4 class="jdetail-step-title">${step.title}</h4>
          <p class="jdetail-step-desc">${step.desc}</p>
        </div>
      `
      )
      .join('');
  }

const caseBadge = document.getElementById('caseStudyBadge');
  const caseTitle = document.getElementById('caseStudyTitle');
  const caseDesc = document.getElementById('caseStudyDesc');
  const factsheetGrid = document.getElementById('factsheetGrid');

  if (caseBadge && data.caseStudy) caseBadge.textContent = data.caseStudy.badge;
  if (caseTitle && data.caseStudy) caseTitle.textContent = data.caseStudy.title;
  if (caseDesc && data.caseStudy) caseDesc.textContent = data.caseStudy.desc;

  if (factsheetGrid && data.caseStudy && data.caseStudy.factsheet) {
    factsheetGrid.innerHTML = data.caseStudy.factsheet
      .map(
        (fact) => `
        <div class="jdetail-fact-item">
          <span class="jdetail-fact-label">${fact.label}</span>
          <span class="jdetail-fact-val">${fact.val}</span>
        </div>
      `
      )
      .join('');
  }

const whyGrid = document.getElementById('whyChooseGrid');
  if (whyGrid && data.whyChoose) {
    whyGrid.innerHTML = data.whyChoose
      .map(
        (item) => `
        <div class="jdetail-why-card">
          <div class="jdetail-why-icon-wrap">
            ${item.icon}
          </div>
          <h4 class="jdetail-why-title">${item.title}</h4>
          <p class="jdetail-why-desc">${item.desc}</p>
        </div>
      `
      )
      .join('');
  }

const faqContainer = document.getElementById('jdetailFaqContainer');
  if (faqContainer && data.faqs) {
    faqContainer.innerHTML = data.faqs
      .map(
        (faq, idx) => `
        <div class="jdetail-faq-card ${idx === 0 ? 'active' : ''}">
          <button class="jdetail-faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>${faq.q}</span>
            <svg class="jdetail-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="jdetail-faq-collapse">
            <div class="jdetail-faq-answer">${faq.a}</div>
          </div>
        </div>
      `
      )
      .join('');

initDetailFaqAccordion();
  }

const ctaHeadline = document.getElementById('jdetailCtaHeadline');
  const ctaDesc = document.getElementById('jdetailCtaDesc');
  const ctaBtn = document.getElementById('jdetailCtaBtn');

  if (ctaHeadline) ctaHeadline.textContent = data.ctaHeadline;
  if (ctaDesc) ctaDesc.textContent = data.ctaDesc;
  if (ctaBtn) {
    ctaBtn.setAttribute('data-service', data.discipline);
  }
}

function initDetailFaqAccordion() {
  const triggers = document.querySelectorAll('#jdetailFaqContainer .jdetail-faq-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.jdetail-faq-card');
      if (!card) return;

      const isActive = card.classList.contains('active');

document.querySelectorAll('#jdetailFaqContainer .jdetail-faq-card.active').forEach((c) => {
        if (c !== card) {
          c.classList.remove('active');
          const t = c.querySelector('.jdetail-faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        card.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initDetailCommissionButtons() {
  const buttons = document.querySelectorAll('#jdetailCtaBtn, #heroCommissionBtn, .consult-arborist-btn');
  const quoteModal = document.getElementById('quoteModal');
  const serviceSelect = document.getElementById('serviceSelect');
  const notesField = document.getElementById('userNotes');

  if (!quoteModal) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || '';

if (serviceSelect && serviceName) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (
            serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase()) ||
            serviceName.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())
          ) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

if (notesField && serviceName) {
        notesField.value = `Requesting consultation for field research & commission: ${serviceName}.`;
      }

quoteModal.classList.add('active');
      quoteModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const firstInput = quoteModal.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    });
  });

document.querySelectorAll('.modal-close-btn, #successCloseBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
      quoteModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
      quoteModal.classList.remove('active');
      quoteModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessState = document.getElementById('quoteSuccessState');
  if (quoteForm && quoteSuccessState) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.style.display = 'none';
      quoteSuccessState.style.display = 'block';
    });
  }
}

function initRtlToggle() {
  const rtlBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const htmlRoot = document.documentElement;

  const applyDirection = (dir) => {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('arvora_dir', dir);

    const isRtl = dir === 'rtl';
    if (rtlBtn) {
      if (isRtl) {
        rtlBtn.classList.add('active-rtl');
        if (rtlBtnText) rtlBtnText.textContent = 'LTR';
      } else {
        rtlBtn.classList.remove('active-rtl');
        if (rtlBtnText) rtlBtnText.textContent = 'RTL';
      }
    }
  };

  const savedDir = localStorage.getItem('arvora_dir') || 'ltr';
  applyDirection(savedDir);

  rtlBtn?.addEventListener('click', () => {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
  });
}

function initThemeToggle() {
  if (window.ArvoraTheme) return;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('arvora_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('arvora_theme', newTheme);
  });
}

function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (!hamburgerBtn || !mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initStickySidebar() {
  const progressBar = document.getElementById('stickyProgressBar');
  const progressVal = document.getElementById('stickyProgressVal');
  const article = document.getElementById('article');
  const tocLinks = document.querySelectorAll('.sticky-toc-link');
  const shareBtn = document.getElementById('stickyShareBtn');
  const shareText = document.getElementById('stickyShareText');

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          if (shareText) {
            const orig = shareText.textContent;
            shareText.textContent = 'Copied!';
            setTimeout(() => { shareText.textContent = orig; }, 2000);
          }
        }
      } catch (err) {
        console.error('Clipboard error:', err);
      }
    });
  }

  // Smooth scroll with offset for sticky header
  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('data-target') || link.getAttribute('href')?.replace('#', '');
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 90;
        const elemPos = targetElem.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elemPos - headerOffset,
          behavior: 'smooth'
        });
        tocLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  const updateProgress = () => {
    if (!article) return;
    const rect = article.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalHeight = article.offsetHeight - windowHeight;
    const scrolled = Math.max(0, -rect.top);

    if (totalHeight > 0) {
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / totalHeight) * 100)));
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressVal) progressVal.textContent = `${pct}%`;
    }

    const sections = [
      document.getElementById('abstract'),
      document.getElementById('articleBodyContainer'),
      document.getElementById('metrics'),
      document.getElementById('methodology'),
      document.getElementById('casestudy'),
      document.getElementById('why-choose'),
      document.getElementById('faqs')
    ].filter(Boolean);

    let currentActive = null;
    for (let i = 0; i < sections.length; i++) {
      const sRect = sections[i].getBoundingClientRect();
      if (sRect.top <= 260) {
        currentActive = sections[i].id;
      }
    }
    if (!currentActive && sections.length > 0) {
      currentActive = sections[0].id;
    }

    if (currentActive) {
      tocLinks.forEach((link) => {
        const tId = link.getAttribute('data-target') || link.getAttribute('href')?.replace('#', '');
        if (tId === currentActive) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

