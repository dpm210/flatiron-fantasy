class UserGroupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :points, :user
  # has_many :predictions
end
