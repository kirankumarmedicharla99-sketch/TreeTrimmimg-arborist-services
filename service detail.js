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
  clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,

bug: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m10 4 1 2"/><path d="m14 4-1 2"/></svg>`,
  compass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  doorOpen: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h20"/><path d="M13 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16"/><circle cx="9" cy="12" r="1"/></svg>`,
  sprout: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4.1 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,

timer: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  fileCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`,

scan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16 2 2"/></svg>`,
  fileBarChart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-4"/><path d="M8 18v-2"/><path d="M16 18v-6"/></svg>`,
  syringe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>`,
  radar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>`,

tree: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M9 22h6"/><path d="M12 3a7 7 0 0 0-7 7c0 4.5 4 8 7 8s7-3.5 7-8a7 7 0 0 0-7-7z"/></svg>`,
  chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>`
};

const SERVICES_DATA = {
  trimming: {
    id: 'trimming',
    name: 'Tree Trimming',
    badge: 'AESTHETIC & VISTA CANOPY RESTORATION',
    title: 'Tree Trimming & Canopy Architectural Shaping',
    tagline: 'Harmonizing natural specimen grandeur with fine architectural sightlines, roofline safety, and optimized sun angles.',
    heroImg: 'assets/service_trimming.jpg',
    heroAlt: 'Master Arborist Pruning Estate Canopy Silhouette',
    floatingBadgeText: 'ISA Certified Canopy Sculptors',
    floatingBadgeSub: 'Zero-Impact Drop Guarantee • Laser Sightline Tuning',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M9 22h6"/><path d="M12 3a7 7 0 0 0-7 7c0 4.5 4 8 7 8s7-3.5 7-8a7 7 0 0 0-7-7z"/></svg>`,

contextHeadline: 'Sculptural Elegance Grounded in Biological Balance',
    contextDesc: 'Mature trees are irreplaceable living monuments that define estate properties. Our trimming methodology blends certified dendrological science with landscape architectural finesse. We conduct precision selective thinning to eliminate crossing branches, balance crown mass, and open radiant sun windows while ensuring the natural silhouette remains authentic and healthy.',
    contextCallout: '“Every cut we make is an irreversible architectural decision. We prune not merely to cut, but to sculpt the way natural light breathes across your grounds.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Canopy Drone & Symmetry Mapping',
        desc: 'Aerial high-resolution sensor assessment to map crown mass balance, wind leverage points, and estate sightline obstructions.'
      },
      {
        num: '02',
        title: 'Roofline & Solar Angle Vectoring',
        desc: 'Calculating radial branch clearance zones against slate shingles, glass skylights, and understory botanical sun windows.'
      },
      {
        num: '03',
        title: 'Selective Crown Thinning & Aeration',
        desc: 'Surgical removal of competing lateral shoots up to 20% foliage limit, reducing storm wind resistance by up to 35%.'
      },
      {
        num: '04',
        title: 'Branch Collar Sanitize & Vascular Seal',
        desc: 'Precision cuts outside the branch bark collar followed by organic antiseptic treatment to ensure rapid cambium healing.'
      }
    ],

whyChoose: [
      {
        icon: LUCIDE_ICONS.scale,
        title: 'Species-Authentic Silhouette',
        desc: 'Preserves the fractal branching geometry natural to heritage oaks, maples, and pines rather than unsightly rounded shearing.'
      },
      {
        icon: LUCIDE_ICONS.sun,
        title: 'Optimized Ground Sunlight',
        desc: 'Permits up to 45% more direct natural light to reach fine estate turf, putting greens, and understory garden flora.'
      },
      {
        icon: LUCIDE_ICONS.shieldCheck,
        title: 'Zero-Scuff Architecture Guarantee',
        desc: 'High-friction rigging blocks and soft-padded taglines ensure descending limbs never contact shingles or delicate copper gutters.'
      },
      {
        icon: LUCIDE_ICONS.award,
        title: 'ISA Board-Certified Oversight',
        desc: 'Every commission is personally supervised by an ISA Board-Certified Master Arborist adhering strictly to ANSI A300 standards.'
      }
    ],

pricing: [
      {
        name: 'Essential Vista Trimming',
        tagline: 'Ideal for 1 to 2 mature specimen trees requiring structural balance and clearance.',
        amount: '$850 – $1,400',
        note: 'Estimated duration: 3 – 5 arborist hours',
        featured: false,
        inclusions: [
          'Up to 2 specimen trees up to 45 ft',
          'Complete roofline & gutter clearance',
          'Deadwood & crossing branch removal',
          'Full chipper cleanup & bio-mulch'
        ]
      },
      {
        name: 'Estate Canopy Masterwork',
        tagline: 'Comprehensive architectural crown sculpting for up to 5 mature canopy trees.',
        amount: '$2,200 – $3,800',
        note: 'Estimated duration: 1 full day estate crew',
        featured: true,
        inclusions: [
          'Up to 5 mature trees up to 80 ft',
          'Laser sightline & sun window tuning',
          'Full crown weight reduction & thinning',
          'Organic vascular antiseptic seal',
          'Turf-protection ground track mats'
        ]
      },
      {
        name: 'Centennial Sanctuary Reserve',
        tagline: 'Multi-acre estate stewardship program for ancient heritage groves.',
        amount: '$4,500+',
        note: 'Custom multi-day master commission',
        featured: false,
        inclusions: [
          'Full-property canopy assessment & map',
          'High-angle crane & aerial spider access',
          'Dynamic non-invasive crown cabling',
          'Priority 24/7 storm emergency triage',
          '2-Year Canopy Longevity Warranty'
        ]
      }
    ],

