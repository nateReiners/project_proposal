# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create!(username: "randall cobb", password: "touchdown")
u2 = User.create!(username: "aaron rodgers", password: "touchdown")
u3 = User.create!(username: "Guest", password: "demopassword")


p1 = Photo.create!(author_id: u2.id, img_url: "http://i.imgur.com/VBDdADmh.jpg", title: "Title number 1")
p2 = Photo.create!(author_id: u3.id, img_url: "http://4.bp.blogspot.com/-XBHVmMlvP4w/VmsqEm1zkeI/AAAAAAABhzE/6vxIKM9hUH4/s1600/funny-animals-190-02.jpg", title: "Title number 1")
p3 = Photo.create!(author_id: u1.id, img_url: "http://img.hi5messages.com/en/funny/36.jpg", title: "Title number 1")
p4 = Photo.create!(author_id: u1.id, img_url: "https://i.redd.it/9oydunzk1n5y.png", title: "Title number 1")
p5 =

f1 = Follow.create!(follower_id: u3.id, following_id: u1.id)
f2 = Follow.create!(follower_id: u3.id, following_id: u2.id)
f3 = Follow.create!(follower_id: u2.id, following_id: u3.id)
f4 = Follow.create!(follower_id: u2.id, following_id: u1.id)
