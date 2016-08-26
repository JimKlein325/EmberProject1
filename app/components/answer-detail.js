import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
sortBy: ['votes:desc'],
sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

// sortedAnswersLength: Ember.computed(){
//   return this.get('qestion.answers.length');
// },

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
