import Ember from 'ember';

export default Ember.Route.extend({
  answersCount: function () {
    return this.get('answers.length');

  },
  hasAnswers: function() {
  return Number(this.get('answers.length')) > 0;
},

  model(params) {
  return this.store.findRecord('question', params.question_id);
},


  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);

      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question.id);
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    },

 }

});
