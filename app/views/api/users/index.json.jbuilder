@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :first_name, :last_name, :profile_img_url
    json.currentUserId current_user.id
  end
end
