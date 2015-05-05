'use strict';

var countSentences = function(sentences){
  return (sentences.split(/\.|\!|\?/).length-1)
};
