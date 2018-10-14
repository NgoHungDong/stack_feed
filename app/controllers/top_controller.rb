class TopController < ApplicationController
  def index
    @feeds = Feed::Rss::Stackoverflow.new.fetch
  end
end
