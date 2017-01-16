class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render "api/users/#{@user.id}" unless @user.id === current_user.id
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
