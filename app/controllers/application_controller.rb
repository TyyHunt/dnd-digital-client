class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  include ::ActionController::Cookies
  private

  def logged_in?
    !!current_user
  end
end
