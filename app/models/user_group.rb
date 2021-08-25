class UserGroup < ApplicationRecord
    # default_scope { order(points: :desc) }

    belongs_to :user
    belongs_to :group
    # has_many :predictions

    # validates :group_id, uniqueness: {scope: :user_id}

    def points
        pred = Prediction.where(user_id: user_id, group_id: group_id)
        picks = pred.map {|p| p.point_pick}
        picks.sum
    end
end
