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
end
