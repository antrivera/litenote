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
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag

  def self.owned_by(user)
    current_user = User.find(user.id)
    user_notes = []
    current_user.notebooks.each do |notebook|
      user_notes << notebook.notes
    end

    user_notes.flatten
  end

  def plain_text_body
    ActionView::Base.full_sanitizer.sanitize(self.body).to_s
  end

  def notebook_title
    self.notebook.title
  end

  def as_json(options={})
    h = super(options)
    h[:plain_text_body] = plain_text_body
    h[:notebook_title] = notebook_title
    h[:tags] = tags
    h
  end
end
