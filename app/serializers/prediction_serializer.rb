class PredictionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :group_id, :pick, :point_pick
end
