import { DeepReadonly } from "vue";

type ConfigSchema = DeepReadonly<{
  categories: Array<{
    pathPrefix: string;
    name: string;
  }>;

  eyecatchFallbackImage: string;
}>;

const config: ConfigSchema = {
  categories: [
    {
      pathPrefix: "/news",
      name: "お知らせ",
    },
    {
      pathPrefix: "/products",
      name: "制作物",
    },
  ],
  eyecatchFallbackImage: "/szpp-logo-untransparent.jpeg",
} as const;

export default config;
