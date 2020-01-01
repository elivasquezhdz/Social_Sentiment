console.log("wazaaaaaaaa!!!");
console.log("Starting Social Sentiment");
console.log("Wazaaaaaaaa!!!!");
var elements = document.getElementsByClassName("style-scope ytd-comment-renderer");
var names = '';
const threshold = 0.9;
var sentences = []; 
for(var i=0; i<elements.length; i++) {
    console.log(elements[i].innerText);
    sentences.push(elements[i].innerText);
    //elements[i].style['background-color'] = "#FF6961";

    model.classify(sentences).then(predictions => {elements[i].innerText});
    for(let p=0; p<7;p++)
    {
        if(predictions[p].results[0].match===true)
        {
            elements[i].style['background-color'] = "#FF6961";

        }

    }

}
