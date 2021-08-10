class User < ApplicationRecord
    has_secure_password
    has_many :predictions
    has_many :games, through: :predictions
    has_many :user_groups
    has_many :groups, through: :user_groups

    validates :username, presence: true, uniqueness: { case_sensitive: false}
    validates :password_digest, length: { minimum: 4}
end
