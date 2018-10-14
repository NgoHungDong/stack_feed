require 'net/http'
require 'uri'

class Feed::Rss::Base
  FeedItem = Struct.new(:id, :title, :author, :summary, :link, :published)

  def initialize(url)
    @url = url
  end

  def xml
    Net::HTTP.get(URI(@url))
  end

  def fetch
    result = []
    feed = Feedjira::Feed.parse(xml)
    feed.entries.each do |entry|
      title = extract_title(entry)
      author = extract_author(entry)
      summary = extract_summary(entry)
      link = extract_link(entry)
      published = extract_published(entry)
      id = link.split('/').last
      result << FeedItem.new(id, title, author, summary, link, published)
    end
    result
  end

  def extract_title(entry)
    entry.title
  end

  def extract_author(entry)
    entry.author
  end

  def extract_summary(entry)
    entry.summary
  end

  def extract_link(entry)
    entry.link
  end

  def extract_published(entry)
    entry.published
  end
end