faqs: [
      {
        q: 'How often should mature estate trees be trimmed?',
        a: 'For most mature hardwoods such as oaks, maples, and lindens, comprehensive structural trimming is recommended every 3 to 5 years. Fast-growing softwoods or trees close to architectural structures benefit from inspection every 2 years.'
      },
      {
        q: 'Will pruning during active seasons cause sap bleed or harm the tree?',
        a: 'Light architectural pruning and deadwood removal can be conducted safely year-round. However, for major volume thinning, we prioritize dormant late autumn and winter windows to prevent sap loss and discourage pest attraction.'
      },
      {
        q: 'Do you remove all branch debris and chips from the estate?',
        a: 'Yes. Our standard protocol includes thorough raking, air-blowing of paths, and wood chipping. We can haul away all mulch or deliver sterilized organic double-shredded woodchips to your garden beds upon request.'
      },
      {
        q: 'How close can you trim branches near sensitive slate roofs or glass solariums?',
        a: 'Using precision aerial bucket cranes and friction tag lines, our climbers can sculpt branches down to inches of clearance without any physical contact with the structure.'
      }
    ],

ctaHeadline: 'Ready to Elevate Your Estate’s Canopy Silhouette?',
    ctaDesc: 'Commission our master arborists for a comprehensive on-site canopy evaluation and laser vista consultation.'
  },

  removal: {
    id: 'removal',
    name: 'Tree Removal',
    badge: 'HIGH-PRECISION CRANE & AERIAL EXTRACTION',
    title: 'Hazardous Tree Removal & Crane Rigging',
    tagline: 'Surgical, zero-impact extraction of compromised giants near luxury residences, pools, and glass solariums.',
    heroImg: 'assets/service_removal.jpg',
    heroAlt: 'High-Angle Crane Tree Removal Over Estate Residence',
    floatingBadgeText: 'Zero-Impact Ground Rigging Guarantee',
    floatingBadgeSub: 'Licensed Crane Riggers • Insured & Bonded to $5M',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,

    contextHeadline: 'Engineering Precision When Retention is Impossible',
    contextDesc: 'When internal fungal decay, major storm fractures, or structural root loss make a mature tree an imminent hazard, safe removal requires engineering expertise. ARVORA specializes in high-angle aerial dismantling using knuckle-boom cranes and low-impact spider lifts, lifting massive timber sections vertically into the sky without disturbing manicured turf or fragile rooflines below.',
    contextCallout: '“Where others see an overwhelming hazard, we see a mathematical rigging challenge. Every segment is tied, hoisted, and lowered with zero ground impact.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Structural Integrity & Load Vector Analysis',
        desc: 'Testing trunk holding wood density with sonic sensors to establish safe rigging anchor angles and crane tonnage capacity.'
      },
      {
        num: '02',
        title: 'Turf Composite Armor & Outrigger Setup',
        desc: 'Laying interlocking composite track mats to distribute multi-ton crane loads, completely protecting turf and underground utilities.'
      },
      {
        num: '03',
        title: 'Aerial Sectional Dismantling & Crane Hoist',
        desc: 'Climbers secure high-strength slings to upper canopy limbs, severing sections that are immediately hoisted airborne away from buildings.'
      },
      {
        num: '04',
        title: 'Stem Extraction & Debris Evacuation',
        desc: 'Trunk segments are lifted directly into heavy-haul trucks for recycling, followed by thorough raking and soil inspection.'
      }
    ],

    whyChoose: [
      {
        icon: LUCIDE_ICONS.layers,
        title: 'Zero Ground Drop Impact',
        desc: 'Timber never drops onto your lawn. Each cut section is tethered to crane cables and flown directly to our transport trucks.'
      },
      {
        icon: LUCIDE_ICONS.truck,
        title: 'Lawn & Driveway Turf Protection',
        desc: 'Heavy-duty composite mats prevent soil rutting, root compaction, and asphalt cracking during heavy machine operations.'
      },
      {
        icon: LUCIDE_ICONS.zap,
        title: 'Powerline & Glass Enclosure Safety',
        desc: 'Certified high-voltage proximity arborists experienced in extracting trees tangled in wires or hovering over conservatories.'
      },
      {
        icon: LUCIDE_ICONS.fileText,
        title: 'Permit & HOA Documentation',
        desc: 'We draft certified ISA TRAQ risk reports and municipal applications to expedite removal approvals without administrative delays.'
      }
    ],

    pricing: [
      {
        name: 'Controlled Technical Removal',
        tagline: 'For accessible medium trees requiring specialized friction rope rigging.',
        amount: '$1,200 – $2,400',
        note: 'Estimated duration: 4 – 6 arborist hours',
        featured: false,
        inclusions: [
          'Single hazardous tree up to 45 ft',
          'High-friction rope rigging system',
          'Complete chip & wood disposal',
          'Full ground raking and cleanup'
        ]
      },
      {
        name: 'Crane-Assisted Precision Removal',
        tagline: 'High-risk extraction tight against estate structures, pools, or slopes.',
        amount: '$3,500 – $5,800',
        note: 'Estimated duration: 1 full day specialized crane crew',
        featured: true,
        inclusions: [
          'Large specimen tree up to 90 ft',
          'Dedicated hydraulic crane & operator',
          'Composite ground armor protection',
          'Direct log transport & recycling',
          '$5,000,000 specific project liability'
        ]
      },
      {
        name: 'Complex Multi-Tree Hazard Commission',
        tagline: 'Multiple high-risk removals over fragile glass roofs or steep waterfronts.',
        amount: '$6,800+',
        note: 'Custom multi-day engineered extraction',
        featured: false,
        inclusions: [
          'Full estate tree hazard audit',
          'Multi-day crane and aerial rigging',
          'Underground irrigation radar scan',
          'Complimentary stump grinding included',
          'Replanting credit and consultation'
        ]
      }
    ],

    faqs: [
      {
        q: 'Do I need a city permit to remove a tree on my private property?',
        a: 'Many municipalities enforce preservation ordinances for trees exceeding specific diameter thresholds (often 12–24 inches DBH) or designated heritage species. ARVORA handles all permit applications and certified TRAQ hazard reports on your behalf.'
      },
      {
        q: 'Will the crane crack my decorative stamped concrete or paver driveway?',
        a: 'No. We deploy industrial composite outrigger pads and interlocking heavy-duty ground mats that disperse weight across dozens of square feet, eliminating surface cracking and lawn ruts.'
      },
      {
        q: 'Can you remove a tree that is already split or leaning dangerously after a storm?',
        a: 'Yes. Our 24/7 crisis squad installs temporary dynamic tension cables and crane hoists to stabilize the tree before our certified climbers initiate the first surgical cut.'
      },
      {
        q: 'What happens to the large timber and wood chips?',
        a: 'All usable hardwood timber is transferred to local architectural millers or artisan furniture craftsmen, while brush is processed into clean organic mulch.'
      }
    ],

    ctaHeadline: 'Have a Hazardous Tree Threatening Your Architecture?',
    ctaDesc: 'Connect with our emergency rigging specialists for an immediate hazard assessment and zero-impact removal quote.'
  },

  pruning: {
    id: 'pruning',
    name: 'Tree Pruning',
    badge: 'CERTIFIED BIOLOGICAL TREE PRUNING',
    title: 'Scientific Tree Pruning & Structural Deadwooding',
    tagline: 'Restoring biological vigor, storm resilience, and crown airflow through certified ISA botanical pruning cuts.',
    heroImg: 'assets/service_pruning.jpg',
    heroAlt: 'Certified Arborist Performing Scientific Deadwood Pruning',
    floatingBadgeText: 'ISA Biological Pruning Standard',
    floatingBadgeSub: 'ANSI A300 Compliance • Pathogen Eradication',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,

    contextHeadline: 'Biological Longevity Driven by Plant Anatomy',
    contextDesc: 'Scientific pruning is not merely cutting branches; it is an informed intervention into the tree’s living vascular physiology. By strategically eliminating diseased wood, suppressed suckers, and co-dominant stems, ARVORA redistributes the tree’s vital sap reserves to primary scaffold branches while dramatically reducing wind resistance during severe gales.',
    contextCallout: '“A single improper flush cut can invite decades of fungal decay. We prune with scientific respect for the branch collar and living cambium.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Branch Bark Collar & Cambium Assessment',
        desc: 'Identifying the exact boundary between branch tissue and trunk collar to ensure protective barrier zone synthesis.'
      },
      {
        num: '02',
        title: 'Pathogen & Deadwood Selective Mapping',
        desc: 'Locating hollowed, dead, and fungal-infected limbs that threaten canopy failure during high winds.'
      },
      {
        num: '03',
        title: 'Crown Aerodynamic Thinning & Weight Relief',
        desc: 'Selectively removing end-heavy branch weight to reduce mechanical leverage on mature scaffold limbs.'
      },
      {
        num: '04',
        title: 'Antiseptic Treatment & Tool Disinfection',
        desc: 'All cutting equipment is sterilized between trees to prevent the cross-transmission of oak wilt and bacterial cankers.'
      }
    ],

    whyChoose: [
      {
        icon: LUCIDE_ICONS.wind,
        title: 'Superior Storm Resistance',
        desc: 'Reduces canopy wind drag by up to 35%, allowing seasonal gales to pass cleanly through without breaking major limbs.'
      },
      {
        icon: LUCIDE_ICONS.activity,
        title: 'Pathogen & Pest Defense',
        desc: 'Eliminates rotting deadwood that serves as primary nesting grounds for wood-boring beetles and decay fungi.'
      },
      {
        icon: LUCIDE_ICONS.gitBranch,
        title: 'Stronger Structural Architecture',
        desc: 'Prevents weak V-shaped bark inclusions by encouraging dominant U-shaped branch scaffolds.'
      },
      {
        icon: LUCIDE_ICONS.clock,
        title: 'Extended Specimen Longevity',
        desc: 'Documented to add decades of resilient life to ancient historic oaks, beeches, and cedars.'
      }
    ],

    pricing: [
      {
        name: 'Essential Deadwood Clearance',
        tagline: 'Focused hazard deadwood eradication for 1 to 2 mature estate trees.',
        amount: '$750 – $1,200',
        note: 'Estimated duration: 3 – 4 arborist hours',
        featured: false,
        inclusions: [
          'Removal of all dead branches over 2" diameter',
          'Crown hazard inspection & report',
          'Sterilized tool protocol',
          'Debris chipping and site clean'
        ]
      },
      {
        name: 'Structural Crown Health Pruning',
        tagline: 'Comprehensive structural restoration and wind aeration for estate trees.',
        amount: '$1,800 – $2,900',
        note: 'Estimated duration: 1 full day certified crew',
        featured: true,
        inclusions: [
          'Up to 4 mature specimen trees',
          'Canopy thinning & weight reduction',
          'Co-dominant stem mitigation',
          'Full organic cambium care',
          'Soil compaction mitigation review'
        ]
      },
      {
        name: 'Master Specimen Preservation Program',
        tagline: 'Deep restoration and ongoing health stewardship for irreplaceable centennial trees.',
        amount: '$3,900+',
        note: 'Comprehensive heritage tree preservation',
        featured: false,
        inclusions: [
          'Detailed canopy cambium audit',
          'Micro-injection nutrient support',
          'Dynamic non-invasive crown tethering',
          'Semi-annual progress inspections',
          'Certified Heritage Tree Certificate'
        ]
      }
    ],

    faqs: [
      {
        q: 'What is the difference between tree trimming and scientific pruning?',
        a: 'Trimming primarily focuses on aesthetic clearance and shape (e.g. keeping branches off gutters or views). Scientific pruning is a biological intervention focused on tree health, structural load reduction, and disease prevention according to ISA standards.'
      },
      {
        q: 'Why shouldn’t trees be "topped" or drastically sheared?',
        a: 'Topping is extremely harmful: it removes the tree’s food-producing canopy, creates massive decaying wounds, and stimulates weak, water-sprout limbs that snap easily in mild storms. ARVORA never toppings trees.'
      },
      {
        q: 'Do you sterilize your climbing saws between properties?',
        a: 'Yes. Our standard protocol requires sterilizing all blades with hospital-grade disinfectant between trees to prevent the spread of lethal pathogens like Dutch elm disease and oak wilt.'
      },
      {
        q: 'Can pruning save a declining historic tree?',
        a: 'In many cases, yes. Relieving excessive weight on hollow scaffold branches combined with deep root aerations can revitalize declining trees and prevent catastrophic split.'
      }
    ],

    ctaHeadline: 'Nurture the Long-Term Vitality of Your Living Giants',
    ctaDesc: 'Schedule a certified biological pruning evaluation with an ISA Master Arborist today.'
  },

  stump: {
    id: 'stump',
    name: 'Stump Grinding',
    badge: 'DEEP SUBTERRANEAN ROOT RECLAMATION',
    title: 'Subterranean Stump Grinding & Soil Reclamation',
    tagline: 'Complete subterranean elimination of root collars and root networks, restoring fertile estate turf and garden beds.',
    heroImg: 'assets/service_stump.jpg',
    heroAlt: 'Remote Controlled Track Stump Grinder Operating on Estate Turf',
    floatingBadgeText: 'Subterranean Grinding to 14" Depth',
    floatingBadgeSub: 'Tracked Machine • 36" Gate Access • Zero Utility Damage',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,

    contextHeadline: 'Erasing Subterranean Hazards & Pests',
    contextDesc: 'Leaving an old tree stump in your landscape is more than an unsightly visual blemish; it creates a subterranean incubator for wood-decaying honey fungus (Armillaria), termite infestations, and aggressive runner shoots that rob nutrients from neighboring turf. ARVORA uses specialized remote-controlled track grinders to eradicate stumps and radial root flares up to 14 inches below grade.',
    contextCallout: '“We don’t just shave the surface. We grind through the root collar into the subsoil, converting the hazard into nutrient-rich organic mulch.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Utility & Irrigation Radar Pre-Scan',
        desc: 'Deploying electronic locators to map underground electrical, gas, and irrigation lines prior to engaging cutting teeth.'
      },
      {
        num: '02',
        title: 'Surface Root Flange & Soil Excavation',
        desc: 'Clearing gravel, rocks, and surface soil around the root flare to expose the true root mass boundary.'
      },
      {
        num: '03',
        title: 'Deep Tungsten Carbide Grinding',
        desc: 'High-torque grinding wheel sweeps back and forth, obliterating the core stump and lateral roots 8 to 14 inches below grade.'
      },
      {
        num: '04',
        title: 'Bio-Mulch Reclamation & Soil Conditioning',
        desc: 'Backfilling the void with sterilized topsoil and finely pulverized mulch, leaving the lawn ready for immediate sod or replanting.'
      }
    ],

    whyChoose: [
      {
        icon: LUCIDE_ICONS.bug,
        title: 'Permanent Pest Eradication',
        desc: 'Eliminates active colonies of carpenter ants, subterranean termites, and wood wasps before they migrate to your residence.'
      },
      {
        icon: LUCIDE_ICONS.compass,
        title: 'Turf-Friendly Low Ground Pressure',
        desc: 'Wide rubber tracks exert less ground pressure than a human footstep, protecting lush lawns from ruts.'
      },
      {
        icon: LUCIDE_ICONS.doorOpen,
        title: 'Access Through 36-Inch Garden Gates',
        desc: 'Compact high-power machines navigate tight garden arches, courtyard gates, and pool enclosures with ease.'
      },
      {
        icon: LUCIDE_ICONS.sprout,
        title: 'Immediate Replanting Readiness',
        desc: 'Thorough root ball pulverization allows fresh sod installation, patio paving, or new specimen planting right over the site.'
      }
    ],

    pricing: [
      {
        name: 'Single Specimen Stump Grind',
        tagline: 'For a single isolated stump in a manicured lawn or garden bed.',
        amount: '$350 – $650',
        note: 'Estimated duration: 1 – 2 hours',
        featured: false,
        inclusions: [
          'Single stump up to 24" diameter',
          'Grinding up to 8" below ground grade',
          'Surface root flare tracking',
          'Mulch backfill and mound level'
        ]
      },
      {
        name: 'Estate Multi-Stump Clearing',
        tagline: 'Complete root eradication for up to 4 stumps with extended lateral roots.',
        amount: '$950 – $1,800',
        note: 'Estimated duration: Half-day estate deployment',
        featured: true,
        inclusions: [
          'Up to 4 stumps up to 40" diameter',
          'Deep grind to 14" below grade',
          'Full lateral root trenching',
          'Underground irrigation pre-scan',
          'Premium topsoil dressing & seed'
        ]
      },
      {
        name: 'Complete Site Soil Reclamation',
        tagline: 'For construction prep, pool excavations, or historic orchard clearings.',
        amount: '$2,400+',
        note: 'Custom full-day tracked equipment work',
        featured: false,
        inclusions: [
          'Unlimited stumps or massive root systems',
          'Deep excavation down to 24"',
          'Full chip haul-away or soil blending',
          'Laser subgrade compaction & leveling',
          'Site Certification for Construction'
        ]
      }
    ],

    faqs: [
      {
        q: 'How deep do you grind the stump?',
        a: 'Our standard depth is 8 to 14 inches below existing grade, which is sufficient for turf grass and perennial flower beds. For new tree planting or driveway construction, we can excavate up to 24 inches upon request.'
      },
      {
        q: 'Can I plant a new tree in the exact same spot?',
        a: 'Yes, provided we execute a deep grind (18–24 inches) to remove the central taproot and replace the wood-chip heavy soil with fresh loamy topsoil and compost.'
      },
      {
        q: 'Will the grinder throw woodchips and rocks into my windows or pool?',
        a: 'No. We erect heavy ballistic rubber curtains and safety shielding around the working perimeter to contain all flying debris safely within the grinding pit.'
      },
      {
        q: 'What do you do with the grindings?',
        a: 'Grindings are raked cleanly into the hole to settle as nutrient-rich organic mulch, or we can completely haul away all debris and replace with screened topsoil upon request.'
      }
    ],

    ctaHeadline: 'Reclaim Your Lawn From Unsightly Stumps & Pests',
    ctaDesc: 'Request an on-site stump measurement and instant estimate from our certified equipment team.'
  },

  emergency: {
    id: 'emergency',
    name: 'Emergency Tree Care',
    badge: 'RAPID 24/7 STORM DISPATCH & HAZARD STABILIZATION',
    title: '24/7 Emergency Storm Canopy Care',
    tagline: 'Immediate round-the-clock crisis dispatch for storm windthrow, fallen trees on structures, and powerline hazards.',
    heroImg: 'assets/service_emergency.jpg',
    heroAlt: 'Emergency Arborist Crew Stabilizing Storm Fallen Tree at Night',
    floatingBadgeText: '24/7 Priority Emergency Hotline',
    floatingBadgeSub: '60-Minute Triage Dispatch • Direct Insurance Claims Billing',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,

    contextHeadline: 'Immediate Protection When Severe Weather Strikes',
    contextDesc: 'Gale-force gusts, microbursts, and heavy ice accumulation can turn the proudest canopy giant into a catastrophic property threat in seconds. ARVORA maintains a dedicated 24/7 emergency response squadron ready to mobilize immediately with all-weather floodlights, crane trucks, high-capacity winches, and certified aerial operators to stabilize compromised trees before secondary damage occurs.',
    contextCallout: '“In a storm crisis, minutes count. Our priority is immediate physical stabilization of the structure, followed by surgical removal.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Immediate Crisis Triage & 60-Min Dispatch',
        desc: 'Arborist commander reviews real-time photo/satellite info, dispatches emergency crew, and coordinates with local utility providers.'
      },
      {
        num: '02',
        title: 'Dynamic Cable Stabilization & Roof Relief',
        desc: 'Rigging heavy tension cables and winches to halt further tree movement or roof collapse during active weather.'
      },
      {
        num: '03',
        title: 'Surgical Sectional Crane Dismantling',
        desc: 'Extracting fallen limbs piece by piece with crane assistance to relieve building pressure without puncturing framing.'
      },
      {
        num: '04',
        title: 'Emergency Tarping & Insurance Documentation',
        desc: 'Securing exposed roof openings with industrial tarps and compiling full photographic damage logs for insurance adjusters.'
      }
    ],

    whyChoose: [
      {
        icon: LUCIDE_ICONS.timer,
        title: '60-Minute Emergency Dispatch',
        desc: 'Fully equipped crews stationed with chainsaws, cranes, and illumination gear for immediate night deployment.'
      },
      {
        icon: LUCIDE_ICONS.home,
        title: 'Zero Secondary Impact Guarantee',
        desc: 'We lift trees off buildings without causing additional drywall cracking or structural puncture.'
      },
      {
        icon: LUCIDE_ICONS.fileCheck,
        title: 'Direct Insurance Claim Processing',
        desc: 'We provide itemized billing, wind speed data, and before-and-after photo logs accepted by all major insurance underwriters.'
      },
      {
        icon: LUCIDE_ICONS.zap,
        title: 'High-Voltage Safety Certified',
        desc: 'Specialized TCIA electrical hazard certified crews trained to work safely in storm corridors.'
      }
    ],

    pricing: [
      {
        name: 'Urgent Hazard Stabilization',
        tagline: 'For cracked, hanging branches or severe leaning trees threatening property.',
        amount: '$950 – $1,800',
        note: 'Immediate dispatch protocol',
        featured: false,
        inclusions: [
          'Immediate risk assessment & triage',
          'Heavy-duty dynamic rope tethering',
          'Clearance of immediate fall zone',
          'Preliminary insurance documentation'
        ]
      },
      {
        name: 'Emergency Structure Extraction',
        tagline: 'For fallen trees resting directly on roofs, vehicles, driveways, or pools.',
        amount: '$2,800 – $4,800',
        note: 'Full emergency crane response crew',
        featured: true,
        inclusions: [
          'Hydraulic crane & aerial extraction',
          'Zero-secondary-impact rigging',
          'Emergency weather tarping of roof',
          'Debris clearance of access routes',
          'Direct insurance billing coordination'
        ]
      },
      {
        name: 'Catastrophic Storm Disaster Relief',
        tagline: 'Multi-tree catastrophic devastation following tornadoes, blizzards, or hurricanes.',
        amount: '$5,500+',
        note: 'Continuous multi-crew emergency assignment',
        featured: false,
        inclusions: [
          'Round-the-clock continuous crew shift',
          'Multiple crane & log loader deployment',
          'Total estate access road clearing',
          'Hazardous powerline coordination',
          'Full Property Recovery Certification'
        ]
      }
    ],

    faqs: [
      {
        q: 'How fast can ARVORA arrive during an active storm?',
        a: 'Our emergency teams are on standby 24 hours a day, 365 days a year. We guarantee initial phone triage within 15 minutes and on-site deployment within 60 to 90 minutes across our regional service territory.'
      },
      {
        q: 'Does homeowner insurance cover the cost of emergency tree removal?',
        a: 'In the vast majority of cases, if a tree falls on an insured structure (home, garage, fence, driveway), insurance policies cover the cost of removal and emergency tarping. We bill insurance companies directly and provide full documentation.'
      },
      {
        q: 'What should I do while waiting for the emergency crew to arrive?',
        a: 'Keep all family members and pets away from the affected area. If a tree is touching electrical wires, stay inside and do not attempt to move any branches. Shut off power breakers to the damaged wing if safe to do so.'
      },
      {
        q: 'Can you work in heavy rain, ice, or total darkness?',
        a: 'Yes. Our trucks are equipped with high-powered all-weather LED tower lights and heavy weather safety gear specifically engineered for night and storm operations.'
      }
    ],

    ctaHeadline: 'Facing a Tree Crisis? We Are Mobilized Right Now.',
    ctaDesc: 'Call our 24/7 Emergency Dispatch desk immediately for priority crisis response.'
  },

  health: {
    id: 'health',
    name: 'Tree Health Diagnostics',
    badge: 'NON-INVASIVE SONIC TOMOGRAPHY & BIO-DIAGNOSTICS',
    title: 'Tree Health Diagnostics & Acoustic Sonic Tomography',
    tagline: 'Non-invasive 3D acoustic sonic imaging, root radar mapping, and mobile laboratory pathology to preserve living estate monuments.',
    heroImg: 'assets/service_health.jpg',
    heroAlt: 'Acoustic Sound Sensors Attached to Tree Trunk for Non-Invasive Diagnostic',
    floatingBadgeText: 'PiCUS 3 Acoustic Tomography Lab',
    floatingBadgeSub: '3D Internal Decay Mapping • Zero Invasive Drilling',
    floatingBadgeIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,

    contextHeadline: 'Unveiling Internal Health Without Damaging Living Tissue',
    contextDesc: 'A mature specimen tree can display lush green foliage while concealing catastrophic hollows or fungal rot deep within its heartwood. Traditional invasive drill testing damages the tree’s vital protective boundary zone (CODIT), introducing pathogens. ARVORA deploys state-of-the-art PiCUS 3 acoustic sound tomographs that measure microsecond sound wave velocity across 12 to 24 sensors, generating an instant 3D color cross-section of internal wood strength without puncturing cambium.',
    contextCallout: '“Sound impulses travel quickly through solid, healthy wood and slow down through decay. We turn acoustics into visual truth for your trees.”',
    procedureSteps: [
      {
        num: '01',
        title: 'Sensor Ring Attachment & Geometric Calibration',
        desc: 'Affixing specialized sound pin sensors around the trunk circumference and recording exact spatial coordinates with electronic callipers.'
      },
      {
        num: '02',
        title: 'Sound Impulse Wave Velocity Measurement',
        desc: 'Tapping each sensor with an acoustic impulse hammer; sensors record sound wave velocity through the heartwood down to microseconds.'
      },
      {
        num: '03',
        title: '3D Color Tomogram Cross-Section Rendering',
        desc: 'Our computer generates a high-resolution color map: brown for solid wood, green for early decay, and blue/magenta for severe hollows.'
      },
      {
        num: '04',
        title: 'Bio-Therapeutic & Soil Nutrition Prescription',
        desc: 'Formulating targeted vascular micro-infusions, mycorrhizal root inoculants, or structural crown weight reduction based on findings.'
      }
    ],

    whyChoose: [
      {
        icon: LUCIDE_ICONS.scan,
        title: '100% Non-Invasive Diagnostics',
        desc: 'No drilling, coring, or wounding of the tree’s critical protective cambium barrier.'
      },
      {
        icon: LUCIDE_ICONS.fileBarChart,
        title: 'Legally Defensible TRAQ Risk Reports',
        desc: 'Comprehensive engineering reports accepted by property insurers, legal arbiters, and municipal historic commissions.'
      },
      {
        icon: LUCIDE_ICONS.syringe,
        title: 'Targeted Trunk Micro-Injections',
        desc: 'Direct vascular delivery of systemic fungicides and nutrients to save trees deemed untreatable by general landscaping.'
      },
      {
        icon: LUCIDE_ICONS.radar,
        title: '3D Ground Root Radar Detection',
        desc: 'Detects structural roots before pool, foundation, or utility excavation begins, preventing accidental tree death.'
      }
    ],

    pricing: [
      {
        name: 'Essential Visual & Soil Diagnostic',
        tagline: 'Comprehensive visual TRAQ assessment and soil nutrient laboratory profile.',
        amount: '$450 – $750',
        note: 'Estimated duration: 2 – 3 arborist hours',
        featured: false,
        inclusions: [
          'Visual tree risk assessment (TRAQ)',
          'Soil compaction & pH test',
          'Pest & fungal pathogen identification',
          'Written health recommendations report'
        ]
      },
      {
        name: 'Acoustic Sonic Tomography Scan',
        tagline: 'Full internal 3D sound tomogram mapping for high-value specimen trees.',
        amount: '$1,250 – $2,100',
        note: 'Full scientific diagnostic with computer report',
        featured: true,
        inclusions: [
          'Complete PiCUS 3 sonic tomograph scan',
          '3D cross-sectional color decay map',
          'Structural breaking safety calculation',
          'Targeted pruning & cabling prescription',
          'Formal Certified Arborist Certification'
        ]
      },
      {
        name: 'Complete Estate Arboretum Audit',
        tagline: 'Full diagnostic inventory, root radar mapping, and 5-year preservation roadmap.',
        amount: '$3,200+',
        note: 'Multi-tree estate scientific portfolio',
        featured: false,
        inclusions: [
          'Up to 10 specimen trees tomogram/radar',
          'Ground Penetrating Root Radar scan',
          'GIS inventory map with QR tags',
          'Custom micro-injection therapeutic plan',
          'Annual re-scan tracking & warranty'
        ]
      }
    ],

    faqs: [
      {
        q: 'What is acoustic sonic tomography, and how does it work?',
        a: 'Acoustic tomography uses sound waves to measure internal wood density. Sound travels fastest through dense, healthy wood (1,500+ m/s) and significantly slower through decay, cracks, or hollows. Our computer calculates these velocities across a sensor ring to generate a precise color-coded internal cross-section.'
      },
      {
        q: 'Does attaching the sensors damage the tree?',
        a: 'Not at all. The sensor pins only penetrate a few millimeters of dead bark to make acoustic contact with the outer wood. It does not cause internal vascular wounding or invite fungal decay.'
      },
      {
        q: 'Can this diagnostic prevent a tree from falling unexpectedly?',
        a: 'Yes. In many cases, trees with lush green crowns have over 70% internal heartwood decay that is invisible from the outside. Tomography detects this before the tree fractures in a storm.'
      },
      {
        q: 'What treatments do you offer if decay or disease is detected?',
        a: 'Depending on the diagnosis, we prescribe targeted micro-injections of fungicides, trunk cambium antiseptics, liquid mycorrhizal root zone injections, and surgical crown weight reduction to relieve stress on weakened trunk sections.'
      }
    ],

    ctaHeadline: 'Reveal the Hidden Health of Your Irreplaceable Trees',
    ctaDesc: 'Commission a non-invasive acoustic tomography scan with our lead tree pathologist today.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentServiceKey = getServiceFromUrl();
  renderServiceDetail(currentServiceKey);
  initSwitcherPills();
  initDetailFaqAccordion();
  initCommissionButtons();
});

function getServiceFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam && SERVICES_DATA[serviceParam.toLowerCase()]) {
    return serviceParam.toLowerCase();
  }
  return 'trimming';
}

function renderServiceDetail(serviceKey) {
  const data = SERVICES_DATA[serviceKey];
  if (!data) return;

document.title = `${data.title} — ARVORA Master Arborist Services`;

document.querySelectorAll('.service-switch-pill').forEach((pill) => {
    const pillKey = pill.getAttribute('data-service-key');
    if (pillKey === serviceKey) {
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
    } else {
      pill.classList.remove('active');
      pill.setAttribute('aria-selected', 'false');
    }
  });

const heroBadge = document.getElementById('detailHeroBadge');
  const heroTitle = document.getElementById('detailHeroTitle');
  const heroTagline = document.getElementById('detailHeroTagline');
  const heroImg = document.getElementById('detailHeroImg');
  const badgeTitle = document.getElementById('detailBadgeTitle');
  const badgeSub = document.getElementById('detailBadgeSub');
  const badgeIcon = document.getElementById('detailBadgeIcon');

  if (heroBadge) heroBadge.textContent = data.badge;
  if (heroTitle) heroTitle.textContent = data.title;
  if (heroTagline) heroTagline.textContent = data.tagline;
  if (heroImg) {
    heroImg.src = data.heroImg;
    heroImg.alt = data.heroAlt;
  }
  if (badgeTitle) badgeTitle.textContent = data.floatingBadgeText;
  if (badgeSub) badgeSub.textContent = data.floatingBadgeSub;
  if (badgeIcon && data.floatingBadgeIcon) {
    badgeIcon.innerHTML = data.floatingBadgeIcon;
  }

const contextHeadline = document.getElementById('detailContextHeadline');
  const contextDesc = document.getElementById('detailContextDesc');
  const contextCallout = document.getElementById('detailContextCallout');
  const procedureContainer = document.getElementById('detailProcedureSteps');

  if (contextHeadline) contextHeadline.textContent = data.contextHeadline;
  if (contextDesc) contextDesc.textContent = data.contextDesc;
  if (contextCallout) contextCallout.textContent = data.contextCallout;

  if (procedureContainer) {
    procedureContainer.innerHTML = data.procedureSteps
      .map(
        (step) => `
        <div class="procedure-step-card">
          <div class="step-num-badge">${step.num}</div>
          <div class="step-content">
            <h4 class="step-title">${step.title}</h4>
            <p class="step-desc">${step.desc}</p>
          </div>
        </div>
      `
      )
      .join('');
  }

const whyGrid = document.getElementById('detailWhyGrid');
  if (whyGrid) {
    whyGrid.innerHTML = data.whyChoose
      .map(
        (item) => `
        <div class="why-card">
          <div class="why-icon-bubble">${item.icon}</div>
          <h4 class="why-title">${item.title}</h4>
          <p class="why-desc">${item.desc}</p>
        </div>
      `
      )
      .join('');
  }

const pricingGrid = document.getElementById('detailPricingGrid');
  if (pricingGrid) {
    pricingGrid.innerHTML = data.pricing
      .map(
        (tier) => `
        <div class="pricing-card ${tier.featured ? 'featured' : ''}">
          ${tier.featured ? '<div class="pricing-featured-badge">Most Popular Choice</div>' : ''}
          <h3 class="pricing-tier-name">${tier.name}</h3>
          <p class="pricing-tier-tagline">${tier.tagline}</p>
          <div class="pricing-amount-wrap">
            <span class="pricing-amount">${tier.amount}</span>
          </div>
          <span class="pricing-note">${tier.note}</span>

          <div class="pricing-inclusions-list">
            ${tier.inclusions
              .map(
                (inc) => `
              <div class="pricing-inclusion-item">
                <span class="inclusion-check">${LUCIDE_ICONS.check}</span>
                <span>${inc}</span>
              </div>
            `
              )
              .join('')}
          </div>

          <button class="btn ${tier.featured ? 'btn-primary' : 'btn-outline'} pricing-card-btn commission-package-btn"
            data-service-name="${data.name}"
            data-package-name="${tier.name}">
            <span>Commission This Package</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>
      `
      )
      .join('');

    initCommissionButtons();
  }

const faqContainer = document.getElementById('detailFaqContainer');
  if (faqContainer) {
    faqContainer.innerHTML = data.faqs
      .map(
        (faq, idx) => `
        <div class="faq-card ${idx === 0 ? 'active' : ''}">
          <button class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span class="faq-question-text">${faq.q}</span>
            <span class="faq-icon-indicator" aria-hidden="true">${LUCIDE_ICONS.chevronDown}</span>
          </button>
          <div class="faq-body">
            <p class="faq-answer-p">${faq.a}</p>
          </div>
        </div>
      `
      )
      .join('');

    initDetailFaqAccordion();
  }

const ctaHeadline = document.getElementById('detailCtaHeadline');
  const ctaDesc = document.getElementById('detailCtaDesc');
  const ctaBtn = document.getElementById('detailCtaBtn');

  if (ctaHeadline) ctaHeadline.textContent = data.ctaHeadline;
  if (ctaDesc) ctaDesc.textContent = data.ctaDesc;
  if (ctaBtn) {
    ctaBtn.setAttribute('data-service', data.name);
  }
}

