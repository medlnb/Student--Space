import { useContext } from 'react'
import './App.css'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import { AuthContext } from './Contexts/UserContext'
import HomePage from './Pages/HomePage/HomePage'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { io } from 'socket.io-client'


// const socket = io("https://student-space-backend.onrender.com:3001")
const showNotification = () => {
  new Notification('Hey')
}
function App() {
  showNotification()
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     //  recieving msg from server
  //     socket.on("NewNotification", (data: any) => {
  //       console.log("msg from server", data)
        
  //       // window.alert(data)
  //     })

  //     return () => {
  //       //remove Event Listener
  //       socket.off("connect")
  //     }
  //   })
  // }, [])
  const { user } = useContext(AuthContext)

  return (
    <div>
      {!user.username ?
        < WelcomePage />
        :
        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <HomePage />
        </LocalizationProvider>
      }
    </div>
  )
}

export default App
