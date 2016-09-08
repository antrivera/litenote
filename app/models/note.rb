# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  validates :title, :notebook_id, presence: true

  belongs_to :notebook

  def self.owned_by(user)
    current_user = User.find(user.id)
    user_notes = []
    current_user.notebooks.each do |notebook|
      user_notes << notebook.notes
    end

    user_notes.flatten
  end
end
