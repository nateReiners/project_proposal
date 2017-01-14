class FollowsController < ApplicationController

  def index
    @follows = Follow.all
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
    else
      render json: @follow.errors.full_messages, status: 422
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
  end

  private
  def follows_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end
