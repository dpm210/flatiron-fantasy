class GroupsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    def index
        groups = Group.all
        render json: groups
    end

    def create
        newGroup = Group.create(group_params)
        if newGroup.valid?
            render json: newGroup, status: :created
        else
            render json: {errors: newUser.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show
        group = Group.find_by(id: params[:id])
        if group
            render json: group
        else record_not_found
        end
    end 

    private 

    def record_not_found
        render json: {error: "Group not found"}, status: :not_found
    end 

    def group_params
        params.permit(:title)
    end
end
