// Kavel tool catalog — mirrors src/config/tool-pages.ts in the kavel site.
// Keep slugs/models/hubs in sync with the site so deep links stay valid.

export const KAVEL_BASE_URL = "https://www.kavel.ai";

export type KavelModel = {
  id: string;
  name: string;
  mediaType: "image" | "video";
  freeTier: boolean;
  summary: string;
};

export const KAVEL_MODELS: KavelModel[] = [
  {
    id: "nano-banana-2-lite",
    name: "Nano Banana 2 Lite",
    mediaType: "image",
    freeTier: true,
    summary:
      "Fast photo-editing image model. Strong at identity-preserving image-to-image edits (change hair, outfit, style) while keeping the same face and pose.",
  },
  {
    id: "veo-3-1",
    name: "Veo 3.1",
    mediaType: "video",
    freeTier: true,
    summary:
      "Video model for text-to-video and image-to-video. Turns a still photo into short, coherent motion clips.",
  },
];

export type KavelTool = {
  slug: string;
  hub: "image" | "video";
  title: string;
  keyword: string;
  desc: string;
  model: string;
  // How the generator opens (mirrors defaultTab/defaultMode in tool-pages.ts).
  scene: "text-to-image" | "image-to-image" | "text-to-video" | "image-to-video";
  needsPhoto: boolean;
  // The model-tuned prompt recipe the site presets on this page.
  recipe: string;
};

