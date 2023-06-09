import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      remarkGfm,
      remarkHint,
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  output: "export",
  basePath: "/share-me",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
