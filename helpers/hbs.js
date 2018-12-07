'use strict';

module.exports = {
  truncate: function(str, len) {
    if (str.length > len && str.length > 0) {
      let newStr = str + '';
      newStr = str.substr(0, len);
      newStr = str.substr(0, newStr.lastIndexOf(' '));
      newStr = newStr.length > 0 ? newStr : str.substr(0, len);
      return newStr + '...';
    }
    return str;
  },
  stripTags: function() {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  }
};
