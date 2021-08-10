class PredictionsController < ApplicationController

    def index
        predictions = Prediction.all
        render json: predictions
    end

    def create
        newPred = Prediction.create(pred_params)
        if newPred.valid?
            render json: newPred, status: :created
        else
            render json: {errors: newPred.errors.full_messages}, status: :unprocessable_entity
        end 
    end

    private

    def pred_params
        params.permit(:user_id, :game_id, :group_id, :pick)
    end
end

