// https://john-dugan.com/javascript-debounce/
function debounce(e, t, n) {
    var a;
    return function () {
      var r = this,
        i = arguments,
        o = function () {
          a = null, n || e.apply(r, i)
        },
        s = n && !a;
      clearTimeout(a), a = setTimeout(o, t || 200), s && e.apply(r, i)
    }
  }
  
  const texts = [
      '<h2>achluophobia</h2>',
      '<h2>autophobia</h2>',
      '<h2>barophobia</h2>',
      '<h2>catoptrophobia</h2>',
      '<h2>hemophobia</h2>',
      '<h2>herpetophobia</h2>',
      '<h2>lockiophobia</h2>',
      '<h2>noctiphobia</h2>',
    ]
  
  const stepSize = window.innerHeight
  
  function setText(contentTag, text) {
    contentTag.innerHTML = text
  }
  
  function getIndex(distance, stepSize) {
    return parseInt(distance / stepSize)
  }
  
  function getText(texts, index) {
    return texts[index] ? texts[index] : 'no text found :('
  }
  
  function changeText(contentTag, stepSize, texts) {
    const distance = (window.scrollY)
    const index = getIndex(distance, stepSize)
    const text = getText(texts, index)
    setText(contentTag, text)
  }
  
  function setInittext(contentTag, texts) {
    const text = getText(texts, 0)
    setText(contentTag, text)
  }
  
  window.onload = function() {
    const contentTag = document.querySelector('#lolz')
    setInittext(contentTag, texts)
    window.addEventListener('scroll', debounce(() => { changeText(contentTag, stepSize, texts) }, 20))
  }