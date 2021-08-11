class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :acct_type, :total_points
  has_many :groups
end
