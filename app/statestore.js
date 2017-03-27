exports = module.exports = function(s) {
  var CommonStateStore = require('../lib/commonstatestore');
  
  
  var store = new CommonStateStore(s);
  return store;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/sso/oauth2/StateStore';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/http/state/Store'
];
