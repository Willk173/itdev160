$(function() {
    var data = [
        {
            id: 1,
            title: 'Spirited Away',
            body: 'Once you meet someone, you never really forget them. It just takes a while for your memory to come back to you. - Found at: https://www.thyquotes.com/spirited-away/',
            author: 'Zeniba'
        },
        {
            id: 2,
            title: 'Cyberpunk 2077',
            body: 'Wake the **** up, Samurai! We got a city to burn.',
            author: 'Johnny Silverhand'
        },
        {
            id: 3,
            title: 'The Legend of Zelda',
            body: '…',
            author: 'Link'
        },
        {
            id: 4,
            title: 'Grand Theft Auto: San Andreas',
            body: ' I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.',
            author: 'Big Smoke'
        },
        {
            id: 5,
            title: 'Team Fortress 2',
            body: 'Grass grows, birds fly, sun shines, and brother, I hurt people.',
            author: 'The Scout'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            
            var postId = 'post-' + data[i].id,
            $post = $('<section class="post"></section>'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function() {
                var id = $(thiis).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});