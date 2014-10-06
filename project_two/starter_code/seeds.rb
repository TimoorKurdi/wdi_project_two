require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

friends = Category.create(name: "friends")
frenemies = Category.create(name: "frenemies")

Contact.create(name: "Jeff", category_id: friends.id)
Contact.create(name: "Joe", category_id: friends.id)
Contact.create(name: "Adrian", category_id: friends.id)
Contact.create(name: "JeffK", category_id: friends.id)
Contact.create(name: "Sean", category_id: friends.id)
Contact.create(name: "Neel", category_id: frenemies.id)
