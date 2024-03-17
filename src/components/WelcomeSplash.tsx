

const WelcomeSplash = () => {
    return (
        <div
            className='flex flex-col justify-center mt-10 items-center bg-cover bg-fixed min-h-screen' // Use min-height to ensure the background covers the entire viewport
        >
            {/* Welcome to My Portfolio */}
            <div className='flex place-items-center mb-20 bg-gray-900 text-white py-10 px-8 rounded-lg'>
                <h3 className='p-5 text-white rounded text-5xl'>Welcome To My Portfolio!</h3>
            </div>

            {/* About Me Section */}
            <div className="bg-gray-900 text-white py-10 px-8 rounded-lg mb-10 max-w-3xl text-center"> {/* Limit the maximum width */}
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-xl mb-4">
                    Hello all! My name is Zachariah Coscarart and I am currently a Coding Temple student taking the Software Development self-paces course. I currently live in Spokane, Washington!
                    I am new to the area but have always lived in Washington. Between Mt. Rainer, Seattle, and the various beaches, I would whole-heartedly reccomend giving our state a visit.
                    <br /><br />
                    This portfolio uses my Flask Portfolio API to access my database containing both my Coding Temple Projects table 
                    and an empty Current Projects Table. The api has routes to [GET], [POST], [PUT], and [DELETE] my current projects, but for Coding Temple Projects I decided to onlt have the [GET] route. 
                    This was because the Coding Temple projects are very much set and wouldn't need to be altered except for rare occasions in which I can use Dbeaver as the db 'Owner'. 
                    You will notice that In the Coding Temple Projects page it uses the CT Logo above each project while the image for Current Projects is varied. This is because for current projects it 
                    takes in the programming_language variable from the db and checks the images folder for a file with the same name. I have populated this folder with many different programming language 
                    logos to accomodate for various projects. Lastly I added a default image if none is initially found. 
                    <br /><br />
                    Auth.0 handles our authenication for the app, and access to current projects is denied unless you are logged in. Please contact me with any questions!
                </p>
            </div>
            
            {/* Contact Me Section */}
            <div className="bg-gray-900 text-white text-center py-10 px-8 rounded-lg mt-10 mb-10 max-w-3xl"> {/* Limit the maximum width */}
                <h2 className="text-4xl font-bold mb-4">Contact Me:</h2>
                <p className="text-2xl mb-2">
                    Email: <a href="mailto:zachcoscarart@gmail.com" className="text-blue-500 hover:underline">zachcoscarart@gmail.com</a>
                </p>
                <p className="text-2xl">
                    Phone: <span className="text-blue-500">(509) 379-7430</span>
                </p>
            </div>
        </div>
    );
}

export default WelcomeSplash;
