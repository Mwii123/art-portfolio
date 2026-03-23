/**
 * artworks.js — Your central data file
 *
 * HOW TO ADD YOUR OWN PAINTINGS:
 * ─────────────────────────────────────────────────────────────
 * 1. Put your image files inside  public/images/
 * 2. Set  imgSrc: '/images/your-painting.jpg'  on the artwork
 * 3. Remove the  paintStyle  field (it's only used for canvas placeholders)
 *
 * FIELDS:
 *   id         – unique string identifier
 *   title      – artwork title shown in UI
 *   category   – display label (e.g. "Oil on Canvas")
 *   filter     – must match one of: 'painting' | 'watercolour' | 'mixed' | 'drawing'
 *   year       – year string, e.g. "2024"
 *   dimensions – e.g. "120×90 cm"
 *   imgSrc     – path to image in /public (leave null to use canvas placeholder)
 *   paintStyle – placeholder style: 'brush' | 'wash' | 'geometry' | 'drip'
 *   featured   – true = shows in the Featured section at top
 *   aspectW    – canvas placeholder width  (ignored when imgSrc is set)
 *   aspectH    – canvas placeholder height (ignored when imgSrc is set)
 * ─────────────────────────────────────────────────────────────
 */

export const artworks = [
  // ── Featured works (shown in the hero grid) ──
  {
    id:         'dissolution-at-dusk',
    title:      'Dissolution at Dusk',
    category:   'Oil on Canvas',
    filter:     'painting',
    year:       '2024',
    dimensions: '120×90 cm',
    imgSrc:     null,
    paintStyle: 'brush',
    featured:   true,
    aspectW:    600,
    aspectH:    700,
  },
  {
    id:         'pale-morning',
    title:      'Pale Morning',
    category:   'Watercolour',
    filter:     'watercolour',
    year:       '2023',
    dimensions: '60×45 cm',
    imgSrc:     null,
    paintStyle: 'wash',
    featured:   true,
    aspectW:    600,
    aspectH:    380,
  },
  {
    id:         'residue-7',
    title:      'Residue #7',
    category:   'Mixed Media',
    filter:     'mixed',
    year:       '2024',
    dimensions: '80×80 cm',
    imgSrc:     null,
    paintStyle: 'geometry',
    featured:   true,
    aspectW:    600,
    aspectH:    380,
  },

  // ── Gallery works ──
  {
    id:         'ember-study',
    title:      'Ember Study',
    category:   'Painting',
    filter:     'painting',
    year:       '2024',
    dimensions: '50×70 cm',
    imgSrc:     null,
    paintStyle: 'brush',
    featured:   false,
    aspectW:    400,
    aspectH:    500,
  },
  {
    id:         'coastal-haze',
    title:      'Coastal Haze',
    category:   'Watercolour',
    filter:     'watercolour',
    year:       '2023',
    dimensions: '40×30 cm',
    imgSrc:     null,
    paintStyle: 'wash',
    featured:   false,
    aspectW:    400,
    aspectH:    300,
  },
  {
    id:         'untitled-iii',
    title:      'Untitled III',
    category:   'Mixed Media',
    filter:     'mixed',
    year:       '2023',
    dimensions: '60×60 cm',
    imgSrc:     null,
    paintStyle: 'geometry',
    featured:   false,
    aspectW:    400,
    aspectH:    400,
  },
  {
    id:         'root-forms',
    title:      'Root Forms',
    category:   'Drawing',
    filter:     'drawing',
    year:       '2022',
    dimensions: '30×42 cm',
    imgSrc:     null,
    paintStyle: 'drip',
    featured:   false,
    aspectW:    400,
    aspectH:    580,
  },
  {
    id:         'golden-hour',
    title:      'Golden Hour',
    category:   'Painting',
    filter:     'painting',
    year:       '2024',
    dimensions: '90×60 cm',
    imgSrc:     null,
    paintStyle: 'brush',
    featured:   false,
    aspectW:    400,
    aspectH:    350,
  },
  {
    id:         'still-fragment',
    title:      'Still Fragment',
    category:   'Watercolour',
    filter:     'watercolour',
    year:       '2023',
    dimensions: '50×65 cm',
    imgSrc:     null,
    paintStyle: 'wash',
    featured:   false,
    aspectW:    400,
    aspectH:    460,
  },
  {
    id:         'structure-4',
    title:      'Structure #4',
    category:   'Mixed Media',
    filter:     'mixed',
    year:       '2022',
    dimensions: '70×70 cm',
    imgSrc:     null,
    paintStyle: 'geometry',
    featured:   false,
    aspectW:    400,
    aspectH:    300,
  },
  {
    id:         'flux',
    title:      'Flux',
    category:   'Painting',
    filter:     'painting',
    year:       '2024',
    dimensions: '100×80 cm',
    imgSrc:     null,
    paintStyle: 'drip',
    featured:   false,
    aspectW:    400,
    aspectH:    500,
  },
  {
    id:         'soft-archive',
    title:      'Soft Archive',
    category:   'Drawing',
    filter:     'drawing',
    year:       '2022',
    dimensions: '21×29 cm',
    imgSrc:     null,
    paintStyle: 'wash',
    featured:   false,
    aspectW:    400,
    aspectH:    380,
  },
]

export const filters = ['all', 'painting', 'watercolour', 'mixed', 'drawing']
