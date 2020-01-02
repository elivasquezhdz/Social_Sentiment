
function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    var elements = document.getElementsByClassName("style-scope ytd-comment-renderer");
    console.log(elements.length);
    const threshold = 0.7;
    for(var i=0; i<elements.length; i++) {
        console.log(elements[i].innerText);
        model.classify(elements[i].innerText).then(predictions => {
            for(let p=0; p<7;p++)
            {
                if(predictions[p].results[0].match===true)
                {
                    elements[i].style['background-color'] = "#FF6961";  
                }
            }
            });
    }  
    elements =  document.getElementsByClassName("comment-text user-text");
    for(var i=0; i<elements.length; i++) {
        console.log(elements[i].innerText);
        model.classify(elements[i].innerText).then(predictions => {
            for(let p=0; p<7;p++)
            {
                if(predictions[p].results[0].match===true)
                {
                    elements[i].style['background-color'] = "#FF6961";  
                }
            }
            });
    }
    return true;
}


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function()
    
    {
        console.log("Start social sentiment");
        chrome.tabs.executeScript( {
            code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
          }, function(selection) {
            console.log(selection);
          });
    
    
    }, false);
    
  
}, false);




function getCurrentTabUrl() {

    // Quercy filter to be passed to chrome.tabs.query - see
    // https://developer.chrome.com/extensions/tabs#method-query
    
    var queryInfo = {
      active: true,
      currentWindow: true
    };  
    chrome.tabs.query(queryInfo, (tabs) => {
      // chrome.tabs.query invokes the callback with a list of tabs that match the
      // query. When the popup is opened, there is certainly a window and at least
      // one tab, so we can safely assume that |tabs| is a non-empty array.
      // A window can only have one active tab at a time, so the array consists of
      // exactly one tab.
      var tab = tabs[0];
  
      // A tab is a plain object that provides information about the tab.
      // See https://developer.chrome.com/extensions/tabs#type-Tab
      var url = tab.url;
  
      // tab.url is only available if the "activeTab" permission is declared.
      // If you want to see the URL of other tabs (e.g. after removing active:true
      // from |queryInfo|), then the "tabs" permission is required to see their
      // "url" properties.
      console.assert(typeof url == 'string', 'tab.url should be a string');
      
      
      //alert("current url is--" + url);
      document.getElementById('url').innerHTML = url;
      
      
    });
  
    // Most methods of the Chrome extension APIs are asynchronous. This means that
    // you CANNOT do something like this:
    //
    // var url;
    // chrome.tabs.query(queryInfo, (tabs) => {
    //   url = tabs[0].url;
    // });
    // alert(url); // Shows "undefined", because chrome.tabs.query is async.
  }
  
