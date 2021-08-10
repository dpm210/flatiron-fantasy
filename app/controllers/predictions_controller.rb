class PredictionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        predictions = Prediction.all
        render json: predictions
    end

    def show
        prediction = Prediction.find_by(id: params[:id])
        if prediction
            render json: prediction
        else record_not_found
        end
    end

    def create
        newPrediction = Prediction.create(prediction_params)
            if newPrediction.valid?
                render json: newPrediction, status: :created
            else
                render json: {errors: newPrediction.errors.full_messages}, status: :unprocessable_entity
            end 
    end

    def update
        prediction = Prediction.find_by(id: params[:id])
        if prediction
            prediction.update(prediction_params)
            render json: prediction
        else record_not_found
        end

    end

    private

    def record_not_found
        render json: {error: "Prediction not found"}, status: :not_found
    end 

    def prediction_params
        params.permit(:user_id, :game_id, :group_id, :pick)
    end
end
