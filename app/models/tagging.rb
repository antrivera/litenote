class Tagging < ActiveRecord::Base
  valdates :note_id, :tag_id, presence: true
end
