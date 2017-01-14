# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  following_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Follow < ActiveRecord::Base
  validates :follower_id, :following_id, presence: true


  belongs_to :follower,
  foreign_key: :follwer_id,
  class_name: "User"

  belongs_to :following,
  foreign_key: :follwing_id,
  class_name: "User"

end
