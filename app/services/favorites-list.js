import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(answer) {
    this.get('items').pushObject(answer);
  },
  remove(answer){
    var i = items.indexOf(answer);
    if(i != -1) {
      items.splice(i, 1);
    }
  }
});
