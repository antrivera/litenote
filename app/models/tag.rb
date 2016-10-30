class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :taggings

  has_many :notes, ->{order("updated_at DESC")}, through: :taggings, source: :note
end
