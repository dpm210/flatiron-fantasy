class UserGroup < ApplicationRecord
    default_scope { order(total_points: :desc) }

    belongs_to :user
    belongs_to :group
end
