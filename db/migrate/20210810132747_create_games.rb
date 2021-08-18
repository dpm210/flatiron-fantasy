class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :home_team
      t.string :away_team
      t.string :winning_team, default: ""
      t.datetime :start_time

      t.timestamps
    end
  end
end
