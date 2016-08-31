import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  voteCount: Ember.computed('answer.votes', function() {
    return this.get('answer.votes');
  }),
  actions:{
    addUpvote(answer){
      this.sendAction('addUpvote', answer);
    },
    toggleAnswerInFavoritesList(answer) {
      var list = this.get('favoritesList');
      if (list.items.includes(answer)){
        list.remove(answer);
      }
      else {
        list.add(answer);
      }
    },
  }
});
