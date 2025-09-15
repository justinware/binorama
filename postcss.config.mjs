import postCssImport from 'postcss-import';
import postCssNested from 'postcss-nested';
import postCssSimpleVars from 'postcss-simple-vars';
import tailwindPostcss from '@tailwindcss/postcss';

export default {
  plugins: [
    postCssImport,
    postCssNested,
    postCssSimpleVars,
    // tailwindPostcss
  ]
}
