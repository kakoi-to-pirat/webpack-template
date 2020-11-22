import _ from 'lodash';

import demoJsonData from './assets/data.json';
import demoXmlData from './assets/data.xml';
import demoCsvData from './assets/data.csv';

import appLogo from './assets/images/logo.png';
import './styles/main.scss';

console.log({ demoJsonData, appLogo, demoXmlData, demoCsvData });
console.log(_.isEmpty(demoJsonData));
