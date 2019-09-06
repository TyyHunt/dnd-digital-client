class User < ApplicationRecord
 has_secure_password
 has_many :characters
 validates :email, uniqueness: true, presence: true
 validates :password_digest, presence: true
end
