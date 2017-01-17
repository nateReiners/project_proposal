@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :img_url, :title
    json.author_name photo.author.username
  end
end
