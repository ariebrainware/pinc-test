import request from '../../library/axios'
import swal from 'sweetalert'


const Login = (URL, data) => {
	return new Promise((resolve,reject) => {
		request
			.post(URL, data)
			.then(response => {				
				resolve(response)
				swal('Nice!','Welcome to out lovely PINC','success')
				
			})
			.catch(response => {				
				swal('Oops!','Wrong username or password','error')
			})
	})
}

export default Login
