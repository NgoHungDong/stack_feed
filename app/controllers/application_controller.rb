class ApplicationController < ActionController::Base
  before_action :init_feed_session

  private

  def init_feed_session
    session[:feed_ids] ||= []
  end
end
