@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :img_url, :title
    json.author_name photo.author.username
    json.author_url photo.author.profile_img_url
  end
end
