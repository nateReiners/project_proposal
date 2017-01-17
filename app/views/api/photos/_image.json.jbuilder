json.extract! image, :id, :img_url, :author_id
json.age time_ago_in_words(image.created_at)
