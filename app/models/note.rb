class Note < ActiveRecord::Base
  validates :body, presence: true
end
