class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def show
    render json: @user
  end

  def destroy
    @user.destroy
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end

end
