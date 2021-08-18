class Game < ApplicationRecord
        default_scope { order(away_team: :desc) }

    has_many :predictions
    has_many :users, through: :predictions
    has_many :groups, through: :predictions
end
