import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  voteCount: Ember.computed('answer.votes', function() {
  return this.get('answer.votes');
}),


  actions:{
    showForm(){
      this.set('updateForm', true);
    },
    updateAnswer(answer){
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('updateForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    addUpvote(answer){
      this.sendAction('addUpvote', answer);
    }
  }
});
