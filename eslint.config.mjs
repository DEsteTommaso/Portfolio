import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // I link interni sono <a> normali: la transizione tra pagine (View Transitions
    // cross-document) parte solo con una navigazione vera, non con quella client di <Link>.
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
];

export default eslintConfig;
