console.log("wazaaaaaaaa!!!");
console.log("Starting Social Sentiment");
console.log("Wazaaaaaaaa!!!!");
var elements = document.getElementsByClassName("style-scope ytd-comment-renderer");
const threshold = 0.9;
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
