class AjaxController < ActionController::Base
  def save_history
    @feed_id = params[:feed_id]
    session[:feed_ids] << @feed_id
  end
end
