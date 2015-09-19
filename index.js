module.exports = fn => {

  if (typeof fn.all !== 'function') {
    throw new Error('fn must implement the datalist API');
  } else {
  
    // Concatenate all the words from the db.
    var re = new RegExp('\\b(' + fn.all().join('|') + ')\\b', 'gi');
    
    // Given a text string and an object with optional "acceptable" and
    // "unacceptable" keys, each containing an array of whitelisted and
    // blacklisted words...
    return (text, opts) => {
      
      var suggestions = [], match, words, customRe;
      
      // If we have some user-specified additions/removals from the list, we'll
      // need to add and remove them as needed.
      if (opts && (opts.acceptable || opts.unacceptable)) {
        var words = fn.all();
        if (opts.unacceptable) {
          if (Array.isArray(opts.unacceptable)) {
            words = words.concat(opts.unacceptable); 
          } else {
            throw new Error('opts.unacceptable must be an array');
          }
        }
        if (opts.acceptable) {
          if (Array.isArray(opts.acceptable)) {
            words = words.filter(word => {
              return opts.acceptable.indexOf(word) === -1;
            });
          } else {
            throw new Error('opts.acceptable must be an array');
          }
        }
        customRe = new RegExp('\\b(' + words.join('|') + ')\\b', 'gi');
      }
      
      // Go ahead and test with the regular expression.
      while ((match = (customRe ? customRe.exec(text) : re.exec(text))) !== null) {
        var word = match[0].toLowerCase();
        suggestions.push({
          index: match.index,
          offset: word.length
        });
      }
      return suggestions;
    };
   
  }
};