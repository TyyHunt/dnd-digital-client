class Klass < ApplicationRecord
 validates :name, :img_url, :hit_die, presence: true
end