export const KAVEL_TOOLS: KavelTool[] = [
  {
    slug: "ai-dance-video-generator",
    hub: "video",
    title: "AI Dance Video Generator",
    keyword: "AI Dance Video Generator",
    desc: "Turn a photo into a dancing video.",
    model: "veo-3-1",
    scene: "image-to-video",
    needsPhoto: true,
    recipe:
      "Make the person in the photo do an energetic street dance — full body in frame, smooth on-beat moves, dynamic camera.",
  },
  {
    slug: "ai-hairstyle-changer",
    hub: "image",
    title: "AI Hairstyle Changer",
    keyword: "AI Hairstyle Changer",
    desc: "Try a new hairstyle on your own photo.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Restyle the hair in the photo into a modern shoulder-length layered cut with soft waves, keeping the same face, skin, and expression. Natural lighting, photorealistic.",
  },
  {
    slug: "ai-outfit-generator",
    hub: "image",
    title: "AI Outfit Generator",
    keyword: "AI Outfit Generator",
    desc: "Change the outfit on your photo.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Change the clothing in the photo into a well-tailored navy-blue blazer over a crisp white shirt, keeping the same face, hair, and pose. Photorealistic, natural fabric.",
  },
  {
    slug: "ai-figurine-generator",
    hub: "image",
    title: "AI Figurine Generator",
    keyword: "AI Figurine Generator",
    desc: "Turn your photo into a collectible figurine.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn the person in the photo into a cute collectible vinyl designer figurine on a small round display base, glossy finish, keeping the same face and pose. Studio product-shot lighting, photorealistic render.",
  },
  {
    slug: "ai-selfie-generator",
    hub: "image",
    title: "AI Selfie Generator",
    keyword: "AI Selfie Generator",
    desc: "Turn any photo into a polished selfie.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn this photo into a polished golden-hour portrait selfie of the same person outdoors — warm sunset backlight, softly blurred bokeh background, cinematic colour grade. Keep the same face, hair, and pose. Photorealistic.",
  },
  {
    slug: "ai-muscle-generator",
    hub: "image",
    title: "AI Muscle Generator",
    keyword: "AI Muscle Generator",
    desc: "Add an athletic build to your photo.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Give the person in the photo a more muscular, athletic gym physique with broader shoulders and defined arms, keeping the same fitted shirt, face, and pose. Photorealistic, natural.",
  },
  {
    slug: "ai-sticker-generator",
    hub: "image",
    title: "AI Sticker Generator",
    keyword: "AI Sticker Generator",
    desc: "Turn your photo into a die-cut sticker.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn the person in the photo into a cute die-cut vinyl sticker — bold vector cartoon style, thick white border, flat bright colours, keeping the same face, hair, and pose.",
  },
  {
    slug: "ai-polaroid-generator",
    hub: "image",
    title: "AI Polaroid Generator",
    keyword: "AI Polaroid Generator",
    desc: "Turn your photo into a retro instant print.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn this photo into a vintage Polaroid instant print — classic white frame with a thick blank strip at the bottom, faded warm retro colour, soft film grain and a slight light leak. Keep the same people and pose.",
  },
  {
    slug: "ai-pet-portrait-generator",
    hub: "image",
    title: "AI Pet Portrait Generator",
    keyword: "AI Pet Portrait Generator",
    desc: "Paint your pet as a royal oil painting.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn the animal in the photo into a majestic Renaissance royal oil painting of itself — ornate red velvet coat with gold embroidery and a lace collar, rich classical brushstrokes, dramatic lighting, gilded frame. Keep the same breed, face, and pose.",
  },
  {
    slug: "90s-yearbook-photos",
    hub: "image",
    title: "90s Yearbook Photos",
    keyword: "90s Yearbook Photos",
    desc: "Turn a selfie into a retro class portrait.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn this into a cheesy 1990s high-school yearbook portrait of the same person — mottled blue laser studio backdrop, soft-focus glow, feathered nineties hair, a collared shirt under a sweater, faded scanned-print colour. Keep the same face.",
  },
  {
    slug: "ai-christmas-card-generator",
    hub: "image",
    title: "AI Christmas Card Generator",
    keyword: "AI Christmas Card Generator",
    desc: "Turn a photo into a festive holiday card.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn this into a festive Christmas holiday card photo of the same person — a cosy red knitted sweater and a Santa hat, beside a warmly lit decorated tree with fairy lights, a fireplace and stockings behind, snow through the window. Keep the same face.",
  },
  {
    slug: "hd-photo-converter",
    hub: "image",
    title: "HD Photo Converter",
    keyword: "HD Photo Converter",
    desc: "Turn a blurry picture into a sharp HD photo.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Restore and upscale this photo into a crisp, high-definition picture of the same subject — remove the blur, the noise, and the compression artefacts, recover sharp skin texture, hair detail, and clean edges, and correct washed-out colour to natural tones. Keep the exact same person, pose, clothing, and background.",
  },
  {
    slug: "ai-birthday-photoshoot-generator",
    hub: "image",
    title: "AI Birthday Photoshoot Generator",
    keyword: "AI Birthday Photoshoot",
    desc: "Turn a selfie into a cinematic birthday portrait.",
    model: "nano-banana-2-lite",
    scene: "image-to-image",
    needsPhoto: true,
    recipe:
      "Turn this into a cinematic birthday photoshoot of the same person — an elegant sequin party dress, gold foil number balloons and warm fairy lights behind, a softly blurred background with a candlelit birthday cake. Keep the exact same face, hair, and expression. Photorealistic.",
  },
];

// Deep link to a tool's generator page. en has no locale prefix (localePrefix
// 'as-needed'), and the page presets its own tuned prompt; the ?scene=/?mode=
// param opens the correct tab/mode.
export function toolUrl(tool: KavelTool): string {
  const param = tool.hub === "video" ? "mode" : "scene";
  return `${KAVEL_BASE_URL}/${tool.hub}/${tool.slug}?${param}=${tool.scene}`;
}

export function findTool(slug: string): KavelTool | undefined {
  return KAVEL_TOOLS.find((t) => t.slug === slug);
}

// Lightweight keyword match over title/keyword/desc/slug for browse + recommend.
export function searchTools(query: string): KavelTool[] {
  const q = query.toLowerCase().trim();
  if (!q) return KAVEL_TOOLS;
  const words = q.split(/\s+/);
  return KAVEL_TOOLS.map((t) => {
    const hay = `${t.title} ${t.keyword} ${t.desc} ${t.slug}`.toLowerCase();
    const score = words.reduce((s, w) => (hay.includes(w) ? s + 1 : s), 0);
    return { t, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.t);
}
