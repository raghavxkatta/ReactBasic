import profilePic from './assets/PassportPhoto.jpg'

function Card(){
return(
    <div className="w-64 bg-white shadow-2xl rounded-lg p-4 m-3" id="Card">
<img src={profilePic} alt="Profile Picture" className='w-24 h-24 mx-auto rounded-full ' />
<h2 className=' mt-2 text-xl font-semibold text-black-800 bg-green text-center'>Raghav Katta</h2>
<p className='mt-2 text-center font-normal'>I am in my second Year of College and I like to play Badminton</p>
    </div>  
)
}

export default Card