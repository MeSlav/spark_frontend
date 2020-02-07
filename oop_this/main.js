// Example 1: (Dynamic scope)
(function() {
  var teacher = 'Kyle';

  function ask(question) {
    console.log(teacher, question);
  };

  function otherClass(question) {
    var teacher = 'Suzie';

    ask('Why');
  };

  otherClass();
})();


// Four different ways to invoke a function:

(function() {
  function ask(question) {
    console.log(this.teacher, question);
  }

  var workshop = {
    teacher: 'Kyle',
    ask: ask,
  }

  var workshop_2 = {
    teacher: 'Kyle',
    ask: ask,
  }

  // #1 Implicit binding: (depending on an object the function is being invoked on. Namespace pattern)

  workshop.ask('How do I share a method?');
  workshop_2.ask('How do I share a method?');

  // #2 .call(this, arg_1, arg_2), .apply(this, args) methods (invoke the function with the this pointing to the passed first parameter);

  ask.call(workshop, 'How do I share a method?', 'Another argument, not used though.');
  ask.apply(workshop_2, [])

  // #3 Hard binding with .bind(this)
  ask = ask.bind(workshop);
  ask();

})();

