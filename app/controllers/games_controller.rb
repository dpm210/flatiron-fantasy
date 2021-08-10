class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    def index
        games = Game.all
        render json: games
    end

    def show
        games = Game.find_by(id: params[:id])
        if games
            render json: games
        else record_not_found
        end
    end 

    def update
        games = Game.find_by(id: params[:id])
        if games
            games.update(games_params)
            render json: games
        else record_not_found
    end
end

private

def games_params
    params.permit(:winning_team)
end
end
