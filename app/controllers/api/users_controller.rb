class Api::UsersController < ApplicationController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def create
    user = User.create!(
      username: params['username'],
      email: params['email'],
      password: params['password'],
      password_confirmation: params['password_confirmation']
      )
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def show
    render json: @user
  end

  def destroy
    @user.destroy
  end

  def find
    @user = User.find_by(email: params[:user][:email])
    if @user
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

end
