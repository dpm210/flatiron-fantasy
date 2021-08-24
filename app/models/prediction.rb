class Prediction < ApplicationRecord
    belongs_to :user
    belongs_to :game
    belongs_to :group

    # belongs_to :user_groups

    def point_pick
       prediction = Prediction.find_by(id: id)
       if prediction.pick === prediction.game.winning_team
        prediction.point = 1
       else
        prediction.point = 0
       end
    end
end
