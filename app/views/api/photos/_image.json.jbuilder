json.extract! image, :id, :img_url, :author_id, :title
json.age time_ago_in_words(image.created_at)
