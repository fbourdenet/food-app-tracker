export interface Root {
  count: number
  page: string
  page_count: number
  page_size: number
  products: OpenFoodFacts[]
  skip: number
}

export interface OpenFoodFacts {
  _id: string
  _keywords: string[]
  added_countries_tags: any[]
  additives_n?: number
  additives_old_n?: number
  additives_old_tags: string[]
  additives_original_tags: string[]
  additives_tags: string[]
  allergens: string
  allergens_from_ingredients: string
  allergens_from_user: string
  allergens_hierarchy: string[]
  allergens_lc: string
  allergens_tags: string[]
  amino_acids_tags: any[]
  brands: string
  brands_tags: string[]
  categories: string
  categories_hierarchy: string[]
  categories_lc: string
  categories_old: string
  categories_properties: CategoriesProperties
  categories_properties_tags: string[]
  categories_tags: string[]
  category_properties?: CategoryProperties
  checkers_tags: any[]
  ciqual_food_name_tags?: string[]
  cities_tags: string[]
  code: string
  codes_tags: string[]
  compared_to_category: string
  complete: number
  completed_t?: number
  completeness: string
  correctors_tags: string[]
  countries: string
  countries_hierarchy: string[]
  countries_lc: string
  countries_tags: string[]
  created_t: number
  creator: string
  data_quality_bugs_tags: any[]
  data_quality_errors_tags: any[]
  data_quality_info_tags: string[]
  data_quality_tags: string[]
  data_quality_warnings_tags: string[]
  data_sources: string
  data_sources_tags: string[]
  debug_param_sorted_langs: string[]
  ecoscore_data: EcoscoreData
  ecoscore_grade: string
  ecoscore_score?: number
  ecoscore_tags: string[]
  editors_tags: string[]
  emb_codes: string
  emb_codes_tags: string[]
  entry_dates_tags: string[]
  expiration_date: string
  food_groups: string
  food_groups_tags: string[]
  generic_name_fr: string
  id: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  image_ingredients_small_url?: string
  image_ingredients_thumb_url?: string
  image_ingredients_url?: string
  image_nutrition_small_url: string
  image_nutrition_thumb_url: string
  image_nutrition_url: string
  image_packaging_small_url?: string
  image_packaging_thumb_url?: string
  image_packaging_url?: string
  image_small_url: string
  image_thumb_url: string
  image_url: string
  images: Images
  informers_tags: string[]
  ingredients?: Ingredient[]
  ingredients_analysis?: IngredientsAnalysis
  ingredients_analysis_tags?: string[]
  ingredients_from_or_that_may_be_from_palm_oil_n?: number
  ingredients_from_palm_oil_n?: number
  ingredients_from_palm_oil_tags: any[]
  ingredients_hierarchy?: string[]
  ingredients_n?: number
  ingredients_n_tags?: string[]
  ingredients_original_tags?: string[]
  ingredients_percent_analysis?: number
  ingredients_tags?: string[]
  ingredients_text?: string
  ingredients_text_fr: string
  ingredients_text_with_allergens: string
  ingredients_text_with_allergens_fr: string
  ingredients_that_may_be_from_palm_oil_n?: number
  ingredients_that_may_be_from_palm_oil_tags: any[]
  ingredients_with_specified_percent_n?: number
  ingredients_with_specified_percent_sum: any
  ingredients_with_unspecified_percent_n?: number
  ingredients_with_unspecified_percent_sum: any
  interface_version_created: string
  interface_version_modified: string
  known_ingredients_n?: number
  labels: string
  labels_hierarchy: string[]
  labels_lc: string
  labels_old: string
  labels_tags: string[]
  lang: string
  languages: Languages
  languages_codes: LanguagesCodes
  languages_hierarchy: string[]
  languages_tags: string[]
  last_edit_dates_tags: string[]
  last_editor: string
  last_image_dates_tags: string[]
  last_image_t: number
  last_modified_by: string
  last_modified_t: number
  lc: string
  link: string
  main_countries_tags: any[]
  manufacturing_places: string
  manufacturing_places_tags: string[]
  max_imgid: string
  minerals_tags: any[]
  misc_tags: string[]
  no_nutrition_data?: string
  nova_group?: number
  nova_group_debug: string
  nova_groups?: string
  nova_groups_markers?: NovaGroupsMarkers
  nova_groups_tags: string[]
  nucleotides_tags: any[]
  nutrient_levels: NutrientLevels
  nutrient_levels_tags: string[]
  nutriments: Nutriments
  nutriscore_data: NutriscoreData
  nutriscore_grade: string
  nutriscore_score: number
  nutriscore_score_opposite: number
  nutrition_data: string
  nutrition_data_per: string
  nutrition_data_prepared?: string
  nutrition_data_prepared_per: string
  nutrition_grade_fr: string
  nutrition_grades: string
  nutrition_grades_tags: string[]
  nutrition_score_beverage: number
  nutrition_score_debug: string
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?: number
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: any
  obsolete?: string
  obsolete_since_date?: string
  origin_fr: string
  origins: string
  origins_hierarchy: string[]
  origins_lc: string
  origins_old?: string
  origins_tags: string[]
  other_nutritional_substances_tags: any[]
  packaging: string
  packaging_hierarchy: string[]
  packaging_lc: string
  packaging_old?: string
  packaging_old_before_taxonomization?: string
  packaging_tags: string[]
  packaging_text_fr: string
  packagings: Packaging3[]
  packagings_complete?: number
  photographers_tags: string[]
  pnns_groups_1: string
  pnns_groups_1_tags: string[]
  pnns_groups_2: string
  pnns_groups_2_tags: string[]
  popularity_key: any
  popularity_tags: string[]
  product_name: string
  product_name_fr: string
  product_quantity?: number
  purchase_places: string
  purchase_places_tags: any[]
  quantity: string
  removed_countries_tags: any[]
  rev: number
  scans_n: number
  selected_images: SelectedImages
  sortkey?: number
  states: string
  states_hierarchy: string[]
  states_tags: string[]
  stores: string
  stores_tags: string[]
  teams?: string
  teams_tags?: string[]
  traces: string
  traces_from_ingredients: string
  traces_from_user: string
  traces_hierarchy: any[]
  traces_lc: string
  traces_tags: any[]
  unique_scans_n: number
  unknown_ingredients_n?: number
  unknown_nutrients_tags: any[]
  update_key: string
  url: string
  vitamins_tags: any[]
  weighters_tags?: any[]
  carbon_footprint_from_known_ingredients_debug?: string
  carbon_footprint_percent_of_known_ingredients?: string
  ecoscore_extended_data?: EcoscoreExtendedData
  ecoscore_extended_data_version?: string
  packaging_materials_tags?: any[]
  packaging_recycling_tags?: any[]
  packaging_shapes_tags?: any[]
  weighers_tags?: any[]
  specific_ingredients?: SpecificIngredient[]
  nova_group_error?: string
  nutrition_score_warning_no_fruits_vegetables_nuts?: number
}

