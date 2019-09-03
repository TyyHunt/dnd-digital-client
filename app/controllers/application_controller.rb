class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  private

  def logged_in?
    !!current_user
  end
end
