'use strict';

const ioc = new Map();
ioc.set('port', 9090);
ioc.set('applyFail', false);
ioc.set('applyDive', false);
ioc.set('routeLevel', 'start');
ioc.set('requestTimeoutEnabled', false);
ioc.set('referenceErrorEnabled', true);
ioc.set('requestTimeoutGoodDestroy', false);

module.exports = ioc;