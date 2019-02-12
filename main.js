let n
init ()
setInterval(()=>{
  $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend',function(e){
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n +=1
},3000)

function init(){
    n=1
    $('.images>img:nth-child(1)').addClass('current').siblings().addClass('enter')
}  
function x(n){
    if(n>3){
      n = n%3
      if(n===0){
        n = 3
      }
    }
    return n
  }