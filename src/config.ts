import { DeepReadonly } from "vue";

type ConfigSchema = DeepReadonly<{
  categories: Array<{
    pathPrefix: string;
    name: string;
  }>;

  eyecatchFallbackImage: string;

  siteOrigin: string;
}>;

const CONFIG: ConfigSchema = {
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
  eyecatchFallbackImage: "/szppy-untransparent.jpeg",

  siteOrigin: "https://szpp-dev-team.github.io",
} as const;

export default CONFIG;
