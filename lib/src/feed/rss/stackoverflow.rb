class Feed::Rss::Stackoverflow < Feed::Rss::Base
  FEED_URL = 'https://stackoverflow.com/feeds/tag?tagnames=ruby-on-rails&sort=newest'

  def initialize
    super(FEED_URL)
  end

  def extract_link(entry)
    entry.id
  end
end
