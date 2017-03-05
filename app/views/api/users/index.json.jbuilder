@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :first_name, :last_name, :about, :photos, :profile_img_url, :cover_img_url
    json.currentUserId current_user.id
  end
end
