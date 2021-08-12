class UserGroupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :total_points, :user
  # belongs_to :user
end
