import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,

  actions:{
    addUpvote(answer){
      this.sendAction('addUpvote', answer);
    },
    updateAnswer(answer){
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('updateForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    showForm(answer){
      debugger;
      this.set('updateForm', true);
    },
  }

});
