json.extract! user, :id, :username, :first_name, :last_name, :about, :photos, :profile_img_url, :cover_img_url
json.followed user.is_followed_by?(current_user)
