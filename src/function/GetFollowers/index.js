import request from '../../library/axios'

const GetFollowers = (URL) =>{
	return new Promise((resolve,reject) =>{
		request
			.get(URL)
			.then(response => {
				resolve(response)	
			})
			.catch(error =>{
				reject(error)
			})
	})
}

export default GetFollowers