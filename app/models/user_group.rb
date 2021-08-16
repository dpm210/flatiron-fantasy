class UserGroup < ApplicationRecord

    belongs_to :user
    belongs_to :group
    # has_many :predictions

    def points
        pred = Prediction.where(user_id: user_id, group_id: group_id)
        picks = pred.map {|p| p.point_pick}
        picks.sum
    end
end
