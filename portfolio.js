function initialiseAutoTyper()
{
    let div = document.querySelector('.autotyper')
    let i=0,f=1,j=0
    let arr = ['a student','studying 3rd year in MIT',' a Front-end Web developer',' a competitive programmer']
    let s = ''

    let startAutoTyper = () => {
        let autoTyper = setInterval(() => {
            if(f)
            {
                div.innerHTML = s+'|'
                if(j==arr[i].length)
                {
                    div.innerHTML=s
                    f=0;
                    clearInterval(autoTyper)
                    setTimeout(() => {
                        div.innerHTML=s+'|'    
                        startAutoTyper()
                    },700)
                    
                }
                else
                {
                    s += arr[i][j]
                    j++
                }
            }
            else
            {
                j--
                s=s.slice(0,j)
                div.innerHTML = s+'|'
                if(j==0)
                {
                    f=1;
                    i=(i+1)%arr.length
                    
                }
            }
        },110)
    }
    startAutoTyper()
}
initialiseAutoTyper()

document.addEventListener('scroll',() => {
    if(window.pageYOffset >= document.querySelector('#about').offsetTop)
    {
        document.querySelector('.scrolltotop').style.visibility = 'visible'
        document.querySelector('.scrolltotop').style.opacity = '1'
    }
    else
    {
        document.querySelector('.scrolltotop').style.visibility = 'hidden'
        document.querySelector('.scrolltotop').style.opacity = '0'
    }
})