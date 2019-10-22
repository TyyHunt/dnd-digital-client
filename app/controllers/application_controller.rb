class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  include ::ActionController::Cookies
  private

  def fallback_index_html
    render :file =>
    'public/index.html'
  end

  def logged_in?
    !!current_user
  end
end
