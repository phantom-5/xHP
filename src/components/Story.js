import '../App.css';
import {useEffect,useState,useRef} from 'react'
import MediaQuery from 'react-responsive'
import Typed from 'typed.js'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const Story = (props) => {

    const [audio] = useState( typeof Audio !== "undefined" && new Audio("https://xharrypotter.herokuapp.com/stream/audio")); 
    const [isLoading,setIsLoading]  = useState(true)
    var userHistoryCount = 0
    const cookie = new Cookies()

    const cookie_data = cookie.get('hpexp')
    
    const loading = () => {
        setIsLoading(false)
    }

    const userHistory = () => {
        userHistoryCount+=1
        let book_id = props.bookNo
        if (!cookie_data){
        let newCookieData = {}
        newCookieData[book_id]=userHistoryCount
        cookie.set('hpexp',newCookieData,{path:'/'})
        }else{
            cookie_data[book_id]=userHistoryCount
            cookie.set('hpexp',cookie_data,{path:'/'})
        }
        console.log(cookie.get('hpexp'))
    }
    
    const getStory = async() => {

        console.log(props.bookNo)

        const response = await fetch('https://xharrypotter.herokuapp.com/book/'+props.bookNo,{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type':'application/json'
            }
        })

        const res = await response.json()
        let paras = res.data
        
        const options = {
            strings: paras.slice(userHistoryCount,paras.length),
            typeSpeed: props.rSpeed,
            fadeOut:true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            loop: false,
            showCursor: false,
            onStringTyped: userHistory,
            preStringTyped: loading
        }

        var typed = new Typed('#typedItem', options)
        audio.play()

        var storySection = document.querySelector('.d-flex')
        var scrollInterval = setInterval( () => { 
        console.log('scroll height',storySection.scrollHeight)
        window.scrollTo({ left: 0, top:storySection.scrollHeight-window.innerHeight+150, behavior: "smooth" })
        }, 500);



    //  console.log('The whole book is',whole_book)

    }

    const checkStart = async() => {
        if (cookie_data){
            if(cookie_data[props.bookNo]){
                var swalRes = await Swal.fire({
                    icon: 'info',
                    title: 'Welcome back!',
                    text: 'Do you want to continue from where you left ?',
                    showConfirmButton: true,
                    showDenyButton: true,
                    confirmButtonText: 'Continue',
                    denyButtonText: 'Start Over'

                  })

            }
            if (!swalRes){return getStory()}
            if(swalRes.isConfirmed){
                userHistoryCount = cookie_data[props.bookNo]
                getStory()
            }else{
                cookie_data[props.bookNo]=0
                cookie.set('hpexp',cookie_data,{path:'/'})
                getStory()
            }
            
        }else{
            return getStory()
        }
    }

    useEffect(()=>{checkStart()},[])

    return (
        <div>
        <MediaQuery orientation='landscape'>
        <div className="d-flex flex-column bd-highlight justify-content-center storyD flex-wrap w-50 flexD bg-white">
            <div className="p-2">
                <p className='lead' id='typedItem'></p>
                <p className='lead'>{isLoading && <span>Loading...</span>}</p>
            </div>
        </div>
        
        </MediaQuery>
        <MediaQuery orientation='portrait'>
        <div className="d-flex flex-row bd-highlight m-5 justify-content-center storyM bg-white">
            <div className="p-2">
                <p className='lead' id='typedItem'></p>
                <p className='lead'>{isLoading && <span>Loading...</span>}</p>
            </div>
        </div>
      </MediaQuery>
      </div>
    )
   
}

export default Story