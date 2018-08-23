import _camelCase from 'lodash.camelcase';
import _kebabCase from 'lodash.kebabcase';
import _upperFirst from 'lodash.upperfirst';
import { join } from 'path';

import * as meta from '../package.json';

function nuxtElementUiModule(this: any, moduleOptions: any) {
  const options = Object.assign({}, this.options.elementUi || moduleOptions);
  options.components = (options.components || []).map((c) => ({ className: _upperFirst(_camelCase(c)), fileName: _kebabCase(c) }));
  if (!options.locale) options.locale = 'fr';
  this.addPlugin({ src: join(__dirname, './lib/templates/plugin.js'), options });
}
nuxtElementUiModule['meta'] = meta;

export default nuxtElementUiModule;
