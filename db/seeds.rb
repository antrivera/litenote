# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(email: "guest", password: "password");

notebooks = Notebook.create([{ title: "CS Notes", author_id: 1},
  { title: "a/A Week 9", author_id: 1},
  { title: "Poetry", author_id: 1},
  { title: "Famous Quotes", author_id: 1},
  { title: "Screenplays", author_id: 1},
  { title: "Todo", author_id: 1}])

notes = Note.create([{title: "Fundamentals" , body: "variables", notebook_id: 1},
  {title: "Functions", body: "block of code to be called later", notebook_id: 1},
  {title: "Object-Oriented Programming", body: "Encapsulation", notebook_id: 1},
  {title: "Programming Languages", body: "ruby", notebook_id: 1},
  {title: "Web Development", body: "javascript", notebook_id: 1},
  {title: "Algorithms", body: "BFS, DFS", notebook_id: 1},
  {title: "Data Structures", body: "Array, queue, stack, hashmap", notebook_id: 1},
  {title: "React", body: "rox", notebook_id: 2},
  {title: "Redux", body: "so cool", notebook_id: 2},
  {title: "Full-Stack Project", body: "stressful", notebook_id: 2},
  {title: "The Raven", body: "raven stuff", notebook_id: 3},
  {title: "Howl", body: "ginsberg", notebook_id: 3},
  {title: "9/09/16", body: "upper body day", notebook_id: 4}])
