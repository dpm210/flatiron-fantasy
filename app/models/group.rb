class Group < ApplicationRecord
    has_many :user_groups
    has_many :users, through: :user_groups

    has_many :predictions
    has_many :games, through: :predictions

    validates :title, presence: true, length: {minimum: 5}
end
