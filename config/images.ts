/* ═══════════════════════════════════════════════════════════════
   SITE IMAGES — Single Source of Truth (Barrel Export)
   
   All image URLs used across the site are imported from
   modular sub-files and re-exported as a single typed object.
   
   Usage:  import { SITE_IMAGES } from '@/config/images';
           SITE_IMAGES.home.hero.steel
           SITE_IMAGES.welding.automotive.hero
           SITE_IMAGES.industries.oilGas.products.refineryAerial
   ═══════════════════════════════════════════════════════════════ */

import { HOME_IMAGES } from './images/home';
import { INDUSTRY_IMAGES } from './images/industries';
import { WELDING_IMAGES } from './images/welding';
import { STEEL_IMAGES } from './images/steel';
import { ABOUT_IMAGES } from './images/about';
import { MISC_IMAGES } from './images/misc';
import { POWER_TOOLS_IMAGES } from './images/powerTools';
import { PROCESS_PIPING_IMAGES } from './images/processPiping';
import { DIE_CASTING_IMAGES } from './images/dieCasting';
import { INDUSTRIAL_TECH_IMAGES } from './images/industrialTech';
import { FABRICATED_STRUCTURES_IMAGES } from './images/fabricated';
import { PROCESS_EQUIPMENTS_IMAGES } from './images/processEquipments';
import { FUTURE_ASPECTS_IMAGES } from './images/futureAspects';
import { CABLE_TRAY_IMAGES } from './images/cableTrays';
import { WIRE_CABLE_IMAGES } from './images/wireCables';

export const SITE_IMAGES = {
  home:        HOME_IMAGES,
  industries:  INDUSTRY_IMAGES,
  welding:     WELDING_IMAGES,
  steel:       STEEL_IMAGES,
  about:       ABOUT_IMAGES,
  misc:        MISC_IMAGES,
  powerTools:      POWER_TOOLS_IMAGES,
  processPiping:         PROCESS_PIPING_IMAGES,
  dieCasting:            DIE_CASTING_IMAGES,
  industrialTech:        INDUSTRIAL_TECH_IMAGES,
  fabricatedStructures:  FABRICATED_STRUCTURES_IMAGES,
  processEquipments:     PROCESS_EQUIPMENTS_IMAGES,
  futureAspects:         FUTURE_ASPECTS_IMAGES,
  cableTrays:            CABLE_TRAY_IMAGES,
  wireCables:            WIRE_CABLE_IMAGES,
} as const;