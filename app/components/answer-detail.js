import Ember from 'ember';

export default Ember.Component.extend({
sortBy: ['votes:desc'],
sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions:{
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    },
    addUpvote(answer){
      this.sendAction('addUpvote', answer);
    }
  }
});
