# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  img_url     :string           not null
#  title       :string
#  description :string
#  views       :integer
#  likes       :integer
#  category    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :author_id, :img_url, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

end
