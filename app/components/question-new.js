import Ember from 'ember';

export default Ember.Component.extend({
  formIsVisible: false,
  actions: {
    toggleForm() {
      this.set('formIsVisible', true);
      this.set('text', "");
      this.set('author', "");
      this.set('notes', "");

    },
    save() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        notes: this.get('notes')

      };
      this.set('formIsVisible', false);
      this.sendAction('save', params);
    }
  },
});
