class GameSerializer < ActiveModel::Serializer
  attributes :id, :home_team, :away_team, :winning_team, :start_time
end
