class Changefollwstablecolfromfolloweetofollowing < ActiveRecord::Migration[5.0]
  def change
    rename_column :follows, :followee_id, :following_id
  end
end
