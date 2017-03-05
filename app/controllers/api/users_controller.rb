class Api::UsersController < ApplicationController

  def index
    @users = User.all
    if @users
      render "api/users/index"
    else
      render json: @users.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show" unless @user.id === current_user.id
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
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
    params.require(:user).permit(
    :username,
    :password,
    :first_name,
    :last_name,
    :about,
    :email,
    :profile,
    :profile_img_url,
    :cover_img_url
    )
  end

end
