class AddColumnFollowingToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :following, :boolean
  end
end
