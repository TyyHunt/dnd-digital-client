class Weapon < ApplicationRecord
  validates :name, :damage, :dmg_type, presence: true
end
