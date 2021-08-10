class Prediction < ApplicationRecord
    belongs_to :user
    belongs_to :game
    belongs_to :group

    validates :pick, presence: true
end
