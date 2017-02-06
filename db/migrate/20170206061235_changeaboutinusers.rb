class Changeaboutinusers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :about, :string, :default => "This user is new to Toglink."
  end
end
