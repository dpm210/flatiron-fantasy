class GroupSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :user_groups
end
