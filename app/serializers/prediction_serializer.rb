class PredictionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :int, :game_id, :group_id, :pick, :point
end
