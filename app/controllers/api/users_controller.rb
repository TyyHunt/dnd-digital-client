class Api::UsersController < ApplicationController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def create
    user = User.create!(
      username: params['user']['username'],
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
      )
    if user
      session[:user_id] = user.id
      render json: {
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def destroy
    @user.destroy
  end

  def find
    @user = User.find_by(email: params["user"]["email"])
                .try(:authenticate, params["user"]["password"])
    if @user
      render json: {
        user: @user
      } 
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

end
