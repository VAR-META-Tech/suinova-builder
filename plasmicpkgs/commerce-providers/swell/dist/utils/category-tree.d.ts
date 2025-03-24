import { Category } from "../types/site";
export declare const walkCategoryTree: (category?: import("@plasmicpkgs/commerce/dist/types/site").Category | undefined, categories?: import("@plasmicpkgs/commerce/dist/types/site").Category[] | undefined) => import("@plasmicpkgs/commerce/dist/types/site").Category[];
export declare const topologicalSortForCategoryTree: (categories: Category[]) => import("@plasmicpkgs/commerce/dist/types/site").Category[];
