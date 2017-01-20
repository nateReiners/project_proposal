class Api::PhotosController < ApplicationController

  def index
    @photos = []
    current_user.following.each do |user|
      @photos += user.photos
    end
    @photos += current_user.photos
    render :index
  end

#infinite scroll attempt

  # def index
  #   @count = params[:lastId].to_i
  #   all_photos = []
  #   current_user.following.each do |user|
  #     all_photos += user.photos
  #   end
  #   all_photos += current_user.photos
  #   @photos = all_photos.limit(15).offset(params[:lastId])
  #   render :index
  # end


  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:author_id, :img_url)
  end

end
