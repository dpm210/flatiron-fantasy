class UserGroupsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        userGroup = UserGroup.all
        render json: userGroup
    end

    def show
        userGroup = UserGroup.find_by(id: params[:id])
        if userGroup
            render json: userGroup
        else record_not_found
        end
    end

    def create
        newUserGroup = UserGroup.create(user_group_params)
        if newUserGroup.valid?
            render json: newUserGroup, status: :created
        else
            render json: {errors: newUserGroup.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    private

    def user_group_params
        params.permit(:user_id, :group_id)
    end
end
