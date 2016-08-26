import Ember from 'ember';

export function zeroAnswers(params) {
  var question = params[0];

  if(question.get('answers.length') === 0){
      return  Ember.String.htmlSafe('<p>Be the first to Answer the following question!<p>');
  }
}

export default Ember.Helper.helper(zeroAnswers);
