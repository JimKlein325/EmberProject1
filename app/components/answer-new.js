import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        votes: 0,
        question: this.get('question')
      };
      this.set('text', "");
      this.set('author', "");
      this.sendAction('saveAnswer', params);
    }
  },
});
