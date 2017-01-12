class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      sign_in(@user)
      render "api/users/home"
    else
      render(json: ["invalid login credentials"],
      status: 422)
    end
  end

  def destroy
    if current_user
      sign_out
      render(json: ["logged out"])
    else
      render(json: ["no current user"],
      status: 404)
    end
  end


end
