class Changedefaulttitle < ActiveRecord::Migration[5.0]
  def change
    change_column :photos, :title, :string, :default => "No Title"
  end
end
