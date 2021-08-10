class CreatePredictions < ActiveRecord::Migration[6.1]
  def change
    create_table :predictions do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :group_id
      t.string :pick
      t.integer :point

      t.timestamps
    end
  end
end
