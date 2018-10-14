module ApplicationHelper
  def feed_seen?(feed_id)
    session[:feed_ids].include?(feed_id)
  end
end
