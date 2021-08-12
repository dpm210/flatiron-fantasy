class Game < ApplicationRecord
    has_many :predictions
    has_many :users, through: :predictions
    has_many :groups, through: :predictions
end