export interface CategoriesProperties {
  "agribalyse_proxy_food_code:en"?: string
  "ciqual_food_code:en"?: string
}

export interface CategoryProperties {
  "ciqual_food_name:en"?: string
  "ciqual_food_name:fr"?: string
}

export interface EcoscoreData {
  adjustments: Adjustments
  agribalyse: Agribalyse
  grade?: string
  grades?: Grades
  missing: Missing
  missing_data_warning?: number
  score?: number
  scores: Scores
  status: string
  missing_agribalyse_match_warning?: number
  missing_key_data?: number
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients
  packaging: Packaging
  production_system: ProductionSystem
  threatened_species: ThreatenedSpecies
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[]
  epi_score: any
  epi_value: number
  origins_from_origins_field: string[]
  transportation_score: any
  transportation_scores: TransportationScores
  transportation_value: number
  transportation_values: TransportationValues
  value: number
  values: Values
  warning?: string
}

export interface AggregatedOrigin {
  epi_score: any
  origin: string
  percent: any
  transportation_score: any
}

export interface TransportationScores {
  ad: any
  al: number
  at: any
  ax: any
  ba: any
  be: any
  bg: any
  ch: any
  cy: any
  cz: any
  de: any
  dk: any
  dz: any
  ee: any
  eg: any
  es: any
  fi: any
  fo: any
  fr: any
  gg: any
  gi: any
  gr: any
  hr: any
  hu: any
  ie: any
  il: any
  im: any
  is: any
  it: any
  je: any
  lb: any
  li: any
  lt: any
  lu: any
  lv: any
  ly: any
  ma: any
  mc: any
  md: any
  me: any
  mk: any
  mt: any
  nl: any
  no: any
  pl: any
  ps: any
  pt: any
  ro: any
  rs: any
  se: any
  si: any
  sj: any
  sk: any
  sm: any
  sy: any
  tn: any
  tr: any
  ua: any
  uk: any
  us: number
  va: any
  world: number
  xk: any
}

