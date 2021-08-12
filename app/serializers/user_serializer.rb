class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :acct_type
  has_many :groups
end
