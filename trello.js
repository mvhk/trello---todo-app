let myTodos = {
  day: "monday",
  meetings: 0,
  meetDone: 0
};
let addMeeting = function(todo, meet = 0) {
  todo.meetings = todo.meetings + meet;
};
let meetDone = function(todo, meet = 0) {
  todo.meetDone += meet;
};
let resetDay = function() {
  todo.meetings = 0;
  todo.meetDone = 0;
};
let getSummary = function(todo) {
  let meetLeft = todo.meetings - todo.meetDone;
  return `you have ${meetLeft} meetings left`;
};
addMeeting(myTodos, 2);
meetDone(myTodos, 1);
console.log(getSummary(myTodos));