export interface TransportationValues {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Values {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number
  packagings?: Packaging2[]
  score?: number
  value: number
  warning: string
}

export interface Packaging2 {
  ecoscore_material_score: number
  ecoscore_shape_ratio: any
  material: string
  shape: string
  non_recyclable_and_non_biodegradable?: string
}

export interface ProductionSystem {
  labels: any[]
  value: number
  warning: string
}

export interface ThreatenedSpecies {
  warning?: string
}

export interface Agribalyse {
  agribalyse_proxy_food_code?: string
  co2_agriculture?: string
  co2_consumption?: string
  co2_distribution?: string
  co2_packaging?: string
  co2_processing?: string
  co2_total?: string
  co2_transportation?: string
  code?: string
  dqr?: string
  ef_agriculture?: string
  ef_consumption?: string
  ef_distribution?: string
  ef_packaging?: string
  ef_processing?: string
  ef_total?: string
  ef_transportation?: string
  is_beverage?: number
  name_en?: string
  name_fr?: string
  score?: number
  version?: string
  warning?: string
}

export interface Grades {
  ad: string
  al: string
  at: string
  ax: string
  ba: string
  be: string
  bg: string
  ch: string
  cy: string
  cz: string
  de: string
  dk: string
  dz: string
  ee: string
  eg: string
  es: string
  fi: string
  fo: string
  fr: string
  gg: string
  gi: string
  gr: string
  hr: string
  hu: string
  ie: string
  il: string
  im: string
  is: string
  it: string
  je: string
  lb: string
  li: string
  lt: string
  lu: string
  lv: string
  ly: string
  ma: string
  mc: string
  md: string
  me: string
  mk: string
  mt: string
  nl: string
  no: string
  pl: string
  ps: string
  pt: string
  ro: string
  rs: string
  se: string
  si: string
  sj: string
  sk: string
  sm: string
  sy: string
  tn: string
  tr: string
  ua: string
  uk: string
  us: string
  va: string
  world: string
  xk: string
}

export interface Missing {
  labels: number
  packagings: number
  agb_category?: number
  ingredients?: number
  origins?: number
}

export interface Scores {
  ad?: number
  al?: number
  at?: number
  ax?: number
  ba?: number
  be?: number
  bg?: number
  ch?: number
  cy?: number
  cz?: number
  de?: number
  dk?: number
  dz?: number
  ee?: number
  eg?: number
  es?: number
  fi?: number
  fo?: number
  fr?: number
  gg?: number
  gi?: number
  gr?: number
  hr?: number
  hu?: number
  ie?: number
  il?: number
  im?: number
  is?: number
  it?: number
  je?: number
  lb?: number
  li?: number
  lt?: number
  lu?: number
  lv?: number
  ly?: number
  ma?: number
  mc?: number
  md?: number
  me?: number
  mk?: number
  mt?: number
  nl?: number
  no?: number
  pl?: number
  ps?: number
  pt?: number
  ro?: number
  rs?: number
  se?: number
  si?: number
  sj?: number
  sk?: number
  sm?: number
  sy?: number
  tn?: number
  tr?: number
  ua?: number
  uk?: number
  us?: number
  va?: number
  world?: number
  xk?: number
}

export interface Images {
  "1": N1
  "10"?: N10
  "2": N2
  "3"?: N3
  "4"?: N4
  "5"?: N5
  "6"?: N6
  "7"?: N7
  "8"?: N8
  "9"?: N9
  front_fr: FrontFr
  ingredients_fr?: IngredientsFr
  nutrition_fr: NutritionFr
  packaging_fr?: PackagingFr
  "11"?: N11
}

export interface N1 {
  sizes: Sizes
  uploaded_t: number
  uploader: string
}

export interface Sizes {
  "100": N100
  "400": N400
  full: Full
}

export interface N100 {
  h: number
  w: number
}

export interface N400 {
  h: number
  w: number
}

export interface Full {
  h: number
  w: number
}

export interface N10 {
  sizes: Sizes2
  uploaded_t: number
  uploader: string
}

export interface Sizes2 {
  "100": N1002
  "400": N4002
  full: Full2
}

export interface N1002 {
  h: number
  w: number
}

export interface N4002 {
  h: number
  w: number
}

export interface Full2 {
  h: number
  w: number
}

export interface N2 {
  sizes: Sizes3
  uploaded_t: number
  uploader: string
}

export interface Sizes3 {
  "100": N1003
  "400": N4003
  full: Full3
}

export interface N1003 {
  h: number
  w: number
}

export interface N4003 {
  h: number
  w: number
}

export interface Full3 {
  h: number
  w: number
}

export interface N3 {
  sizes: Sizes4
  uploaded_t: any
  uploader: string
}

export interface Sizes4 {
  "100": N1004
  "400": N4004
  full: Full4
}

export interface N1004 {
  h: number
  w: number
}

export interface N4004 {
  h: number
  w: number
}

export interface Full4 {
  h: number
  w: number
}

export interface N4 {
  sizes: Sizes5
  uploaded_t: any
  uploader: string
}

export interface Sizes5 {
  "100": N1005
  "400": N4005
  full: Full5
}

export interface N1005 {
  h: number
  w: number
}

export interface N4005 {
  h: number
  w: number
}

export interface Full5 {
  h: number
  w: number
}

export interface N5 {
  sizes: Sizes6
  uploaded_t: number
  uploader: string
}

export interface Sizes6 {
  "100": N1006
  "400": N4006
  full: Full6
}

export interface N1006 {
  h: number
  w: number
}

export interface N4006 {
  h: number
  w: number
}

export interface Full6 {
  h: number
  w: number
}

export interface N6 {
  sizes: Sizes7
  uploaded_t: number
  uploader: string
}

export interface Sizes7 {
  "100": N1007
  "400": N4007
  full: Full7
}

export interface N1007 {
  h: number
  w: number
}

export interface N4007 {
  h: number
  w: number
}

export interface Full7 {
  h: number
  w: number
}

export interface N7 {
  sizes: Sizes8
  uploaded_t: number
  uploader: string
}

export interface Sizes8 {
  "100": N1008
  "400": N4008
  full: Full8
}

export interface N1008 {
  h: number
  w: number
}

export interface N4008 {
  h: number
  w: number
}

export interface Full8 {
  h: number
  w: number
}

export interface N8 {
  sizes: Sizes9
  uploaded_t: number
  uploader: string
}

export interface Sizes9 {
  "100": N1009
  "400": N4009
  full: Full9
}

export interface N1009 {
  h: number
  w: number
}

export interface N4009 {
  h: number
  w: number
}

export interface Full9 {
  h: number
  w: number
}

export interface N9 {
  sizes: Sizes10
  uploaded_t: number
  uploader: string
}

export interface Sizes10 {
  "100": N10010
  "400": N40010
  full: Full10
}

export interface N10010 {
  h: number
  w: number
}

export interface N40010 {
  h: number
  w: number
}

export interface Full10 {
  h: number
  w: number
}

export interface FrontFr {
  angle: any
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize?: string
  rev: string
  sizes: Sizes11
  white_magic?: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes11 {
  "100": N10011
  "200": N200
  "400": N40011
  full: Full11
}

export interface N10011 {
  h: number
  w: number
}

export interface N200 {
  h: number
  w: number
}

export interface N40011 {
  h: number
  w: number
}

export interface Full11 {
  h: number
  w: number
}

export interface IngredientsFr {
  angle: any
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize?: string
  rev: string
  sizes: Sizes12
  white_magic?: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes12 {
  "100": N10012
  "200": N2002
  "400": N40012
  full: Full12
}

export interface N10012 {
  h: number
  w: number
}

export interface N2002 {
  h: number
  w: number
}

export interface N40012 {
  h: number
  w: number
}

export interface Full12 {
  h: number
  w: number
}

export interface NutritionFr {
  angle: any
  coordinates_image_size: string
  geometry: string
  imgid: any
  normalize?: string
  rev: any
  sizes: Sizes13
  white_magic?: string
  x1: any
  x2: any
  y1: any
  y2: any
}

export interface Sizes13 {
  "100": N10013
  "200": N2003
  "400": N40013
  full: Full13
}

export interface N10013 {
  h: number
  w: number
}

export interface N2003 {
  h: number
  w: number
}

export interface N40013 {
  h: number
  w: number
}

export interface Full13 {
  h: number
  w: number
}

export interface PackagingFr {
  angle: any
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize?: string
  rev: string
  sizes: Sizes14
  white_magic?: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes14 {
  "100": N10014
  "200": N2004
  "400": N40014
  full: Full14
}

export interface N10014 {
  h: number
  w: number
}

export interface N2004 {
  h: number
  w: number
}

export interface N40014 {
  h: number
  w: number
}

export interface Full14 {
  h: number
  w: number
}

export interface N11 {
  sizes: Sizes15
  uploaded_t: number
  uploader: string
}

export interface Sizes15 {
  "100": N10015
  "400": N40015
  full: Full15
}

export interface N10015 {
  h: number
  w: number
}

export interface N40015 {
  h: number
  w: number
}

export interface Full15 {
  h: number
  w: number
}

export interface Ingredient {
  id: string
  percent_estimate: any
  percent_max: any
  percent_min: any
  rank?: number
  text: string
  vegan?: string
  vegetarian?: string
  origins?: string
  percent?: string
  has_sub_ingredients?: string
}

export interface IngredientsAnalysis {
  "en:non-vegan": string[]
  "en:maybe-vegetarian"?: string[]
}

export interface Languages {
  "en:french": number
}

export interface LanguagesCodes {
  fr: number
}

export interface NovaGroupsMarkers {
  "3": string[][]
  "4"?: string[][]
}

export interface NutrientLevels {
  fat: string
  salt: string
  "saturated-fat": string
  sugars: string
}

export interface Nutriments {
  calcium?: string
  calcium_100g?: string
  calcium_label?: string
  calcium_unit?: string
  calcium_value?: number
  carbohydrates: any
  carbohydrates_100g: any
  carbohydrates_unit: string
  carbohydrates_value: any
  energy: number
  "energy-kcal": number
  "energy-kcal_100g": number
  "energy-kcal_unit": string
  "energy-kcal_value": number
  "energy-kcal_value_computed": any
  "energy-kj"?: number
  "energy-kj_100g"?: number
  "energy-kj_unit"?: string
  "energy-kj_value"?: number
  "energy-kj_value_computed"?: string
  energy_100g: number
  energy_unit: string
  energy_value: number
  fat: any
  fat_100g: any
  fat_unit: string
  fat_value: any
  fiber: any
  fiber_100g: any
  fiber_unit: string
  fiber_value: any
  "fruits-vegetables-nuts-estimate-from-ingredients_100g": any
  "fruits-vegetables-nuts-estimate-from-ingredients_serving": any
  "nova-group"?: number
  "nova-group_100g"?: number
  "nova-group_serving"?: number
  "nutrition-score-fr": number
  "nutrition-score-fr_100g": number
  proteins: string
  proteins_100g: string
  proteins_unit: string
  proteins_value: string
  salt: any
  salt_100g: any
  salt_unit: string
  salt_value: any
  "saturated-fat": any
  "saturated-fat_100g": any
  "saturated-fat_unit": string
  "saturated-fat_value": any
  sodium: any
  sodium_100g: any
  sodium_unit: string
  sodium_value: any
  sugars: any
  sugars_100g: any
  sugars_unit: string
  sugars_value: any
  "carbon-footprint-from-known-ingredients_100g"?: string
  "carbon-footprint-from-known-ingredients_product"?: string
  fiber_modifier?: string
}

export interface NutriscoreData {
  energy: number
  energy_points: number
  energy_value: number
  fiber: any
  fiber_points: number
  fiber_value: any
  fruits_vegetables_nuts_colza_walnut_olive_oils: any
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: any
  grade: string
  is_beverage: number
  is_cheese: any
  is_fat: number
  is_water: number
  negative_points: number
  positive_points: number
  proteins: string
  proteins_points: number
  proteins_value: string
  saturated_fat: any
  saturated_fat_points: number
  saturated_fat_ratio: number
  saturated_fat_ratio_points: number
  saturated_fat_ratio_value: number
  saturated_fat_value: any
  score: number
  sodium: number
  sodium_points: number
  sodium_value: number
  sugars: any
  sugars_points: number
  sugars_value: any
}

export interface Packaging3 {
  material?: string
  shape?: string
}

export interface SelectedImages {
  front: Front
  ingredients?: Ingredients
  nutrition: Nutrition
  packaging?: Packaging4
}

export interface Front {
  display: Display
  small: Small
  thumb: Thumb
}

export interface Display {
  fr: string
}

export interface Small {
  fr: string
}

export interface Thumb {
  fr: string
}

export interface Ingredients {
  display: Display2
  small: Small2
  thumb: Thumb2
}

export interface Display2 {
  fr: string
}

export interface Small2 {
  fr: string
}

export interface Thumb2 {
  fr: string
}

export interface Nutrition {
  display: Display3
  small: Small3
  thumb: Thumb3
}

export interface Display3 {
  fr: string
}

export interface Small3 {
  fr: string
}

export interface Thumb3 {
  fr: string
}

export interface Packaging4 {
  display: Display4
  small: Small4
  thumb: Thumb4
}

export interface Display4 {
  fr: string
}

export interface Small4 {
  fr: string
}

export interface Thumb4 {
  fr: string
}

export interface EcoscoreExtendedData {
  impact: Impact
}

export interface Impact {
  ef_single_score_log_stddev: string
  likeliest_impacts: LikeliestImpacts
  likeliest_recipe: LikeliestRecipe
  mass_ratio_uncharacterized: string
  uncharacterized_ingredients: UncharacterizedIngredients
  uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportion
  uncharacterized_ingredients_ratio: UncharacterizedIngredientsRatio
  warnings: string[]
}

export interface LikeliestImpacts {
  Climate_change: string
  EF_single_score: string
}

export interface LikeliestRecipe {
  "en:corn_starch": string
  "en:e412"?: string
  "en:exhausted_vanilla_pod"?: number
  "en:lactic_ferments": any
  "en:natural_vanilla_flavouring"?: string
  "en:skimmed_milk": string
  "en:sugar": string
  "en:water": any
  "fr:concentre_de_carotte_et_de_citrouille"?: string
  "en:blueberry"?: string
  "en:concentrated_lemon_juice"?: string
  "en:e440a"?: string
  "en:natural_flavouring"?: string
}

export interface UncharacterizedIngredients {
  impact: string[]
  nutrition: string[]
}

export interface UncharacterizedIngredientsMassProportion {
  impact: string
  nutrition: any
}

export interface UncharacterizedIngredientsRatio {
  impact: string
  nutrition: any
}

export interface SpecificIngredient {
  id: string
  ingredient: string
  label: string
  origins: string
}
