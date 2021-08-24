class PredictionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

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

    def show
        pred = Prediction.find_by(id: params[:id])
        if pred
            render json: pred
        else record_not_found
        end
    end 

    def destroy
        prediction = Prediction.find_by(id: params[:id])
        prediction.destroy
    end

    private

    def pred_params
        params.permit(:user_id, :game_id, :group_id, :pick)
    end

end

