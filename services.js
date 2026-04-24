/* ===== SALLY SPA — services.js =====
   Single source of truth for all service data.
   Used by both services.html (card grid) and service.html (detail SPA).
   ===================================== */

const SERVICES = [

  /* ── Massage & Body Treatments ── */
  {
    id: 'thai-massage',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '🌿',
    title: 'Thai Massage',
    tagline: 'Ancient energy, modern relief.',
    duration: '60 – 90 min',
    price: 'From Ksh 2,500',
    image: 'services/thai.jpg',
    heroImage: 'services/thai-massage-hero.jpg', // larger hero, falls back to image
    intro: 'Rooted in over 2,500 years of healing tradition, Thai Massage is a full-body therapy that harmonises the body through rhythmic compression, acupressure, and assisted yoga-like stretching. No oils are used — you remain clothed throughout while our therapist guides your body into a deep state of release.',
    description: [
      'Thai Massage works along the body\'s energy lines — known as "Sen" lines — to release blockages and restore the natural flow of energy. The therapist uses their hands, thumbs, elbows, knees, and feet to apply pressure at precise points, while gently stretching the body into positions that free tight muscles and open the joints.',
      'The result is a session that feels simultaneously invigorating and deeply calming. Unlike Western massage styles, Thai Massage treats the whole body as a connected system, leaving you feeling balanced from head to toe.'
    ],
    benefits: [
      'Relieves deep muscle tension and chronic tightness',
      'Improves flexibility and joint range of motion',
      'Stimulates circulation and lymphatic drainage',
      'Reduces stress hormones and promotes mental clarity',
      'Restores energy flow along the body\'s Sen lines',
      'Leaves you feeling grounded, energised, and centred'
    ],
    whatToExpect: 'You will be asked to wear comfortable, loose-fitting clothing. The session takes place on a padded floor mat. Our therapist will begin with gentle compressions to warm the body before moving into deeper pressure and stretching sequences. Please let your therapist know of any injuries or areas of sensitivity before you begin.',
    goodFor: ['Chronic back & neck pain', 'Post-exercise recovery', 'Stress & anxiety', 'Poor flexibility', 'Low energy']
  },

  {
    id: 'aromatherapy-massage',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '🌸',
    title: 'Aromatherapy Massage',
    tagline: 'Where scent meets surrender.',
    duration: '60 – 90 min',
    price: 'From Ksh 2,800',
    image: 'services/aroma.jpg',
    heroImage: 'services/aromatherapy-massage-hero.jpg',
    intro: 'Aromatherapy Massage is a sensory journey that combines the healing power of touch with the therapeutic properties of plant-based essential oils. Each session is personalised — our therapists blend oils chosen specifically for your mood, needs, and intentions on the day.',
    description: [
      'Warm essential oils are blended and applied through long, flowing massage strokes that cover the entire body. The oils penetrate the skin while their aromatic molecules enter the bloodstream through inhalation, working on both a physical and emotional level simultaneously.',
      'Whether you choose a calming lavender blend to quieten a busy mind, or an uplifting citrus combination to restore vitality, the effect is profound. The treatment melts muscular tension while guiding your nervous system into a state of deep parasympathetic rest.'
    ],
    benefits: [
      'Deeply relaxes the nervous system',
      'Softens muscle tension through warm oil application',
      'Elevates mood and reduces emotional fatigue',
      'Nourishes and hydrates the skin',
      'Supports better sleep and mental clarity',
      'Reduces cortisol and promotes a sense of calm'
    ],
    whatToExpect: 'You will be undressed to your comfort level and draped throughout. Your therapist will consult with you briefly before the session to understand your mood and any concerns, then blend an oil combination to suit. The room will be warmed, softly lit, and filled with gentle scent before you begin.',
    goodFor: ['Anxiety & low mood', 'Insomnia', 'Emotional stress', 'Dry or tired skin', 'General fatigue']
  },

  {
    id: 'swedish-massage',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '💆',
    title: 'Swedish Massage',
    tagline: 'The art of total relaxation.',
    duration: '60 min',
    price: 'From Ksh 2,200',
    image: 'services/swedish-massage.jpg',
    heroImage: 'services/swedish-massage-hero.jpg',
    intro: 'The Swedish Massage is the gold standard of relaxation — a classic full-body treatment that uses long, gliding strokes, gentle kneading, and rhythmic tapping to bring the body and mind into complete rest. It is the perfect introduction to massage therapy and a perennial favourite for good reason.',
    description: [
      'Five core techniques — effleurage (long strokes), petrissage (kneading), friction, tapotement (tapping), and vibration — are applied in a flowing sequence across the back, shoulders, arms, legs, and feet. The pressure is firm yet never uncomfortable, calibrated throughout to your preference.',
      'By promoting blood and lymphatic circulation, the Swedish Massage helps flush metabolic waste from the muscles while flooding them with oxygen-rich blood. The nervous system shifts into rest-and-digest mode, slowing the heart rate and dissolving the physical effects of everyday stress.'
    ],
    benefits: [
      'Full-body muscular relaxation',
      'Improved blood and lymphatic circulation',
      'Reduced muscle soreness and fatigue',
      'Lowered heart rate and blood pressure',
      'Relief from tension headaches',
      'Deeply restorative sleep quality'
    ],
    whatToExpect: 'You will be undressed to your comfort level with full draping throughout. Sessions begin with the back and work through the full body. Light-to-medium pressure is the default — simply tell your therapist if you\'d prefer deeper work at any point.',
    goodFor: ['First-time massage clients', 'General stress', 'Muscle soreness', 'Tension headaches', 'Poor sleep']
  },

  {
    id: 'hot-stone-therapy',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '🪨',
    title: 'Hot Stone Therapy',
    tagline: 'Earth\'s warmth, deeply held.',
    duration: '75 – 90 min',
    price: 'From Ksh 3,200',
    image: 'services/hot-stone.jpg',
    heroImage: 'services/hot-stone-hero.jpg',
    intro: 'Hot Stone Therapy uses smooth, heated basalt volcanic stones to deliver a massage experience unlike any other. The sustained warmth penetrates deep into the muscle tissue — reaching layers that hands alone cannot access — melting away tension held in the body\'s very core.',
    description: [
      'Basalt stones are heated to the perfect temperature and placed along key points of the body — the spine, palms, between the toes — while the therapist uses additional stones to massage with long, flowing strokes. The heat dilates blood vessels, dramatically increasing circulation to tired muscles.',
      'The treatment is profoundly grounding. The weight and warmth of the stones create a sense of being held and settled that is deeply therapeutic for those carrying stress or anxiety. Many clients describe it as one of the most profound states of relaxation they have ever experienced.'
    ],
    benefits: [
      'Deep heat penetrates chronic muscle tension',
      'Dramatically improved circulation',
      'Calms the nervous system at a deep level',
      'Eases arthritis and joint stiffness',
      'Promotes profound, lasting relaxation',
      'Deeply grounding for stress and anxiety'
    ],
    whatToExpect: 'Stones are sanitised and heated in water to a precise temperature before your session. Your therapist will always check the stone temperature against your skin before applying them. Please inform us if you have any cardiovascular conditions, diabetes, or skin sensitivity before booking.',
    goodFor: ['Chronic muscle tension', 'Arthritis & joint pain', 'Anxiety & stress', 'Poor circulation', 'Fibromyalgia']
  },

  {
    id: 'oil-massage',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '🫧',
    title: 'Oil Massage',
    tagline: 'Fluid, nourishing, deeply still.',
    duration: '60 – 90 min',
    price: 'From Ksh 2,500',
    image: 'services/oil.jpg',
    heroImage: 'services/oil-massage-hero.jpg',
    intro: 'Our Oil Massage is a slow, meditative treatment that uses rich carrier oils — jojoba, sweet almond, or coconut — applied through long, deliberate strokes that honour every contour of the body. It is an act of care as much as therapy, leaving the skin deeply nourished and the mind completely still.',
    description: [
      'Warm oil is poured and worked into the skin with unhurried, continuous strokes that flow from head to toe without interruption. The technique draws from Ayurvedic Abhyanga traditions — treating the skin as a sense organ that, when deeply nourished, communicates safety and calm to the entire nervous system.',
      'The oils we use are chosen for their skin-loving properties and absorbed deeply during the session, continuing their work for hours afterwards. Unlike aromatherapy massage, the focus here is on the physical sensation of sustained, generous contact — a full-body embrace.'
    ],
    benefits: [
      'Deeply nourishes and hydrates the skin',
      'Soothes the nervous system through sustained touch',
      'Improves skin elasticity and texture',
      'Reduces muscle stiffness and soreness',
      'Calms the mind and reduces overthinking',
      'Leaves skin glowing and supple for days'
    ],
    whatToExpect: 'You will be undressed to your comfort level with full draping. The oil will feel warm on contact and the pace of the session is intentionally slow and unhurried. We recommend not showering for at least two hours afterwards to allow the oils to continue absorbing.',
    goodFor: ['Dry or stressed skin', 'Burnout & fatigue', 'Overstimulated nervous system', 'General body care', 'Post-illness recovery']
  },

  {
    id: 'body-scrubs',
    category: 'Massage & Body Treatments',
    categorySlug: 'massage',
    icon: '🌾',
    title: 'Body Scrubs & Wraps',
    tagline: 'Reveal your most luminous skin.',
    duration: '45 – 60 min',
    price: 'From Ksh 2,000',
    image: 'services/scrub.jpg',
    heroImage: 'services/body-scrubs-hero.jpg',
    intro: 'Our Body Scrubs & Wraps are luxurious full-body rituals that work in two stages: first, a granular exfoliant buffs away dead skin cells; then a nourishing wrap or moisturising treatment is applied to flood the fresh skin beneath with hydration and nutrients.',
    description: [
      'We use natural exfoliants — sugar, sea salt, coffee, or volcanic ash — blended with botanical oils and butters. The scrub is applied in firm, circular movements across the entire body, stimulating circulation as it removes the outermost layer of dull, dry skin.',
      'Following the scrub, a warm wrap or rich body butter is applied and left to absorb while you rest. The combination leaves the skin visibly brighter, silky to the touch, and deeply hydrated — a transformation you will feel immediately.'
    ],
    benefits: [
      'Removes dead skin cells for an instant glow',
      'Stimulates circulation and lymphatic flow',
      'Deeply hydrates and softens skin texture',
      'Reduces the appearance of dryness and uneven tone',
      'Prepares skin for better absorption of moisturisers',
      'Leaves skin visibly smoother for up to a week'
    ],
    whatToExpect: 'You will be undressed to your comfort level. The scrub is applied with firm pressure — let your therapist know if you prefer a lighter touch. A warm shower is incorporated mid-treatment to rinse the scrub before the nourishing wrap is applied. Wear or bring dark-coloured underwear as oils may stain.',
    goodFor: ['Dull or dry skin', 'Pre-event radiance', 'Keratosis pilaris', 'Uneven skin tone', 'Skin detox']
  },

  /* ── Hydrotherapy & Baths ── */
  {
    id: 'hydrotherapy',
    category: 'Hydrotherapy & Baths',
    categorySlug: 'hydro',
    icon: '💧',
    title: 'Hydrotherapy',
    tagline: 'Healing through the element of water.',
    duration: '45 min',
    price: 'From Ksh 1,800',
    image: 'services/hydrotherapy.jpg',
    heroImage: 'services/hydrotherapy-hero.jpg',
    intro: 'Hydrotherapy harnesses the therapeutic power of water — its temperature, pressure, and buoyancy — to heal the body from the outside in. Used for centuries across cultures from ancient Rome to Japanese onsen tradition, it remains one of the most effective tools for muscular recovery and systemic restoration.',
    description: [
      'Our hydrotherapy treatments use controlled water jets, contrast temperature bathing, and immersion techniques to stimulate circulation, reduce inflammation, and ease musculoskeletal pain. The alternation of hot and cold water triggers a powerful vascular response — dilating and contracting blood vessels in a pumping action that dramatically improves circulation.',
      'Beyond the physical, hydrotherapy has a profoundly calming effect on the nervous system. Immersion in warm water activates the parasympathetic nervous system, slowing the heart rate and releasing tension from the body\'s deepest layers.'
    ],
    benefits: [
      'Reduces muscle inflammation and soreness',
      'Powerful circulation stimulus through contrast therapy',
      'Eases chronic joint and back pain',
      'Accelerates post-exercise and post-injury recovery',
      'Deeply calms the nervous system',
      'Supports detoxification through improved lymph flow'
    ],
    whatToExpect: 'You will be provided with a robe and slippers. Our therapist will guide you through the temperature contrasts, which begin gently and intensify as your body adapts. The session ends with a warm immersion phase to bring the body into a state of deep rest.',
    goodFor: ['Sports recovery', 'Chronic pain', 'Poor circulation', 'Arthritis', 'Detox & immune support']
  },

  {
    id: 'moroccan-bath',
    category: 'Hydrotherapy & Baths',
    categorySlug: 'hydro',
    icon: '🛁',
    title: 'Moroccan Bath',
    tagline: 'A hammam ritual, reimagined.',
    duration: '60 min',
    price: 'From Ksh 2,500',
    image: 'services/moroccan-bath.jpg',
    heroImage: 'services/moroccan-bath-hero.jpg',
    intro: 'The Moroccan Bath — rooted in the ancient hammam traditions of North Africa — is one of the most complete body purification rituals in the world. Steam, exfoliation, and deep cleansing combine in a sequence that leaves the skin velvety, glowing, and completely renewed.',
    description: [
      'The ritual begins in a steam room to open the pores and soften the skin. A traditional black soap (beldi) — made from olives and loaded with vitamin E — is then applied across the entire body and left to work for several minutes. The therapist then uses a kessa mitt to exfoliate with firm, long strokes, rolling away layers of dead skin to reveal the fresh skin beneath.',
      'A ghassoul clay mask may follow — a volcanic clay used for centuries in Moroccan beauty rituals to draw out impurities and mineralise the skin. The session concludes with a warm rinse and a generous application of argan oil to seal in hydration and leave the skin luminous.'
    ],
    benefits: [
      'Total body exfoliation — skin feels like new',
      'Deep pore cleansing through steam and black soap',
      'Dramatically improved skin texture and radiance',
      'Mineral nourishment from ghassoul clay',
      'Argan oil hydration that lasts for days',
      'Deeply purifying and emotionally restorative'
    ],
    whatToExpect: 'Disposable underwear is provided. The treatment involves steam, wet surfaces, and full-body exfoliation — come prepared to fully let go. The kessa exfoliation can be a little firm; you can request lighter pressure at any point. Drink water before and after.',
    goodFor: ['Skin purification', 'Dull or congested skin', 'Pre-event grooming', 'Dry skin', 'Full-body renewal']
  },

  {
    id: 'steam-bath',
    category: 'Hydrotherapy & Baths',
    categorySlug: 'hydro',
    icon: '🌬️',
    title: 'Steam Bath',
    tagline: 'Purify from the inside out.',
    duration: '30 min',
    price: 'From Ksh 1,200',
    image: 'services/steam.jpg',
    heroImage: 'services/steam-bath-hero.jpg',
    intro: 'The Steam Bath is one of the simplest and most powerful wellness rituals available. Moist heat envelops the body, opening pores, loosening muscles, and triggering a deep, natural sweat that carries toxins and impurities out of the body as it cleanses the respiratory system.',
    description: [
      'Our steam room is maintained at the ideal therapeutic temperature and humidity level. As you sit and breathe in the warm, moist air, your heart rate gently rises, mimicking the effect of light exercise — increasing circulation and oxygenation without any effort from the body.',
      'Steam therapy is highly complementary to other treatments — opening the pores before a scrub or facial to maximise absorption, or relaxing muscles before a massage to allow the therapist to work more deeply. On its own, it is a powerful tool for respiratory health, skin clarity, and stress reduction.'
    ],
    benefits: [
      'Deep pore cleansing through induced sweat',
      'Opens airways and supports respiratory health',
      'Relaxes muscles before or after other treatments',
      'Boosts circulation and metabolism',
      'Reduces stress and promotes mental calm',
      'Clears and brightens the skin'
    ],
    whatToExpect: 'You will be provided with a towel and disposable slippers. Sessions are 30 minutes — we recommend hydrating well beforehand. The steam room can be used as a standalone treatment or as a complement to any other service. Exit the steam room immediately if you feel dizzy or uncomfortable.',
    goodFor: ['Skin congestion', 'Respiratory issues', 'Pre-massage preparation', 'Detox', 'Stress relief']
  },

  /* ── Beauty & Grooming ── */
  {
    id: 'facials',
    category: 'Beauty & Grooming',
    categorySlug: 'beauty',
    icon: '✨',
    title: 'Facials',
    tagline: 'Your skin, at its most luminous.',
    duration: '45 – 60 min',
    price: 'From Ksh 2,000',
    image: 'services/facials.jpg',
    heroImage: 'services/facials-hero.jpg',
    intro: 'Our facials are fully customised to your skin\'s unique needs on the day. No two skins are the same — and no two sessions are either. Your therapist will assess your skin before choosing from our range of natural, results-driven products to cleanse, treat, and restore your complexion.',
    description: [
      'Each facial follows a carefully considered sequence: double cleanse, exfoliation, steam, extractions (if needed), a targeted treatment mask, serum, and moisturiser. The full sequence is adapted based on your skin type — whether dry, oily, combination, sensitive, or mature.',
      'Beyond the visible results, our facials incorporate a deeply relaxing facial massage that drains puffiness, sculpts facial contours, and stimulates collagen production. Many clients describe the facial massage as the most relaxing part of their entire visit.'
    ],
    benefits: [
      'Deep cleansing and pore minimising',
      'Brightened, more even skin tone',
      'Improved skin hydration and elasticity',
      'Stimulated collagen through facial massage',
      'Reduced puffiness and improved facial contours',
      'Calming, meditative experience'
    ],
    whatToExpect: 'Arrive with a clean face if possible. Your therapist will begin with a skin consultation — please mention any allergies, active breakouts, or recent procedures. You will be reclined in a heated chair with warm towels. The session ends with sunscreen application and homecare advice.',
    goodFor: ['All skin types', 'Dull or uneven skin', 'Acne & congestion', 'Ageing concerns', 'Pre-event glow']
  },

  {
    id: 'pedicure',
    category: 'Beauty & Grooming',
    categorySlug: 'beauty',
    icon: '💅',
    title: 'Pedicure',
    tagline: 'Head to toe, nothing overlooked.',
    duration: '30 – 45 min',
    price: 'From Ksh 1,200',
    image: 'services/pedicure.jpg',
    heroImage: 'services/pedicure-hero.jpg',
    intro: 'Our pedicure is a meticulous ritual of foot care that goes far beyond a standard nail appointment. From the warm soak that opens the session to the final polish or buff, every step is carried out with precision and genuine care — because your feet deserve as much attention as any other part of you.',
    description: [
      'The session begins with a warm aromatic foot soak to soften the skin and begin the relaxation process. Cuticles are tended, nails shaped and buffed, and any calluses or hard skin on the heels and soles are carefully removed using professional tools.',
      'A nourishing foot scrub and moisturising massage follow — working from the soles through the arches and up to the calves. You choose your finish: a classic colour, a clear strengthening coat, or a natural buff. The result is feet that feel restored and look impeccable.'
    ],
    benefits: [
      'Removes dead skin and calluses',
      'Nourishes and softens the feet',
      'Improves circulation through foot massage',
      'Prevents ingrown toenails',
      'Leaves nails clean, shaped, and polished',
      'Deeply relaxing — surprisingly so'
    ],
    whatToExpect: 'Wear open-toed footwear or bring flip-flops so your polish stays perfect on the way out. If you\'d like a specific colour, feel free to bring your own or choose from our selection. Our pedicure chairs are fully sanitised between every client.',
    goodFor: ['Tired, achy feet', 'Cracked heels', 'Nail health', 'Pre-event grooming', 'General self-care']
  },

  {
    id: 'manicure',
    category: 'Beauty & Grooming',
    categorySlug: 'beauty',
    icon: '🤲',
    title: 'Manicure',
    tagline: 'Hands that tell your story beautifully.',
    duration: '30 – 45 min',
    price: 'From Ksh 1,000',
    image: 'services/manicure.jpg',
    heroImage: 'services/manicure-hero.jpg',
    intro: 'Our manicure is a quiet act of self-regard — a moment set aside entirely for your hands. We tend to everything: cuticles, shape, surface, and finish. The hand massage woven through the session transforms what could be a routine grooming appointment into a genuinely restorative experience.',
    description: [
      'The session begins with a warm hand soak and cuticle softening. Nails are filed to your preferred shape — square, round, almond, or oval — and the cuticles are gently tidied. Any rough skin on the hands is buffed smooth before a nourishing hand scrub is massaged in.',
      'A rich hand cream is then worked in through a thorough hand and lower arm massage that releases the tension most of us carry from keyboards, phones, and daily life. The session concludes with your chosen finish — colour, gel, or a natural buff and shine.'
    ],
    benefits: [
      'Shaped, healthy nails',
      'Softened cuticles and hands',
      'Tension released from hands and forearms',
      'Nourished, smoother skin',
      'Improved nail strength with regular treatment',
      'A quiet, meditative moment of care'
    ],
    whatToExpect: 'Remove any existing nail polish before your appointment if possible. Let your therapist know your preferred nail shape and finish at the start. If you\'d like gel or long-wear polish, let us know when booking so we can allow the right amount of time.',
    goodFor: ['Nail health & strength', 'Dry or rough hands', 'Pre-event grooming', 'Regular self-care', 'Tension in hands & wrists']
  },

  {
    id: 'barbershop',
    category: 'Beauty & Grooming',
    categorySlug: 'beauty',
    icon: '✂️',
    title: 'Barbershop',
    tagline: 'The gentleman\'s ritual, perfected.',
    duration: '30 – 45 min',
    price: 'From Ksh 800',
    image: 'services/barbershop.jpg',
    heroImage: 'services/barbershop-hero.jpg',
    intro: 'Our Barbershop is a space of unhurried precision — where a haircut is never just a haircut. From clean fades to classic scissor cuts, hot towel shaves to beard sculpting, every service is delivered with the kind of careful attention that turns a routine appointment into something worth looking forward to.',
    description: [
      'Our barbers are trained in both modern and classic techniques — whether you want a sharp contemporary fade, a timeless gentleman\'s cut, or a full hot towel shave. The consultation at the start of every session ensures your barber understands exactly what you\'re after before a single cut is made.',
      'The hot towel shave is a particular highlight — warm towels open the pores, a rich shaving cream is worked in with a brush, and a straight razor glides across the skin for the closest, most comfortable shave possible. The finish includes a cold towel and aftershave balm.'
    ],
    benefits: [
      'Precision haircut tailored to your face shape',
      'Closest shave possible with a straight razor',
      'Beard sculpting and grooming',
      'Hot towel therapy for skin and pores',
      'Scalp massage to stimulate circulation',
      'Professional products for lasting results'
    ],
    whatToExpect: 'Arrive with clean, dry hair. Bring a reference photo if you have a specific style in mind — it helps your barber understand your vision. Our barber will always consult before cutting. Hot towel shaves include a full skin prep and post-shave treatment.',
    goodFor: ['Haircut & styling', 'Hot towel shave', 'Beard grooming', 'Scalp health', 'Special occasions']
  },

  {
    id: 'skincare',
    category: 'Beauty & Grooming',
    categorySlug: 'beauty',
    icon: '🌷',
    title: 'Skincare',
    tagline: 'A prescription for your complexion.',
    duration: '45 – 60 min',
    price: 'From Ksh 2,200',
    image: 'services/skincare.jpg',
    heroImage: 'services/skincare-hero.jpg',
    intro: 'Our Skincare treatments go deeper than a standard facial — they are targeted, results-driven sessions designed to address specific skin concerns. Whether you\'re dealing with hyperpigmentation, acne scarring, premature ageing, or persistent dryness, our therapists work with clinical-grade natural formulations to deliver visible, lasting change.',
    description: [
      'Each skincare session begins with a thorough consultation and skin analysis. Your therapist will identify your primary concerns and select the most appropriate treatment modality — which may include enzyme peels, LED therapy, high-frequency treatment, or targeted active serums applied under occlusion.',
      'Unlike a general facial, skincare sessions are outcome-focused. Your therapist will track your skin\'s progress across multiple visits and adapt the protocol accordingly. A bespoke homecare plan is provided at the end of each session to extend and protect the results between appointments.'
    ],
    benefits: [
      'Targeted treatment of specific skin concerns',
      'Visible reduction in pigmentation and scarring',
      'Stimulated cell turnover and collagen production',
      'Deeply purified and balanced skin',
      'Professional-grade results without downtime',
      'Bespoke homecare plan included'
    ],
    whatToExpect: 'Come with a clean face and no active sunburn. Please disclose any prescription topical medications (e.g. retinoids or antibiotics) as these may affect which treatments are suitable. Some mild redness or sensitivity is normal after active treatments — this resolves within a few hours.',
    goodFor: ['Hyperpigmentation', 'Acne & scarring', 'Premature ageing', 'Persistent dryness', 'Uneven skin texture']
  }

];

/* ─── Helper: get one service by ID ─── */
function getServiceById(id) {
  return SERVICES.find(s => s.id === id) || null;
}

/* ─── Helper: get all services in a category ─── */
function getServicesByCategory(slug) {
  return SERVICES.filter(s => s.categorySlug === slug);
}