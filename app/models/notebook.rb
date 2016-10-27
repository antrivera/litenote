# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ActiveRecord::Base
  validates :title, :author_id, presence: true

  belongs_to(
    :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many :notes, dependent: :destroy

  def self.owned_by(user)
    current_user = User.find(user.id)
    current_user.notebooks.includes(:notes)
  end

  def as_json(options={})
    h = super(options)
    h[:note_count] = notes.length
    h
  end
end
