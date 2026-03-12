type MetaItem = {
  page: string;
  meta_title: string;
  meta_description: string;
  meta_keywords?: string;
  ogImage?: string;
  priority?: number;
};

declare module "*metaData.js" {
  export const metaData: MetaItem[];
  export default metaData;
}

declare module "*metaData.mjs" {
  export const metaData: MetaItem[];
  export default metaData;
}
