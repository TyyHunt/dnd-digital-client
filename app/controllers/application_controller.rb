class ApplicationController < ActionController::API

 private

  def logged_in?
    !!current_user
  end
end
