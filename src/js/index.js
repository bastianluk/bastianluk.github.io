function getSlideshow(queryString)
{
    var slides = getSlidesName(queryString)
    var navigation = getNavigation()
    var createParameters = getParameters(slides, navigation);
    return remark.create(createParameters);
}

function getSlidesName(queryString)
{
    var urlParameters = new URLSearchParams(queryString)
    return urlParameters.get("slides") ?? "index"
}

function getNavigation(scrollNavigation, touchNavigation, clickNavigation)
{
    var scrollNavigation = true
    var touchNavigation = true
    var clickNavigation = false

    return {
        scroll: scrollNavigation,
        touch: touchNavigation,
        click: clickNavigation
    }
}

function getParameters(slides, navigation)
{
    var sourceUrl = "./src/md/" + slides + ".md"
    var ratio = "16:9"
    var countIncrementalSlides = false
    var highlightStyle = "github"
    var highlightLines = true

    return {
        sourceUrl: sourceUrl,
        ratio: ratio,
        countIncrementalSlides: countIncrementalSlides,
        highlightStyle: highlightStyle,
        highlightLines: highlightLines,
        navigation: navigation
    }
}

var slideshow = getSlideshow(window.location.search)