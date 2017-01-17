
json.extract! @photo, :id, :author_id, :img_url, :title
json.img_url asset_path(@photo.img_url)