function initSwitcherPills() {
  const pills = document.querySelectorAll('.service-switch-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = pill.getAttribute('data-service-key');
      if (!serviceKey || !SERVICES_DATA[serviceKey]) return;

const newUrl = `${window.location.pathname}?service=${serviceKey}`;
      window.history.pushState({ service: serviceKey }, '', newUrl);

renderServiceDetail(serviceKey);

window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

window.addEventListener('popstate', () => {
    const currentKey = getServiceFromUrl();
    renderServiceDetail(currentKey);
  });
}

function initDetailFaqAccordion() {
  const triggers = document.querySelectorAll('#detailFaqContainer .faq-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.faq-card');
      if (!card) return;

      const isActive = card.classList.contains('active');

document.querySelectorAll('#detailFaqContainer .faq-card.active').forEach((c) => {
        if (c !== card) {
          c.classList.remove('active');
          const t = c.querySelector('.faq-trigger');
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

function initCommissionButtons() {
  const buttons = document.querySelectorAll('.commission-package-btn, #detailCtaBtn, #heroCommissionBtn');
  const quoteModal = document.getElementById('quoteModal');
  const serviceSelect = document.getElementById('serviceSelect');
  const notesField = document.getElementById('userNotes');

  if (!quoteModal) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service-name') || btn.getAttribute('data-service') || '';
      const packageName = btn.getAttribute('data-package-name') || '';

if (serviceSelect && serviceName) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase()) ||
              serviceName.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

if (notesField) {
        if (packageName) {
          notesField.value = `Requesting consultation for: ${packageName} (${serviceName}).`;
        } else if (serviceName) {
          notesField.value = `Requesting consultation for: ${serviceName}.`;
        }
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
}
