import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: Ember.computed('answer.votes', function() {
  return this.get('answer.votes');
}),
actions:{
  addUpvote(answer){
    this.sendAction('addUpvote', answer);
  }
}


});
