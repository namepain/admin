const directives = {

  // 图片大图预览
  preview: {
    inserted: function (el) {
      el.style.cursor = 'zoom-in'
      const wrapperStyle = 'position:fixed;left:0;top:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);transition:all .2s ease-in-out;z-index:10000;'
      const imgStyle = 'position:absolute;cursor:zoom-out;transition:all .2s ease-in-out;transform: translateZ(0);'
      el.addEventListener('click', function (e) {
        let body = document.body
        let winHeight = window.innerHeight
        let winWidth = window.innerWidth
        let sourceImg = e.target
        let rect = sourceImg.getBoundingClientRect()

        // show wrapper
        let wrapper = document.createElement('div')
        wrapper.style = wrapperStyle
        wrapper.addEventListener('click', removeWrapper)
        setTimeout(() => {
          window.addEventListener('scroll', removeWrapper)
        }, 16.67)

        // show img
        let img = new Image()
        let top = 0
        let left = 0
        let width = sourceImg.naturalWidth
        let height = sourceImg.naturalHeight
        let isWider = width / height > winWidth / winHeight
        img.src = sourceImg.src

        // 判断 img 宽高
        if (isWider && width > winWidth) { // 宽高比大于窗口 且比窗口宽
          height = height * winWidth / width
          width = winWidth
        } else if (!isWider && height > winHeight) {
          width = width * winHeight / height
          height = winHeight
        }

        // 判断左/上距离
        if (width < winWidth) {
          left = (winWidth - width) / 2
        }
        if (height < winHeight) {
          top = (winHeight - height) / 2
        }
        img.style = `${imgStyle}left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;opacity:.2;`
        wrapper.appendChild(img)
        body.appendChild(wrapper)

        setTimeout(() => {
          wrapper.style.backgroundColor = 'rgba(0,0,0,.8)'
          img.style = `${imgStyle}left:${left}px;top:${top}px;width:${width}px;height:${height}px;`
        }, 16.67)

        function removeWrapper (e) {
          e.stopPropagation()
          wrapper.removeEventListener('click', removeWrapper)
          window.removeEventListener('scroll', removeWrapper)
          body.removeChild(wrapper)
        }
      })
    }
  }
}

export default directives
