class Race < ApplicationRecord
 class Klass < ApplicationRecord
  validates :name, :img_url, :speed, :bonus, :size, presence: true
 end
end
