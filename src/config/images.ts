import heroImgSrc from "../assets/images/hero_plumber_la_1791540698909.jpg";
import areaImgSrc from "../assets/images/la_area_skyline_1791540717320.jpg";
import craftPipesImgSrc from "../assets/images/gallery_craft_pipes_1791541324456.jpg";
import serviceVanImgSrc from "../assets/images/emergency_service_van_1791541334940.jpg";
import neighborhoodsImgSrc from "../assets/images/la_neighborhoods_scenic_1791541343627.jpg";
import bathroomFixturesImgSrc from "../assets/images/modern_bathroom_fixtures_1791541365692.jpg";
import toolsWorkshopImgSrc from "../assets/images/tools_workshop_plumbing_1791541375597.jpg";

import burstPipeImgSrc from "../assets/images/problem_burst_pipe_1791542957671.jpg";
import cloggedDrainImgSrc from "../assets/images/problem_clogged_drain_1791542966685.jpg";
import pipeLeakImgSrc from "../assets/images/problem_pipe_leak_1791542976369.jpg";
import waterHeaterImgSrc from "../assets/images/problem_water_heater_1791543007671.jpg";
import sewerLineImgSrc from "../assets/images/problem_sewer_line_1791543018205.jpg";
import brokenFixtureImgSrc from "../assets/images/problem_broken_fixture_1791543027270.jpg";

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const heroImage: ImageSlot = {
  src: heroImgSrc,
  alt: "Professional plumber in uniform repairing copper pipes under a kitchen sink in a modern Los Angeles home",
  width: 1200,
  height: 1200,
};

export const areaImage: ImageSlot = {
  src: areaImgSrc,
  alt: "Scenic residential street in Los Angeles with iconic palm trees and city skyline during golden hour",
  width: 1200,
  height: 1200,
};

export const craftPipesImage: ImageSlot = {
  src: craftPipesImgSrc,
  alt: "Clean copper piping and brass valve installation in residential property",
  width: 1200,
  height: 1200,
};

export const serviceVanImage: ImageSlot = {
  src: serviceVanImgSrc,
  alt: "Service work van parked along a palm-lined street in Los Angeles",
  width: 1200,
  height: 1200,
};

export const neighborhoodsImage: ImageSlot = {
  src: neighborhoodsImgSrc,
  alt: "Sunlit residential neighborhood in Los Angeles with palm trees and classic architecture",
  width: 1200,
  height: 1200,
};

export const bathroomFixturesImage: ImageSlot = {
  src: bathroomFixturesImgSrc,
  alt: "Contemporary bathroom featuring freestanding tub and modern fixtures",
  width: 1200,
  height: 1200,
};

export const toolsWorkshopImage: ImageSlot = {
  src: toolsWorkshopImgSrc,
  alt: "Professional plumbing diagnostic tools, gauges, and inspection gear on workbench",
  width: 1200,
  height: 1200,
};

export const problemImages: Record<string, ImageSlot> = {
  emergency: {
    src: burstPipeImgSrc,
    alt: "Burst water pipe actively spraying water under residential sink",
    width: 1200,
    height: 1200,
  },
  "drain-cleaning": {
    src: cloggedDrainImgSrc,
    alt: "Clogged kitchen sink with standing dirty water",
    width: 1200,
    height: 1200,
  },
  "leak-detection": {
    src: pipeLeakImgSrc,
    alt: "Water leak dripping steadily from brass supply valve",
    width: 1200,
    height: 1200,
  },
  "water-heaters": {
    src: waterHeaterImgSrc,
    alt: "Water heater tank leaking with water pooling on garage floor",
    width: 1200,
    height: 1200,
  },
  "sewer-service": {
    src: sewerLineImgSrc,
    alt: "Outdoor sewer cleanout pipe showing sewage backup signs",
    width: 1200,
    height: 1200,
  },
  fixtures: {
    src: brokenFixtureImgSrc,
    alt: "Broken bathroom sink faucet leaking water around handle into basin",
    width: 1200,
    height: 1200,
  },
};
