# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create!(username: "David Larson", password: "touchdown", profile_img_url: "https://pickaface.net/assets/images/slides/slide2.png", cover_img_url: "https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg")
u2 = User.create!(username: "Bill Dobson", password: "touchdown", profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png", cover_img_url: "https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg")
u3 = User.create!(first_name: "Jane", last_name: "Doe", username: "Guest", password: "demopassword", profile_img_url: "http://www.freedigitalphotos.net/images/previews/do-you-like-my-new-handbag-100335166.jpg", cover_img_url: "https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg")
u4 = User.create!(username: "Susan Cole", password: "touchdown", profile_img_url: "http://www.freedigitalphotos.net/images/previews/do-you-like-my-new-handbag-100335166.jpg", cover_img_url: "https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg")
u5 = User.create!(username: "Sarah Johnson", password: "touchdown", )
u6 = User.create!(username: "Quinten Lacy", password: "touchdown", profile_img_url: "http://www.freedigitalphotos.net/images/previews/handsome-guy-operating-laptop-100228357.jpg")
u7 = User.create!(username: "Vicky Winston", password: "touchdown")

p2 = Photo.create!(author_id: u6.id, img_url: "https://cdn.pixabay.com/photo/2017/01/03/19/41/forest-1950402_960_720.jpg", title: "Forest Landscape")
p3 = Photo.create!(author_id: u4.id, img_url: "http://payload265.cargocollective.com/1/12/405716/7610242/nomad---01.jpg", title: "Refreshment")
p8 = Photo.create!(author_id: u5.id, img_url: "http://payload386.cargocollective.com/1/17/574234/10027080/DSC_4282_1250.jpg", title: "Dragonfly")
p12 = Photo.create!(author_id: u3.id, img_url: "https://cdn.pixabay.com/photo/2016/10/07/08/56/beauty-1721060_960_720.jpg", title: "Beauty")
p1 = Photo.create!(author_id: u1.id, img_url: "http://payload492.cargocollective.com/1/17/574234/12157345/DSCF8484_1250.jpg", title: "Bridge")
p6 = Photo.create!(author_id: u2.id, img_url: "http://payload337.cargocollective.com/1/17/574234/9042394/IMG_0515_1250.jpg", title: "Road Trip")
p5 = Photo.create!(author_id: u2.id, img_url: "http://payload336.cargocollective.com/1/17/574234/9036846/DSC_0374_1250.jpg", title: "Purple Flowers")
p4 = Photo.create!(author_id: u1.id, img_url: "http://payload336.cargocollective.com/1/17/574234/9036878/DSC_0017-copy_1250.JPG", title: "Special Flower")
p11 = Photo.create!(author_id: u7.id, img_url: "https://cdn.pixabay.com/photo/2016/10/22/20/34/two-types-of-wine-1761613_960_720.jpg", title: "Wine and Grapes")
p7 = Photo.create!(author_id: u7.id, img_url: "http://payload337.cargocollective.com/1/17/574234/9042538/DSCF3362_1_1250.jpg", title: "Curves")


p9 = Photo.create!(author_id: u1.id, img_url: "https://cdn.pixabay.com/photo/2016/11/14/15/29/hummingbird-1823829_960_720.jpg", title: "Hummingbird")
p10 = Photo.create!(author_id: u5.id, img_url: "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg", title: "Fall in Love")

f1 = Follow.create!(follower_id: u3.id, following_id: u1.id)
f2 = Follow.create!(follower_id: u3.id, following_id: u2.id)
f3 = Follow.create!(follower_id: u3.id, following_id: u4.id)
f4 = Follow.create!(follower_id: u3.id, following_id: u5.id)
f5 = Follow.create!(follower_id: u3.id, following_id: u6.id)
f6 = Follow.create!(follower_id: u3.id, following_id: u7.id)
f7 = Follow.create!(follower_id: u2.id, following_id: u3.id)
f8 = Follow.create!(follower_id: u1.id, following_id: u3.id)
