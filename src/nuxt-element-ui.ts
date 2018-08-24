import _kebabCase from 'lodash.kebabcase';
import { join } from 'path';

import * as meta from '../package.json';

function nuxtElementUiModule(this: any, moduleOptions: any) {
  const options = Object.assign({}, this.options.elementUI || moduleOptions);
  options.components = (options.components || []).map((className) => ({ className, fileName: _kebabCase(className) }));
  if (!options.locale) options.locale = 'en';
  this.addPlugin({ src: join(__dirname, './lib/templates/plugin.js'), options });
}
nuxtElementUiModule['meta'] = meta;

export default nuxtElementUiModule;
