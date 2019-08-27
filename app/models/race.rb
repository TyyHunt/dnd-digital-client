class Race < ApplicationRecord
  validates :name, :img_url, :speed, :bonus, :size, presence: true
end
