import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions:{
    showForm(){
      this.set('updateForm', true);
    },
    update(question){
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')

      };
      this.set('updateForm', false);
      this.set('text', "");
      this.set('author', "");
      this.set('notes', "");

      this.sendAction('update', question, params);
    }
  }
});
