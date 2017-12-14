$(document).ready(function() {
   var blogList = document.querySelector('.blog');

   $.getJSON("/blog/wp-json/wp/v2/posts", function(data) {
      for (var i = 0; i < 3; i++) {
         var post = data[i];

         var blogPost = '<li class="blog__post post">' +
                           '<div class="post__title">' +
                              '<a class="post__header" href="' + post.link + '" target="_blank">' + post.title.rendered + ' <i class="fa fa-rss post__header--icon" aria-hidden="true"></i></a>' +
                              '<span class="post__date">Posted on: ' + post.date_gmt + '</span>' +
                           '</div>' +
                           '<div class="post__excerpt">' +
                              post.excerpt.rendered +
                              '<a class="post__link--redirect" href="' + post.link + '" target="_blank">go to post <i class="fa fa-sign-in" aria-hidden="true"></i></a>' +
                           '</div>' +
                        '</li>';
         $(blogList).append(blogPost);
      }
   });
});
