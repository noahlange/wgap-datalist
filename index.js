module.exports = fn => {

  // Concatenate all the words from the db.
  var re = new RegExp('\\b(' + fn.all().join('|') + ')\\b', 'gi');
  
  return (text, opts) => {
    
    var suggestions = [];
    var match;
    
    // Test each word, returning suggestions where they appear.
    while ((match = re.exec(text)) !== null) {
      var word = match[0].toLowerCase();
      suggestions.push({
        index: match.index,
        offset: word.length,
      });
    }
    return suggestions;
  };
};