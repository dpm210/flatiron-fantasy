# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "🌋 Clearing old data..."
# User.destroy_all
# User.reset_pk_sequence
# Game.destroy_all
# Game.reset_pk_sequence
# Group.destroy_all
# Group.reset_pk_sequence
# Prediction.destroy_all
# Prediction.reset_pk_sequence
# UserGroup.destroy_all
# UserGroup.reset_pk_sequence

puts "Creating Users..."
User.create(username: 'Adreena', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Adrienne', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Arthur', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Brendan', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Carlos', password: "test", acct_type: "player", total_points: 4)
User.create(username: 'Dan', password: "test", acct_type: "admin", total_points: 0)
User.create(username: 'Darren', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Edward', password: "test", acct_type: "player", total_points: 2)
User.create(username: 'Greg', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Jack', password: "test", acct_type: "player", total_points: 1)
User.create(username: 'Kenny', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Kyle', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Lucy', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Nisa', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Ryan', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Shevon', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Terry', password: "test", acct_type: "player", total_points: 0)
User.create(username: 'Zeus', password: "test", acct_type: "player", total_points: 0)

puts "Creating Games..."
Game.create(away_team: "Dallas Cowboys", home_team: "Tampa Bay Buccaneers")
Game.create(away_team: "Seattle Seahawks", home_team: "Indianapolis Colts")
Game.create(away_team: "Jacksonville Jaguars", home_team: "Houston Texans")
Game.create(away_team: "Philadelphia Eagles", home_team: "Atlanta Falcons")
Game.create(away_team: "LA Chargers", home_team: "Washington Football Team")
Game.create(away_team: "Pittsburgh Steelers", home_team: "Buffalo Bills")
Game.create(away_team: "San Fransisco 49ers", home_team: "Detroit Lions")
Game.create(away_team: "Minnesota Vikings", home_team: "Cincinnati Bengals")
Game.create(away_team: "New York Jets", home_team: "Carolina Panthers")
Game.create(away_team: "Arizona Cardinals", home_team: "Tennessee Titans")
Game.create(away_team: "Cleveland Browns", home_team: "Kansas City Chiefs")
Game.create(away_team: "Miami Dolphins", home_team: "New England Patriots")
Game.create(away_team: "Denver Broncos", home_team: "New York Giants")
Game.create(away_team: "Green Back Packers", home_team: "New Orleans Saints")
Game.create(away_team: "Chicago Bears", home_team: "LA Rams")
Game.create(away_team: "Baltimore Ravens", home_team: "Las Vegas Raiders")

puts "Creating Groups..."
Group.create(title: "Flatiron Pick-Ems")
Group.create(title: "Greg's Super Secret League")
Group.create(title: "Kyle and the Bugs")

puts "Creating User Groups..."
20.times do
    UserGroup.create(user_id: User.ids.sample, group_id: Group.ids.sample)
end

puts "Seeding Complete!"