exports = module.exports = function(authenticator) {
  
  return function createProvider(state, cb) {
    var strategies = authenticator._strategies
      , names = Object.keys(strategies)
      , strategy, name, i, len;
    
    for (i = 0, len = names.length; i < len; ++i) {
      name = names[i];
      strategy = strategies[name];
      
      if (!strategy._oauth2) { continue; }
      if (strategy._oauth2._authorizeUrl == state.authorizationURL) {
        return cb(null, name);
      }
    }
    
    return cb(new Error('Unable to identify OAuth 2.0 authorization server: ' + state.authorizationURL));
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/http/Authenticator'
];