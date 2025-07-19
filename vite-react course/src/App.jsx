// Import the useState hook from react
import { useState } from 'react';
import { PostComponent } from './post';

// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            {/* Call ToggleMessage component here to render it in the App component */}
            <ToggleMessage /> 

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                    <div>
                        {/* Call PostComponent here with props to render it in the App component */}
                        <PostComponent
                            name={"Bharat"}
                            subtitle={"20 followers"}
                            time={"2m ago"}
                            image={
                                "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"
                            }
                            description={
                                "What to know how to win big? Check out how these folks won $6000 in bounties."
                            }
                        />
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Harkirat"}
                                subtitle={"Promoted"}
                                image={
                                    "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                                }
                                description={
                                    "How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create a function component named ToggleMessage to render it in the App component
const ToggleMessage = () => {
    // Create a state variable isVisible and a function setIsVisible to toggle the visibility of the message
    const [isVisible, setIsVisible] = useState(false);

    // return JSX that will be rendered
    return (
        <div>
            {/* Create a button to toggle the visibility of the message */}
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>

            {/* Conditionally render the message if isVisible is true */}
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


// Export App Component to use it in other components
export default App;