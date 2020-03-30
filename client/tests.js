import 'angular';
import 'angular-mocks';
import moment from 'moment';
import './';

moment.tz.setDefault('Asia/Jakarta');
var testsContext = require.context('.', true, /_test.[j|t]sx?$/);

testsContext.keys().forEach(testsContext);
