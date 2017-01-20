# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create!(username: "David Larson", first_name: "David", last_name: "Larson", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_thumb,g_face:center,h_200/v1484898239/13_7xgybb7c-jd-mason_mbp62j.jpg")
u2 = User.create!(username: "Bill Dobson", first_name: "Bill", last_name: "Dobson", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_fill,g_face:center,h_200,w_180/v1484898143/cgqg8bx2kbw-alfonso-castro_uxetcv.jpg")
u3 = User.create!(username: "Rowen Morse", first_name: "Rowen", last_name: "Morse", password: "demopassword", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_fill,h_200/v1484900402/7xldgzjfx3s-i-m-priscilla_bn3c7f.jpg")
u4 = User.create!(username: "Steven Donald", first_name: "Steven", last_name: "Donald", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_lfill,g_face:center,w_180/v1484899073/hrzuzox1e6w-brooke-cagle_w4mkyi.jpg")
u5 = User.create!(username: "Donny Raymond", first_name: "Donny", last_name: "Raymond", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_fill,g_face:center,h_200,x_0/v1484898227/su0rzsq7rqs-ashton-bingham_vccle3.jpg")
u6 = User.create!(username: "Shannon Cole", first_name: "Shannon", last_name: "Cole", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/v1484897883/endregvcvam0o4a4vd2h.jpg")
u7 = User.create!(username: "Ron Stevenson", first_name: "Ron", last_name: "Stevenson", password: "touchdown", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_fill,g_face:center,w_180/v1484900276/fqeutmkyhwu-agberto-guimaraes_asqice.jpg")
u8 = User.create!(username: "Victor Aston", password: "touchdown", first_name: "Victor", last_name: "Aston", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_thumb,h_200/v1484898250/sibvworyqs0-ayo-ogunseinde_tk1y7f.jpg")
u9 = User.create!(username: "Quin Rollins", password: "touchdown", first_name: "Quin", last_name: "Rollins", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_thumb,h_180,q_100,r_30/a_0/v1484896604/pas4im6ogwi-joe-gardner_xf5ls3.jpg")
u10 = User.create!(username: "Vicky Winston", password: "touchdown", first_name: "Vicky", last_name: "Winston", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_thumb,g_face:center,h_200/v1484898264/k36naecxvwu-henri-meilhac_dewbve.jpg")
u11 = User.create!(username: "Sarah Wilson", password: "touchdown", first_name: "Sarah", last_name: "Lee", profile_img_url: "https://res.cloudinary.com/durooeqnc/image/upload/c_scale,h_200/v1484900538/bdc_yrg4n_g-jeremy-bishop_qfa4ad.jpg")


Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/R4T9TI8EsJI", title: "Amazement")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/ZALAsEewSlc", title: "Creature")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/iqR8K6n_ObE", title: "Enchanted Forest")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/6dR-fozkSV4", title: "Emotion")

Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/-F3Wqn9-zGk", title: "B&W Emotion")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/GKR1tBkmW3M", title: "Noman's Land")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/B0AOKkybaKM", title: "Toes")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/TFyi0QOx08c", title: "Glade")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/Zj4y1Ci0yAk", title: "Hooray")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/3F9eULtZGd4", title: "Drift")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/FrQi2B7thsE", title: "Forgetfulness")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/M7etcDF2dFM", title: "Happiness")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/P0UxmxWS7Ys", title: "Symmetry")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/t3dPPL9016E", title: "Painted")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/7jfaa2-Y3UQ", title: "Sunset")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/SbcqUQ4iEcI", title: "Love")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/VW8MUbHyxCU", title: "Beautiful View")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/C_Fr8yUq5yY", title: "Godly")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/3PmwYw2uErY", title: "Living Life")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/EDqP5r_QwrE", title: "Arcadian")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/4m2wR_uS8s0", title: "B&W Years")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/12eeCSiQPcI", title: "Platform")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/pNMrIxWLGxg", title: "Swatches")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/fb9kOpMerWU", title: "Wonder")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/ndsRLeQBlsA", title: "Scale")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/COqvJwR0-ns", title: "Calm Beach")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/L1B7G6XmG_8", title: "Service")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/t4R3NTP2Fkk", title: "Bluster")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/d19by2PLaPc", title: "Peak")


Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/ZbGC7zjV0WU", title: "Feelings")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/dOhJtfXJZfw", title: "Fluid")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/yjTxnh7bsdw", title: "Art Supplies")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/6NmnrAJPq7M", title: "Amazing View")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/3JZeW3rtg6E", title: "Airtime")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/uZxT3njDQYc", title: "Effulgent")

Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/SB5YUTJYbRM", title: "Umbrellas")

Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/OR_3rbIv5yI", title: "Cold Pool")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/POSjI6vNTV8", title: "Walk in the Woods")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/_v5kxvrRFo4", title: "Light")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/xVmsWMG8r2M", title: "Vista")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/OxTT6kZs_gU", title: "Forest")

Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/jQvOExlroYA", title: "Waterfall")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/emZus7dBLIw", title: "Greatness")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/1fuYkTG5DBc", title: "Last Light")

Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/miM9xmitmF8", title: "Water World")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/3iAS7bn3Ge0", title: "B&W Days")

Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/l9V-_4Wgm-Y", title: "Treeland")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/Tkb09j7kJYg", title: "Active Being")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/uZxT3njDQYc", title: "Leaf")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/QBXgsc0U0Rc", title: "Leafy Trees")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/3FjIywswHSk", title: "Exquisite")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/fFVHyw3SbTo", title: "Isolation")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/kFHz9Xh3PPU", title: "Fridgid")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/H4fnu6BLzEo", title: "Strength")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/iJu4dDmkuuk", title: "Brink")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/q2ZRx5DlN4M", title: "B&W Timeless")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/gWDPk5KYLc4", title: "Warmth")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/xgTMSz6kegE", title: "Bliss")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/C52dylsC1-g", title: "Bike")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/HWwF4OnXAdM", title: "Birdie")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/HQkz_lWT_lY", title: "Geometry")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/q3Si_spMPHo", title: "Color")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/5x4U6InVXpc", title: "The Climb")

Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/kbhB_TFbnUA", title: "Pencils")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/FgZlbzZ0R8", title: "Incredible")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/Usk0JHTc9sU", title: "Greatness")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/j1AGytUOfXo", title: "Moon")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/N4F9RyXZypA", title: "Architecture")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/t20pc32VbrU", title: "Caustic")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/HACjcQwxOUc", title: "Starry Sky")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/b1v6dw7W0wc", title: "Blossom")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/fj0tFloTPGQ", title: "Drop")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/l-KWtg-sU6A", title: "B&W Seconds")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/b7fWw08PAg4", title: "B&W Months")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/F4Q_-YiPY7U", title: "Madness")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/wyzdKibOUB4", title: "Distance")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/NUiGfCroup8", title: "B&W Years")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/fuY2NxYkhh4", title: "B&W Details")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/Q9YW-3OYcD8", title: "B&W Photo")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/Vti8XHv2XjU", title: "Zero Degrees")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/uvbA1IHilCI", title: "Nowhere")

Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/cttQw_azA40", title: "Cool Water")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/emTCWiq2txk", title: "Beetle")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/lSegRSDBMLw", title: "Wandering")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/nBsZG2XZBbQ", title: "B&W Shot")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/3lL_Nlvpl08", title: "Contumacious")


Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/IoWtLPCLYOc", title: "Strategy")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/NFs6dRTBgaM", title: "Ice")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/q4_PQzOEsSs", title: "B&W View")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/S_xVV-l8Q4I", title: "Mural")

Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/QP1dUyQ8WsI", title: "Forest Growth")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/Q2jaIZoefn4", title: "Homes")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/n7a2OJDSZns", title: "Still")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/Z-dUWVhtWsw", title: "Distance")


Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/Rshwi48zDQY", title: "Dive")
Photo.create!(author_id: u7.id, img_url: "https://source.unsplash.com/u5vatPAgq94", title: "B&W Stillness")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/aGz5hkren64", title: "Threads")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/2gSfZ9Baph8", title: "Flame")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/bKVZ1tPuP2U", title: "Liquid")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/toRXcDOfQfY", title: "feed")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/CHHE1hTAwUU", title: "Blur")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/hjQEODOPP3g", title: "Water Everywhere")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/ssAcdlJRsI4", title: "Adroit")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/fzak3_U4npE", title: "Falls")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/pOXHU0UEDcg", title: "Concert")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/f9X2neuJwbI", title: "Good Eats")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/hTTtWbtQQNY", title: "Rays")
Photo.create!(author_id: u4.id, img_url: "https://source.unsplash.com/xGoOzMkETw0", title: "Good Times")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/GAoiMKffIZ4", title: "Ripple")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/ln5drpv_ImI", title: "Traverse")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/mBQIfKlvowM", title: "Beach")
Photo.create!(author_id: u3.id, img_url: "https://source.unsplash.com/XyoW1MhPqbs", title: "Fulsome Wind")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/6pdARhQ9vp0", title: "Wheel")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/7oS_26cb1Wo", title: "Pool")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/kluhXsuW7Is", title: "Growth")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/E7GnxAHRjSQ", title: "Bubble")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/tfqyIwlpEjs", title: "Downwards")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/D7zGOhMJBys", title: "Earrings")
Photo.create!(author_id: u10.id, img_url: "https://source.unsplash.com/k8apfKm-Md4", title: "Blue")
Photo.create!(author_id: u5.id, img_url: "https://source.unsplash.com/HUOvKWXEdFY", title: "Creativity")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/d6kSvT2xZQo", title: "Woods")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/l93nrdccjF8", title: "Woodsman")
Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/5IHz5WhosQE", title: "Palette")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/UVzcwmngd2s", title: "Life Blood")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/k7R5xrY71lg", title: "Sea of Trees")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/51AhxwkYyHo", title: "Dessert")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/OdjhBf4Ar4I", title: "Color Cups")
Photo.create!(author_id: u11.id, img_url: "https://source.unsplash.com/t4j5LVOQzmc", title: "Hilltop")
Photo.create!(author_id: u8.id, img_url: "https://source.unsplash.com/ZeXP6p7agjE", title: "Peak")
Photo.create!(author_id: u1.id, img_url: "https://source.unsplash.com/SDoMyyylpnc", title: "Green Forest")

Photo.create!(author_id: u9.id, img_url: "https://source.unsplash.com/Az3kQbCND2o", title: "Balloon")
Photo.create!(author_id: u6.id, img_url: "https://source.unsplash.com/8EPa1q92B5Q", title: "Winter")
Photo.create!(author_id: u2.id, img_url: "https://source.unsplash.com/bF93UivGdIc", title: "Babble")


Follow.create!(follower_id: u3.id, following_id: u1.id)
Follow.create!(follower_id: u3.id, following_id: u2.id)
Follow.create!(follower_id: u3.id, following_id: u4.id)
Follow.create!(follower_id: u3.id, following_id: u5.id)
Follow.create!(follower_id: u3.id, following_id: u6.id)
Follow.create!(follower_id: u3.id, following_id: u7.id)
Follow.create!(follower_id: u3.id, following_id: u8.id)
Follow.create!(follower_id: u3.id, following_id: u3.id)
Follow.create!(follower_id: u3.id, following_id: u9.id)
Follow.create!(follower_id: u3.id, following_id: u10.id)
Follow.create!(follower_id: u3.id, following_id: u11.id)
