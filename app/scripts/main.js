/* jshint devel:true */

// this is an IIFE: Immediately Invoked Function Expression
// The parens at the end () mean to call this function immediately
// and run its logic at the beginning. It creates a closure around the
// the variables at the top, which is why we are able to use them
// on repeated runs of the tempate fn.
var template = (function template() {
  'use strict';
  var $li = $('<li/>').addClass('podcast--item'),
    $span = $('<span/>'),
    $h3 = $('<h3/>'),
    $img = $('<img/>'),
    $a = $('<a/>');

  function cloneNodes () {
    return [
      $li.clone(),
      $span.clone(),
      $h3.clone(),
      $img.clone(),
      $a.clone()
    ];
  }

  // this function is returned in becomes the value of template
  // the defined arguments are passed in by the success function
  // of the ajax call
  return function(result, selector) {
    var nodes = cloneNodes();
    nodes[4].attr('href', result.url);
    nodes[3].attr({
      src: result.image.url,
      alt: result.image.alt_text
    });
    nodes[2].text(result.title);
    nodes[1].text(result.audio);

        $(selector).append(
           nodes[0].append(
             nodes[4].append(nodes[3])
              .append(nodes[2]))
              .append(nodes[1])
          );
  };
})();

// set some reused vars up here so we aren't dealing with long strings
var API_URL = 'http://api.wnyc.org',
    API_PATH = 'api/v1/list/stories/bucket',
    BUCKETS = ['podcast-page-new-amazing', 'podcast-page-storytelling', 'podcast-page-other-podcasts'],
    jsonpCallback = 'PODCASTS';

// the items in the BUCKETS array match the selectors on their destination 
BUCKETS.forEach(function(b,i) {
  
  // add the dot so its a proper selector
  'use strict';
  var selector = '.' + b;
  
  $.ajax({
    // build the url
    url: [API_URL, API_PATH, b].join('/'),
    // add index so jquery can track the proper callback function name
    jsonpCallback: jsonpCallback + i,
    dataType: 'jsonp',
    
    // $.ajax makes a request to the url provided and runs
    // this function, passing in whatever the server returns 
    // as the first parameter
    success: function(d) {
      
      // loop through the results, passing in the result and 
      // the selector we made just up there
      d.results.forEach(function(result) {
        template(result, selector);
      });
    }
  });
});

// Build category link functionality
$('.category-menu--item a').click(function(e) {
  'use strict';
    e.preventDefault();
    var endPoint = $(this).attr('data-slug');
    var selector = '.podcast-page-storytelling';
  
  $.ajax ({
    url: [API_URL, API_PATH, endPoint].join('/'),
    jsonpCallback: jsonpCallback,
    dataType: 'jsonp',
    success: function(d) {
      
      $('.podcast-page-storytelling').empty();      
      $('.category-menu--item a').removeClass('active');
      
      d.results.forEach(function(result) {
        template(result, selector);
      });
    }
  });
});


// Build category Select box functionality for mobile
function DropDown(el) {
  'use strict';
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    'use strict';
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text(obj.val);
    });
  },
  getValue : function() {
    'use strict';
    return this.val;
  },
  getIndex : function() {
    'use strict';
    return this.index;
  }
};

$(function() {
  'use strict';
  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown-3').removeClass('active');
  });

});