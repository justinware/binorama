import postCssImport from 'postcss-import';
import postCssNested from 'postcss-nested';
import postCssSimpleVars from 'postcss-simple-vars';

export default {
  plugins: [postCssImport, postCssNested, postCssSimpleVars],
};
