App.feed_notifications = App.cable.subscriptions.create "FeedNotificationsChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    @appendLine(data)

  appendLine: (data) ->
    debugger
    html = @createLine(data)
    $(".list-group").prepend(html)

  createLine: (data) ->
    """
      <a class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal_52714196" href="https://stackoverflow.com/q/52714196">
        <div class="media d-flex align-items-center">
          <img alt="Image placeholder" src="./assets/img/icons/dusk/svg/browser-window.svg" class="img-saturate" style="width: 50px;">
          <div class="media-body ml-3">
          <h6 class="mb-1">Ruby function for putting string in parentheses</h6>
          <h7 class="text-muted">14 minutes
          <p class="mb-0">


            Is there any ruby function that can do the following

            str = ' ( '.concat( str.concat( ' ) ' ))


          It is placing parentheses on both sides of </p>
          </h7></div>
      </div>
    </a>
    """
