class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false, index: true
      t.string :img_url, null: false
      t.string :title
      t.string :description
      t.integer :views
      t.integer :likes
      t.string :category

      t.timestamps
    end
  end
end
