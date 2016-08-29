import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  answers: Ember.computed('favoritesList.items', function() {
    return this.get('favoritesList').items;
  }),
  answerCount: Ember.computed('favoritesList.items', function() {
    return this.get('favoritesList').items.length;
  }),
});
