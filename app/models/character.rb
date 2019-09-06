class Character < ApplicationRecord
 belongs_to :user

 validates :name, :level, :str, :dex, :con, :int, :wis, :cha, :user_id, presence: true
end
