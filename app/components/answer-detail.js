import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions:{
    showForm(){
      this.set('updateForm', true);
    },
    update(answer){
      var params = {
        text: this.get('text'),
        author: this.get('author')//,
        //id: this.get('question.id')

      };
      this.set('updateForm', false);
      this.set('text', "");
      this.set('author', "");

      this.sendAction('updateAnswer', answer, params);
    }
  }
});
